'use client';

import { useRouter } from 'next/navigation';
import { AGENT_DEFINITIONS, AGENT_GROUPS_META } from '@/lib/agents';

export default function AcademyIndexPage() {
  const router = useRouter();

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
        {/* Author Info */}
        <div className="mb-12 p-4 border border-slate-800 rounded-lg bg-slate-900/40">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-white mb-1">EFM Agentic AI Learning Academy</h2>
              <p className="text-xs text-slate-400">Comprehensive learning resources for enterprise architecture agents</p>
            </div>
            <a
              href="https://linkedin.com/in/rvijayagopalan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/50 text-blue-400 hover:text-blue-300 text-xs font-medium rounded-lg transition-colors flex-shrink-0"
              title="Connect on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              <span>Author</span>
            </a>
          </div>
        </div>
        {AGENT_GROUPS_META.map((group) => {
          const agentsInGroup = AGENT_DEFINITIONS.filter(a => a.groupId === group.id);
          if (agentsInGroup.length === 0) return null;

          return (
            <div key={group.id} className="mb-16">
              {/* Group Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{group.icon}</span>
                  <h2 className="text-2xl font-bold">{group.label}</h2>
                </div>
                <p className="text-slate-400 text-sm">{agentsInGroup.length} specialised agents</p>
              </div>

              {/* Agents Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {agentsInGroup.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => router.push(`/academy-new/${agent.id}`)}
                    className="group relative flex flex-col gap-3 p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all hover:shadow-lg"
                  >
                    {/* Background accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent rounded-xl pointer-events-none group-hover:from-slate-800/40 transition-colors" />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-3xl">{agent.icon}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                          {group.label.split(' ').pop()}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {agent.expertise}
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
            </div>
          );
        })}
      </main>
    </div>
  );
}
