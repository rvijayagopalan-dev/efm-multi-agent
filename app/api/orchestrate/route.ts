import Anthropic from '@anthropic-ai/sdk';
import type { MessageParam, ToolResultBlockParam } from '@anthropic-ai/sdk/resources/messages';
import {
  ORCHESTRATOR_SYSTEM_PROMPT,
  buildOrchestratorTools,
  fromToolName,
  type OrchestratorEvent,
  type ConversationTurn,
} from '@/lib/orchestrator';
import { AGENT_MAP } from '@/lib/agents';

const client = new Anthropic();

export async function POST(req: Request) {
  const { request, history = [] } = await req.json() as {
    request: string;
    history: ConversationTurn[];
  };

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const emit = (event: OrchestratorEvent) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
      };

      try {
        const messages: MessageParam[] = [
          ...history.flatMap((turn): MessageParam[] => {
            if (turn.role === 'user') return [{ role: 'user', content: turn.content }];
            const summary = turn.agentOutputs?.length
              ? `${turn.content}\n\n[Session memory: ${turn.agentOutputs.map(o => `${o.agentName} produced output on "${o.task}"`).join('; ')}]`
              : turn.content;
            return [{ role: 'assistant', content: summary }];
          }),
          { role: 'user', content: request },
        ];

        const orchestratorTools = buildOrchestratorTools();

        // ── Agentic loop ───────────────────────────────────────────────────
        let continueLoop = true;
        const agentOutputs: { id: string; name: string; task: string; output: string }[] = [];

        // Tracks whether we've already executed tool calls. Once true, any
        // subsequent text from the orchestrator is the final synthesis.
        let hasDoneToolCalls = false;

        while (continueLoop) {
          const orchestratorStream = await client.messages.stream({
            model: 'claude-sonnet-4-6',
            max_tokens: 8096,
            system: ORCHESTRATOR_SYSTEM_PROMPT,
            tools: orchestratorTools,
            messages,
          });

          let fullResponse = '';
          let synthStartEmitted = false;
          const toolUseBlocks: { id: string; name: string; input: { task: string; context?: string } }[] = [];

          for await (const chunk of orchestratorStream) {
            if (chunk.type === 'content_block_start' && chunk.content_block.type === 'tool_use') {
              toolUseBlocks.push({
                id: chunk.content_block.id,
                name: chunk.content_block.name,
                input: { task: '', context: '' },
              });
            } else if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
              const token = chunk.delta.text;
              fullResponse += token;

              if (hasDoneToolCalls) {
                // ── This is the synthesis phase ──────────────────────────
                // Emit synthesis_start on the very first synthesis token so
                // the frontend knows to switch to the output panel.
                if (!synthStartEmitted) {
                  emit({ type: 'synthesis_start' });
                  synthStartEmitted = true;
                }
                emit({ type: 'synthesis_token', token });
              } else {
                // ── Orchestrator is still planning / thinking ────────────
                emit({ type: 'orchestrator_token', token });
              }
            }
          }

          const finalMessage = await orchestratorStream.finalMessage();

          if (finalMessage.stop_reason === 'end_turn') {
            // If the orchestrator responded without calling any tools (direct
            // answer), treat the whole response as the output.
            if (!hasDoneToolCalls && fullResponse) {
              emit({ type: 'synthesis_start' });
              emit({ type: 'synthesis_token', token: fullResponse });
            }
            emit({ type: 'done' });
            continueLoop = false;

          } else if (finalMessage.stop_reason === 'tool_use') {
            const toolResults: ToolResultBlockParam[] = [];
            const pendingAgents: { id: string; name: string; task: string }[] = [];

            for (const block of finalMessage.content) {
              if (block.type === 'tool_use') {
                const agentId = fromToolName(block.name);
                const agent = AGENT_MAP[agentId];
                if (agent) {
                  const input = block.input as { task: string; context?: string };
                  pendingAgents.push({ id: agentId, name: agent.name, task: input.task });
                }
              }
            }

            if (pendingAgents.length > 0) {
              emit({ type: 'plan_agents', agents: pendingAgents });
            }

            for (const block of finalMessage.content) {
              if (block.type !== 'tool_use') continue;

              const agentId = fromToolName(block.name);
              const agent = AGENT_MAP[agentId];

              if (!agent) {
                toolResults.push({
                  type: 'tool_result',
                  tool_use_id: block.id,
                  content: `Agent ${agentId} not found.`,
                });
                continue;
              }

              const input = block.input as { task: string; context?: string };
              emit({ type: 'agent_start', agentId, agentName: agent.name, task: input.task });

              let agentOutput = '';
              const agentStream = await client.messages.stream({
                model: 'claude-sonnet-4-6',
                max_tokens: 4096,
                system: agent.systemPrompt,
                messages: [{
                  role: 'user',
                  content: `TASK: ${input.task}\n\nCONTEXT: ${input.context || 'No additional context provided.'}`,
                }],
              });

              for await (const chunk of agentStream) {
                if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
                  emit({ type: 'agent_token', agentId, token: chunk.delta.text });
                  agentOutput += chunk.delta.text;
                }
              }

              emit({ type: 'agent_done', agentId });
              agentOutputs.push({ id: agentId, name: agent.name, task: input.task, output: agentOutput });
              toolResults.push({ type: 'tool_result', tool_use_id: block.id, content: agentOutput });
            }

            messages.push({ role: 'assistant', content: finalMessage.content });
            messages.push({ role: 'user', content: toolResults });

            // Next loop iteration will be the synthesis — mark the flag now
            hasDoneToolCalls = true;

          } else {
            emit({ type: 'done' });
            continueLoop = false;
          }
        }

      } catch (err) {
        emit({ type: 'error', message: err instanceof Error ? err.message : 'Orchestration failed' });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
