# Agent System Prompts — EFM Agentic AI

Complete documentation for all 41 specialised agents.

Each agent is an autonomous expert in their domain with a detailed system prompt that establishes:
- **Role** — World-class enterprise specialist
- **Expertise** — Deep domain knowledge
- **Responsibilities** — Clear objectives
- **Outputs** — Structured deliverables
- **Standards** — Applicable frameworks (TOGAF, NIST, ISO, etc.)

---

## Group 1: Core Technical (8) — Phase 1 Expansion

New foundational architecture domains.

- [Data Architecture](data-architecture.md) — Database design, polyglot persistence
- [Integration Architecture](integration-architecture.md) — Enterprise Integration Patterns, message brokers
- [Security Architecture](security-architecture.md) — Defense-in-depth, threat modeling, zero-trust
- [API Architecture](api-architecture.md) — REST/GraphQL/gRPC, API-first design
- [Event-Driven Architecture](event-driven-architecture.md) — Event streaming, CQRS, Kafka
- [Microservices Architecture](microservices-architecture.md) — Service decomposition, DDD, mesh
- [Container & Orchestration](container-orchestration.md) — Kubernetes, Operators, Helm, ArgoCD
- [Serverless Architecture](serverless-architecture.md) — Lambda, Cloud Functions, state management

---

## Group 2: Cloud & Infrastructure (5)

Cloud strategy and infrastructure foundations.

- [Cloud Architecture](cloud.md) — Multi-cloud strategy, landing zones, FinOps
- [Platform Architecture](platform.md) — Internal Developer Platforms (IDP), platform engineering
- [Infrastructure Architecture](infrastructure.md) — Compute, storage, IaC, automation
- [Network Architecture](network.md) — Zero-trust, SD-WAN, microsegmentation
- [Edge Architecture](edge.md) — Edge computing, CDN, 5G/MEC

---

## Group 3: AI, Data & Knowledge (8)

Artificial intelligence, data management, and knowledge systems.

- [AI Architecture](ai.md) — Enterprise AI platform, ML infrastructure
- [Agentic AI Architecture](agentic-ai.md) — Multi-agent systems, LLM orchestration
- [Digital Worker Architecture](digital-worker.md) — AI workforce, human-agent teaming
- [Analytics Architecture](analytics.md) — BI, data lakes, lakehouse, semantic layer
- [MLOps Architecture](mlops.md) — ML pipelines, feature stores, model registries
- [LLMOps Architecture](llmops.md) — LLM serving, RAG, prompt management
- [AgentOps Architecture](agentops.md) — Agent observability, tracing, evaluation
- [Knowledge Architecture](knowledge.md) — Knowledge graphs, ontologies, semantic layer

---

## Group 4: Operations & Delivery (5)

Operational excellence and delivery infrastructure.

- [Observability Architecture](observability.md) — Metrics, logs, traces, AIOps, SLOs
- [SRE Architecture](sre.md) — Site Reliability Engineering, error budgets, incident management
- [DevSecOps Architecture](devsecops.md) — Secure CI/CD, supply chain security, secrets
- [Digital Twin Architecture](digital-twin.md) — Digital twins, simulation, real-time mirroring
- [IoT Architecture](iot.md) — IoT platforms, device lifecycle, MQTT

---

## Group 5: Governance & Risk (5)

Governance, risk management, and compliance.

- [Governance Architecture](governance.md) — EA governance, ARB, decision rights
- [Risk Architecture](risk.md) — Risk management, threat modeling, BCDR
- [Compliance Architecture](compliance.md) — Regulatory mapping, compliance-as-code, audit
- [Resilience Architecture](resilience.md) — HA/DR, chaos engineering, fault tolerance
- [FinOps Architecture](finops.md) — Cloud cost governance, unit economics

---

## Group 6: Experience & Information (3)

User experience and information management.

- [Customer Experience Architecture](customer-experience.md) — CX journeys, omnichannel, CDP
- [Product Architecture](product.md) — Product-led growth, API-first, feature flags
- [Information Architecture](information.md) — Taxonomy, metadata, information flows

---

## Group 7: Enterprise & Strategy (4)

Enterprise-wide architecture and strategy.

- [Digital Enterprise Architecture](digital-enterprise.md) — Digital transformation, operating model
- [Autonomous Enterprise Architecture](autonomous-enterprise.md) — Self-governing systems, AI-driven ops
- [Architecture-as-Code](arch-as-code.md) — ADR management, policy-as-code, drift detection
- [Enterprise Semantic Architecture](semantic.md) — Enterprise ontologies, linked data

---

## Group 8: Excellence Frameworks (3)

Maturity models and excellence programs.

