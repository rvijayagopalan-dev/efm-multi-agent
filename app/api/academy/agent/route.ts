import Anthropic from '@anthropic-ai/sdk';
import { AGENT_DEFINITIONS } from '@/lib/agents';
import { buildAcademyPrompt } from '@/lib/academy-sections';
import { loadSectionContent } from '@/lib/academy-content-loader';
import fs from 'fs';
import path from 'path';

const client = new Anthropic();

export async function POST(req: Request) {
  const { agentId, sectionId } = await req.json() as {
    agentId: string;
    sectionId: string;
  };

  const agent = AGENT_DEFINITIONS.find(a => a.id === agentId);
  if (!agent) {
    return new Response(
      JSON.stringify({ error: 'Agent not found' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Try to load pre-generated content first
    const fileName = `${agentId}-${sectionId}.md`;
    const filePath = path.join(process.cwd(), 'docs', 'learning_academy', fileName);

    if (fs.existsSync(filePath)) {
      const preGeneratedContent = fs.readFileSync(filePath, 'utf-8');
      return new Response(preGeneratedContent, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // If no pre-generated content, generate new content
    const systemPrompt = buildAcademyPrompt(agent.name, agent.expertise, sectionId);

    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 3000,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Generate comprehensive content for the "${sectionId}" section of the ${agent.name} learning module.`,
        },
      ],
    });

    // Return readable stream for streaming response
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(
                new TextEncoder().encode(event.delta.text)
              );
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Generation failed';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
