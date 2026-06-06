// Generates Mermaid diagram source for Context and Sequence diagrams
// based on which agents were invoked during an orchestration run.

export interface AgentInvocation {
  agentId: string;
  agentName: string;
  icon: string;
  task: string;
  order: number;
  groupId: string;
}

// Sanitise text for Mermaid labels — remove chars that break parsing
function safe(text: string, max = 38): string {
  return text
    .slice(0, max)
    .replace(/["]/g, "'")
    .replace(/[<>{}|#\n\r]/g, ' ')
    .trim()
    .concat(text.length > max ? '…' : '');
}

// Short agent display name (strip common suffixes)
function shortName(agentName: string): string {
  return agentName
    .replace(' Architecture Agent', '')
    .replace(' Architecture', '')
    .replace(' Agent', '')
    .replace(' Excellence', '');
}

// ── Context Diagram ───────────────────────────────────────────────────────────
// C4-style flowchart: User → Orchestrator → Agents → Response

export function generateContextDiagram(
  request: string,
  invocations: AgentInvocation[]
): string {
  if (invocations.length === 0) return '';

  const lines: string[] = [
    'flowchart TB',
    '',
    '    classDef user     fill:#c2410c,stroke:#9a3412,color:#fff,rx:8',
    '    classDef orch     fill:#1d4ed8,stroke:#1e40af,color:#fff',
    '    classDef agent    fill:#1e293b,stroke:#475569,color:#cbd5e1',
    '    classDef response fill:#065f46,stroke:#047857,color:#d1fae5,rx:8',
    '',
    '    U(["👤 User"]):::user',
    '    O["⚡ Orchestrator\n──────────────\nPlan · Route · Synthesise"]:::orch',
    '    R(["✅ Synthesised\n    Response"]):::response',
    '',
  ];

  invocations.forEach((inv, i) => {
    const label = `${inv.icon} ${shortName(inv.agentName)}\n${safe(inv.task, 32)}`;
    lines.push(`    A${i}["${label}"]:::agent`);
  });

  lines.push('');
  lines.push(`    U -->|"${safe(request, 42)}"| O`);
  lines.push('');

  invocations.forEach((inv, i) => {
    lines.push(`    O -- "${safe(inv.task, 28)}" --> A${i}`);
    lines.push(`    A${i} -. "output" .-> O`);
  });

  lines.push('');
  lines.push('    O --> R');

  return lines.join('\n');
}

// ── Sequence Diagram ──────────────────────────────────────────────────────────
// Shows the full interaction sequence: User → Orchestrator → Agents → Synthesis

export function generateSequenceDiagram(
  request: string,
  invocations: AgentInvocation[]
): string {
  if (invocations.length === 0) return '';

  const participantId = (id: string) => id.replace(/-/g, '_');

  const lines: string[] = [
    'sequenceDiagram',
    '    autonumber',
    '    actor U as 👤 User',
    '    participant O as ⚡ Orchestrator',
  ];

  invocations.forEach((inv) => {
    const pid = participantId(inv.agentId);
    lines.push(`    participant ${pid} as ${inv.icon} ${shortName(inv.agentName)}`);
  });

  lines.push('');
  lines.push(`    U->>O: ${safe(request, 58)}`);
  lines.push('    activate O');
  lines.push('    Note over O: Analyse & Plan');
  lines.push('');

  invocations.forEach((inv) => {
    const pid = participantId(inv.agentId);
    lines.push(`    O->>${pid}: ${safe(inv.task, 52)}`);
    lines.push(`    activate ${pid}`);
    lines.push(`    Note over ${pid}: Processing`);
    lines.push(`    ${pid}-->>O: Architecture output`);
    lines.push(`    deactivate ${pid}`);
    lines.push('');
  });

  lines.push('    Note over O: Synthesise outputs');
  lines.push('    O-->>U: Unified Architecture Response');
  lines.push('    deactivate O');

  return lines.join('\n');
}
