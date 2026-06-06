'use client';

import { BusinessModelCanvas as BMC } from '@/lib/industry';

interface BusinessModelCanvasProps {
  canvas: BMC;
}

export default function BusinessModelCanvas({ canvas }: BusinessModelCanvasProps) {
  const Section = ({ title, items, color }: { title: string; items: string[]; color: string }) => (
    <div className={`${color} border rounded-lg p-4 h-48 overflow-y-auto`}>
      <h4 className="text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-slate-400 leading-relaxed">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-blue-300">Business Model Canvas - 9 Building Blocks</p>
        <p className="text-xs text-slate-400 mt-1">Visualize how your business creates, delivers, and captures value</p>
      </div>

      {/* Canvas Layout */}
      <div className="grid grid-cols-5 gap-3">
        {/* Left Column: Partners and Activities */}
        <div className="col-span-1 space-y-3">
          <Section title="Key Partners" items={canvas.keyPartners} color="bg-slate-700/20 border-slate-600" />
          <Section title="Key Activities" items={canvas.keyActivities} color="bg-slate-700/20 border-slate-600" />
        </div>

        {/* Middle-Left Column: Resources and Value */}
        <div className="col-span-1 space-y-3">
          <Section title="Key Resources" items={canvas.keyResources} color="bg-slate-700/20 border-slate-600" />
          <div className="border rounded-lg p-4 bg-slate-700/30 border-slate-600">
            <h4 className="text-xs font-bold text-orange-400 mb-2 uppercase tracking-widest">Value Proposition</h4>
            <ul className="space-y-1">
              {canvas.valueProposition.map((item, i) => (
                <li key={i} className="text-xs text-slate-300 font-semibold leading-relaxed">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle-Right Column: Relationships and Channels */}
        <div className="col-span-1 space-y-3">
          <Section title="Customer Relationships" items={canvas.customerRelationships} color="bg-slate-700/20 border-slate-600" />
          <Section title="Channels" items={canvas.channels} color="bg-slate-700/20 border-slate-600" />
        </div>

        {/* Right-Middle Column: Segments */}
        <div className="col-span-1 space-y-3">
          <Section title="Customer Segments" items={canvas.customerSegments} color="bg-slate-700/20 border-slate-600" />
        </div>

        {/* Right Column: Costs and Revenue */}
        <div className="col-span-1 space-y-3">
          <Section title="Cost Structure" items={canvas.costStructure} color="bg-red-500/10 border-red-500/30" />
          <Section title="Revenue Streams" items={canvas.revenueStreams} color="bg-green-500/10 border-green-500/30" />
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Key Partnerships</p>
          <p className="text-xs text-slate-300">{canvas.keyPartners.length} partners identified</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Value Streams</p>
          <p className="text-xs text-slate-300">{canvas.valueProposition.length} value props</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Customer Focus</p>
          <p className="text-xs text-slate-300">{canvas.customerSegments.length} segments</p>
        </div>
      </div>
    </div>
  );
}