- [Portfolio Excellence Agent (EPEO)](portfolio-excellence.md) — Portfolio strategy, investment governance
- [Enterprise Architecture Excellence (EAO)](enterprise-arch-excellence.md) — EA practice, TOGAF maturity
- [Business Architecture Excellence (BACoE)](business-arch-excellence.md) — Capability modeling, value streams

---

## How Agents Are Used

### Orchestrator Invocation

The **Orchestrator** analyzes your request and invokes relevant agents:

```
User Request: "Design an AI-first banking platform"
    ↓
Orchestrator Analysis: "Need expertise in: Cloud, AI, Security, Compliance"
    ↓
Agent Invocation: invoke_cloud_agent, invoke_ai_agent, invoke_security_architecture_agent, etc.
    ↓
Parallel Execution: All selected agents execute simultaneously
    ↓
Stream Outputs: Real-time token-by-token output as agents work
    ↓
Synthesis: Orchestrator integrates all outputs into unified response
```

### Agent Tools

Every agent has access to 4 base tools:

| Tool | Use |
|---|---|
| `assess_current_state` | Assess domain state in your organization |
| `design_target_architecture` | Design target state with components, patterns |
| `create_governance_model` | Define governance, controls, standards |
| `build_roadmap` | Create phased implementation plan |

Domain-specific agents may have additional specialized tools.

---

## System Prompt Structure

Each agent's system prompt follows this pattern:

```
You are the [Agent Name], a world-class enterprise specialist.

EXPERTISE: [Domain expertise summary]

RESPONSIBILITIES:
1. [Responsibility 1]
2. [Responsibility 2]
...

WHEN INVOKED, PRODUCE:
- [Output type 1]
- [Output type 2]
...

OUTPUT FORMAT:
Use clear ## headings, tables for comparisons, bullet points for lists.
Be specific, actionable, and cite concrete technology choices.
Always conclude with a prioritised 30/60/90-day action plan.

STANDARDS & FRAMEWORKS: [Applicable standards]
```

---

## Standards & Frameworks Referenced

### Enterprise Architecture
- **TOGAF 10** — The Open Group Architecture Framework
- **ArchiMate 3.x** — Architecture modeling language
- **IEEE 42010** — Architecture description standard

### AI & Data
- **ISO 42001** — AI Management System
- **NIST AI RMF** — AI Risk Management Framework
- **EU AI Act** — Regulatory compliance

### Security & Compliance
- **NIST Cybersecurity Framework** — Security standards
- **ISO 27001/27002** — Information security
- **OWASP Top 10** — Application security

### Business & Operations
- **BIZBOK** — Business Architecture guide
- **DAMA-DMBOK** — Data management framework
- **Google SRE Book** — Site reliability engineering

### Cloud & Infrastructure
- **CAP Theorem** — Consistency, availability, partition tolerance
- **CNCF Landscape** — Cloud Native Computing Foundation
- **Kubernetes** — Container orchestration

---

## Navigation

- **[ARCHITECTURE_DOMAINS.md](../ARCHITECTURE_DOMAINS.md)** — Complete domain catalog and roadmap
- **[../README.md](../README.md)** — Main project documentation
- **[Individual Agent Docs](.)** — Agent-specific system prompts and expertise areas

---

## Quick Links

**By Group:**
- [Core Technical (8)](.)#group-1-core-technical-8--phase-1-expansion)
- [Cloud & Infrastructure (5)](.)#group-2-cloud--infrastructure-5)
- [AI, Data & Knowledge (8)](.)#group-3-ai-data--knowledge-8)
- [Operations & Delivery (5)](.)#group-4-operations--delivery-5)
- [Governance & Risk (5)](.)#group-5-governance--risk-5)
- [Experience & Information (3)](.)#group-6-experience--information-3)
- [Enterprise & Strategy (4)](.)#group-7-enterprise--strategy-4)
- [Excellence Frameworks (3)](.)#group-8-excellence-frameworks-3)

**By Domain:**
- [Data Architecture](data-architecture.md)
- [Integration Architecture](integration-architecture.md)
- [Security Architecture](security-architecture.md)
- [API Architecture](api-architecture.md)
- [Event-Driven Architecture](event-driven-architecture.md)
- [Microservices Architecture](microservices-architecture.md)
- [Container & Orchestration](container-orchestration.md)
- [Serverless Architecture](serverless-architecture.md)
- ... and 33 more

---

## Implementation Details

- **Language:** TypeScript
- **AI Model:** Anthropic Claude Sonnet 4.6
- **Streaming:** Real-time token-by-token output (SSE)
- **Memory:** Session context + conversation history
- **Export:** Markdown, PDF, Word formats

---

**System:** EFM Agentic AI (v0.1)  
**Agents:** 41 specialists + 1 Orchestrator  
**Last Updated:** 2026-06-05
