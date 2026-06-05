# Data Architecture Agent

| Property | Value |
|---|---|
| **ID** | \$(System.Collections.Hashtable.id)\ |
| **Group** | core-technical |
| **Icon** | 🗄 |
| **Expertise** | Database design, data modeling, polyglot persistence, replication |

---

## System Prompt

This agent is defined in \lib/agents.ts\ with a specialised system prompt that establishes:

- **Role:** World-class enterprise specialist in this domain
- **Expertise:** Deep knowledge of standards (TOGAF, NIST, ISO, BIZBOK, etc.)
- **Responsibilities:** Clear objectives aligned with this domain
- **Outputs:** Structured deliverables (assessments, designs, governance models, roadmaps)
- **Format:** Markdown with clear headings, tables, and bullet points

The full system prompt is generated from the \gentPrompt()\ function in \lib/agents.ts\.

---

## Domain Expertise

**Focus Area:** Database design, data modeling, polyglot persistence, replication

This agent brings deep knowledge of:
- Industry standards and best practices
- Technology patterns and trade-offs
- Governance and compliance frameworks
- Implementation strategies and roadmaps

---

## Standard Tools

Every agent has access to these base tools:

| Tool | Purpose |
|---|---|
| \ssess_current_state\ | Assess current state in this domain |
| \design_target_architecture\ | Design target architecture with components |
| \create_governance_model\ | Create governance with controls & standards |
| \uild_roadmap\ | Build phased implementation roadmap |

**Domain-specific tools** may be added for specialised agents.

---

## Invocation

This agent is invoked by the **Orchestrator** when your request requires expertise in this domain.

**Typical invocation:**
`
Orchestrator: "This request needs expertise in Database design, data modeling, polyglot persistence, replication"
Tool: invoke_data_architecture_agent
Task: [Specific task description]
Context: [Relevant context from prior agents]
`

---

## Standards & Frameworks

Depending on the domain, this agent references:

- **TOGAF 10** — Enterprise architecture framework
- **NIST AI RMF** — AI Risk Management Framework (for AI agents)
- **ISO 27001/27002** — Information security
- **ISO 42001** — AI Management (for AI agents)
- **BIZBOK** — Business Architecture guide
- **DAMA-DMBOK** — Data management body of knowledge
- **Google SRE Book** — Site reliability engineering
- **OWASP** — Application security

---

## Related Agents

**Part of EFM Agentic AI:** A 41-agent system where each agent is a specialist.

Other agents in the **core-technical** group may collaborate on comprehensive responses.

---

## Implementation Notes

- Agent is implemented in TypeScript using Anthropic Claude Sonnet 4.6
- Streaming output is real-time token-by-token
- Session memory carries context across conversation turns
- Outputs are Markdown-formatted for readability and exportability

---

**Generated:** 2026-06-05  
**System:** EFM Agentic AI (v0.1)
