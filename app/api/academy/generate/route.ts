import Anthropic from '@anthropic-ai/sdk';
import { ACADEMY_MODULES } from '@/lib/academy';

const client = new Anthropic();

export async function POST(req: Request) {
  const { moduleId, topic } = await req.json() as {
    moduleId: string;
    topic?: string;
  };

  const module = ACADEMY_MODULES.find(m => m.id === moduleId);
  if (!module) {
    return new Response(
      JSON.stringify({ error: 'Module not found' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const systemPrompt = `You are an expert in ${module.expertise}.

Generate a comprehensive learning guide on ${topic || module.name}.

Provide:
1. Real-world context and why this matters
2. Core concepts with concrete examples
3. Best practices and patterns
4. Common pitfalls and how to avoid them
5. Practical implementation tips

Use clear formatting with:
- ## Headings for major sections
- ### Sub-headings for concepts
- Bullet points for lists
- Code blocks for examples (wrapped in \`\`\`language notation)

Be practical, specific, and actionable. Assume intermediate technical knowledge.`;

        const message = await client.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 2048,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `Generate a detailed learning guide on: ${topic || module.name}`,
            },
          ],
        });

        for await (const chunk of message) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            const data = {
              type: 'content_token',
              token: chunk.delta.text,
            };
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
            );
          }
        }

        const finalData = { type: 'done' };
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(finalData)}\n\n`)
        );
        controller.close();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorData = { type: 'error', message: errorMessage };
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(errorData)}\n\n`)
        );
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
