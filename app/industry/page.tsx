'use client';

import { useState, useEffect } from 'react';
import BusinessModelCanvas from '@/components/BusinessModelCanvas';
import {
  INDUSTRY_SECTORS,
  searchIndustries,
  type IndustrySector,
  type IndustryDomain,
  type ExternalFactor,
  type Trend,
  type DynamicIndustryAnalysis,
  type BusinessModelCanvas as BMC,
} from '@/lib/industry';

export default function IndustryPage() {
  const [query, setQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<IndustrySector | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<IndustryDomain | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'forces' | 'trends' | 'scenarios' | 'risks' | 'capabilities' | 'competitors' | 'roadmap' | 'canvas' | 'export'>('overview');
  const [filteredSectors, setFilteredSectors] = useState<IndustrySector[]>(INDUSTRY_SECTORS);
  const [dynamicAnalysis, setDynamicAnalysis] = useState<DynamicIndustryAnalysis | null>(null);
  const [customQuery, setCustomQuery] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatingText, setGeneratingText] = useState('');

  useEffect(() => {
    if (query.trim()) {
      const results = searchIndustries(query);
      setFilteredSectors(results.length > 0 ? results : INDUSTRY_SECTORS);
      if (results.length > 0 && !selectedSector) {
        setSelectedSector(results[0]);
        setSelectedDomain(results[0].domains[0] || null);
      }
    } else {
      setFilteredSectors(INDUSTRY_SECTORS);
      if (!selectedSector) {
        setSelectedSector(INDUSTRY_SECTORS[0]);
        setSelectedDomain(INDUSTRY_SECTORS[0].domains[0] || null);
      }
    }
  }, [query]);

  const generateDynamicAnalysis = async () => {
    if (!customQuery.trim()) return;

    setGenerating(true);
    setGeneratingText('');
    setActiveTab('overview');

    try {
      const response = await fetch('/api/industry/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: customQuery }),
      });

      const reader = response.body?.getReader();
      if (!reader) return;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        const lines = text.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === 'content_token') {
                setGeneratingText(prev => prev + data.token);
              } else if (data.type === 'complete' && data.data) {
                setDynamicAnalysis(data.data);
                setGeneratingText('');
              }
            } catch (e) {
              // Ignore parse errors
            }
          }
        }
      }
    } catch (error) {
      console.error('Failed to generate analysis:', error);
      setGeneratingText('');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-800/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏢</span>
            <div>
              <h1 className="text-3xl font-bold">Industry Intelligence</h1>
              <p className="text-slate-400">External forces, trends, disruptions & strategic initiatives</p>
            </div>
          </div>

          {/* Two Input Options */}
          <div className="space-y-3">
            {/* Option 1: Search */}
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-2 block">📚 Browse Pre-Built Industries</label>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search sectors or domains... (e.g., 'banking', '5G', 'autonomous vehicles')"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              />
            </div>

            {/* Option 2: Custom Query */}
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-2 block">✨ Generate Custom Industry Analysis (AI-Powered)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customQuery}
                  onChange={e => setCustomQuery(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && generateDynamicAnalysis()}
                  placeholder="Enter any industry, business idea, or domain... (e.g., 'sustainable fashion retail', 'AI-powered healthcare', 'quantum computing')"
                  className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  disabled={generating}
                />
                <button
                  onClick={generateDynamicAnalysis}
                  disabled={generating || !customQuery.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                >
                  {generating ? (
                    <>
                      <span className="animate-spin">⚙️</span>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <span>✨</span>
                      Generate
                    </>
                  )}
                </button>
              </div>
              {generatingText && (
                <div className="mt-2 text-xs text-blue-400 p-3 bg-blue-500/10 rounded border border-blue-500/20 max-h-24 overflow-y-auto">
                  {generatingText}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-6 p-6">
          {/* Left Sidebar: Sectors & Domains */}
          <aside className="col-span-1">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden sticky top-6">
              <div className="p-4 border-b border-slate-700">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sectors</p>
              </div>
              <div className="overflow-y-auto max-h-96">
                {filteredSectors.map(sector => (
                  <button
                    key={sector.id}
                    onClick={() => {
                      setSelectedSector(sector);
                      setSelectedDomain(sector.domains[0] || null);
                      setActiveTab('overview');
                    }}
                    className={`w-full text-left px-4 py-3 text-sm border-b border-slate-700 transition-colors flex items-center gap-2 ${
                      selectedSector?.id === sector.id
                        ? 'bg-orange-500/20 text-orange-300'
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
                    }`}
                  >
                    <span className="text-lg">{sector.icon}</span>
                    <span className="flex-1 truncate">{sector.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {selectedSector && selectedSector.domains.length > 0 && (
                <>
                  <div className="p-4 border-b border-slate-700 bg-slate-900/50">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Domains</p>
                  </div>
                  <div className="overflow-y-auto max-h-96">
                    {selectedSector.domains.map(domain => (
                      <button
                        key={domain.id}
                        onClick={() => {
                          setSelectedDomain(domain);
                          setActiveTab('overview');
                        }}
                        className={`w-full text-left px-4 py-2 text-xs border-b border-slate-700 transition-colors ${
                          selectedDomain?.id === domain.id
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'text-slate-500 hover:text-slate-400 hover:bg-slate-700/30'
                        }`}
                      >
                        {domain.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="col-span-3">
            {dynamicAnalysis || selectedDomain ? (
              <>
                {/* Domain/Analysis Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {dynamicAnalysis ? dynamicAnalysis.industry : selectedDomain?.name}
                  </h2>
                  {dynamicAnalysis && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">AI-Generated Analysis</span>
                      <button
                        onClick={() => setDynamicAnalysis(null)}
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        ✕ Clear
                      </button>
                    </div>
                  )}
                  <p className="text-slate-400 text-sm">
                    {dynamicAnalysis ? 'Custom AI-generated industry intelligence' : selectedDomain?.description}
                  </p>
                </div>

                {/* Tab Bar */}
                <div className="mb-6 border-b border-slate-700 overflow-x-auto">
                  <div className="flex gap-2">
                    {[
                      { id: 'overview', label: '📋 Overview' },
                      { id: 'canvas', label: '🎨 Canvas' },
                      { id: 'forces', label: '🌍 Forces' },
                      { id: 'trends', label: '📈 Trends' },
                      { id: 'scenarios', label: '🎯 Scenarios' },
                      { id: 'risks', label: '⚠️ Risks' },
                      { id: 'capabilities', label: '💡 Capabilities' },
                      { id: 'competitors', label: '🏆 Competitors' },
                      { id: 'roadmap', label: '🗺️ Roadmap' },
                      { id: 'export', label: '📥 Export' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-orange-400 border-b-2 border-orange-500'
                            : 'text-slate-500 hover:text-slate-300 border-b-2 border-transparent'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
                  {activeTab === 'overview' && (dynamicAnalysis ? <OverviewTabDynamic data={dynamicAnalysis} /> : <OverviewTab domain={selectedDomain!} />)}
                  {activeTab === 'canvas' && (dynamicAnalysis ? <BusinessModelCanvas canvas={dynamicAnalysis.businessModel} /> : selectedDomain ? <BusinessModelCanvasPlaceholder /> : null)}
                  {activeTab === 'forces' && (dynamicAnalysis ? <ForcesTabDynamic forces={dynamicAnalysis.externalForces} /> : <ForcesTab domain={selectedDomain!} />)}
                  {activeTab === 'trends' && (dynamicAnalysis ? <TrendsTabDynamic trends={dynamicAnalysis.trends} /> : <TrendsTab domain={selectedDomain!} />)}
                  {activeTab === 'scenarios' && <ScenariosTab domain={selectedDomain!} />}
                  {activeTab === 'risks' && <RisksTab domain={selectedDomain!} />}
                  {activeTab === 'capabilities' && <CapabilitiesTab domain={selectedDomain!} />}
                  {activeTab === 'competitors' && <CompetitorsTab domain={selectedDomain!} />}
                  {activeTab === 'roadmap' && <RoadmapTab domain={selectedDomain!} />}
                  {activeTab === 'export' && <ExportTab domain={selectedDomain!} />}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500">Select a domain to view industry intelligence</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function OverviewTab({ domain }: { domain: IndustryDomain }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-3">Business Models</h3>
        <div className="grid grid-cols-2 gap-4">
          {domain.businessModels.map((model, i) => (
            <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">{model.name}</h4>
              <p className="text-xs text-slate-400 mb-3">{model.description}</p>
              <div className="mb-3">
                <p className="text-[10px] text-slate-500 font-semibold mb-1">Examples:</p>
                <p className="text-xs text-slate-400">{model.examples.join(', ')}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-semibold mb-1">Key Activities:</p>
                <div className="flex flex-wrap gap-1">
                  {model.keyActivities.map((activity, j) => (
                    <span key={j} className="text-[9px] bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Key Characteristics</h3>
        <ul className="space-y-2">
          {domain.keyCharacteristics.map((char, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-blue-400 mt-0.5">▸</span>
              {char}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ForcesTab({ domain }: { domain: IndustryDomain }) {
  return (
    <div className="space-y-4">
      {Object.entries(domain.externalForces).map(([category, factors]) => {
        if (!factors || factors.length === 0) return null;
        return (
          <div key={category}>
            <h4 className="text-sm font-bold text-orange-400 mb-2 capitalize">{category}</h4>
            <div className="space-y-2">
              {factors.map((factor: ExternalFactor, i: number) => (
                <div key={i} className="bg-slate-700/30 border border-slate-600 rounded p-3">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-semibold text-slate-200 text-sm">{factor.name}</h5>
                    <span className={`text-xs font-semibold ${
                      factor.impact === 'high' ? 'text-red-400' :
                      factor.impact === 'medium' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {factor.impact.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{factor.description}</p>
                  {factor.implications && (
                    <ul className="text-xs text-slate-500 space-y-0.5">
                      {factor.implications.map((imp, j) => (
                        <li key={j}>• {imp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TrendsTab({ domain }: { domain: IndustryDomain }) {
  return (
    <div className="space-y-4">
      {domain.trends && domain.trends.length > 0 ? (
        domain.trends.map((trend: Trend, i: number) => (
          <div key={i} className="bg-slate-700/30 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-blue-400">{trend.name}</h4>
              <span className="text-xs text-slate-400">{trend.horizon}</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">{trend.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] font-semibold text-emerald-400 mb-1">Opportunities</p>
                <ul className="text-[10px] text-slate-400 space-y-0.5">
                  {trend.opportunities.map((opp, j) => (
                    <li key={j}>• {opp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-red-400 mb-1">Threats</p>
                <ul className="text-[10px] text-slate-400 space-y-0.5">
                  {trend.threats.map((threat, j) => (
                    <li key={j}>• {threat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-slate-500 text-sm">No trend data available</p>
      )}
    </div>
  );
}

function ScenariosTab({ domain }: { domain: IndustryDomain }) {
  const scenarios = [
    {
      name: 'Best Case',
      description: 'Favorable market conditions and successful execution',
      probability: 'medium',
      actions: ['Accelerate investment in growth initiatives', 'Expand market share aggressively', 'Build premium offerings']
    },
    {
      name: 'Base Case',
      description: 'Expected market evolution with mixed challenges and opportunities',
      probability: 'high',
      actions: ['Balance investment and profitability', 'Continue current strategic direction', 'Monitor external forces']
    },
    {
      name: 'Stress Case',
      description: 'Severe disruption or negative external shock',
      probability: 'medium',
      actions: ['Reduce costs and improve efficiency', 'Focus on core competencies', 'Prepare contingency plans']
    }
  ];

  return (
    <div className="space-y-4">
      {scenarios.map((scenario, i) => (
        <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-slate-200">{scenario.name}</h4>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${
              scenario.probability === 'high' ? 'bg-green-500/20 text-green-400' :
              scenario.probability === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {scenario.probability}
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-3">{scenario.description}</p>
          <div>
            <p className="text-[10px] font-semibold text-slate-300 mb-1">Strategic Actions:</p>
            <ul className="text-xs text-slate-400 space-y-0.5">
              {scenario.actions.map((action, j) => (
                <li key={j}>• {action}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function RisksTab({ domain }: { domain: IndustryDomain }) {
  const risks = [
    { name: 'Regulatory Risk', impact: 4, likelihood: 3, mitigation: 'Monitor regulatory changes, build compliance capabilities' },
    { name: 'Technology Risk', impact: 5, likelihood: 4, mitigation: 'Invest in R&D, build partnerships with tech leaders' },
    { name: 'Market Risk', impact: 3, likelihood: 3, mitigation: 'Diversify offerings, understand customer needs' },
    { name: 'Operational Risk', impact: 3, likelihood: 2, mitigation: 'Strengthen processes, invest in automation' }
  ];

  return (
    <div>
      <div className="mb-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
        <p className="text-xs text-amber-300">Risk Impact vs Likelihood Matrix</p>
      </div>
      <div className="space-y-3">
        {risks.map((risk, i) => {
          const severity = risk.impact * risk.likelihood;
          let color = severity > 12 ? 'bg-red-500/20 border-red-500/30' : severity > 6 ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-green-500/20 border-green-500/30';
          return (
            <div key={i} className={`${color} border rounded-lg p-3`}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-slate-200 text-sm">{risk.name}</h4>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">Impact: {risk.impact}/5 | Likelihood: {risk.likelihood}/5</div>
                  <div className="text-xs font-bold text-slate-300">Score: {severity}/25</div>
                </div>
              </div>
              <p className="text-xs text-slate-400">Mitigation: {risk.mitigation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CapabilitiesTab({ domain }: { domain: IndustryDomain }) {
  const capabilities = [
    { name: 'Digital Infrastructure', current: 2, required: 5 },
    { name: 'AI & Data Analytics', current: 1, required: 4 },
    { name: 'Organizational Agility', current: 2, required: 4 },
    { name: 'Customer Intelligence', current: 3, required: 4 },
    { name: 'Cybersecurity', current: 2, required: 5 },
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-xs text-blue-300">Capability Maturity Assessment (1=Nascent, 5=Leading)</p>
      </div>
      {capabilities.map((cap, i) => {
        const gap = cap.required - cap.current;
        return (
          <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-200 text-sm">{cap.name}</h4>
              <span className="text-xs text-slate-400">Gap: {gap} levels</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 mb-1">Current: {cap.current}/5</p>
                <div className="w-full bg-slate-600 rounded h-2">
                  <div className="bg-blue-500 h-full rounded" style={{ width: `${(cap.current / 5) * 100}%` }} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 mb-1">Required: {cap.required}/5</p>
                <div className="w-full bg-slate-600 rounded h-2">
                  <div className="bg-orange-500 h-full rounded" style={{ width: `${(cap.required / 5) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CompetitorsTab({ domain }: { domain: IndustryDomain }) {
  const competitors = [
    {
      name: 'Market Leader',
      strengths: ['Scale', 'Brand recognition', 'Financial resources'],
      weaknesses: ['Legacy systems', 'Slow to innovate'],
      focus: ['Market dominance', 'Customer retention']
    },
    {
      name: 'Agile Competitor',
      strengths: ['Innovation speed', 'Technology adoption', 'Flexibility'],
      weaknesses: ['Limited scale', 'Resource constraints'],
      focus: ['Niche domination', 'Technology leadership']
    },
    {
      name: 'New Entrant',
      strengths: ['Fresh perspective', 'Disruptive model', 'Modern tech'],
      weaknesses: ['No track record', 'Limited resources', 'Scale challenges'],
      focus: ['Market disruption', 'Customer acquisition']
    }
  ];

  return (
    <div className="space-y-4">
      {competitors.map((comp, i) => (
        <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <h4 className="font-semibold text-slate-200 mb-3">{comp.name}</h4>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-[10px] font-semibold text-emerald-400 mb-1">Strengths</p>
              <ul className="text-xs text-slate-400 space-y-0.5">
                {comp.strengths.map((s, j) => (
                  <li key={j}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-red-400 mb-1">Weaknesses</p>
              <ul className="text-xs text-slate-400 space-y-0.5">
                {comp.weaknesses.map((w, j) => (
                  <li key={j}>• {w}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-blue-400 mb-1">Focus</p>
              <ul className="text-xs text-slate-400 space-y-0.5">
                {comp.focus.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RoadmapTab({ domain }: { domain: IndustryDomain }) {
  const phases = [
    {
      phase: 1,
      name: 'Foundation (Months 1-6)',
      initiatives: ['Build capability assessment', 'Establish governance', 'Quick wins'],
      milestones: ['Board approval', '30% efficiency gain', 'Team alignment']
    },
    {
      phase: 2,
      name: 'Acceleration (Months 7-18)',
      initiatives: ['Scale pilot programs', 'Build new capabilities', 'Partner ecosystem'],
      milestones: ['30% revenue growth', '50% cost reduction', 'Market launch']
    },
    {
      phase: 3,
      name: 'Optimization (Months 19-36)',
      initiatives: ['Market dominance', 'Continuous innovation', 'Ecosystem leadership'],
      milestones: ['#1 market position', 'Sustainable growth', 'Industry recognition']
    }
  ];

  return (
    <div className="space-y-4">
      {phases.map((phase, i) => (
        <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500/20 border border-orange-500/30">
                <span className="text-xs font-bold text-orange-400">{phase.phase}</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-200 mb-2">{phase.name}</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 mb-1">Initiatives</p>
                  <ul className="text-xs text-slate-400 space-y-0.5">
                    {phase.initiatives.map((init, j) => (
                      <li key={j}>• {init}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 mb-1">Milestones</p>
                  <ul className="text-xs text-slate-400 space-y-0.5">
                    {phase.milestones.map((milestone, j) => (
                      <li key={j}>• {milestone}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BusinessModelCanvasPlaceholder() {
  return (
    <div className="text-center py-12">
      <p className="text-slate-500 text-sm">Business Model Canvas not available for this domain</p>
      <p className="text-slate-600 text-xs mt-2">Use AI-generated analysis to see the Business Canvas</p>
    </div>
  );
}

function OverviewTabDynamic({ data }: { data: DynamicIndustryAnalysis }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-3">Industry Overview</h3>
        <p className="text-sm text-slate-300 mb-4">{data.industry}</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Strategic Implications</h3>
        <div className="space-y-3">
          {data.strategicImplications.map((impl, i) => (
            <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-lg p-3">
              <h4 className="font-semibold text-orange-400 mb-1 text-sm">{impl.title}</h4>
              <p className="text-xs text-slate-400">{impl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ForcesTabDynamic({ forces }: { forces: any }) {
  return (
    <div className="space-y-4">
      {Object.entries(forces).map(([category, items]: [string, any]) => {
        if (!items || items.length === 0) return null;
        return (
          <div key={category}>
            <h4 className="text-sm font-bold text-orange-400 mb-2 capitalize">{category}</h4>
            <div className="space-y-2">
              {items.map((item: any, i: number) => (
                <div key={i} className="bg-slate-700/30 border border-slate-600 rounded p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-slate-200 text-sm">{item.name}</h5>
                    <span className={`text-xs font-semibold ${
                      item.impact === 'high' ? 'text-red-400' : item.impact === 'medium' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {item.impact?.toUpperCase() || 'MEDIUM'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TrendsTabDynamic({ trends }: { trends: Trend[] }) {
  return (
    <div className="space-y-4">
      {trends && trends.length > 0 ? (
        trends.map((trend, i) => (
          <div key={i} className="bg-slate-700/30 border border-blue-500/30 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-blue-400">{trend.name}</h4>
              <span className="text-xs text-slate-400">{trend.horizon}</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">{trend.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] font-semibold text-emerald-400 mb-1">Opportunities</p>
                <ul className="text-[10px] text-slate-400 space-y-0.5">
                  {trend.opportunities.map((opp, j) => (
                    <li key={j}>• {opp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-red-400 mb-1">Threats</p>
                <ul className="text-[10px] text-slate-400 space-y-0.5">
                  {trend.threats.map((threat, j) => (
                    <li key={j}>• {threat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-slate-500 text-sm">No trend data available</p>
      )}
    </div>
  );
}

function ExportTab({ domain }: { domain: IndustryDomain }) {
  const handleExport = (format: 'pdf' | 'json' | 'markdown') => {
    // Placeholder for export functionality
    alert(`Export to ${format.toUpperCase()} - Coming soon`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-4">Export Analysis</h3>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleExport('pdf')}
            className="bg-gradient-to-br from-red-500/20 to-red-500/10 border border-red-500/30 rounded-lg p-4 hover:border-red-500/50 transition-colors"
          >
            <p className="text-2xl mb-2">📄</p>
            <p className="font-semibold text-slate-200">PDF Report</p>
            <p className="text-xs text-slate-400 mt-2">Complete analysis with charts</p>
          </button>
          <button
            onClick={() => handleExport('json')}
            className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/30 rounded-lg p-4 hover:border-blue-500/50 transition-colors"
          >
            <p className="text-2xl mb-2">💾</p>
            <p className="font-semibold text-slate-200">JSON Data</p>
            <p className="text-xs text-slate-400 mt-2">Structured data export</p>
          </button>
          <button
            onClick={() => handleExport('markdown')}
            className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
          >
            <p className="text-2xl mb-2">📝</p>
            <p className="font-semibold text-slate-200">Markdown</p>
            <p className="text-xs text-slate-400 mt-2">Shareable document</p>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Share Analysis</h3>
        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-3">Copy this URL to share with team members:</p>
          <div className="bg-slate-700/50 rounded px-3 py-2 text-xs text-slate-300 break-all">
            {`${typeof window !== 'undefined' ? window.location.origin : ''}/industry?sector=${domain.id}`}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">AI-Powered Insights</h3>
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
          <span>✨</span>
          Generate Strategic Recommendations
        </button>
        <p className="text-xs text-slate-400 mt-2">AI agent will analyze all data and provide personalized recommendations</p>
      </div>
    </div>
  );
}
