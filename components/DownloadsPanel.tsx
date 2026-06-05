'use client';

import { useState } from 'react';
import { downloadAsPdf, downloadAsWord } from '@/lib/export';
import type { AgentOutput } from '@/lib/orchestrator';

interface Props {
  finalOutput: string;
  agentOutputs: AgentOutput[];
}

export default function DownloadsPanel({ finalOutput, agentOutputs }: Props) {
  const [downloading, setDownloading] = useState<string | null>(null);

  if (!finalOutput && agentOutputs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-24 text-center">
        <span className="text-4xl mb-4 text-slate-700">📥</span>
        <p className="text-slate-500 text-sm">Run an orchestration first — deliverables will appear here.</p>
      </div>
    );
  }

  const dlMd = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const dlPdf = async (content: string, filename: string) => {
    try {
      await downloadAsPdf(content, filename.replace('.pdf', ''), filename);
    } catch (err) {
      console.error('PDF download failed:', err);
    }
  };

  const dlWord = async (content: string, filename: string) => {
    try {
      await downloadAsWord(content, filename.replace('.docx', ''), filename);
    } catch (err) {
      console.error('Word download failed:', err);
    }
  };

  const handleDownload = async (content: string, filename: string, format: 'md' | 'pdf' | 'docx') => {
    setDownloading(`${filename}-${format}`);
    try {
      if (format === 'md') dlMd(content, `${filename}.md`);
      else if (format === 'pdf') await dlPdf(content, `${filename}.pdf`);
      else await dlWord(content, `${filename}.docx`);
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      {/* Synthesised Response */}
      {finalOutput && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Orchestrator Synthesis</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Final unified response</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleDownload(finalOutput, 'efm-synthesis', 'md')}
                disabled={!!downloading}
                className="px-2.5 py-1.5 bg-blue-700/70 hover:bg-blue-600 disabled:opacity-50 text-white text-[11px] rounded-lg transition-colors"
              >
                {downloading === 'efm-synthesis-md' ? '⟳' : 'MD'}
              </button>
              <button
                onClick={() => handleDownload(finalOutput, 'efm-synthesis', 'pdf')}
                disabled={!!downloading}
                className="px-2.5 py-1.5 bg-red-700/70 hover:bg-red-600 disabled:opacity-50 text-white text-[11px] rounded-lg transition-colors"
              >
                {downloading === 'efm-synthesis-pdf' ? '⟳' : 'PDF'}
              </button>
              <button
                onClick={() => handleDownload(finalOutput, 'efm-synthesis', 'docx')}
                disabled={!!downloading}
                className="px-2.5 py-1.5 bg-orange-700/70 hover:bg-orange-600 disabled:opacity-50 text-white text-[11px] rounded-lg transition-colors"
              >
                {downloading === 'efm-synthesis-docx' ? '⟳' : 'Word'}
              </button>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-4">
            <p className="text-[11px] text-slate-400 line-clamp-3">{finalOutput.slice(0, 200)}…</p>
          </div>
        </div>
      )}

      {/* Agent Outputs */}
      {agentOutputs.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-white mb-3">Agent Deliverables</h3>
          <div className="space-y-3">
            {agentOutputs.map((output, i) => (
              <div key={i} className="border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white truncate">{output.agentName}</h4>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">Task: {output.task}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleDownload(output.output, `efm-${output.agentId}`, 'md')}
                      disabled={!!downloading}
                      className="px-2 py-1 bg-blue-700/70 hover:bg-blue-600 disabled:opacity-50 text-white text-[10px] rounded transition-colors"
                    >
                      {downloading === `efm-${output.agentId}-md` ? '⟳' : 'MD'}
                    </button>
                    <button
                      onClick={() => handleDownload(output.output, `efm-${output.agentId}`, 'pdf')}
                      disabled={!!downloading}
                      className="px-2 py-1 bg-red-700/70 hover:bg-red-600 disabled:opacity-50 text-white text-[10px] rounded transition-colors"
                    >
                      {downloading === `efm-${output.agentId}-pdf` ? '⟳' : 'PDF'}
                    </button>
                    <button
                      onClick={() => handleDownload(output.output, `efm-${output.agentId}`, 'docx')}
                      disabled={!!downloading}
                      className="px-2 py-1 bg-orange-700/70 hover:bg-orange-600 disabled:opacity-50 text-white text-[10px] rounded transition-colors"
                    >
                      {downloading === `efm-${output.agentId}-docx` ? '⟳' : 'Word'}
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 line-clamp-2">{output.output.slice(0, 150)}…</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
