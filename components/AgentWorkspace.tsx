'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { AGENT_DEFINITIONS, AGENT_GROUPS_META } from '@/lib/agents';
import type { OrchestratorEvent, ConversationTurn, AgentOutput } from '@/lib/orchestrator';
import { downloadAsPdf, downloadAsWord } from '@/lib/export';
import DiagramPanel from '@/components/DiagramPanel';
import DownloadsPanel from '@/components/DownloadsPanel';
import ObservabilityPanel from '@/components/ObservabilityPanel';
import { ObservabilityCollector, type MetricsSnapshot } from '@/lib/observability';
import type { AgentInvocation } from '@/lib/diagrams';

// ── Types ─────────────────────────────────────────────────────────────────────

interface LogEntry {
  id: string;
  type: 'user' | 'orchestrator' | 'plan' | 'agent_start' | 'agent_output' | 'agent_done' | 'synthesis' | 'error';
  agentId?: string;
  agentName?: string;
  content: string;
  timestamp: number;
}

type AgentStatus = 'idle' | 'active' | 'done' | 'error';

const EXAMPLE_REQUESTS = [
  'Design an AI-first banking platform with autonomous operations and regulatory compliance',
  'Create an enterprise cloud modernisation strategy for a global healthcare organisation',
  'Build a zero-trust security architecture for a multinational retailer with PCI-DSS requirements',
  'Design an autonomous enterprise with AI agents replacing manual operations across IT and finance',
  'Create a data mesh architecture with LLMOps and real-time analytics for a fintech company',
];

// ── Colour helpers ────────────────────────────────────────────────────────────

const GROUP_COLORS: Record<string, string> = {
  'cloud-infra': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  'ai-data':     'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'operations':  'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'governance':  'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'experience':  'text-pink-400 bg-pink-500/10 border-pink-500/20',
  'enterprise':  'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  'excellence':  'text-orange-400 bg-orange-500/10 border-orange-500/20',
};

// ─────────────────────────────────────────────────────────────────────────────

