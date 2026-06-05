'use client';

import { useState } from 'react';
import AgentWorkspace from '@/components/AgentWorkspace';
import AgentProgressionDiagram from '@/components/AgentProgressionDiagram';
import { AGENT_DEFINITIONS } from '@/lib/agents';
import { AGENT_DETAILS } from '@/lib/agent-details';
import type { AgentDetail } from '@/lib/agent-details';

// Component to render agents grouped by category
function AgentsByCategory({
  displayAgents,
  expandedAgent,
  setExpandedAgent,
}: {
  displayAgents: AgentDetail[];
  expandedAgent: string | null;
  setExpandedAgent: (id: string | null) => void;
}) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  // Group agents by type/phase
  const groupedAgents = displayAgents.reduce((acc, agent) => {
    let groupKey = '';

    if (agent.category === 'SDLC') {
      if (agent.phase === 1) groupKey = 'SDLC-1';
      else if (agent.phase === 2) groupKey = 'SDLC-2';
      else if (agent.phase === 3) groupKey = 'SDLC-3';
      else if (agent.phase === 4) groupKey = 'SDLC-4';
      else if (agent.phase === 5) groupKey = 'SDLC-5';
      else if (agent.phase === 6) groupKey = 'SDLC-6';
    } else if (agent.category === 'TOGAF') {
      if (agent.phase === 7) groupKey = 'TOGAF-1';
      else if (agent.phase === 8) groupKey = 'TOGAF-2';
      else if (agent.phase === 9) groupKey = 'TOGAF-3';
    } else if (agent.category === 'Enterprise') {
      if (agent.type === 'Executive') groupKey = 'ENT-Executive';
      else if (agent.type === 'Operations') groupKey = 'ENT-Operations';
      else if (agent.type === 'Management') groupKey = 'ENT-Management';
      else if (agent.type === 'Strategy') groupKey = 'ENT-Strategy';
      else if (agent.type === 'Technical') groupKey = 'ENT-Technical';
    }

    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(agent);
    return acc;
  }, {} as Record<string, AgentDetail[]>);

  const groupMetadata: Record<string, { displayName: string; category: 'SDLC' | 'TOGAF' | 'Enterprise' }> = {
    'SDLC-1': { displayName: 'Phase 1: Requirements & Planning', category: 'SDLC' },
    'SDLC-2': { displayName: 'Phase 2: Design & Architecture', category: 'SDLC' },
    'SDLC-3': { displayName: 'Phase 3: Development', category: 'SDLC' },
    'SDLC-4': { displayName: 'Phase 4: QA & Testing', category: 'SDLC' },
    'SDLC-5': { displayName: 'Phase 5: Deployment & Release', category: 'SDLC' },
    'SDLC-6': { displayName: 'Phase 6: Operations & Support', category: 'SDLC' },
    'TOGAF-1': { displayName: 'Phase 1: Vision & Governance', category: 'TOGAF' },
    'TOGAF-2': { displayName: 'Phase 2: Core Architecture', category: 'TOGAF' },
    'TOGAF-3': { displayName: 'Phase 3: Planning & Integration', category: 'TOGAF' },
    'ENT-Executive': { displayName: 'Executive & C-Suite', category: 'Enterprise' },
    'ENT-Operations': { displayName: 'Business Operations', category: 'Enterprise' },
    'ENT-Management': { displayName: 'Management & Organizational', category: 'Enterprise' },
    'ENT-Strategy': { displayName: 'Strategic Business', category: 'Enterprise' },
    'ENT-Technical': { displayName: 'Technical Architecture', category: 'Enterprise' },
  };

  const groupOrder = [
    'SDLC-1', 'SDLC-2', 'SDLC-3', 'SDLC-4', 'SDLC-5', 'SDLC-6',
    'TOGAF-1', 'TOGAF-2', 'TOGAF-3',
    'ENT-Executive', 'ENT-Operations', 'ENT-Management', 'ENT-Strategy', 'ENT-Technical',
  ];

  const sortedGroups = groupOrder.filter(key => groupedAgents[key]);

  const toggleGroupExpanded = (groupKey: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupKey)) {
      newExpanded.delete(groupKey);
    } else {
      newExpanded.add(groupKey);
    }
    setExpandedGroups(newExpanded);
  };

  return (
    <div className="space-y-2.5">
      {sortedGroups.map((groupKey) => {
        const agents = groupedAgents[groupKey];
        const metadata = groupMetadata[groupKey];
        const isExpanded = expandedGroups.has(groupKey);
        const isSDLC = groupKey.startsWith('SDLC');
        const isTOGAF = groupKey.startsWith('TOGAF');

        const groupGradient = isSDLC ? 'from-blue-600/20 to-blue-500/10' : isTOGAF ? 'from-purple-600/20 to-purple-500/10' : 'from-emerald-600/20 to-emerald-500/10';
        const groupBorder = isSDLC ? 'border-blue-500/40' : isTOGAF ? 'border-purple-500/40' : 'border-emerald-500/40';
        const groupHover = isSDLC ? 'hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-500/20' : isTOGAF ? 'hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20' : 'hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/20';
        const groupHeaderText = isSDLC ? 'text-blue-200' : isTOGAF ? 'text-purple-200' : 'text-emerald-200';
        const groupSubtext = isSDLC ? 'text-blue-300/60' : isTOGAF ? 'text-purple-300/60' : 'text-emerald-300/60';

        return (
          <div key={groupKey} className={`rounded-xl border ${groupBorder} bg-gradient-to-r ${groupGradient} backdrop-blur-sm overflow-hidden transition-all duration-300 ${groupHover}`}>
            {/* Group Header - Accordion Toggle */}
            <button
              onClick={() => toggleGroupExpanded(groupKey)}
              className={`w-full px-6 py-5 text-left transition-all flex items-center justify-between group`}
            >
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${groupHeaderText} group-hover:text-white transition-colors`}>
                  {metadata.category === 'SDLC' && `📋 SDLC ${groupKey}: `}
                  {metadata.category === 'TOGAF' && `🏗️ TOGAF ${groupKey}: `}
                  {metadata.category === 'Enterprise' && `🏢 `}
                  {metadata.displayName}
                </h3>
                <p className={`text-xs font-medium ${groupSubtext} mt-1.5`}>{agents.length} agents in group</p>
              </div>
              <span className={`text-2xl transition-all duration-300 ${isExpanded ? 'rotate-180 text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>▼</span>
            </button>

            {/* Agents Grid - Collapsed by Default */}
            {isExpanded && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 p-6 bg-slate-950/80 backdrop-blur-sm border-t border-slate-800/50">
                {agents.map((agent) => {
                  const categoryGradient = {
                    SDLC: 'from-blue-600/15 to-blue-500/5',
                    TOGAF: 'from-purple-600/15 to-purple-500/5',
                    Enterprise: 'from-emerald-600/15 to-emerald-500/5',
                  };

                  const categoryBorder = {
                    SDLC: 'border-blue-500/40 hover:border-blue-500/70',
                    TOGAF: 'border-purple-500/40 hover:border-purple-500/70',
                    Enterprise: 'border-emerald-500/40 hover:border-emerald-500/70',
                  };

                  const categoryHeaderBg = {
                    SDLC: 'hover:bg-blue-500/10',
                    TOGAF: 'hover:bg-purple-500/10',
                    Enterprise: 'hover:bg-emerald-500/10',
                  };

                  const categoryText = {
                    SDLC: 'text-blue-300',
                    TOGAF: 'text-purple-300',
                    Enterprise: 'text-emerald-300',
                  };

                  const category = agent.category === 'SDLC' ? 'SDLC' : agent.category === 'TOGAF' ? 'TOGAF' : 'Enterprise';
                  const isAgentExpanded = expandedAgent === agent.id;

                  return (
                    <div
                      key={agent.id}
                      className={`rounded-lg border bg-gradient-to-br ${categoryGradient[category]} ${categoryBorder[category]} transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-slate-900/50 group`}
                    >
                      {/* Header - Always Visible */}
                      <button
                        onClick={() => setExpandedAgent(isAgentExpanded ? null : agent.id)}
                        className={`w-full px-4 py-4 text-left transition-colors ${categoryHeaderBg[category]}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-sm font-bold text-white group-hover:text-white flex-1 pr-2 line-clamp-2">{agent.name}</h3>
                          <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap font-semibold ${categoryText[category]} bg-white/5`}>
                            {category}
                          </span>
                        </div>
                        {agent.autonomyLevel && (
                          <div className="text-xs text-slate-300/80 mb-1">
                            <span className="font-semibold">L</span><span className="font-bold text-blue-300">{agent.autonomyLevel.slice(1)}</span>
                          </div>
                        )}
                        {agent.type && (
                          <div className="text-xs text-slate-300/80 mb-2">
                            <span className="text-slate-400">Type: </span><span className="font-semibold text-slate-200">{agent.type}</span>
                          </div>
                        )}
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-2 group-hover:text-slate-400 transition-colors">
                          <span className={`transition-transform duration-300 ${isAgentExpanded ? 'rotate-180' : ''}`}>▼</span>
                          <span className="font-medium">{isAgentExpanded ? 'Hide' : 'Show'}</span>
                        </div>
                      </button>

                      {/* Expanded Details */}
                      {isAgentExpanded && (
                        <div className="border-t border-white/10 px-4 py-4 space-y-4 bg-slate-900/30 animate-in fade-in duration-200">
                          {/* Learn More Link */}
                          <div>
                            <a
                              href={`/academy/${agent.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 hover:text-blue-300 text-xs font-medium rounded-lg transition-colors"
                            >
                              <span>📚</span>
                              <span>Learn in Academy</span>
                              <span className="ml-1">↗</span>
                            </a>
                          </div>

                          {/* Role */}
                          <div>
                            <h4 className="text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest opacity-70">Role</h4>
                            <p className="text-sm text-slate-200 font-medium leading-relaxed">{agent.role}</p>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-xs font-bold text-slate-300 mb-2.5 uppercase tracking-widest opacity-70">Responsibilities</h4>
                            <ul className="space-y-2">
                              {agent.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                                  <span className="text-slate-500 mt-1 flex-shrink-0">▸</span>
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Inputs */}
                          {agent.inputs && agent.inputs.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold text-slate-300 mb-2.5 uppercase tracking-widest opacity-70">Inputs</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {agent.inputs.map((input, idx) => (
                                  <span key={idx} className="text-xs bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 px-2.5 py-1.5 rounded-full font-medium transition-colors border border-sky-500/30">
                                    📥 {input}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Frameworks/Tools */}
                          {agent.frameworks && agent.frameworks.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold text-slate-300 mb-2.5 uppercase tracking-widest opacity-70">Frameworks & Tools</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {agent.frameworks.map((framework, idx) => (
                                  <span key={idx} className="text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-2.5 py-1.5 rounded-full font-medium transition-colors border border-amber-500/30">
                                    ⚙️ {framework}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Key Outputs */}
                          <div>
                            <h4 className="text-xs font-bold text-slate-300 mb-2.5 uppercase tracking-widest opacity-70">Outputs</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {agent.keyOutputs.map((output, idx) => (
                                <span key={idx} className="text-xs bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-2.5 py-1.5 rounded-full font-medium transition-colors border border-emerald-500/30">
                                  📤 {output}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState<'workspace' | 'agents'>('workspace');
  const [agentFilter, setAgentFilter] = useState<'all' | 'sdlc' | 'togaf' | 'enterprise'>('all');
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);

  // Agent data for filtering
  const sdlcAgents = AGENT_DETAILS.filter(a => a.category === 'SDLC');
  const togafAgents = AGENT_DETAILS.filter(a => a.category === 'TOGAF');
  const enterpriseAgents = AGENT_DETAILS.filter(a => a.category === 'Enterprise');

  let displayAgents = AGENT_DETAILS;
  if (agentFilter === 'sdlc') displayAgents = sdlcAgents;
  else if (agentFilter === 'togaf') displayAgents = togafAgents;
  else if (agentFilter === 'enterprise') displayAgents = enterpriseAgents;

  const categoryCount = {
    sdlc: sdlcAgents.length,
    togaf: togafAgents.length,
    enterprise: enterpriseAgents.length,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-20 h-[57px] flex items-center">
        <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-sm">⚡</div>
            <div>
              <h1 className="text-sm font-bold text-white leading-none">EFM Agentic AI</h1>
              <p className="text-[10px] text-slate-500 mt-0.5">Multi-Agent Enterprise Architecture System</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>{AGENT_DEFINITIONS.length} specialised agents</span>
            <span className="hidden sm:block">Orchestrator · Planner · Memory · Tools</span>
            <a
              href="/roadmap"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 rounded-lg transition-colors"
              title="Implementation Roadmap"
            >
              <span>🗺️</span>
              <span className="hidden sm:inline">Roadmap</span>
            </a>
            <a
              href="/academy"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
              title="Learning Academy"
            >
              <span>📚</span>
              <span className="hidden sm:inline">Academy</span>
            </a>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Claude Sonnet 4.6
            </div>
          </div>
        </div>
      </header>

      {/* View Tabs */}
      <div className="border-b border-slate-800 bg-slate-900/40 sticky top-[57px] z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex gap-4">
          <button
            onClick={() => setView('workspace')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              view === 'workspace'
                ? 'border-orange-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            💼 Workspace
          </button>
          <button
            onClick={() => setView('agents')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              view === 'agents'
                ? 'border-cyan-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            🤖 Agents ({AGENT_DETAILS.length})
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {view === 'workspace' && <AgentWorkspace />}
        {view === 'agents' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-6">
            {/* Stats - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="group relative p-5 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">{displayAgents.length}</div>
                <div className="text-xs font-semibold text-cyan-300/80 mt-2 tracking-wider uppercase">Agents Displayed</div>
              </div>
              <div className="group relative p-5 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">{categoryCount.sdlc}</div>
                <div className="text-xs font-semibold text-blue-300/80 mt-2 tracking-wider uppercase">SDLC Agents</div>
              </div>
              <div className="group relative p-5 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-purple-500/5 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">{categoryCount.togaf}</div>
                <div className="text-xs font-semibold text-purple-300/80 mt-2 tracking-wider uppercase">TOGAF Agents</div>
              </div>
              <div className="group relative p-5 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">{categoryCount.enterprise}</div>
                <div className="text-xs font-semibold text-emerald-300/80 mt-2 tracking-wider uppercase">Enterprise Agents</div>
              </div>
            </div>

            {/* Filters - Enhanced */}
            <div className="flex flex-wrap gap-2.5 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center">Filter:</span>
              <button
                onClick={() => setAgentFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  agentFilter === 'all'
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                ◆ All (114)
              </button>
              <button
                onClick={() => setAgentFilter('sdlc')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  agentFilter === 'sdlc'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                📋 SDLC ({categoryCount.sdlc})
              </button>
              <button
                onClick={() => setAgentFilter('togaf')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  agentFilter === 'togaf'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                🏗️ TOGAF ({categoryCount.togaf})
              </button>
              <button
                onClick={() => setAgentFilter('enterprise')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  agentFilter === 'enterprise'
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                🏢 Enterprise ({categoryCount.enterprise})
              </button>
            </div>

            {/* Agents by Category */}
            <AgentsByCategory displayAgents={displayAgents} expandedAgent={expandedAgent} setExpandedAgent={setExpandedAgent} />

            {/* Sequential Progression Diagram */}
            <AgentProgressionDiagram />
          </div>
        )}
      </main>

      {/* Footer with Author Info */}
      <footer className="border-t border-slate-800 bg-slate-900/40 mt-auto py-4 px-4 sm:px-6">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            <p>EFM Agentic AI — Multi-Agent Enterprise Architecture System</p>
          </div>
          <a
            href="https://linkedin.com/in/rvijayagopalan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/50 text-blue-400 hover:text-blue-300 text-xs font-medium rounded-lg transition-colors"
            title="Connect on LinkedIn"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span className="hidden sm:inline">Author</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
