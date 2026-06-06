import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

interface GenerateRequest {
  query: string;
}

export async function POST(req: Request) {
  const { query } = await req.json() as GenerateRequest;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const systemPrompt = `You are an expert industry analyst AI. Based on user queries about industries, sectors, or business domains, generate comprehensive industry intelligence.

Your response must be valid JSON with this exact structure:
{
  "industry": "Industry/Sector Name",
  "businessModel": {
    "keyPartners": ["partner1", "partner2", ...],
    "keyActivities": ["activity1", "activity2", ...],
    "keyResources": ["resource1", "resource2", ...],
    "valueProposition": ["value1", "value2", ...],
    "customerRelationships": ["relationship1", "relationship2", ...],
    "channels": ["channel1", "channel2", ...],
    "customerSegments": ["segment1", "segment2", ...],
    "costStructure": ["cost1", "cost2", ...],
    "revenueStreams": ["revenue1", "revenue2", ...]
  },
  "externalForces": {
    "political": [{"name": "...", "description": "...", "impact": "high|medium|low", "trajectory": "accelerating|stable|declining", "timeframe": "..."}],
    "economic": [...],
    "social": [...],
    "technological": [...],
    "environmental": [...],
    "legal": [...]
  },
  "trends": [
    {
      "id": "trend1",
      "name": "Trend Name",
      "description": "Description",
      "category": "technology|market|consumer|regulatory|operational",
      "momentum": "high|medium|low",
      "horizon": "near-term|mid-term|long-term",
      "affectedBusinessModels": ["model1"],
      "opportunities": ["opp1", "opp2"],
      "threats": ["threat1", "threat2"]
    }
  ],
  "disruptions": [
    {
      "id": "disrupt1",
      "name": "Disruption Name",
      "description": "Description",
      "source": "technology|market entrant|regulatory|consumer behavior",
      "likelihood": "high|medium|low",
      "timeToImpact": "immediate|1-2 years|3-5 years",
      "affectedSegments": ["segment1"],
      "mitigationStrategies": ["strategy1"],
      "winnerCharacteristics": ["trait1"]
    }
  ],
  "strategicImplications": [
    {
      "id": "strat1",
      "title": "Strategic Initiative Title",
      "description": "Description",
      "priority": "critical|high|medium|low",
      "relatedForces": ["force1"],
      "requiredCapabilities": ["capability1"],
      "timeline": "1-2 years",
      "investmentRequired": "high|medium|low",
      "expectedROI": "ROI description"
    }
  ]
}

Analyze the query and generate realistic, specific, actionable industry intelligence.`;

        const message = await client.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 4000,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `Generate comprehensive industry intelligence analysis for: "${query}"

Include:
1. Business Model Canvas (9 blocks)
2. PESTEL External Forces (6 categories)
3. Market Trends (3-4 trends)
4. Potential Disruptions (2-3)
5. Strategic Implications (3-4 initiatives)

Provide specific, realistic details for this industry/domain.`,
            },
          ],
        });

        let fullResponse = '';

        for await (const chunk of message) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            fullResponse += chunk.delta.text;
            const data = {
              type: 'content_token',
              token: chunk.delta.text,
            };
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
            );
          }
        }

        // Parse and validate the response
        try {
          const jsonMatch = fullResponse.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const analysisData = JSON.parse(jsonMatch[0]);
            const finalData = {
              type: 'complete',
              data: analysisData
            };
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(finalData)}\n\n`)
            );
          }
        } catch (parseError) {
          console.error('Failed to parse JSON response', parseError);
        }

        const doneData = { type: 'done' };
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(doneData)}\n\n`)
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
