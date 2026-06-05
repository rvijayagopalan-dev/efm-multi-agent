'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ENTERPRISE_OS_ROADMAP, MATURITY_LEVELS, ANNUAL_METRICS, TOTAL_SYSTEM_ESTIMATE } from '@/lib/roadmap';

export default function RoadmapPage() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [view, setView] = useState<'timeline' | 'estimate' | 'maturity' | 'agents'>('timeline');
  const [agentFilter, setAgentFilter] = useState<'all' | 'sdlc' | 'togaf' | 'enterprise'>('all');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">🗺️</span>
                <div>
                  <h1 className="text-3xl font-bold">Enterprise Autonomous OS Roadmap</h1>
                  <p className="text-slate-400 text-sm mt-1">18-Month Implementation Plan</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm">
                Complete roadmap for 114 autonomous agents: 28 SDLC + 18 TOGAF + 68 Enterprise
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors flex-shrink-0"
              title="Back to Home"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 12l-7-4m0 0l7 4m0-4v4m0-11l7-4" />
              </svg>
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            {(['timeline', 'estimate', 'maturity', 'agents'] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  view === v
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {v === 'timeline' && '📅 Timeline'}
                {v === 'estimate' && '💰 Estimates'}
                {v === 'maturity' && '📊 Maturity'}
                {v === 'agents' && '🤖 Agents'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {view === 'timeline' && <TimelineView expandedPhase={expandedPhase} setExpandedPhase={setExpandedPhase} />}
        {view === 'estimate' && <EstimateView />}
        {view === 'maturity' && <MaturityView />}
        {view === 'agents' && <AgentsView filter={agentFilter} setFilter={setAgentFilter} />}
      </main>
    </div>
  );
}

function TimelineView({ expandedPhase, setExpandedPhase }: { expandedPhase: string | null; setExpandedPhase: (id: string | null) => void }) {
  return (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-3xl font-bold text-blue-400">114</div>
          <div className="text-sm text-slate-400 mt-1">Total Agents</div>
          <div className="text-xs text-slate-500 mt-2">28 SDLC + 18 TOGAF + 68 Enterprise</div>
        </div>
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-3xl font-bold text-green-400">18</div>
          <div className="text-sm text-slate-400 mt-1">Month Timeline</div>
          <div className="text-xs text-slate-500 mt-2">9 phases in parallel</div>
        </div>
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-3xl font-bold text-purple-400">$9.2M</div>
          <div className="text-sm text-slate-400 mt-1">Total Investment</div>
          <div className="text-xs text-slate-500 mt-2">20-25 engineers</div>
        </div>
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-3xl font-bold text-yellow-400">$25M+</div>
          <div className="text-sm text-slate-400 mt-1">Annual Savings</div>
          <div className="text-xs text-slate-500 mt-2">Year 1 ROI: 200-300%</div>
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-4">
        {ENTERPRISE_OS_ROADMAP.map((phase) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            isExpanded={expandedPhase === phase.id}
            onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
          />
        ))}
      </div>
    </div>
  );
}

