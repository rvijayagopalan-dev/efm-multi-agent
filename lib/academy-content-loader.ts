// Load pre-generated learning academy content from /docs/learning_academy
import fs from 'fs';
import path from 'path';

const LEARNING_ACADEMY_PATH = path.join(process.cwd(), 'docs', 'learning_academy');

interface PreGeneratedContent {
  [sectionId: string]: string;
}

const contentCache: Record<string, PreGeneratedContent> = {};

export async function loadPreGeneratedContent(agentId: string): Promise<PreGeneratedContent> {
  // Check cache first
  if (contentCache[agentId]) {
    return contentCache[agentId];
  }

  const content: PreGeneratedContent = {};

  const sectionIds = [
    'context',
    'concept',
    'knowledge-graph',
    'ontologies',
    'relationships',
    'best-practices',
    'checklist',
    'research-papers',
  ];

  for (const sectionId of sectionIds) {
    const fileName = `${agentId}-${sectionId}.md`;
    const filePath = path.join(LEARNING_ACADEMY_PATH, fileName);

    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        content[sectionId] = fileContent;
      }
    } catch (error) {
      // File not found or read error, skip
      console.debug(`Could not load ${fileName}:`, error instanceof Error ? error.message : 'Unknown error');
    }
  }

  // Cache the content
  contentCache[agentId] = content;
  return content;
}

export function hasPreGeneratedContent(agentId: string): boolean {
  const sectionIds = ['context', 'concept', 'knowledge-graph', 'ontologies', 'relationships', 'best-practices'];

  for (const sectionId of sectionIds) {
    const fileName = `${agentId}-${sectionId}.md`;
    const filePath = path.join(LEARNING_ACADEMY_PATH, fileName);
    if (fs.existsSync(filePath)) {
      return true;
    }
  }

  return false;
}

export async function loadSectionContent(agentId: string, sectionId: string): Promise<string | null> {
  const fileName = `${agentId}-${sectionId}.md`;
  const filePath = path.join(LEARNING_ACADEMY_PATH, fileName);

  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  } catch (error) {
    console.debug(`Could not load ${fileName}:`, error instanceof Error ? error.message : 'Unknown error');
  }

  return null;
}
