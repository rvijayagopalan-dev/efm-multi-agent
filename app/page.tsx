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
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Claude Sonnet 4.6
            </div>
          </div>
        </div>
      </header>

      {/* Workspace */}
      <AgentWorkspace />
    </div>
  );
}
