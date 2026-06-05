'use client';

import type { MetricsSnapshot, AgentMetrics } from '@/lib/observability';

interface Props {
  metrics: MetricsSnapshot | null;
  running: boolean;
}

export default function ObservabilityPanel({ metrics, running }: Props) {
  if (!metrics && !running) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-24 text-center">
        <span className="text-4xl mb-4 text-slate-700">📊</span>
        <p className="text-slate-500 text-sm">Run an orchestration first — metrics will appear here.</p>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className="animate-spin">⟳</span> Collecting metrics…
        </div>
      </div>
    );
  }

  const totalTokens = metrics.totalInputTokens + metrics.totalOutputTokens;
  const avgTimePerAgent = metrics.agentCount > 0 ? Math.round(
    metrics.agentInvocations.reduce((sum, a) => sum + a.executionTime, 0) / metrics.agentCount
  ) : 0;

  return (
    <div className="p-6 space-y-6 overflow-y-auto h-full">
      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricCard
          label="Total Time"
          value={formatMs(metrics.totalExecutionTime)}
          icon="⏱️"
        />
        <MetricCard
          label="Total Tokens"
          value={totalTokens.toLocaleString()}
          icon="🔤"
        />
        <MetricCard
          label="Agents Invoked"
          value={metrics.agentCount}
          icon="🤖"
        />
        <MetricCard
          label="Errors"
          value={metrics.errors.length}
          icon={metrics.errors.length > 0 ? '⚠️' : '✓'}
          highlight={metrics.errors.length > 0}
        />
      </div>

      {/* Token breakdown */}
      <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-4">
        <h3 className="text-sm font-bold text-white mb-3">Token Usage</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Input Tokens</span>
            <span className="font-mono text-slate-300">{metrics.totalInputTokens.toLocaleString()}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: `${totalTokens > 0 ? (metrics.totalInputTokens / totalTokens) * 100 : 0}%`,
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs mt-3">
            <span className="text-slate-400">Output Tokens</span>
            <span className="font-mono text-slate-300">{metrics.totalOutputTokens.toLocaleString()}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500"
              style={{
                width: `${totalTokens > 0 ? (metrics.totalOutputTokens / totalTokens) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Agent metrics */}
      {metrics.agentInvocations.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-white mb-3">Agent Performance</h3>
          <div className="space-y-2">
            {metrics.agentInvocations.map((agent) => (
              <AgentMetricRow key={agent.agentId} agent={agent} />
            ))}
          </div>
        </div>
      )}

      {/* Errors */}
      {metrics.errors.length > 0 && (
        <div className="bg-red-950/40 border border-red-900/60 rounded-xl p-4">
          <h3 className="text-sm font-bold text-red-300 mb-2">Errors ({metrics.errors.length})</h3>
          <div className="space-y-1">
            {metrics.errors.map((error, i) => (
              <p key={i} className="text-[10px] text-red-200 leading-relaxed">
                • {error}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Additional metrics */}
      {avgTimePerAgent > 0 && (
        <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-4">
          <h3 className="text-sm font-bold text-white mb-3">Efficiency</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Avg Time per Agent</span>
              <span className="font-mono text-slate-300">{formatMs(avgTimePerAgent)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Tokens per Agent (avg)</span>
              <span className="font-mono text-slate-300">
                {metrics.agentCount > 0 ? Math.round(totalTokens / metrics.agentCount).toLocaleString() : 0}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Tokens per Second</span>
              <span className="font-mono text-slate-300">
                {metrics.totalExecutionTime > 0
                  ? Math.round((totalTokens / metrics.totalExecutionTime) * 1000).toLocaleString()
                  : 0}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Metric Card ───────────────────────────────────────────────────────────

function MetricCard({
  label,
  value,
  icon,
  highlight = false,
}: {
  label: string;
  value: string | number;
  icon: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-3 border ${
        highlight
          ? 'bg-red-950/40 border-red-900/60'
          : 'bg-slate-900/80 border-slate-700/60'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <p className={`text-[10px] ${highlight ? 'text-red-400' : 'text-slate-500'}`}>{label}</p>
          <p className={`text-sm font-bold ${highlight ? 'text-red-300' : 'text-white'} mt-1`}>
            {value}
          </p>
        </div>
        <span className="text-lg flex-shrink-0">{icon}</span>
      </div>
    </div>
  );
}

// ── Agent Metric Row ──────────────────────────────────────────────────────

function AgentMetricRow({ agent }: { agent: AgentMetrics }) {
  const statusColor =
    agent.status === 'done' ? 'text-emerald-400' :
    agent.status === 'error' ? 'text-red-400' :
    agent.status === 'running' ? 'text-orange-400' :
    'text-slate-500';

  const tokens = agent.inputTokens + agent.outputTokens;

  return (
    <div className="bg-slate-900/50 border border-slate-700/40 rounded-lg p-3">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="text-xs font-semibold text-white truncate">{agent.agentName}</h4>
            <span className={`text-[9px] font-mono ${statusColor}`}>
              {agent.status === 'done' ? '✓' : agent.status === 'error' ? '✕' : '●'} {agent.status}
            </span>
          </div>
          {agent.errorMessage && (
            <p className="text-[9px] text-red-300">{agent.errorMessage}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        <div>
          <span className="text-slate-500">Time: </span>
          <span className="text-slate-300 font-mono">{formatMs(agent.executionTime)}</span>
        </div>
        <div>
          <span className="text-slate-500">Tokens: </span>
          <span className="text-slate-300 font-mono">{tokens.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-slate-500">In/Out: </span>
          <span className="text-slate-300 font-mono">
            {agent.inputTokens}/{agent.outputTokens}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────

function formatMs(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}
