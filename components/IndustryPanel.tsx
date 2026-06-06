'use client';

import { useState, useEffect } from 'react';
import {
  INDUSTRY_SECTORS,
  searchIndustries,
  getIndustryDomain,
  type IndustrySector,
  type IndustryDomain,
  type KnowledgeGraph
} from '@/lib/industry';

interface IndustryPanelProps {
  query: string;
}

export default function IndustryPanel({ query }: IndustryPanelProps) {
  const [selectedSector, setSelectedSector] = useState<IndustrySector | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<IndustryDomain | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'ontology' | 'knowledge-graph'>('overview');
  const [filteredSectors, setFilteredSectors] = useState<IndustrySector[]>(INDUSTRY_SECTORS);

  // Update filtered sectors based on query
  useEffect(() => {
    if (query.trim()) {
      const results = searchIndustries(query);
      setFilteredSectors(results.length > 0 ? results : INDUSTRY_SECTORS);
      // Auto-select first sector if search changes
      if (results.length > 0 && results[0] !== selectedSector) {
        setSelectedSector(results[0]);
        setSelectedDomain(results[0].domains[0] || null);
      }
    } else {
      setFilteredSectors(INDUSTRY_SECTORS);
    }
  }, [query]);

  // Initialize on first render
  useEffect(() => {
    if (!selectedSector && filteredSectors.length > 0) {
      setSelectedSector(filteredSectors[0]);
      setSelectedDomain(filteredSectors[0].domains[0] || null);
    }
  }, []);

  if (!selectedSector) {
    return (
      <div className="h-full flex items-center justify-center text-slate-500">
        <p>No industries found matching your query</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-800 p-4 flex-shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{selectedSector.icon}</span>
          <div>
            <h2 className="text-lg font-bold text-white">{selectedSector.name}</h2>
            <p className="text-xs text-slate-500">{selectedSector.description}</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden flex gap-0">
        {/* Left sidebar: Sectors & Domains */}
        <aside className="w-56 border-r border-slate-800 overflow-y-auto flex-shrink-0">
          <div className="p-3 space-y-4">
            {/* Sectors */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Industries</p>
              <div className="space-y-1">
                {filteredSectors.map(sector => (
                  <button
                    key={sector.id}
                    onClick={() => {
                      setSelectedSector(sector);
                      setSelectedDomain(sector.domains[0] || null);
                      setActiveTab('overview');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedSector.id === sector.id
                        ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
                    }`}
                  >
                    <span className="mr-2">{sector.icon}</span>
                    {sector.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Domains */}
            {selectedSector.domains.length > 0 && (
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Domains</p>
                <div className="space-y-1">
                  {selectedSector.domains.map(domain => (
                    <button
                      key={domain.id}
                      onClick={() => {
                        setSelectedDomain(domain);
                        setActiveTab('overview');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                        selectedDomain?.id === domain.id
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'text-slate-500 hover:text-slate-400 hover:bg-slate-700/30'
                      }`}
                    >
                      {domain.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right content: Domain Details */}
        <main className="flex-1 overflow-hidden flex flex-col">
          {selectedDomain ? (
            <>
              {/* Tab bar */}
              <div className="border-b border-slate-800 flex items-center gap-1 px-4 h-9 flex-shrink-0">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`text-xs px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('ontology')}
                  className={`text-xs px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'ontology'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Ontology
                </button>
                <button
                  onClick={() => setActiveTab('knowledge-graph')}
                  className={`text-xs px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'knowledge-graph'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Knowledge Graph
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {activeTab === 'overview' && (
                  <DomainOverview domain={selectedDomain} />
                )}
                {activeTab === 'ontology' && (
                  <OntologyView ontology={selectedDomain.ontology} />
                )}
                {activeTab === 'knowledge-graph' && (
                  <KnowledgeGraphView graph={selectedDomain.knowledgeGraph} />
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-500">
              <p>Select a domain to view details</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function DomainOverview({ domain }: { domain: IndustryDomain }) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{domain.name}</h3>
        <p className="text-sm text-slate-400">{domain.description}</p>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Key Characteristics</h4>
        <ul className="space-y-2">
          {domain.keyCharacteristics.map((char, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">▸</span>
              <span>{char}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Business Models</h4>
        <div className="space-y-4">
          {domain.businessModels.map((model, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">{model.name}</h5>
              <p className="text-xs text-slate-400 mb-2">{model.description}</p>
              <div className="mb-2">
                <p className="text-[10px] font-semibold text-slate-500 mb-1">Examples:</p>
                <p className="text-xs text-slate-500">{model.examples.join(', ')}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-500 mb-1">Key Activities:</p>
                <div className="flex flex-wrap gap-1">
                  {model.keyActivities.map((activity, j) => (
                    <span key={j} className="text-[10px] bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OntologyView({ ontology }: { ontology: any }) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Entities</h4>
        <div className="space-y-3">
          {ontology.entities.map((entity: any, i: number) => (
            <div key={i} className="bg-slate-800/30 border border-blue-500/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-400 font-semibold">{entity.name}</span>
              </div>
              <p className="text-xs text-slate-400 mb-2">{entity.definition}</p>
              {entity.examples && (
                <div className="flex flex-wrap gap-1">
                  {entity.examples.map((ex: string, j: number) => (
                    <span key={j} className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded">
                      {ex}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Relationships</h4>
        <div className="space-y-2">
          {ontology.relationships.map((rel: any, i: number) => (
            <div key={i} className="text-xs text-slate-400 p-2 bg-slate-800/30 rounded-lg border border-slate-700/30">
              <span className="font-semibold text-slate-300">{rel.source}</span>
              <span className="mx-2 text-slate-600">
                {rel.type} <span className="text-[10px] text-slate-500">({rel.cardinality})</span>
              </span>
              <span className="font-semibold text-slate-300">{rel.target}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Properties</h4>
        <div className="space-y-2">
          {Object.entries(ontology.properties).map(([entity, props]: [string, any]) => (
            <div key={entity} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-3">
              <p className="text-xs font-semibold text-slate-300 mb-2">{entity}</p>
              <div className="flex flex-wrap gap-1">
                {props.map((prop: string, i: number) => (
                  <span key={i} className="text-[10px] bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                    {prop}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KnowledgeGraphView({ graph }: { graph: KnowledgeGraph }) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Clusters</h4>
        <div className="space-y-3">
          {graph.clusters.map((cluster, i) => (
            <div key={i} className="rounded-lg p-3 border" style={{ borderColor: cluster.color + '40', backgroundColor: cluster.color + '10' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cluster.color }} />
                <h5 className="font-semibold text-white">{cluster.name}</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.nodeIds.map(nodeId => {
                  const node = graph.nodes.find(n => n.id === nodeId);
                  return node ? (
                    <span key={nodeId} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                      {node.label}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Nodes ({graph.nodes.length})</h4>
        <div className="grid grid-cols-2 gap-2">
          {graph.nodes.map((node, i) => (
            <div key={i} className="text-xs bg-slate-800/30 border border-slate-700/30 rounded-lg p-2">
              <p className="font-semibold text-slate-300">{node.label}</p>
              <p className="text-[10px] text-slate-500">{node.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-300 mb-3">Relationships ({graph.edges.length})</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {graph.edges.map((edge, i) => {
            const sourceNode = graph.nodes.find(n => n.id === edge.source);
            const targetNode = graph.nodes.find(n => n.id === edge.target);
            return (
              <div key={i} className="text-xs text-slate-400 p-2 bg-slate-800/30 rounded-lg border border-slate-700/30">
                <span className="text-slate-300">{sourceNode?.label}</span>
                <span className="mx-2 text-slate-600">{edge.type}</span>
                <span className="text-slate-300">{targetNode?.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
