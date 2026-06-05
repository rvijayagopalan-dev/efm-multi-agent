'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useRef, useCallback } from 'react';
import { AGENT_DEFINITIONS, AGENT_GROUPS_META } from '@/lib/agents';
import { AGENT_DETAILS, type AgentDetail } from '@/lib/agent-details';
import { ACADEMY_SECTIONS, SECTION_COLORS, type AcademySection } from '@/lib/academy-sections';

type SectionState = 'idle' | 'generating' | 'done' | 'error';

export default function AgentAcademyPage() {
  const params = useParams();
  const router = useRouter();
  const agentId = params.agentId as string;

  // Try to find agent in AGENT_DETAILS first (114 agents), fallback to AGENT_DEFINITIONS (49 agents)
  const agent = AGENT_DETAILS.find(a => a.id === agentId) || AGENT_DEFINITIONS.find(a => a.id === agentId);

  // Get group from AGENT_GROUPS_META if available, otherwise derive from category
  const categoryGroupMap: Record<string, string> = {
    'SDLC': 'sdlc',
    'TOGAF': 'togaf',
    'Enterprise': 'enterprise'
  };
  const agentDetail = AGENT_DETAILS.find(a => a.id === agentId);
  const groupId = (agent as any)?.groupId || (agentDetail ? categoryGroupMap[agentDetail.category] : undefined);
  const group = groupId ? AGENT_GROUPS_META.find(g => g.id === groupId) : null;

  const [activeSection, setActiveSection] = useState<string>(ACADEMY_SECTIONS[0].id);
  const [content, setContent] = useState<Record<string, string>>({});
  const [states, setStates] = useState<Record<string, SectionState>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState<'pdf' | 'word' | null>(null);
  const abortRefs = useRef<Record<string, AbortController>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  if (!agent) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Agent not found: {agentId}</p>
          <button onClick={() => router.push('/academy')} className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to academy
          </button>
        </div>
      </div>
    );
  }

  const generateSection = useCallback(async (sectionId: string) => {
    if (states[sectionId] === 'generating') return;

    setStates((s) => ({ ...s, [sectionId]: 'generating' }));
    setContent((c) => ({ ...c, [sectionId]: '' }));
    setErrors((e) => ({ ...e, [sectionId]: '' }));
    setActiveSection(sectionId);

    const ctrl = new AbortController();
    abortRefs.current[sectionId] = ctrl;

    try {
      const res = await fetch('/api/academy/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId, sectionId }),
        signal: ctrl.signal,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Generation failed' }));
        throw new Error(err.error || 'Generation failed');
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setContent((c) => ({ ...c, [sectionId]: accumulated }));
        if (contentRef.current) contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }

      setStates((s) => ({ ...s, [sectionId]: 'done' }));
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setStates((s) => ({ ...s, [sectionId]: 'error' }));
        setErrors((e) => ({ ...e, [sectionId]: (err as Error).message }));
      } else {
        setStates((s) => ({ ...s, [sectionId]: 'idle' }));
      }
    } finally {
      delete abortRefs.current[sectionId];
    }
  }, [agentId, states]);

  const stopSection = (sectionId: string) => {
    abortRefs.current[sectionId]?.abort();
  };

  const generateAll = async () => {
    for (const sec of ACADEMY_SECTIONS) {
      if (states[sec.id] === 'done') continue;
      await generateSection(sec.id);
      await new Promise(r => setTimeout(r, 500)); // Slight delay between generations
    }
  };

  const currentSection = ACADEMY_SECTIONS.find((s) => s.id === activeSection)!;
  const currentContent = content[activeSection] ?? '';
  const currentState = states[activeSection] ?? 'idle';
  const sc = SECTION_COLORS[currentSection.color];

  const copySection = async () => {
    if (!currentContent) return;
    await navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMd = () => {
    if (!currentContent) return;
    const blob = new Blob([currentContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${agentId}-${activeSection}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPdf = async () => {
    if (!currentContent || exporting) return;
    setExporting('pdf');
    try {
      // Export as plain text PDF-like format
      const blob = new Blob([`${agent.name} — ${currentSection.label}\n\n${currentContent}`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${agentId}-${activeSection}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setErrors((er) => ({ ...er, [activeSection]: `PDF export failed: ${(e as Error).message}` }));
    } finally {
      setExporting(null);
    }
  };

  const exportWord = async () => {
    if (!currentContent || exporting) return;
    setExporting('word');
    try {
      const html = `<h1>${agent.name} — ${currentSection.label}</h1>${currentContent.replace(/\n/g, '<br/>')}`;
      const blob = new Blob([html], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${agentId}-${activeSection}.docx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setErrors((er) => ({ ...er, [activeSection]: `Word export failed: ${(e as Error).message}` }));
    } finally {
      setExporting(null);
    }
  };

  const doneCount = ACADEMY_SECTIONS.filter((s) => states[s.id] === 'done').length;
  const isAnyGenerating = ACADEMY_SECTIONS.some((s) => states[s.id] === 'generating');

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Top nav */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <button
              onClick={() => router.push('/academy')}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Academy
            </button>
            <span className="text-slate-700">/</span>
            <span className="text-slate-500 text-sm hidden sm:block">{group?.label}</span>
            <span className="text-slate-700 hidden sm:block">/</span>
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-lg leading-none flex-shrink-0">{(agent as any).icon || '📚'}</span>
              <span className="text-sm font-semibold text-white truncate">{agent.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-xs text-slate-500">{doneCount}/{ACADEMY_SECTIONS.length} sections</span>
            <button
              onClick={generateAll}
              disabled={isAnyGenerating || doneCount === ACADEMY_SECTIONS.length}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-500 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              {isAnyGenerating ? 'Generating…' : doneCount === ACADEMY_SECTIONS.length ? 'All done' : 'Generate All'}
            </button>
            <a
              href="/"
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition-colors"
              title="Back to Home"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 12l-7-4m0 0l7 4m0-4v4m0-11l7 4m-7-4l-7-4" />
              </svg>
              <span className="hidden sm:inline">Home</span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-screen-2xl mx-auto w-full">

        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <aside className="w-56 flex-shrink-0 border-r border-slate-800 sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto">
          {/* Agent hero */}
          <div className="p-4 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{(agent as any).icon || '📚'}</span>
              <div>
                <p className="text-xs font-bold text-white leading-tight">{agent.name}</p>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Learning Academy</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-600 leading-snug mt-2">{(agent as any).expertise || (agent as AgentDetail).role}</p>
          </div>

          {/* Progress bar */}
          <div className="px-4 py-3 border-b border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-slate-500">Progress</span>
              <span className="text-[10px] text-slate-400">{doneCount}/{ACADEMY_SECTIONS.length}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1">
              <div
                className="bg-blue-500 h-1 rounded-full transition-all duration-500"
                style={{ width: `${(doneCount / ACADEMY_SECTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Section nav */}
          <nav className="p-2">
            {ACADEMY_SECTIONS.map((sec, idx) => {
              const state = states[sec.id] ?? 'idle';
              const isActive = activeSection === sec.id;
              const secColors = SECTION_COLORS[sec.color];

              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 transition-all group ${
                    isActive ? 'bg-slate-800' : 'hover:bg-slate-800/50'
                  }`}
                >
                  {/* Status indicator */}
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    {state === 'generating' ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${secColors.dot} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${secColors.dot}`} />
                      </span>
                    ) : state === 'done' ? (
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : state === 'error' ? (
                      <span className="text-red-400 text-xs">!</span>
                    ) : (
                      <span className="text-[10px] text-slate-600 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {sec.label}
                    </p>
                  </div>

                  {isActive && (
                    <span className={`text-base leading-none flex-shrink-0 ${secColors.badge.split(' ')[1]}`}>
                      {sec.icon}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0 flex flex-col">

          {/* Section header */}
          <div className={`border-b border-slate-800 px-6 py-4 flex items-center justify-between gap-4`}>
            <div className="flex items-center gap-3">
              <span className={`text-2xl leading-none ${sc.badge.split(' ')[1]}`}>{currentSection.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-bold text-white">{currentSection.label}</h1>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${sc.badge}`}>
                    {agent.name}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{currentSection.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {currentContent && !isAnyGenerating && (
                <>
                  <button onClick={copySection} className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors">
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                  <button onClick={downloadMd} className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors">
                    .md
                  </button>
                  <button onClick={exportPdf} disabled={!!exporting} className="px-2.5 py-1.5 bg-red-700/80 hover:bg-red-600 disabled:opacity-50 text-white text-xs rounded-lg transition-colors">
                    {exporting === 'pdf' ? '⟳' : 'PDF'}
                  </button>
                  <button onClick={exportWord} disabled={!!exporting} className="px-2.5 py-1.5 bg-blue-700/80 hover:bg-blue-600 disabled:opacity-50 text-white text-xs rounded-lg transition-colors">
                    {exporting === 'word' ? '⟳' : 'Word'}
                  </button>
                </>
              )}

              {currentState === 'generating' ? (
                <button onClick={() => stopSection(activeSection)} className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors">
                  Stop
                </button>
              ) : (
                <button
                  onClick={() => generateSection(activeSection)}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {currentState === 'done' ? 'Regenerate' : 'Generate'}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Content area */}
          <div ref={contentRef} className="flex-1 overflow-y-auto p-6">
            {currentState === 'idle' && !currentContent && (
              <div className={`border border-dashed ${sc.border} rounded-2xl p-16 text-center`}>
                <span className={`text-4xl mb-4 block ${sc.badge.split(' ')[1]}`}>{currentSection.icon}</span>
                <p className="text-slate-400 text-sm mb-1 font-medium">{currentSection.label}</p>
                <p className="text-slate-600 text-xs mb-6">{currentSection.description}</p>
                <button
                  onClick={() => generateSection(activeSection)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Generate {currentSection.label}
                </button>
              </div>
            )}

            {currentState === 'error' && errors[activeSection] && (
              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4 text-red-300 text-sm mb-4">
                {errors[activeSection]}
              </div>
            )}

            {(currentContent || currentState === 'generating') && (
              <div className="prose prose-invert max-w-none">
                {currentState === 'generating' && !currentContent && (
                  <div className="flex items-center gap-3 text-slate-500 text-sm mb-4">
                    <span className="animate-spin">⟳</span>
                    Generating {currentSection.label}…
                  </div>
                )}

                {currentContent && (
                  <div className="text-sm leading-relaxed space-y-4 text-slate-300">
                    {currentContent.split('\n').map((line, i) => {
                      if (line.startsWith('##')) {
                        return <h2 key={i} className="text-lg font-bold text-white mt-6 mb-3">{line.slice(3).trim()}</h2>;
                      }
                      if (line.startsWith('###')) {
                        return <h3 key={i} className="text-base font-semibold text-amber-300 mt-4 mb-2">{line.slice(4).trim()}</h3>;
                      }
                      if (line.startsWith('####')) {
                        return <h4 key={i} className="text-sm font-semibold text-slate-300 mt-3 mb-1">{line.slice(5).trim()}</h4>;
                      }
                      if (line.startsWith('- ')) {
                        return <div key={i} className="flex gap-3 text-sm"><span className="text-slate-500 flex-shrink-0">•</span><span>{line.slice(2)}</span></div>;
                      }
                      if (line.startsWith('* ')) {
                        return <div key={i} className="flex gap-3 text-sm"><span className="text-slate-500 flex-shrink-0">◦</span><span>{line.slice(2)}</span></div>;
                      }
                      if (line.startsWith('`')) {
                        return <code key={i} className="block bg-slate-800/50 px-3 py-2 rounded text-xs font-mono text-amber-300 my-2 overflow-x-auto">{line}</code>;
                      }
                      if (line.trim() === '') {
                        return <div key={i} className="h-2" />;
                      }
                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
