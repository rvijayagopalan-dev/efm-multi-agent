'use client';

import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { AGENT_DEFINITIONS, AGENT_GROUPS_META } from '@/lib/agents';
import { AGENT_DETAILS, type AgentDetail } from '@/lib/agent-details';

export default function AcademyIndexPage() {
  const router = useRouter();
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>(
    Object.fromEntries([
      ...AGENT_GROUPS_META.map(g => [g.id, true]),
      ['sdlc', true],
      ['togaf', true],
      ['enterprise', true],
    ])
  );

  // Group new agents by category
  const agentsByCategory = useMemo(() => ({
    sdlc: AGENT_DETAILS.filter(a => a.category === 'SDLC'),
    togaf: AGENT_DETAILS.filter(a => a.category === 'TOGAF'),
    enterprise: AGENT_DETAILS.filter(a => a.category === 'Enterprise'),
  }), []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">📚</span>
              <div>
                <h1 className="text-2xl font-bold">Learning Academy</h1>
                <p className="text-sm text-slate-400">Deep-dive into architecture agent domains</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              Real-time AI-generated learning content for all {AGENT_DEFINITIONS.length} architecture agents
            </p>
          </div>
          <a
            href="/"
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors flex-shrink-0"
            title="Back to Home"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 12l-7-4m0 0l7 4m0-4v4m0-11l7 4m-7-4l-7-4" />
            </svg>
            <span className="hidden sm:inline">Home</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Original agent groups from AGENT_DEFINITIONS */}
        {AGENT_GROUPS_META.map((group) => {
          const agentsInGroup = AGENT_DEFINITIONS.filter(a => a.groupId === group.id);
          if (agentsInGroup.length === 0) return null;

          const isCollapsed = collapsedGroups[group.id] ?? true;

          return (
            <div key={group.id} className="mb-12">
              {/* Group Header with Toggle */}
              <button
                onClick={() => setCollapsedGroups(prev => ({ ...prev, [group.id]: !isCollapsed }))}
                className="w-full mb-6 flex items-center justify-between p-4 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl transition-transform" style={{ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(90deg)' }}>
                    ▶
                  </span>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-sm">{group.icon}</span>
                      <h2 className="text-xl font-bold text-white">{group.label}</h2>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5">{agentsInGroup.length} specialised agents</p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 flex-shrink-0 transition-colors group-hover:text-slate-300`}>
                  {isCollapsed ? 'Expand' : 'Collapse'}
                </span>
              </button>

              {/* Agents Grid (conditionally rendered) */}
              {!isCollapsed && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
                  {agentsInGroup.map((agent) => (
                    <button
                      key={agent.id}
                      onClick={() => router.push(`/academy/${agent.id}`)}
                      className="group relative flex flex-col gap-3 p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all hover:shadow-lg"
                    >
                      {/* Background accent */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent rounded-xl pointer-events-none group-hover:from-slate-800/40 transition-colors" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <span className="text-3xl">{(agent as any).icon || '📚'}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                            {group.label.split(' ').pop()}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {(agent as any).expertise || (agent as any).role}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center rounded-tl-lg bg-blue-500/10 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* New agents from AGENT_DETAILS */}
        {(() => {
          const categoryGroups = [
            { name: 'SDLC Agents', agents: agentsByCategory.sdlc, icon: '📋', key: 'sdlc', color: 'from-blue-800/20 to-transparent' },
            { name: 'TOGAF Agents', agents: agentsByCategory.togaf, icon: '🏗️', key: 'togaf', color: 'from-purple-800/20 to-transparent' },
            { name: 'Enterprise Agents', agents: agentsByCategory.enterprise, icon: '🏢', key: 'enterprise', color: 'from-green-800/20 to-transparent' },
          ];

          return categoryGroups.map((catGroup) => {
            if (catGroup.agents.length === 0) return null;

            const isCollapsed = collapsedGroups[catGroup.key] ?? true;

            return (
              <div key={catGroup.key} className="mb-12">
                {/* Group Header with Toggle */}
                <button
                  onClick={() => setCollapsedGroups(prev => ({ ...prev, [catGroup.key]: !isCollapsed }))}
                  className="w-full mb-6 flex items-center justify-between p-4 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl transition-transform" style={{ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(90deg)' }}>
                      ▶
                    </span>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-sm">{catGroup.icon}</span>
                        <h2 className="text-xl font-bold text-white">{catGroup.name}</h2>
                      </div>
                      <p className="text-slate-500 text-xs mt-0.5">{catGroup.agents.length} specialised agents</p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 flex-shrink-0 transition-colors group-hover:text-slate-300`}>
                    {isCollapsed ? 'Expand' : 'Collapse'}
                  </span>
                </button>

                {/* Agents Grid (conditionally rendered) */}
                {!isCollapsed && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
                    {catGroup.agents.map((agent: AgentDetail) => (
                      <button
                        key={agent.id}
                        onClick={() => router.push(`/academy/${agent.id}`)}
                        className="group relative flex flex-col gap-3 p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all hover:shadow-lg"
                      >
                        {/* Background accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent rounded-xl pointer-events-none group-hover:from-slate-800/40 transition-colors" />

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <span className="text-3xl">📚</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                              {agent.category}
                            </span>
                          </div>

                          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                            {agent.name}
                          </h3>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {agent.role}
                          </p>
                        </div>

                        {/* Hover indicator */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center rounded-tl-lg bg-blue-500/10 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          });
        })()}
      </main>
    </div>
  );
}
