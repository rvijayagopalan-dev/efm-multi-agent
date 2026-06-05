# Agent System Prompts — EFM Agentic AI

Complete documentation for all 41 specialised agents.

Each agent is an autonomous expert in their domain with a detailed system prompt that establishes their role, expertise, responsibilities, and standards.

---

## Quick Navigation

### Group 1: Core Technical (8) — Phase 1 Expansion

- [Data Architecture](data-architecture.md)
- [Integration Architecture](integration-architecture.md)
- [Security Architecture](security-architecture.md)
- [API Architecture](api-architecture.md)
- [Event-Driven Architecture](event-driven-architecture.md)
- [Microservices Architecture](microservices-architecture.md)
- [Container & Orchestration](container-orchestration.md)
- [Serverless Architecture](serverless-architecture.md)

### Group 2: Cloud & Infrastructure (5)

- [Cloud Architecture](cloud.md)
- [Platform Architecture](platform.md)
- [Infrastructure Architecture](infrastructure.md)
- [Network Architecture](network.md)
- [Edge Architecture](edge.md)

### Group 3: AI, Data & Knowledge (8)

- [AI Architecture](ai.md)
- [Agentic AI Architecture](agentic-ai.md)
- [Digital Worker Architecture](digital-worker.md)
- [Analytics Architecture](analytics.md)
- [MLOps Architecture](mlops.md)
- [LLMOps Architecture](llmops.md)
- [AgentOps Architecture](agentops.md)
- [Knowledge Architecture](knowledge.md)

### Group 4: Operations & Delivery (5)

- [Observability Architecture](observability.md)
- [SRE Architecture](sre.md)
- [DevSecOps Architecture](devsecops.md)
- [Digital Twin Architecture](digital-twin.md)
- [IoT Architecture](iot.md)

### Group 5: Governance & Risk (5)

- [Governance Architecture](governance.md)
- [Risk Architecture](risk.md)
- [Compliance Architecture](compliance.md)
- [Resilience Architecture](resilience.md)
- [FinOps Architecture](finops.md)

### Group 6: Experience & Information (3)

- [Customer Experience Architecture](customer-experience.md)
- [Product Architecture](product.md)
- [Information Architecture](information.md)

### Group 7: Enterprise & Strategy (4)

- [Digital Enterprise Architecture](digital-enterprise.md)
- [Autonomous Enterprise Architecture](autonomous-enterprise.md)
- [Architecture-as-Code](arch-as-code.md)
- [Enterprise Semantic Architecture](semantic.md)

### Group 8: Excellence Frameworks (3)

- [Portfolio Excellence](portfolio-excellence.md)
- [Enterprise Architecture Excellence](enterprise-arch-excellence.md)
- [Business Architecture Excellence](business-arch-excellence.md)

---

## About These Documents

Each agent markdown file contains:

- **Agent Identity** — ID, group, expertise area
- **System Prompt Overview** — Role and responsibilities
- **Domain Expertise** — Key knowledge areas
- **Standard Tools** — Base tools (assess, design, govern, plan)
- **Standards & Frameworks** — Applicable standards (TOGAF, NIST, ISO, etc.)
- **Implementation Details** — Technology stack and approach

## How Agents Are Invoked

The **Orchestrator** analyzes your request and selects relevant agents:

```
User Request
    ↓
Orchestrator selects 2–6 agents
    ↓
Agents execute in parallel with streaming output
    ↓
Orchestrator synthesizes responses
```

## System Prompt Structure

All agent prompts follow this pattern:

```
You are the [Agent Name], a world-class enterprise specialist.

EXPERTISE: [Domain expertise]

RESPONSIBILITIES:
1. [Key responsibility]
2. [Key responsibility]
...

WHEN INVOKED, PRODUCE:
- [Output type]
- [Output type]
...

STANDARDS & FRAMEWORKS: [Applicable standards]
```

## Key Standards Referenced

- **TOGAF 10** — Enterprise Architecture Framework
- **NIST Frameworks** — Cybersecurity, AI Risk Management
- **ISO Standards** — 27001 (security), 42001 (AI management)
- **BIZBOK** — Business Architecture guide
- **DAMA-DMBOK** — Data management framework

---

**Total Agents:** 41 specialists + 1 Orchestrator  
**Last Updated:** 2026-06-05  
**System:** EFM Agentic AI (v0.1)
