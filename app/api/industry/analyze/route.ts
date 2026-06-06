import Anthropic from '@anthropic-ai/sdk';
import { searchIndustries, getAllDomains, type IndustrySector, type IndustryDomain } from '@/lib/industry';
import { AGENT_DEFINITIONS } from '@/lib/agents';

const client = new Anthropic();

interface AnalysisRequest {
  query: string;
  analysisType: 'sectors' | 'domains' | 'ontology' | 'knowledge-graph' | 'full';
}

export async function POST(req: Request) {
  const { query, analysisType = 'full' } = await req.json() as AnalysisRequest;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const industryAgent = AGENT_DEFINITIONS.find(a => a.id === 'industry-analyst');
        if (!industryAgent) {
          throw new Error('Industry Agent not found');
        }

        // Build context based on analysis type
        let context = '';

        if (analysisType === 'sectors' || analysisType === 'full') {
          const relevantSectors = searchIndustries(query);
          context += `\n## Relevant Industry Sectors\n${relevantSectors.map(s => `- ${s.name}: ${s.description}`).join('\n')}`;
        }

        if (analysisType === 'domains' || analysisType === 'full') {
          const allDomains = getAllDomains();
          const relevantDomains = allDomains.filter(d =>
            query.toLowerCase().includes(d.name.toLowerCase()) ||
            query.toLowerCase().includes(d.description.toLowerCase())
          );
          if (relevantDomains.length > 0) {
            context += `\n## Relevant Domains\n${relevantDomains.map(d => `- ${d.name}: ${d.description}`).join('\n')}`;
          }
        }

        const systemPrompt = `${industryAgent.systemPrompt}

QUERY CONTEXT:
User is analyzing: "${query}"

Available Industry Data:${context || 'Full industry database available for analysis'}

TASK: Analyze the user's query and provide comprehensive industry insights including:
1. Relevant sectors and domains
2. Business model analysis
3. Key characteristics and challenges
4. Competitive landscape
5. Recommended architectural approaches
6. Market opportunities

Use the Industry Panel to visualize ontologies and knowledge graphs for selected domains.`;

        const message = await client.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 4000,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `Analyze this business/industry query and provide comprehensive market and domain insights: "${query}"`,
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
