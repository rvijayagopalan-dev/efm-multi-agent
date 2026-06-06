// Academy sections matching arch-as-a-service pattern
export interface AcademySection {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

export const ACADEMY_SECTIONS: AcademySection[] = [
  {
    id: 'context',
    label: 'Context',
    icon: '◈',
    description: 'Industry landscape, strategic importance & trends',
    color: 'sky',
  },
  {
    id: 'core-concepts',
    label: 'Core Concepts',
    icon: '◇',
    description: 'Fundamental principles, definitions & building blocks',
    color: 'violet',
  },
  {
    id: 'knowledge-graph',
    label: 'Knowledge Graph',
    icon: '⬡',
    description: 'Entities, relationships & semantic connections',
    color: 'purple',
  },
  {
    id: 'ontologies',
    label: 'Ontologies',
    icon: '△',
    description: 'Formal definitions, taxonomies & class hierarchies',
    color: 'fuchsia',
  },
  {
    id: 'relationships',
    label: 'Relationships',
    icon: '◎',
    description: 'How this domain relates to other architecture domains',
    color: 'blue',
  },
  {
    id: 'best-practices',
    label: 'Best Practices',
    icon: '▶',
    description: 'Proven patterns, anti-patterns & implementation strategies',
    color: 'emerald',
  },
  {
    id: 'implementation',
    label: 'Implementation',
    icon: '⊕',
    description: 'Practical approaches, architecture patterns & technical design',
    color: 'amber',
  },
  {
    id: 'references',
    label: 'References',
    icon: '◐',
    description: 'Standards, frameworks, tools & further reading',
    color: 'pink',
  },
];

export const SECTION_COLORS: Record<string, { badge: string; dot: string; border: string }> = {
  sky:     { badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',         dot: 'bg-sky-400',     border: 'border-sky-400/40' },
  violet:  { badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20', dot: 'bg-violet-400',  border: 'border-violet-400/40' },
  blue:    { badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',       dot: 'bg-blue-400',    border: 'border-blue-400/40' },
  indigo:  { badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', dot: 'bg-indigo-400',  border: 'border-indigo-400/40' },
  purple:  { badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20', dot: 'bg-purple-400',  border: 'border-purple-400/40' },
  fuchsia: { badge: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20', dot: 'bg-fuchsia-400', border: 'border-fuchsia-400/40' },
  pink:    { badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20',       dot: 'bg-pink-400',    border: 'border-pink-400/40' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', dot: 'bg-emerald-400', border: 'border-emerald-400/40' },
  amber:   { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',    dot: 'bg-amber-400',   border: 'border-amber-400/40' },
};

export function buildAcademyPrompt(agentName: string, agentExpertise: string, sectionId: string): string {
  const prompts: Record<string, string> = {
    context: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive CONTEXT guide for: ${agentName}
Domain Expertise: ${agentExpertise}

Cover:
1. **Industry & Market Context** — Current state in enterprise landscape, market trends, adoption statistics
2. **Strategic Importance** — Why enterprises invest in this domain, business outcomes & competitive advantages
3. **Evolution & Trends** — How this domain has evolved, current market trends, future directions
4. **Key Players** — Major vendors, hyperscalers, open-source leaders, thought leaders
5. **Business Impact** — Revenue impact, cost savings, risk reduction, innovation enablement

Write in clear, actionable language. Use concrete examples and real-world scenarios.
Format with ## headings, bullet points, and tables for comparisons.
Target audience: Enterprise architects and technical leaders.`,

    ['core-concepts']: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive CORE CONCEPTS guide for: ${agentName}
Domain Expertise: ${agentExpertise}

Cover:
1. **Fundamental Definitions** — Clear definitions of key terms and concepts
2. **Core Principles** — Guiding principles and foundational concepts
3. **Key Components** — Major building blocks and architectural elements
4. **Design Patterns** — Common design patterns and architectural patterns
5. **Models & Frameworks** — Conceptual models, reference architectures, frameworks

Provide concrete examples for each concept.
Use diagrams in ASCII format where helpful.
Format with ## headings, bullet points, code examples, and tables.
Target audience: Engineers implementing these concepts.`,

    ['knowledge-graph']: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive KNOWLEDGE GRAPH for: ${agentName}
Domain Expertise: ${agentExpertise}

Structure this as:
1. **Entities** — Key concepts, components, and things in this domain
2. **Relationships** — How these entities connect and relate
3. **Attributes** — Properties and characteristics of entities
4. **Hierarchies** — Class hierarchies and taxonomies
5. **Dependencies** — How entities depend on each other

Present as:
- Text descriptions of relationships
- ASCII diagrams showing entity relationships
- Hierarchical trees for classification
- Connection matrices between key concepts

Use unicode box-drawing characters for diagrams.
Target audience: Architects designing systems in this domain.`,

    ontologies: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive ONTOLOGIES guide for: ${agentName}
Domain Expertise: ${agentExpertise}

Define:
1. **Classes & Hierarchies** — Formal class definitions and hierarchies
2. **Properties** — Object properties, data properties, and relationships
3. **Constraints** — Constraints and rules governing the domain
4. **Instances** — Example instances of classes
5. **Formal Definitions** — RDF/OWL-style formal definitions (in plain language)

Use structured format:
- Class definitions with inheritance
- Property tables with domains and ranges
- Constraint specifications
- Real-world examples of each concept

Target audience: Knowledge engineers and semantic web specialists.`,

    relationships: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive RELATIONSHIPS guide showing how ${agentName} relates to other architecture domains.
Domain Expertise: ${agentExpertise}

For each related domain, cover:
1. **Domain Name** — Which domain this connects to
2. **Connection Type** — How they connect (dependency, integration, enabling, etc.)
3. **Data Flows** — How data flows between domains
4. **API Integration** — How systems integrate
5. **Standards Alignment** — Common standards bridging the domains
6. **Use Cases** — Real scenarios showing the relationship

Structure as a series of "Related Domain" sections.
Include architecture diagrams showing connections.
Show concrete examples of integration points.
Target audience: Enterprise architects designing integrated systems.`,

    ['best-practices']: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive BEST PRACTICES guide for: ${agentName}
Domain Expertise: ${agentExpertise}

Include:
1. **Design Principles** — Core design principles to follow
2. **Proven Patterns** — Architecture patterns that work
3. **Anti-Patterns** — Patterns to avoid and why
4. **Success Factors** — What makes implementations successful
5. **Common Pitfalls** — Mistakes to avoid and how to prevent them
6. **Decision Frameworks** — How to make key decisions
7. **Quality Attributes** — Ensuring performance, security, scalability

For each practice:
- Explain why it matters
- Show before/after examples
- Provide implementation steps
- List benefits and trade-offs

Use case studies from real implementations.
Target audience: Architects and team leads making design decisions.`,

    implementation: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive IMPLEMENTATION guide for: ${agentName}
Domain Expertise: ${agentExpertise}

Cover:
1. **Architecture Design** — How to design systems in this domain
2. **Technology Stack** — Tool selection, vendor comparison, open-source options
3. **Deployment Models** — On-premise, cloud, hybrid, edge options
4. **Operational Considerations** — Monitoring, scaling, maintenance
5. **Implementation Roadmap** — Phased approach to implementation
6. **Common Challenges** — Implementation challenges and solutions
7. **Testing Strategies** — How to validate implementations

Provide:
- Step-by-step implementation guides
- Configuration examples
- Code patterns in pseudo-code
- Decision matrices for technology selection
- Implementation checklists

Target audience: Technical teams implementing systems in this domain.`,

    references: `You are a World-Class ${agentName} specialist and Enterprise Architect.

Provide a comprehensive REFERENCES guide for: ${agentName}
Domain Expertise: ${agentExpertise}

Include:
1. **Standards & Frameworks** — ISO, NIST, TOGAF, industry-specific standards
2. **Key Publications** — Important research papers, books, articles
3. **Technologies & Tools** — Major platforms, frameworks, tools in the space
4. **Industry Organizations** — Standards bodies, consortiums, industry groups
5. **Learning Resources** — Courses, certifications, training programs
6. **Best Sources** — Where to learn more about this domain

For each reference:
- Provide title/name
- Explain relevance and importance
- Link to where to find it
- Note key takeaways

Organize by category and indicate difficulty level/prerequisite knowledge.
Target audience: Professionals wanting to deepen expertise.`,
  };

  return prompts[sectionId] || prompts['context'];
}
