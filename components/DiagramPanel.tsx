'use client';

import { useEffect, useRef, useState } from 'react';
import {
  generateContextDiagram,
  generateSequenceDiagram,
  type AgentInvocation,
} from '@/lib/diagrams';

interface Props {
  request: string;
  invocations: AgentInvocation[];
}

export default function DiagramPanel({ request, invocations }: Props) {
  const contextCode  = generateContextDiagram(request, invocations);
  const sequenceCode = generateSequenceDiagram(request, invocations);

  if (invocations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-24 text-center">
        <span className="text-4xl mb-4 text-slate-700">⬡</span>
        <p className="text-slate-500 text-sm">Run an orchestration first — diagrams will appear here.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-10 overflow-y-auto h-full">
      <DiagramView
        title="Context Diagram"
        subtitle={`${invocations.length} agents · System context and data flows`}
        code={contextCode}
        diagramId="context"
      />
      <DiagramView
        title="Sequence Diagram"
        subtitle="Interaction sequence: User → Orchestrator → Agents → Synthesis"
        code={sequenceCode}
        diagramId="sequence"
      />
    </div>
  );
}

// ── Single diagram renderer ───────────────────────────────────────────────────

interface DiagramViewProps {
  title: string;
  subtitle: string;
  code: string;
  diagramId: string;
}

function DiagramView({ title, subtitle, code, diagramId }: DiagramViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg]       = useState('');
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showSource, setShowSource] = useState(false);

  useEffect(() => {
    if (!code) return;
    let cancelled = false;
    setSvg('');
    setError('');
    setLoading(true);

    import('mermaid').then(async (m) => {
      if (cancelled) return;
      try {
        m.default.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            darkMode: true,
            background: '#020617',
            primaryColor: '#1e3a5f',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#334155',
            lineColor: '#64748b',
            secondaryColor: '#1e293b',
            tertiaryColor: '#0f172a',
            edgeLabelBackground: '#1e293b',
            clusterBkg: '#0f172a',
            titleColor: '#f97316',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
            fontSize: '14px',
            nodeTextColor: '#e2e8f0',
            activationBorderColor: '#f97316',
            activationBkgColor: '#1c1917',
            actorBorder: '#475569',
            actorBkg: '#1e293b',
            actorTextColor: '#e2e8f0',
            actorLineColor: '#475569',
            signalColor: '#94a3b8',
            signalTextColor: '#e2e8f0',
            labelBoxBkgColor: '#1e293b',
            labelBoxBorderColor: '#475569',
            labelTextColor: '#e2e8f0',
            loopTextColor: '#e2e8f0',
            noteBorderColor: '#f97316',
            noteBkgColor: '#431407',
            noteTextColor: '#fed7aa',
          },
          flowchart: { curve: 'basis', padding: 20 },
          sequence: {
            actorFontSize: 13,
            messageFontSize: 12,
            noteFontSize: 11,
            diagramMarginX: 20,
            diagramMarginY: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            mirrorActors: false,
            useMaxWidth: true,
          },
        });

        const uid = `mermaid-${diagramId}-${Math.random().toString(36).slice(2)}`;
        const { svg: rendered } = await m.default.render(uid, code);
        if (!cancelled) {
          setSvg(rendered);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(String(err));
          setLoading(false);
        }
      }
    });

    return () => { cancelled = true; };
  }, [code, diagramId]);

  const downloadSvg = () => {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `efm-${diagramId}-diagram.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copySource = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-3 gap-4">
        <div>
          <h3 className="text-sm font-bold text-white">{title}</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={copySource}
            className="px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-400 text-[11px] rounded-lg transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Mermaid'}
          </button>
          {svg && (
            <button
              onClick={downloadSvg}
              className="px-2.5 py-1.5 bg-orange-700/70 hover:bg-orange-600 text-white text-[11px] rounded-lg transition-colors"
            >
              Download SVG
            </button>
          )}
        </div>
      </div>

      {/* Diagram canvas */}
      <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl overflow-auto min-h-48">
        {loading && !error && (
          <div className="flex items-center gap-2 text-slate-500 text-xs p-6">
            <span className="animate-spin">⟳</span> Rendering diagram…
          </div>
        )}

        {error && (
          <div className="p-4">
            <p className="text-xs text-red-400 mb-2">Render error — showing source instead:</p>
            <pre className="text-[10px] text-slate-400 whitespace-pre-wrap">{code}</pre>
          </div>
        )}

        {svg && !error && (
          <div
            ref={containerRef}
            dangerouslySetInnerHTML={{ __html: svg }}
            className="flex justify-center p-4 [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:min-w-0"
          />
        )}
      </div>

      {/* Collapsible source */}
      <div className="mt-2">
        <button
          onClick={() => setShowSource(s => !s)}
          className="text-[10px] text-slate-700 hover:text-slate-500 transition-colors"
        >
          {showSource ? '▼' : '▶'} Mermaid source
        </button>
        {showSource && (
          <pre className="mt-1.5 p-3 bg-slate-900 border border-slate-800 rounded-lg text-[10px] text-slate-500 overflow-x-auto leading-relaxed">
            {code}
          </pre>
        )}
      </div>
    </div>
  );
}