export default function AgentWorkspace() {
  const [request, setRequest]         = useState('');
  const [running, setRunning]         = useState(false);
  const [log, setLog]                 = useState<LogEntry[]>([]);
  const [agentStatuses, setAgentStatuses] = useState<Record<string, AgentStatus>>({});
  const [activePanel, setActivePanel] = useState<'log' | 'output' | 'diagrams' | 'downloads' | 'observability'>('log');
  const [finalOutput, setFinalOutput] = useState('');
  const [history, setHistory]         = useState<ConversationTurn[]>([]);
  const [agentOutputs, setAgentOutputs] = useState<AgentOutput[]>([]);
  const [invocations, setInvocations] = useState<AgentInvocation[]>([]);
  const [lastRequest, setLastRequest] = useState('');
  const [metrics, setMetrics]         = useState<MetricsSnapshot | null>(null);
  const [exporting, setExporting]     = useState<'pdf' | 'word' | null>(null);
  const [copied, setCopied]           = useState(false);
  // Initialize all groups as collapsed by default
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(AGENT_GROUPS_META.map(g => [g.id, true]))
  );

  const logRef    = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const abortRef  = useRef<AbortController | null>(null);
  const metricsRef = useRef<ObservabilityCollector | null>(null);
  const entryCounter = useRef(0);

  const addLog = useCallback((entry: Omit<LogEntry, 'id' | 'timestamp'>) => {
    setLog(prev => [...prev, {
      ...entry,
      id: String(entryCounter.current++),
      timestamp: Date.now(),
    }]);
  }, []);

  const appendLog = useCallback((id: string, token: string) => {
    setLog(prev => prev.map(e => e.id === id ? { ...e, content: e.content + token } : e));
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const run = useCallback(async () => {
    if (!request.trim() || running) return;

    setRunning(true);
    setAgentStatuses({});
    setFinalOutput('');
    setAgentOutputs([]);
    setInvocations([]);
    setMetrics(null);
    setLastRequest(request);
    setActivePanel('log');

    metricsRef.current = new ObservabilityCollector();

    const userEntry: LogEntry = { id: String(entryCounter.current++), type: 'user', content: request, timestamp: Date.now() };
    setLog(prev => [...prev, userEntry]);

    abortRef.current = new AbortController();
    const sessionAgentOutputs: AgentOutput[] = [];
    let orchestratorId = '';
    let synthesisId = '';

    try {
      const res = await fetch('/api/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request, history }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Request failed' }));
        addLog({ type: 'error', content: err.message });
        setRunning(false);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      // Current streaming agent log entry id
      const activeAgentLogIds: Record<string, string> = {};
      let orchestratorContent = '';
      let synthesisContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          let event: OrchestratorEvent;
          try { event = JSON.parse(line.slice(6)); } catch { continue; }

          switch (event.type) {

            case 'orchestrator_token': {
              if (!orchestratorId) {
                const e: LogEntry = { id: String(entryCounter.current++), type: 'orchestrator', content: '', timestamp: Date.now() };
                orchestratorId = e.id;
                setLog(prev => [...prev, e]);
              }
              orchestratorContent += event.token;
              appendLog(orchestratorId, event.token);
              break;
            }

            case 'plan_agents': {
              addLog({
                type: 'plan',
                content: `Orchestrator routing to: ${event.agents.map(a => a.name).join(', ')}`,
              });
              // Reset orchestratorId for any subsequent orchestrator thinking
              orchestratorId = '';
              orchestratorContent = '';
              break;
            }

            case 'agent_start': {
              setAgentStatuses(s => ({ ...s, [event.agentId]: 'active' }));
              const agentDef = AGENT_DEFINITIONS.find(a => a.id === event.agentId);
              if (metricsRef.current) {
                metricsRef.current.recordAgentStart(event.agentId, event.agentName);
              }
              setInvocations(prev => [...prev, {
                agentId: event.agentId,
                agentName: event.agentName,
                icon: agentDef?.icon ?? '▸',
                task: event.task,
                order: prev.length + 1,
                groupId: agentDef?.groupId ?? 'unknown',
              }]);
              const e: LogEntry = {
                id: String(entryCounter.current++),
                type: 'agent_start',
                agentId: event.agentId,
                agentName: event.agentName,
                content: event.task,
                timestamp: Date.now(),
              };
              setLog(prev => [...prev, e]);
              // Create an output entry for this agent
              const outEntry: LogEntry = {
                id: String(entryCounter.current++),
                type: 'agent_output',
                agentId: event.agentId,
                agentName: event.agentName,
                content: '',
                timestamp: Date.now(),
              };
              activeAgentLogIds[event.agentId] = outEntry.id;
              setLog(prev => [...prev, outEntry]);
              break;
            }

            case 'agent_token': {
              const logId = activeAgentLogIds[event.agentId];
              if (logId) appendLog(logId, event.token);
              break;
            }

            case 'agent_done': {
              setAgentStatuses(s => ({ ...s, [event.agentId]: 'done' }));
              if (metricsRef.current) {
                metricsRef.current.recordAgentDone(event.agentId);
              }
              // Capture agent output from log
              setLog(prev => {
                const logId = activeAgentLogIds[event.agentId];
                const entry = prev.find(e => e.id === logId);
                if (entry) {
                  const ao: AgentOutput = {
                    agentId: event.agentId,
                    agentName: entry.agentName ?? event.agentId,
                    task: '',
                    output: entry.content,
                    timestamp: Date.now(),
                  };
                  sessionAgentOutputs.push(ao);
                  setAgentOutputs([...sessionAgentOutputs]);
                }
                return prev;
              });
              break;
            }

            case 'synthesis_start': {
              orchestratorId = '';
              synthesisContent = '';
              const e: LogEntry = {
                id: String(entryCounter.current++),
                type: 'synthesis',
                content: '',
                timestamp: Date.now(),
              };
              synthesisId = e.id;
              setLog(prev => [...prev, e]);
              setActivePanel('output');
              break;
            }

            case 'synthesis_token': {
              if (synthesisId) appendLog(synthesisId, event.token);
              synthesisContent += event.token;
              setFinalOutput(synthesisContent);
              if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
              break;
            }

            case 'done': {
              // Finalize metrics
              if (metricsRef.current) {
                const finalMetrics = metricsRef.current.finalize();
                setMetrics(finalMetrics);
              }
              // If there was no explicit synthesis phase (orchestrator responded directly)
              if (!synthesisId && orchestratorContent) {
                setFinalOutput(orchestratorContent);
                setActivePanel('output');
              }
              // Save turn to history
              const turn: ConversationTurn = {
                role: 'user',
                content: request,
                timestamp: Date.now(),
              };
              const assistantTurn: ConversationTurn = {
                role: 'assistant',
                content: synthesisContent || orchestratorContent,
                agentOutputs: sessionAgentOutputs,
                timestamp: Date.now(),
              };
              setHistory(h => [...h, turn, assistantTurn]);
              setRunning(false);
              break;
            }

            case 'error': {
              addLog({ type: 'error', content: event.message });
              setRunning(false);
              break;
            }
          }
        }
      }

    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        addLog({ type: 'error', content: (err as Error).message });
      }
      setRunning(false);
    }
  }, [request, running, history, addLog, appendLog]);

  const stop = () => { abortRef.current?.abort(); setRunning(false); };

  const clearSession = () => {
    setLog([]); setHistory([]); setFinalOutput('');
    setAgentStatuses({}); setAgentOutputs([]); setInvocations([]);
    setMetrics(null); setLastRequest(''); setRequest('');
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(finalOutput);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const dlPdf = async () => {
    if (exporting) return; setExporting('pdf');
    try { await downloadAsPdf(finalOutput, 'EFM Agentic AI — Orchestrated Output', `efm-output-${Date.now()}.pdf`); }
    catch (e) { addLog({ type: 'error', content: `PDF: ${(e as Error).message}` }); }
    finally { setExporting(null); }
  };

  const dlWord = async () => {
    if (exporting) return; setExporting('word');
    try { await downloadAsWord(finalOutput, 'EFM Agentic AI — Orchestrated Output', `efm-output-${Date.now()}.docx`); }
    catch (e) { addLog({ type: 'error', content: `Word: ${(e as Error).message}` }); }
    finally { setExporting(null); }
  };

  const activeCount = Object.values(agentStatuses).filter(s => s === 'active').length;
  const doneCount   = Object.values(agentStatuses).filter(s => s === 'done').length;

  return (
    <div className="flex h-[calc(100vh-57px)] overflow-hidden">

      {/* ── Left panel: Agent Roster ─────────────────────────────────────── */}
      <aside className="w-52 flex-shrink-0 border-r border-slate-800 flex flex-col overflow-hidden">
        <div className="px-3 py-3 border-b border-slate-800">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Agents</p>
          <p className="text-[10px] text-slate-700 mt-0.5">{AGENT_DEFINITIONS.length} specialists</p>
          {(activeCount > 0 || doneCount > 0) && (
            <div className="mt-2 flex items-center gap-2">
              {activeCount > 0 && (
                <span className="flex items-center gap-1 text-[10px] text-orange-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
                  </span>
                  {activeCount} active
                </span>
              )}
              {doneCount > 0 && (
                <span className="text-[10px] text-emerald-400">{doneCount} done</span>
              )}
            </div>
          )}
        </div>

        <div className="overflow-y-auto flex-1 py-2">
          {AGENT_GROUPS_META.map(group => {
            const isCollapsed = collapsedGroups[group.id] ?? false;
            const groupAgents = AGENT_DEFINITIONS.filter(a => a.groupId === group.id);
            const groupActiveCount = groupAgents.filter(a => agentStatuses[a.id] === 'active').length;
            const groupDoneCount = groupAgents.filter(a => agentStatuses[a.id] === 'done').length;

            return (
              <div key={group.id} className="mb-1">
                {/* Group header with toggle */}
                <div className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-700/30 transition-colors rounded-md group/header">
                  <button
                    onClick={() => setCollapsedGroups(prev => ({ ...prev, [group.id]: !isCollapsed }))}
                    className="flex items-center gap-1.5 flex-1 min-w-0"
                  >
                    <span className="text-slate-500 text-xs transition-transform">{isCollapsed ? '▶' : '▼'}</span>
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest truncate">{group.label}</span>
                    {groupAgents.length > 0 && (
                      <span className="text-[9px] text-slate-700 flex-shrink-0">({groupAgents.length})</span>
                    )}
                  </button>
                  <a
                    href="/academy"
                    className="text-slate-500 hover:text-blue-400 transition-colors opacity-0 group-hover/header:opacity-100 flex-shrink-0"
                    title="Learning Academy"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-5.002-4.5-9.747-10-10.747z" />
                    </svg>
                  </a>
                  {(groupActiveCount > 0 || groupDoneCount > 0) && (
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {groupActiveCount > 0 && (
                        <span className="flex items-center gap-0.5 text-[9px] text-orange-400">
                          <span className="relative flex h-1 w-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1 w-1 bg-orange-500" />
                          </span>
                          {groupActiveCount}
                        </span>
                      )}
                      {groupDoneCount > 0 && (
                        <span className="text-[9px] text-emerald-400">✓ {groupDoneCount}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Group agents (conditionally rendered) */}
                {!isCollapsed && groupAgents.map(agent => {
                const status = agentStatuses[agent.id] ?? 'idle';
                const gc = GROUP_COLORS[agent.groupId] ?? '';
                return (
                  <div key={agent.id}
                    className={`flex items-center gap-2 px-3 py-1.5 transition-colors group/agent ${
                      status === 'active' ? 'bg-orange-500/10' :
                      status === 'done'   ? 'bg-emerald-500/5' : ''
                    }`}>
                    {/* Status dot */}
                    <div className="flex-shrink-0 w-3 flex justify-center">
                      {status === 'active' ? (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                        </span>
                      ) : status === 'done' ? (
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className={`w-1.5 h-1.5 rounded-full border ${gc.split(' ').find(c => c.startsWith('border-')) ?? 'border-slate-700'}`} />
                      )}
                    </div>
                    <span className={`text-[11px] truncate font-medium leading-tight ${
                      status === 'active' ? 'text-orange-300' :
                      status === 'done'   ? 'text-emerald-400' :
                      'text-slate-600'
                    }`}>
                      {agent.name.replace(' Agent', '').replace(' Architecture', '').replace(' Excellence', '')}
                    </span>
                    <a
                      href={`/academy/${agent.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-slate-500 hover:text-blue-400 transition-colors opacity-0 group-hover/agent:opacity-100"
                      title={`Learn more about ${agent.name}`}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <span className="text-base leading-none flex-shrink-0">{agent.icon}</span>
                  </div>
                );
                })}
              </div>
            );
          })}
        </div>
      </aside>

      {/* ── Main workspace ───────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Input bar */}
        <div className="border-b border-slate-800 px-4 py-3 flex items-start gap-3">
          <div className="flex-1 flex flex-col gap-2">
            <textarea
              value={request}
              onChange={e => setRequest(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); run(); } }}
              placeholder="Ask the orchestrator anything — e.g. Design an AI-first banking platform, or Build a zero-trust security architecture..."
              rows={2}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-none"
            />
            <div className="flex items-center gap-2 flex-wrap">
              {EXAMPLE_REQUESTS.slice(0, 3).map((ex, i) => (
                <button key={i} onClick={() => setRequest(ex)}
                  className="text-[10px] px-2 py-1 bg-slate-800 border border-slate-700 hover:border-orange-500/40 text-slate-500 hover:text-slate-300 rounded-lg transition-all truncate max-w-64">
                  {ex}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0">
            {running
              ? <button onClick={stop} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Stop</button>
              : <button onClick={run} disabled={!request.trim()}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 disabled:bg-slate-700 disabled:text-slate-500 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Run
                </button>
            }
            {(log.length > 0 || history.length > 0) && !running && (
              <button onClick={clearSession} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-500 text-xs rounded-lg transition-colors">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Tab bar */}
        <div className="border-b border-slate-800 flex items-center gap-1 px-4 h-9">
          <button onClick={() => setActivePanel('log')}
            className={`text-xs px-3 py-1 rounded-md transition-colors ${activePanel === 'log' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
            Execution Log {log.length > 0 && <span className="ml-1 text-[10px] text-slate-500">{log.length}</span>}
          </button>
          <button onClick={() => setActivePanel('output')}
            className={`text-xs px-3 py-1 rounded-md transition-colors ${activePanel === 'output' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
            Output {finalOutput && !running && <span className="ml-1 text-[10px] text-emerald-500">●</span>}
          </button>
          <button onClick={() => setActivePanel('diagrams')}
            className={`text-xs px-3 py-1 rounded-md transition-colors ${activePanel === 'diagrams' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
            Diagrams {invocations.length > 0 && !running && <span className="ml-1 text-[10px] text-orange-400">⬡ {invocations.length}</span>}
          </button>
          <button onClick={() => setActivePanel('downloads')}
            className={`text-xs px-3 py-1 rounded-md transition-colors ${activePanel === 'downloads' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
            Downloads {(finalOutput || agentOutputs.length > 0) && !running && <span className="ml-1 text-[10px] text-blue-400">📥</span>}
          </button>
          <button onClick={() => setActivePanel('observability')}
            className={`text-xs px-3 py-1 rounded-md transition-colors ${activePanel === 'observability' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
            Observability {metrics && !running && <span className="ml-1 text-[10px] text-cyan-400">📊</span>}
          </button>
          {finalOutput && !running && (
            <div className="ml-auto flex items-center gap-2">
              <button onClick={copyOutput} className="text-[10px] px-2 py-1 bg-slate-700 hover:bg-slate-600 text-slate-400 rounded transition-colors">{copied ? 'Copied!' : 'Copy'}</button>
              <button onClick={dlPdf} disabled={!!exporting} className="text-[10px] px-2 py-1 bg-red-700/70 hover:bg-red-600 disabled:opacity-50 text-white rounded transition-colors">{exporting === 'pdf' ? '⟳' : 'PDF'}</button>
              <button onClick={dlWord} disabled={!!exporting} className="text-[10px] px-2 py-1 bg-orange-700/70 hover:bg-orange-600 disabled:opacity-50 text-white rounded transition-colors">{exporting === 'word' ? '⟳' : 'Word'}</button>
            </div>
          )}
        </div>

        {/* Content */}
        {activePanel === 'log' ? (
          <div ref={logRef} className="flex-1 overflow-y-auto p-4 space-y-2">
            {log.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <span className="text-4xl mb-4">⚡</span>
                <p className="text-slate-500 text-sm mb-1">Enter a request to start the orchestration</p>
                <p className="text-slate-700 text-xs">The Orchestrator will analyse, plan, invoke agents, and synthesise</p>
              </div>
            )}
            {log.map(entry => (
              <LogEntryView key={entry.id} entry={entry} />
            ))}
            {running && (
              <div className="flex items-center gap-2 text-orange-400 text-xs pl-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                Orchestrating…
              </div>
            )}
          </div>
        ) : activePanel === 'output' ? (
          <div ref={outputRef} className="flex-1 overflow-y-auto p-6">
            {!finalOutput ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <p className="text-slate-600 text-sm">Output will appear here after the orchestration completes</p>
              </div>
            ) : (
              <MarkdownRenderer content={finalOutput} />
            )}
          </div>
        ) : activePanel === 'diagrams' ? (
          <div className="flex-1 overflow-hidden">
            <DiagramPanel request={lastRequest} invocations={invocations} />
          </div>
        ) : activePanel === 'downloads' ? (
          <div className="flex-1 overflow-hidden">
            <DownloadsPanel finalOutput={finalOutput} agentOutputs={agentOutputs} />
          </div>
        ) : (
          <div className="flex-1 overflow-hidden">
            <ObservabilityPanel metrics={metrics} running={running} />
          </div>
        )}
      </main>
    </div>
  );
}

// ── Log entry component ───────────────────────────────────────────────────────

function LogEntryView({ entry }: { entry: LogEntry }) {
  const GROUP_COLORS_MAP: Record<string, string> = {
    'cloud-infra': 'text-sky-300',
    'ai-data':     'text-violet-300',
    'operations':  'text-emerald-300',
    'governance':  'text-amber-300',
    'experience':  'text-pink-300',
    'enterprise':  'text-indigo-300',
    'excellence':  'text-orange-300',
  };

  const agent = entry.agentId ? AGENT_DEFINITIONS.find(a => a.id === entry.agentId) : null;
  const agentColor = agent ? (GROUP_COLORS_MAP[agent.groupId] ?? 'text-slate-300') : 'text-slate-300';

  if (entry.type === 'user') {
    return (
      <div className="flex items-start gap-3 py-2 px-3 bg-orange-500/5 border border-orange-500/10 rounded-xl">
        <span className="text-orange-400 text-xs font-bold flex-shrink-0 mt-0.5">YOU</span>
        <p className="text-sm text-slate-200">{entry.content}</p>
      </div>
    );
  }

  if (entry.type === 'orchestrator') {
    return (
      <div className="flex items-start gap-3 py-1.5 px-3 border-l-2 border-orange-500/40">
        <span className="text-orange-400 text-[10px] font-bold flex-shrink-0 mt-0.5 w-20">ORCH</span>
        <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap">{entry.content}</p>
      </div>
    );
  }

  if (entry.type === 'plan') {
    return (
      <div className="flex items-start gap-3 py-1.5 px-3 border-l-2 border-blue-500/40">
        <span className="text-blue-400 text-[10px] font-bold flex-shrink-0 mt-0.5 w-20">PLAN</span>
        <p className="text-xs text-blue-300">{entry.content}</p>
      </div>
    );
  }

  if (entry.type === 'agent_start') {
    return (
      <div className="flex items-start gap-3 py-1.5 px-3">
        <span className={`text-[10px] font-bold flex-shrink-0 mt-0.5 w-20 truncate ${agentColor}`}>
          {agent?.icon ?? '▸'} {entry.agentName?.replace(' Agent', '').replace(' Architecture', '').slice(0, 10)}
        </span>
        <p className="text-xs text-slate-500 italic">Task: {entry.content}</p>
      </div>
    );
  }

  if (entry.type === 'agent_output') {
    return (
      <div className={`border-l-2 pl-3 ml-3 py-1 ${
        agent ? `border-${GROUP_COLORS_MAP[agent.groupId]?.split('-')[1] ?? 'slate'}-500/30` : 'border-slate-700'
      }`}>
        <div className={`text-[10px] font-semibold mb-1 ${agentColor}`}>
          {agent?.icon} {entry.agentName}
        </div>
        <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
          {entry.content || <span className="animate-pulse">▌</span>}
        </p>
      </div>
    );
  }

  if (entry.type === 'synthesis') {
    return (
      <div className="flex items-start gap-3 py-1.5 px-3 border-l-2 border-orange-500/60">
        <span className="text-orange-300 text-[10px] font-bold flex-shrink-0 mt-0.5 w-20">SYNTH</span>
        <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
          {entry.content || <span className="animate-pulse text-orange-400">▌</span>}
        </p>
      </div>
    );
  }

  if (entry.type === 'error') {
    return (
      <div className="py-1.5 px-3 bg-red-900/20 border border-red-700/30 rounded-lg text-xs text-red-300">
        ✕ {entry.content}
      </div>
    );
  }

  return null;
}

// ── Minimal markdown renderer for output panel ────────────────────────────────

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  const els: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('# '))       { els.push(<h1 key={i} className="text-2xl font-bold text-white mt-6 mb-3 pb-2 border-b border-orange-900/40">{line.slice(2)}</h1>); }
    else if (line.startsWith('## ')) { els.push(<h2 key={i} className="text-lg font-bold text-orange-300 mt-5 mb-2">{line.slice(3)}</h2>); }
    else if (line.startsWith('### ')){ els.push(<h3 key={i} className="text-base font-semibold text-amber-200 mt-4 mb-1">{line.slice(4)}</h3>); }
    else if (line.startsWith('#### ')){ els.push(<h4 key={i} className="text-sm font-semibold text-slate-300 mt-3 mb-1">{line.slice(5)}</h4>); }
    else if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) { items.push(lines[i].slice(2)); i++; }
      els.push(<ul key={`ul${i}`} className="list-disc list-inside space-y-1 text-slate-300 text-sm my-2 ml-2">{items.map((it,j)=><li key={j} dangerouslySetInnerHTML={{__html:fmt(it)}}/>)}</ul>);
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) { items.push(lines[i].replace(/^\d+\.\s/,'')); i++; }
      els.push(<ol key={`ol${i}`} className="list-decimal list-inside space-y-1 text-slate-300 text-sm my-2 ml-2">{items.map((it,j)=><li key={j} dangerouslySetInnerHTML={{__html:fmt(it)}}/>)}</ol>);
      continue;
    } else if (/^-{3,}$/.test(line.trim())) { els.push(<hr key={i} className="border-slate-700 my-4"/>); }
    else if (line.startsWith('> '))   { els.push(<blockquote key={i} className="border-l-4 border-orange-500 pl-4 italic text-slate-400 text-sm my-3">{line.slice(2)}</blockquote>); }
    else if (line.startsWith('```')) {
      const cl: string[] = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) { cl.push(lines[i]); i++; }
      els.push(<pre key={`c${i}`} className="bg-slate-950 rounded-lg p-4 text-xs text-green-300 overflow-x-auto my-3"><code>{cl.join('\n')}</code></pre>);
    } else if (line.startsWith('|')) {
      const tl: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) { tl.push(lines[i]); i++; }
      if (tl.length >= 2) {
        const headers = tl[0].split('|').filter(Boolean).map(h=>h.trim());
        const rows = tl.slice(2).filter(r=>!/^\|[\s:|-]+\|$/.test(r)).map(r=>r.split('|').filter(Boolean).map(c=>c.trim()));
        els.push(
          <div key={`t${i}`} className="overflow-x-auto my-4">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="bg-orange-950/60">{headers.map((h,j)=><th key={j} className="border border-orange-900/40 px-3 py-2 text-left text-orange-200 font-semibold" dangerouslySetInnerHTML={{__html:fmt(h)}}/>)}</tr></thead>
              <tbody>{rows.map((row,j)=><tr key={j} className={j%2===0?'bg-slate-900':'bg-slate-800/40'}>{row.map((cell,k)=><td key={k} className="border border-slate-700/60 px-3 py-2 text-slate-300" dangerouslySetInnerHTML={{__html:fmt(cell)}}/>)}</tr>)}</tbody>
            </table>
          </div>
        );
      }
      continue;
    } else if (line.trim() === '') { els.push(<div key={i} className="h-2"/>); }
    else { els.push(<p key={i} className="text-slate-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html:fmt(line)}}/>); }
    i++;
  }
  return <div className="space-y-1">{els}</div>;
}

function fmt(t: string) {
  return t
    .replace(/\*\*(.+?)\*\*/g,'<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g,'<em class="text-slate-200">$1</em>')
    .replace(/`(.+?)`/g,'<code class="bg-slate-700 px-1.5 py-0.5 rounded text-xs text-amber-300">$1</code>');
}