function PhaseCard({ phase, isExpanded, onToggle }: { phase: typeof ENTERPRISE_OS_ROADMAP[0]; isExpanded: boolean; onToggle: () => void }) {
  const categoryColor = {
    SDLC: 'from-blue-600/20 to-blue-900/20',
    TOGAF: 'from-purple-600/20 to-purple-900/20',
    Enterprise: 'from-green-600/20 to-green-900/20',
  };

  const categoryBadge = {
    SDLC: 'bg-blue-900/40 text-blue-300 border-blue-800',
    TOGAF: 'bg-purple-900/40 text-purple-300 border-purple-800',
    Enterprise: 'bg-green-900/40 text-green-300 border-green-800',
  };

  const primaryCategory = phase.agents[0]?.category || 'SDLC';

  return (
    <div className={`rounded-xl border border-slate-800 bg-gradient-to-br ${categoryColor[primaryCategory]} overflow-hidden`}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 hover:bg-slate-900/20 transition-colors text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`inline-block px-2 py-1 rounded text-xs font-semibold border ${categoryBadge[primaryCategory]}`}>
                Phase {phase.number}: {phase.name}
              </span>
              <span className="text-xs text-slate-400">{phase.months}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
            <p className="text-sm text-slate-400 mb-3">
              {phase.agents.length} agents • Autonomy: {phase.autonomyStart} → {phase.autonomyEnd}
            </p>
            <div className="flex flex-wrap gap-2">
              {phase.agents.slice(0, 3).map((agent) => (
                <span key={agent.id} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">
                  {agent.name.split(' ')[0]}
                </span>
              ))}
              {phase.agents.length > 3 && (
                <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">
                  +{phase.agents.length - 3} more
                </span>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-300">
              {isExpanded ? '▼' : '▶'}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-slate-800 px-6 py-6 space-y-6">
          {/* Quick Wins */}
          <div>
            <h4 className="font-semibold text-green-400 mb-3">🎯 Quick Wins</h4>
            <ul className="space-y-2">
              {phase.quickWins.map((win, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{win}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success Criteria */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">✅ Success Criteria</h4>
            <ul className="space-y-2">
              {phase.successCriteria.map((criterion, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Estimate */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-3">💰 Estimate</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Scope:</span>
                <span className="text-slate-300">{phase.estimate.scope}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Duration:</span>
                <span className="text-slate-300">{phase.estimate.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Team Size:</span>
                <span className="text-slate-300">{phase.estimate.teamSize}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Budget:</span>
                <span className="text-slate-300 font-semibold">{phase.estimate.budget}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Break-even:</span>
                <span className="text-slate-300">{phase.estimate.breakEven}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Annual Savings:</span>
                <span className="text-green-400 font-semibold">{phase.estimate.annualSavings}</span>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-semibold text-purple-400 mb-3">📦 Deliverables</h4>
            <ul className="space-y-2">
              {phase.deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">🗓️ Milestones</h4>
            <div className="space-y-2">
              {phase.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-cyan-400 font-semibold">{idx + 1}.</span>
                  <span className="text-slate-300">{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EstimateView() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Estimate */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-lg font-bold mb-4">💼 Total System Estimate</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Agents:</span>
              <span className="font-semibold">{TOTAL_SYSTEM_ESTIMATE.totalAgents}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Timeline:</span>
              <span className="font-semibold">{TOTAL_SYSTEM_ESTIMATE.totalMonths} months</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Budget:</span>
              <span className="font-semibold text-yellow-400">{TOTAL_SYSTEM_ESTIMATE.totalBudget}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Team Size:</span>
              <span className="font-semibold">{TOTAL_SYSTEM_ESTIMATE.totalTeamMonths}</span>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400">Annual Savings:</span>
                <span className="font-semibold text-green-400">{TOTAL_SYSTEM_ESTIMATE.annualSavings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Payback Period:</span>
                <span className="font-semibold">{TOTAL_SYSTEM_ESTIMATE.paybackPeriod}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROI */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-lg font-bold mb-4">📈 Return on Investment</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-slate-400 mb-1">Year 1 ROI</div>
              <div className="text-3xl font-bold text-green-400">{TOTAL_SYSTEM_ESTIMATE.roi.year1}</div>
              <div className="text-xs text-slate-500 mt-1">Breakeven achieved</div>
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-1">Year 3 ROI</div>
              <div className="text-3xl font-bold text-green-400">{TOTAL_SYSTEM_ESTIMATE.roi.year3}</div>
              <div className="text-xs text-slate-500 mt-1">Full system optimization</div>
            </div>
          </div>
        </div>
      </div>

      {/* Annual Metrics */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-lg font-bold">📊 Annual Metrics Progression</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">Year</th>
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">Cycle Time</th>
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">Quality</th>
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">Cost</th>
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">Compliance</th>
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">Team Size</th>
                <th className="px-6 py-3 text-left text-slate-400 font-semibold">ROI</th>
              </tr>
            </thead>
            <tbody>
              {ANNUAL_METRICS.map((metric, idx) => (
                <tr key={idx} className={idx === 0 ? '' : 'border-t border-slate-800'}>
                  <td className="px-6 py-3 text-slate-300 font-semibold">Year {metric.year}</td>
                  <td className="px-6 py-3 text-slate-300">{metric.cycleTime}</td>
                  <td className="px-6 py-3 text-slate-300">{metric.quality}</td>
                  <td className="px-6 py-3 text-slate-300">{metric.cost}</td>
                  <td className="px-6 py-3 text-slate-300">{metric.compliance}</td>
                  <td className="px-6 py-3 text-slate-300">{metric.teamSize}</td>
                  <td className="px-6 py-3 text-green-400 font-semibold">{metric.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MaturityView() {
  return (
    <div className="space-y-6">
      {MATURITY_LEVELS.map((level, idx) => (
        <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-lg font-bold">
                  {level.level}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{level.name}</h3>
                  <p className="text-sm text-slate-400">{level.description}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400 mb-1">Time to Reach:</div>
              <div className="text-sm font-semibold text-blue-400">{level.timeToReach}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-300 mb-3">Characteristics</h4>
              <ul className="space-y-2">
                {level.characteristics.map((char, cidx) => (
                  <li key={cidx} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-300 mb-3">Key Metrics</h4>
              <ul className="space-y-2">
                {level.keyMetrics.map((metric, midx) => (
                  <li key={midx} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-slate-500 mt-1">◆</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AgentsView({ filter, setFilter }: { filter: 'all' | 'sdlc' | 'togaf' | 'enterprise'; setFilter: (f: 'all' | 'sdlc' | 'togaf' | 'enterprise') => void }) {
  const sdlcAgents = ENTERPRISE_OS_ROADMAP.slice(0, 6).flatMap(p => p.agents.filter(a => a.category === 'SDLC'));
  const togafAgents = ENTERPRISE_OS_ROADMAP.slice(6).flatMap(p => p.agents.filter(a => a.category === 'TOGAF'));

  // Enterprise agents data
  const enterpriseAgents = [
    // Executive (7)
    { name: 'Chief Executive Officer', id: 'ceo', category: 'Enterprise' as const, type: 'Executive' },
    { name: 'Chief Financial Officer', id: 'cfo', category: 'Enterprise' as const, type: 'Executive' },
    { name: 'Chief Operating Officer', id: 'coo', category: 'Enterprise' as const, type: 'Executive' },
    { name: 'Chief Technology Officer', id: 'cto', category: 'Enterprise' as const, type: 'Executive' },
    { name: 'Chief Human Resources Officer', id: 'chro', category: 'Enterprise' as const, type: 'Executive' },
    { name: 'Chief Risk Officer', id: 'cro', category: 'Enterprise' as const, type: 'Executive' },
    { name: 'Chief Marketing Officer', id: 'cmo', category: 'Enterprise' as const, type: 'Executive' },
    // Business Operations (8)
    { name: 'Business Process Management', id: 'bpm', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Customer Success & Revenue', id: 'csr', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Product Management', id: 'pm', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Sales Architecture', id: 'sa', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Procurement & Vendor Management', id: 'pvm', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Quality & Compliance', id: 'qc', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Innovation & R&D', id: 'ir', category: 'Enterprise' as const, type: 'Operations' },
    { name: 'Sustainability & ESG', id: 'esg', category: 'Enterprise' as const, type: 'Operations' },
    // Management (6)
    { name: 'Change Management', id: 'cm', category: 'Enterprise' as const, type: 'Management' },
    { name: 'Organizational Design', id: 'od', category: 'Enterprise' as const, type: 'Management' },
    { name: 'Performance Management', id: 'perf', category: 'Enterprise' as const, type: 'Management' },
    { name: 'Knowledge Management', id: 'km', category: 'Enterprise' as const, type: 'Management' },
    { name: 'Project & Program Management', id: 'ppm', category: 'Enterprise' as const, type: 'Management' },
    { name: 'Stakeholder Management', id: 'sm', category: 'Enterprise' as const, type: 'Management' },
    // Strategy (6)
    { name: 'Competitive Intelligence', id: 'ci', category: 'Enterprise' as const, type: 'Strategy' },
    { name: 'Business Model Innovation', id: 'bmi', category: 'Enterprise' as const, type: 'Strategy' },
    { name: 'Mergers & Acquisitions', id: 'ma', category: 'Enterprise' as const, type: 'Strategy' },
    { name: 'Ecosystem & Partnership', id: 'ep', category: 'Enterprise' as const, type: 'Strategy' },
    { name: 'Digital Business Transformation', id: 'dbt', category: 'Enterprise' as const, type: 'Strategy' },
    { name: 'Customer Experience Transformation', id: 'cxt', category: 'Enterprise' as const, type: 'Strategy' },
    // Technical (41)
    { name: 'API Architecture', id: 'api-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Data Architecture', id: 'data-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Integration Architecture', id: 'int-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Microservices Architecture', id: 'ms-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Event-Driven Architecture', id: 'eda-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Container Architecture', id: 'cont-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Serverless Architecture', id: 'sl-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Enterprise Search & Discovery', id: 'search', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Cloud Architecture & Strategy', id: 'cloud', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Infrastructure & Platform Engineering', id: 'infra', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Network & Security Infrastructure', id: 'net-sec', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Disaster Recovery & BC', id: 'dr', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Cost Optimization & FinOps', id: 'finops', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Data Strategy & Governance', id: 'data-strat', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Analytics & BI', id: 'analytics', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Machine Learning & AI', id: 'ml-ai', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Data Engineering & Pipelines', id: 'data-eng', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Knowledge Graph & Semantics', id: 'kg', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Big Data & Streaming', id: 'bigdata', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Data Quality & Master Data', id: 'dq', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Privacy & Data Protection', id: 'privacy', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'AI Ethics & Governance', id: 'ai-ethics', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Observability & Monitoring', id: 'obs', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Site Reliability Engineering', id: 'sre', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'DevOps & Continuous Delivery', id: 'devops', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Log Analytics & Troubleshooting', id: 'logs', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Performance & Optimization', id: 'perf-opt', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Incident & Problem Management', id: 'incident', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Architecture Governance', id: 'arch-gov', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Security Architecture & DevSecOps', id: 'sec-arch', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Regulatory Compliance & Risk', id: 'compliance', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Audit & Assurance', id: 'audit', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'IT Service Management', id: 'itsm', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Customer Journey & Experience', id: 'cjx', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'User Experience & Design', id: 'ux', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Accessibility & Inclusive Design', id: 'a11y', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Enterprise Application Integration', id: 'eai', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'API Management & Marketplace', id: 'api-mgmt', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'EDI & B2B Integration', id: 'edi', category: 'Enterprise' as const, type: 'Technical' },
    { name: 'Master Data Management', id: 'mdm', category: 'Enterprise' as const, type: 'Technical' },
  ];

  let displayAgents: any[] = [];
  if (filter === 'sdlc') {
    displayAgents = sdlcAgents;
  } else if (filter === 'togaf') {
    displayAgents = togafAgents;
  } else if (filter === 'enterprise') {
    displayAgents = enterpriseAgents;
  } else {
    displayAgents = [...sdlcAgents, ...togafAgents, ...enterpriseAgents];
  }

  const categoryCount = {
    sdlc: sdlcAgents.length,
    togaf: togafAgents.length,
    enterprise: enterpriseAgents.length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-2xl font-bold text-cyan-400">{displayAgents.length}</div>
          <div className="text-sm text-slate-400 mt-1">Agents Displayed</div>
        </div>
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-2xl font-bold text-blue-400">{categoryCount.sdlc}</div>
          <div className="text-sm text-slate-400 mt-1">SDLC Agents</div>
        </div>
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-2xl font-bold text-purple-400">{categoryCount.togaf}</div>
          <div className="text-sm text-slate-400 mt-1">TOGAF Agents</div>
        </div>
        <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
          <div className="text-2xl font-bold text-green-400">{categoryCount.enterprise}</div>
          <div className="text-sm text-slate-400 mt-1">Enterprise Agents</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          All (114)
        </button>
        <button
          onClick={() => setFilter('sdlc')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'sdlc' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          SDLC ({categoryCount.sdlc})
        </button>
        <button
          onClick={() => setFilter('togaf')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'togaf' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          TOGAF ({categoryCount.togaf})
        </button>
        <button
          onClick={() => setFilter('enterprise')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'enterprise' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Enterprise ({categoryCount.enterprise})
        </button>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayAgents.map((agent, idx) => {
          const categoryBgColor = {
            SDLC: 'bg-blue-900/40 border-blue-800',
            TOGAF: 'bg-purple-900/40 border-purple-800',
            Enterprise: 'bg-green-900/40 border-green-800',
          };

          const categoryTextColor = {
            SDLC: 'text-blue-300',
            TOGAF: 'text-purple-300',
            Enterprise: 'text-green-300',
          };

          const category = agent.category === 'SDLC' ? 'SDLC' : agent.category === 'TOGAF' ? 'TOGAF' : 'Enterprise';

          return (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${categoryBgColor[category]}`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-bold text-white flex-1 pr-2">{agent.name}</h3>
                <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${categoryTextColor[category]}`}>
                  {category}
                </span>
              </div>
              {agent.autonomyLevel && (
                <div className="text-xs text-slate-400 mb-2">
                  Autonomy: <span className="text-slate-300 font-semibold">{agent.autonomyLevel}</span>
                </div>
              )}
              {agent.type && (
                <div className="text-xs text-slate-400">
                  Type: <span className="text-slate-300 font-semibold">{agent.type}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
