'use client';

import AgentWorkspace from '@/components/AgentWorkspace';
import { AGENT_DEFINITIONS } from '@/lib/agents';

export default function Home() {
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

      {/* Workspace */}
      <AgentWorkspace />

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
