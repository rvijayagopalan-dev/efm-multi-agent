'use client';

export default function AgentProgressionDiagram() {
  return (
    <div className="mt-12 space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">🔄 Sequential Agent Progression</h2>
        <p className="text-slate-400">How agents flow through the Enterprise Autonomous Operating System lifecycle</p>
      </div>

      {/* Main Diagram */}
      <div className="rounded-lg border-2 border-slate-700 bg-slate-900/40 p-8 overflow-x-auto">
        <div className="min-w-max">
          {/* SDLC Progression - Main Flow */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-blue-300 mb-6">SDLC Lifecycle Phases (28 Agents)</h3>
            <div className="flex items-center gap-4 mb-8">
              {/* Phase 1 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 1</div>
                  <div className="text-xs text-blue-200 whitespace-normal">Requirements & Planning</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">4 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Analyze · Plan · Vision</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 2</div>
                  <div className="text-xs text-blue-200 whitespace-normal">Design & Architecture</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">4 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Design · Architect</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 3</div>
                  <div className="text-xs text-blue-200 whitespace-normal">Development</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">5 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Code · Document</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* Phase 4 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 4</div>
                  <div className="text-xs text-blue-200 whitespace-normal">QA & Testing</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">5 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Test · Validate</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* Phase 5 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 5</div>
                  <div className="text-xs text-blue-200 whitespace-normal">Deployment</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">4 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Release · Deploy</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* Phase 6 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 6</div>
                  <div className="text-xs text-blue-200 whitespace-normal">Operations</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">3 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Operate · Support</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* Phase 7 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-blue-900/50 border border-blue-700 text-center">
                  <div className="font-bold text-blue-300 text-sm mb-2">Phase 7</div>
                  <div className="text-xs text-blue-200 whitespace-normal">Governance</div>
                  <div className="text-xs text-blue-400 mt-2 font-semibold">3 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Govern · Optimize</div>
              </div>
            </div>
          </div>

          {/* TOGAF Parallel Track */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-purple-300 mb-6">TOGAF Architecture Phases (18 Agents) — Runs in Parallel</h3>
            <div className="flex items-center gap-4">
              {/* TOGAF Phase 1 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-purple-900/50 border border-purple-700 text-center">
                  <div className="font-bold text-purple-300 text-sm mb-2">Phase 8</div>
                  <div className="text-xs text-purple-200 whitespace-normal">Vision & Governance</div>
                  <div className="text-xs text-purple-400 mt-2 font-semibold">5 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Vision · Standards</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* TOGAF Phase 2 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-purple-900/50 border border-purple-700 text-center">
                  <div className="font-bold text-purple-300 text-sm mb-2">Phase 9</div>
                  <div className="text-xs text-purple-200 whitespace-normal">Architecture</div>
                  <div className="text-xs text-purple-400 mt-2 font-semibold">6 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Design · Structure</div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="text-2xl text-slate-500">→</div>
              </div>

              {/* TOGAF Phase 3 */}
              <div className="flex flex-col items-center min-w-max">
                <div className="w-32 p-4 rounded-lg bg-purple-900/50 border border-purple-700 text-center">
                  <div className="font-bold text-purple-300 text-sm mb-2">Phase 10</div>
                  <div className="text-xs text-purple-200 whitespace-normal">Planning</div>
                  <div className="text-xs text-purple-400 mt-2 font-semibold">7 Agents</div>
                </div>
                <div className="text-xs text-slate-400 mt-2">Strategy · Plan</div>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-purple-900/20 border border-purple-800 text-sm text-purple-200">
              <strong>Note:</strong> TOGAF agents operate in parallel throughout the entire SDLC lifecycle, ensuring enterprise architecture governance and alignment across all phases.
            </div>
          </div>

          {/* Enterprise Oversight */}
          <div>
            <h3 className="text-lg font-bold text-green-300 mb-6">Enterprise Governance (68 Agents) — Strategic Oversight</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-lg bg-green-900/50 border border-green-700 text-center">
                <div className="font-bold text-green-300 text-sm mb-2">Executive</div>
                <div className="text-xs text-green-200">7 Agents</div>
                <div className="text-xs text-slate-500 mt-2">CEO, CFO, CTO</div>
              </div>
              <div className="p-4 rounded-lg bg-green-900/50 border border-green-700 text-center">
                <div className="font-bold text-green-300 text-sm mb-2">Operations</div>
                <div className="text-xs text-green-200">8 Agents</div>
                <div className="text-xs text-slate-500 mt-2">Process, Customer</div>
              </div>
              <div className="p-4 rounded-lg bg-green-900/50 border border-green-700 text-center">
                <div className="font-bold text-green-300 text-sm mb-2">Management</div>
                <div className="text-xs text-green-200">6 Agents</div>
                <div className="text-xs text-slate-500 mt-2">Change, Org Design</div>
              </div>
              <div className="p-4 rounded-lg bg-green-900/50 border border-green-700 text-center">
                <div className="font-bold text-green-300 text-sm mb-2">Strategy</div>
                <div className="text-xs text-green-200">6 Agents</div>
                <div className="text-xs text-slate-500 mt-2">Competitive, M&A</div>
              </div>
              <div className="p-4 rounded-lg bg-green-900/50 border border-green-700 text-center">
                <div className="font-bold text-green-300 text-sm mb-2">Technical</div>
                <div className="text-xs text-green-200">41 Agents</div>
                <div className="text-xs text-slate-500 mt-2">Architecture, Cloud</div>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-green-900/20 border border-green-800 text-sm text-green-200">
              <strong>Note:</strong> Enterprise agents provide strategic oversight, governance, and decision-making throughout the entire autonomous operating system, ensuring business alignment and organizational effectiveness.
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 rounded-lg border border-blue-800 bg-blue-900/20">
          <div className="font-bold text-blue-300 mb-2">SDLC Agents</div>
          <div className="text-sm text-blue-200">28 agents through 7 lifecycle phases, implementing delivery excellence and continuous improvement</div>
        </div>
        <div className="p-4 rounded-lg border border-purple-800 bg-purple-900/20">
          <div className="font-bold text-purple-300 mb-2">TOGAF Agents</div>
          <div className="text-sm text-purple-200">18 agents ensuring enterprise architecture consistency and governance across all SDLC phases</div>
        </div>
        <div className="p-4 rounded-lg border border-green-800 bg-green-900/20">
          <div className="font-bold text-green-300 mb-2">Enterprise Agents</div>
          <div className="text-sm text-green-200">68 agents providing strategic business oversight, operations, and organizational alignment</div>
        </div>
      </div>
    </div>
  );
}
