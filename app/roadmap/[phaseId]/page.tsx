'use client';

import { useParams, useRouter } from 'next/navigation';
import { ENTERPRISE_OS_ROADMAP } from '@/lib/roadmap';

export default function PhaseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const phaseId = params.phaseId as string;

  const phase = ENTERPRISE_OS_ROADMAP.find(p => p.id === phaseId);

  if (!phase) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-2xl font-bold">Phase not found</h1>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-slate-400">The phase you're looking for doesn't exist.</p>
        </main>
      </div>
    );
  }

  const categoryColor = {
    SDLC: 'from-blue-600 to-blue-800',
    TOGAF: 'from-purple-600 to-purple-800',
    Enterprise: 'from-green-600 to-green-800',
  };

  const primaryCategory = phase.agents[0]?.category || 'SDLC';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            ← Back to Roadmap
          </button>
          <h1 className="text-2xl font-bold">Phase {phase.number}: {phase.name}</h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Hero Section */}
        <div className={`rounded-xl bg-gradient-to-br ${categoryColor[primaryCategory]} p-8 text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold mb-2">PHASE {phase.number}</p>
              <h2 className="text-3xl font-bold mb-2">{phase.title}</h2>
              <p className="text-white/80 mb-4">{phase.months} • Autonomy: {phase.autonomyStart} → {phase.autonomyEnd}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold mb-2">{phase.agents.length}</div>
              <div className="text-sm text-white/80">Agents</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-xs text-slate-400 mb-1">Duration</div>
            <div className="text-2xl font-bold">{phase.duration}</div>
            <div className="text-xs text-slate-500 mt-1">months</div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-xs text-slate-400 mb-1">Team Size</div>
            <div className="text-2xl font-bold">{phase.estimate.engineers}</div>
            <div className="text-xs text-slate-500 mt-1">engineers</div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-xs text-slate-400 mb-1">Budget</div>
            <div className="text-2xl font-bold text-yellow-400">{phase.estimate.budget}</div>
            <div className="text-xs text-slate-500 mt-1">investment</div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-xs text-slate-400 mb-1">Annual Savings</div>
            <div className="text-2xl font-bold text-green-400">{phase.estimate.annualSavings}</div>
            <div className="text-xs text-slate-500 mt-1">Year 1</div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Quick Wins */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">🎯 Quick Wins</h3>
              <ul className="space-y-3">
                {phase.quickWins.map((win, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <span className="text-slate-300">{win}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Criteria */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">✅ Success Criteria</h3>
              <ul className="space-y-3">
                {phase.successCriteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                    <span className="text-blue-400 font-bold mt-0.5">•</span>
                    <span className="text-slate-300">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">⚠️ Risks</h3>
              <ul className="space-y-3">
                {phase.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                    <span className="text-red-400 font-bold mt-0.5">!</span>
                    <span className="text-slate-300">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Agents */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">🤖 Agents ({phase.agents.length})</h3>
              <div className="space-y-2">
                {phase.agents.map((agent) => (
                  <div
                    key={agent.id}
                    className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 flex items-start justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-300">{agent.name}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        {agent.category === 'SDLC' && (
                          <span className="inline-block px-2 py-1 rounded bg-blue-900/50 text-blue-300">SDLC</span>
                        )}
                        {agent.category === 'TOGAF' && (
                          <span className="inline-block px-2 py-1 rounded bg-purple-900/50 text-purple-300">TOGAF</span>
                        )}
                        {agent.category === 'Enterprise' && (
                          <span className="inline-block px-2 py-1 rounded bg-green-900/50 text-green-300">Enterprise</span>
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">{agent.autonomyLevel}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">📦 Deliverables</h3>
              <ul className="space-y-3">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                    <span className="text-cyan-400 font-bold mt-0.5">◆</span>
                    <span className="text-slate-300">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-400">🗓️ Milestone Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-slate-800" />

            {/* Milestones */}
            <div className="space-y-4">
              {phase.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-4 ml-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center font-bold text-white text-sm">
                    {idx + 1}
                  </div>
                  <div className="pt-2 pb-4">
                    <div className="text-slate-300 font-medium">{milestone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Estimate Details */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-xl font-bold mb-6">💰 Full Estimate Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-slate-400 mb-1">Scope</div>
                <div className="text-slate-300">{phase.estimate.scope}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Duration</div>
                <div className="text-slate-300">{phase.estimate.duration}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Team Size</div>
                <div className="text-slate-300">{phase.estimate.teamSize}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Budget</div>
                <div className="text-lg font-bold text-yellow-400">{phase.estimate.budget}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-slate-400 mb-1">Break-Even Timeline</div>
                <div className="text-slate-300">{phase.estimate.breakEven}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Annual Savings (Year 1)</div>
                <div className="text-lg font-bold text-green-400">{phase.estimate.annualSavings}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Cost per Month</div>
                <div className="text-slate-300">${parseInt(phase.estimate.budget) / parseInt(phase.estimate.duration.split(' ')[0]) | 0}K</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Engineers Required</div>
                <div className="text-slate-300">{phase.estimate.engineers} FTE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-800">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
          >
            ← Back to Roadmap
          </button>
          <div className="text-sm text-slate-500">
            Phase {phase.number} of 9
          </div>
        </div>
      </main>
    </div>
  );
}
