// Observability tracking: metrics, errors, token usage, performance

export interface MetricsSnapshot {
  totalExecutionTime: number;  // ms
  totalInputTokens: number;
  totalOutputTokens: number;
  agentCount: number;
  agentInvocations: AgentMetrics[];
  errors: string[];
  timestamp: number;
}

export interface AgentMetrics {
  agentId: string;
  agentName: string;
  executionTime: number;   // ms
  inputTokens: number;
  outputTokens: number;
  status: 'pending' | 'running' | 'done' | 'error';
  errorMessage?: string;
}

export interface TokenUsageEvent {
  type: 'orchestrator' | 'agent';
  phase: 'input' | 'output';
  agentId?: string;
  agentName?: string;
  tokens: number;
  timestamp: number;
}

export class ObservabilityCollector {
  private metrics: MetricsSnapshot;
  private tokenEvents: TokenUsageEvent[] = [];
  private startTime: number;
  private agentMetricsMap: Map<string, AgentMetrics> = new Map();
  private errors: string[] = [];

  constructor() {
    this.startTime = Date.now();
    this.metrics = {
      totalExecutionTime: 0,
      totalInputTokens: 0,
      totalOutputTokens: 0,
      agentCount: 0,
      agentInvocations: [],
      errors: [],
      timestamp: this.startTime,
    };
  }

  recordOrchestratorTokens(inputTokens: number, outputTokens: number) {
    this.metrics.totalInputTokens += inputTokens;
    this.metrics.totalOutputTokens += outputTokens;
    this.tokenEvents.push({ type: 'orchestrator', phase: 'input', tokens: inputTokens, timestamp: Date.now() });
    this.tokenEvents.push({ type: 'orchestrator', phase: 'output', tokens: outputTokens, timestamp: Date.now() });
  }

  recordAgentStart(agentId: string, agentName: string) {
    if (!this.agentMetricsMap.has(agentId)) {
      this.agentMetricsMap.set(agentId, {
        agentId,
        agentName,
        executionTime: 0,
        inputTokens: 0,
        outputTokens: 0,
        status: 'pending',
      });
      this.metrics.agentCount++;
    }
    const m = this.agentMetricsMap.get(agentId)!;
    m.status = 'running';
    m.executionTime = Date.now();
  }

  recordAgentTokens(agentId: string, agentName: string, inputTokens: number, outputTokens: number) {
    const m = this.agentMetricsMap.get(agentId);
    if (m) {
      m.inputTokens += inputTokens;
      m.outputTokens += outputTokens;
    }
    this.metrics.totalInputTokens += inputTokens;
    this.metrics.totalOutputTokens += outputTokens;
    this.tokenEvents.push({ type: 'agent', phase: 'input', agentId, agentName, tokens: inputTokens, timestamp: Date.now() });
    this.tokenEvents.push({ type: 'agent', phase: 'output', agentId, agentName, tokens: outputTokens, timestamp: Date.now() });
  }

  recordAgentDone(agentId: string) {
    const m = this.agentMetricsMap.get(agentId);
    if (m && m.status === 'running') {
      m.executionTime = Date.now() - m.executionTime;
      m.status = 'done';
    }
  }

  recordError(message: string) {
    this.errors.push(message);
    this.metrics.errors.push(message);
  }

  recordAgentError(agentId: string, message: string) {
    const m = this.agentMetricsMap.get(agentId);
    if (m) {
      m.status = 'error';
      m.errorMessage = message;
    }
    this.recordError(`[${agentId}] ${message}`);
  }

  finalize(): MetricsSnapshot {
    this.metrics.totalExecutionTime = Date.now() - this.startTime;
    this.metrics.agentInvocations = Array.from(this.agentMetricsMap.values());
    this.metrics.timestamp = Date.now();
    return this.metrics;
  }

  getMetrics(): MetricsSnapshot {
    return { ...this.metrics };
  }

  getTokenEvents(): TokenUsageEvent[] {
    return [...this.tokenEvents];
  }

  // Drift detection: compare expected vs actual token usage
  detectDrift(expectedTokensPerAgent: number, threshold: number = 1.5): { agentId: string; drift: number }[] {
    const driftDetections: { agentId: string; drift: number }[] = [];
    for (const [agentId, metrics] of this.agentMetricsMap) {
      const totalUsed = metrics.inputTokens + metrics.outputTokens;
      const driftRatio = totalUsed / expectedTokensPerAgent;
      if (driftRatio > threshold || driftRatio < 1 / threshold) {
        driftDetections.push({ agentId, drift: driftRatio });
      }
    }
    return driftDetections;
  }
}
