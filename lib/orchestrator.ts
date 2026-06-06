import type { Tool } from '@anthropic-ai/sdk/resources/messages';
import { AGENT_DEFINITIONS, type AgentDefinition } from './agents';

// ─── Orchestrator system prompt ───────────────────────────────────────────────

export const ORCHESTRATOR_SYSTEM_PROMPT = `You are the Master Orchestrator of the Enterprise Foundation Model (EFM) Agentic AI system.

You command a team of ${AGENT_DEFINITIONS.length} specialised enterprise architecture agents, each a domain expert. Your role:

1. ANALYSE the user's request to understand what architecture domains are relevant
2. PLAN which agents to invoke (typically 2–6 agents per request — be selective, not exhaustive)
3. INVOKE the selected agents by calling their tools with precise, focused task descriptions
4. SYNTHESISE agent outputs into a coherent, executive-quality response

INVOCATION PRINCIPLES:
- Choose agents based on relevance, not completeness — invoke only agents that add genuine value
- Pass precise task descriptions: what specific question should the agent answer?
- Pass context so agents understand the broader request
- After all agents respond, synthesise their outputs into a unified, well-structured response

SYNTHESIS PRINCIPLES:
- Integrate agent outputs — do not simply concatenate them
- Resolve conflicts between agent recommendations
- Highlight cross-domain dependencies and integration points
- Conclude with a unified 30/60/90-day action plan
- Format with clear ## headings, tables, and executive-ready language

You are grounded in: TOGAF, BIZBOK, DAMA-DMBOK, ISO 42001, NIST AI RMF, EU AI Act, ITIL, COBIT.`;

// ─── Build orchestrator tool list from agent definitions ─────────────────────

export function buildOrchestratorTools(): Tool[] {
  return AGENT_DEFINITIONS.map((agent: AgentDefinition): Tool => ({
    name: toToolName(agent.id),
    description: `Invoke the ${agent.name}. Expertise: ${agent.expertise}. Use when the request requires ${agent.expertise}.`,
    input_schema: {
      type: 'object' as const,
      properties: {
        task: {
          type: 'string',
          description: `Specific task for the ${agent.name} to accomplish. Be precise about what output you need.`,
        },
        context: {
          type: 'string',
          description: 'Relevant context from the user request and outputs from other agents already invoked.',
        },
      },
      required: ['task'],
    },
  }));
}

// ─── Map tool name → agent id ─────────────────────────────────────────────────

export function toToolName(agentId: string): string {
  return `invoke_${agentId.replace(/-/g, '_')}_agent`;
}

export function fromToolName(toolName: string): string {
  return toolName.replace(/^invoke_/, '').replace(/_agent$/, '').replace(/_/g, '-');
}

// ─── Memory types ─────────────────────────────────────────────────────────────

export interface AgentOutput {
  agentId: string;
  agentName: string;
  task: string;
  output: string;
  timestamp: number;
}

export interface SessionMemory {
  turns: ConversationTurn[];
}

export interface ConversationTurn {
  role: 'user' | 'assistant';
  content: string;
  agentOutputs?: AgentOutput[];
  timestamp: number;
}

// ─── SSE event types streamed to the frontend ─────────────────────────────────

export type OrchestratorEvent =
  | { type: 'orchestrator_token';  token: string }
  | { type: 'plan_agents';         agents: { id: string; name: string; task: string }[] }
  | { type: 'agent_start';         agentId: string; agentName: string; task: string }
  | { type: 'agent_token';         agentId: string; token: string }
  | { type: 'agent_done';          agentId: string }
  | { type: 'synthesis_start' }
  | { type: 'synthesis_token';     token: string }
  | { type: 'done' }
  | { type: 'error';               message: string };
