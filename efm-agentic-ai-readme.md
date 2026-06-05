# EFM Agentic AI — Multi-Agent Enterprise Architecture System

> Each architecture domain and excellence framework **is** an autonomous agent. The Orchestrator plans, routes, and synthesises. Agents use tools, share memory, and collaborate to answer any enterprise architecture question.

---

## What This Is

EFM Agentic AI is a **real multi-agent system** built with Claude's tool use API. It is not a form generator — the application itself is the agent system. Each of the 33 enterprise architecture domains and excellence frameworks is a specialised AI agent with its own system prompt, domain expertise, and tool catalogue.

When you submit a request, the **Orchestrator** analyses it, invokes the relevant agents (via Claude tool use), streams their live outputs, and synthesises a unified response.

---

## System Architecture

```
User Request
    │
    ▼
┌─────────────────────────────────────────────────────┐
│                   ORCHESTRATOR                       │
│  (Claude claude-sonnet-4-6 + 33 agent tools)              │
│  • Analyses intent                                  │
│  • Selects relevant agents (typically 2–6)          │
│  • Routes tasks with precise instructions           │
│  • Synthesises all outputs into unified response    │
└────────┬────────────┬───────────────┬───────────────┘
         │            │               │
    tool_use      tool_use       tool_use
         │            │               │
         ▼            ▼               ▼
  ┌────────────┐ ┌────────────┐ ┌────────────┐
  │ Cloud      │ │ AI Arch    │ │ Governance │  ... up to 33 agents
  │ Agent      │ │ Agent      │ │ Agent      │
  │            │ │            │ │            │
  │ • Tools    │ │ • Tools    │ │ • Tools    │
  │ • Memory   │ │ • Memory   │ │ • Memory   │
  │ • Expertise│ │ • Expertise│ │ • Expertise│
  └────────────┘ └────────────┘ └────────────┘
         │            │               │
         └────────────┴───────────────┘
                      │
                 tool_results
                      │
                      ▼
             ORCHESTRATOR SYNTHESIS
                      │
                      ▼
              Unified Final Output
```

### Agentic Loop (Claude Tool Use)

```
1. Orchestrator call → Claude returns tool_use blocks
2. For each tool_use block → execute named agent (Claude call)
3. Agent streams its output token-by-token
4. tool_result returned to Orchestrator
5. Orchestrator synthesises → final text response
6. Turn saved to session memory
7. Next request carries conversation history
```

---

## The Agents (41 + Orchestrator)

**Core System:** 41 specialised agents + 1 Master Orchestrator = comprehensive enterprise architecture coverage.

### Group 1 — Cloud & Infrastructure (5 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Cloud Architecture Agent | `cloud` | Multi-cloud strategy, landing zones, FinOps, cloud operating model | assess_current_state · design_landing_zone · calculate_finops_model · build_roadmap |
| Platform Architecture Agent | `platform` | IDP, golden paths, platform engineering, developer experience | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Infrastructure Architecture Agent | `infrastructure` | Compute, storage, IaC, automation, GitOps | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Network Architecture Agent | `network` | Zero-trust, SD-WAN, microsegmentation, DNS, CDN | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Edge Architecture Agent | `edge` | Edge computing, CDN, 5G/MEC, low-latency AI | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

### Group 2 — AI, Data & Knowledge (8 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| AI Architecture Agent | `ai` | Enterprise AI platform, ML infra, responsible AI, AI governance | assess_ai_readiness · design_target_architecture · create_governance_model · build_roadmap |
| Agentic AI Architecture Agent | `agentic-ai` | Multi-agent systems, LLM orchestration, agent frameworks, tool use | design_agent_topology · design_target_architecture · create_governance_model · build_roadmap |
| Digital Worker Architecture Agent | `digital-worker` | AI workforce, human-agent teaming, digital colleague model | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Analytics Architecture Agent | `analytics` | BI, lakehouse, data products, semantic layer, self-serve | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| MLOps Architecture Agent | `mlops` | ML pipeline, feature store, model registry, drift detection | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| LLMOps Architecture Agent | `llmops` | LLM serving, RAG, prompt management, eval framework | design_rag_pipeline · design_target_architecture · create_governance_model · build_roadmap |
| AgentOps Architecture Agent | `agentops` | Agent observability, tracing, eval, CI/CD for agents | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Knowledge Architecture Agent | `knowledge` | Knowledge graphs, ontologies, semantic layer, enterprise memory | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

### Group 3 — Operations & Delivery (5 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Observability Architecture Agent | `observability` | Metrics, logs, traces, AIOps, SLOs, alerting | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| SRE Architecture Agent | `sre` | SLOs, error budgets, toil elimination, incident management, chaos | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| DevSecOps Architecture Agent | `devsecops` | Secure CI/CD, SBOM, supply chain security, secrets management | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Digital Twin Architecture Agent | `digital-twin` | Digital twin platform, simulation, real-time mirroring | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| IoT Architecture Agent | `iot` | IoT platform, device lifecycle, MQTT, edge-cloud integration | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

### Group 4 — Governance & Risk (5 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Governance Architecture Agent | `governance` | EA governance, ARB, decision rights, policy-as-code, COBIT | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Risk Architecture Agent | `risk` | Risk registers, threat modelling, BCDR, risk quantification | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Compliance Architecture Agent | `compliance` | Regulatory mapping, compliance-as-code, audit, GDPR/SOX/PCI | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Resilience Architecture Agent | `resilience` | HA, DR, chaos engineering, fault tolerance, multi-region | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| FinOps Architecture Agent | `finops` | Cloud cost governance, showback/chargeback, unit economics | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

### Group 5 — Experience & Information (3 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Customer Experience Architecture Agent | `customer-experience` | CX journeys, omnichannel, personalisation, CDP | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Product Architecture Agent | `product` | Product-led growth, API-first, feature flags, product analytics | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Information Architecture Agent | `information` | Taxonomy, metadata management, information flows, content lifecycle | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

### Group 6 — Enterprise & Strategy (4 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Digital Enterprise Architecture Agent | `digital-enterprise` | Digital transformation, operating model design, platform business | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Autonomous Enterprise Architecture Agent | `autonomous-enterprise` | Self-governing systems, AI-driven operations, continuous learning | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Architecture-as-Code Agent | `arch-as-code` | ADR management, drift detection, policy-as-code, architecture DSL | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Enterprise Semantic Architecture Agent | `semantic` | Enterprise ontologies, RDF/OWL, linked data, semantic interoperability | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

### Group 7 — Excellence Frameworks (3 agents)

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Portfolio Excellence Agent (EPEO) | `portfolio-excellence` | Portfolio strategy, investment governance, value realization, PMO | prioritise_portfolio · assess_current_state · create_governance_model · build_roadmap |
| Enterprise Architecture Excellence Agent (EAO) | `enterprise-arch-excellence` | EA practice, ARB, TOGAF, maturity, CoE, architecture governance | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Business Architecture Excellence Agent (BACoE) | `business-arch-excellence` | Capability modelling, value streams, TOM, BIZBOK, BA CoE | map_capability_to_value · assess_current_state · create_governance_model · build_roadmap |

### Group 8 — Core Technical (8 agents) — PHASE 1 ADDITIONS

| Agent | ID | Expertise | Tools |
|---|---|---|---|
| Data Architecture Agent | `data-architecture` | Database design, data modeling, polyglot persistence, replication, sharding | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Integration Architecture Agent | `integration-architecture` | Enterprise Integration Patterns, API gateways, message brokers, event-driven | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Security Architecture Agent | `security-architecture` | Defense-in-depth, threat modeling, cryptography, zero-trust, IAM, SIEM | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| API Architecture Agent | `api-architecture` | REST, GraphQL, gRPC, API-first, versioning, rate limiting, OpenAPI | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Event-Driven Architecture Agent | `event-driven-architecture` | Event streaming, event sourcing, CQRS, Kafka, sagas, event choreography | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Microservices Architecture Agent | `microservices-architecture` | Service decomposition (DDD), API contracts, service mesh, circuit breakers, tracing | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Container & Orchestration Architecture Agent | `container-orchestration` | Kubernetes, container design, Operators, Helm, ArgoCD, storage, RBAC | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |
| Serverless Architecture Agent | `serverless-architecture` | Lambda/Cloud Functions, event-driven serverless, function composition, cost optimisation | assess_current_state · design_target_architecture · create_governance_model · build_roadmap |

---

## Memory Model

| Memory Type | Where | What It Stores | Lifetime |
|---|---|---|---|
| **Working Memory** | Server (per request) | Current task context, agent outputs being built | Single request |
| **Session Memory** | Client state | Full conversation history — all turns, agent outputs | Browser session |
| **Conversation Context** | Passed in API call | Previous turns as `MessageParam[]` | Carried across turns |
| **Agent Context** | Per agent call | Orchestrator's task + context from prior agents | Per invocation |

Each new request includes the full conversation history, so agents have context from previous turns and can build on prior work.

---

## Tool Architecture

Every agent has at minimum these 4 base tools:

| Tool | Purpose |
|---|---|
| `assess_current_state` | Assess current state in the domain from the org's context |
| `design_target_architecture` | Design the target architecture with components and patterns |
| `create_governance_model` | Create governance model with controls, standards, review processes |
| `build_roadmap` | Build phased implementation roadmap with milestones and KPIs |

Domain-specialised agents have additional tools:
- Cloud Agent → `design_landing_zone`, `calculate_finops_model`
- Agentic AI Agent → `design_agent_topology`
- LLMOps Agent → `design_rag_pipeline`
- Portfolio Excellence Agent → `prioritise_portfolio`
- Business Architecture Agent → `map_capability_to_value`

---

## UI: Agent Workspace

```
┌──────────────────────────────────────────────────────────────────────┐
│ EFM Agentic AI  ⚡  |  33 agents  |  Orchestrator · Planner · Memory │
├──────────────┬───────────────────────────────────────────────────────┤
│              │  [ Request textarea ]                   [ Run ]       │
│  AGENT       │  [ Example: Design AI banking platform... ]           │
│  ROSTER      ├───────────────────────────────────────────────────────┤
│              │  [Execution Log]  [Output]                            │
│  ☁ Cloud     │                                                       │
│  ● Platform  │  ORCH  Analysing request, selecting agents...        │
│  ● Infra     │  PLAN  Routing to: Cloud Agent, AI Agent, Risk Agent  │
│  ● Network   │  ─────────────────────────────────────────────────── │
│  ● Edge      │  ☁ Cloud Architecture Agent                          │
│              │  Task: Design cloud foundation for AI workloads       │
│  ◇ AI (●)    │  ┌─ Streaming output... ──────────────────────────── │
│  ⬟ Agentic   │  │  ## Cloud Architecture Design                     │
│  ⬠ D.Worker  │  │  The recommended landing zone architecture...     │
│  ◑ Analytics │  └──────────────────────────────────────────────────  │
│  ...         │                                                       │
│              │  ◇ AI Architecture Agent                             │
│  ★ Portfolio │  Task: Design AI platform for banking use cases       │
│  ✦ EA Excel  │  ┌─ Streaming output... ──────────────────────────── │
│  ✧ BA Excel  │  └──────────────────────────────────────────────────  │
│              │                                                       │
│  Status:     │  SYNTH  Synthesising unified response...             │
│  3 active    │                                                       │
│  2 done      │                                                       │
└──────────────┴───────────────────────────────────────────────────────┘
```

**Left panel — Agent Roster:**
- All 33 agents grouped by domain
- Live status: idle (dot) → active (pulsing orange) → done (green ✓)
- Agent count indicators

**Main panel — Two tabs:**
- **Execution Log**: real-time stream of orchestrator thinking, routing decisions, agent activations, and streaming agent outputs
- **Output**: the final synthesised response from the Orchestrator

**Output export:** Copy · PDF · Word (.docx)

---

## SSE Event Stream

The `/api/orchestrate` endpoint streams Server-Sent Events:

| Event | When | Payload |
|---|---|---|
| `orchestrator_token` | Orchestrator is thinking/synthesising | `token: string` |
| `plan_agents` | Agents have been selected | `agents: [{id, name, task}]` |
| `agent_start` | An agent is being invoked | `agentId, agentName, task` |
| `agent_token` | An agent is streaming its output | `agentId, token` |
| `agent_done` | An agent has completed | `agentId` |
| `synthesis_start` | Orchestrator beginning synthesis | — |
| `synthesis_token` | Synthesis output streaming | `token` |
| `done` | Orchestration complete | — |
| `error` | An error occurred | `message` |

---

## Project Structure

```
efm-agentic-ai/
├── app/
│   ├── api/
│   │   └── orchestrate/
│   │       └── route.ts          # Agentic loop + SSE streaming
│   ├── globals.css               # Dark slate theme, orange accents
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # App shell (renders AgentWorkspace)
├── components/
│   └── AgentWorkspace.tsx        # Full workspace UI with agent roster,
│                                 # execution log, and output panel
├── lib/
│   ├── agents.ts                 # 33 agent definitions — system prompts,
│   │                             # tools, expertise, group membership
│   ├── orchestrator.ts           # Orchestrator system prompt, tool builder,
│   │                             # memory types, SSE event types
│   └── export.ts                 # PDF (jsPDF) and Word (docx) export
├── .env.local                    # ANTHROPIC_API_KEY
└── .gitignore
```

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js App Router | 16.2.7 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| AI / Agents | Anthropic Claude Sonnet 4.6 (tool use + streaming) | SDK 0.100.1 |
| Streaming | Server-Sent Events (SSE) over ReadableStream | — |
| PDF Export | jsPDF | 4.2.1 |
| Word Export | docx | 9.7.1 |

---

## Standards the Agents Reference

| Standard | Agents |
|---|---|
| ISO 42001 (AI Management) | AI, Agentic AI, AgentOps, Risk, Governance, Compliance |
| NIST AI RMF | AI, Risk, Compliance, Governance |
| EU AI Act | AI, Agentic AI, Compliance, Risk |
| OWASP LLM Top 10 | LLMOps, AgentOps, DevSecOps, Agentic AI |
| TOGAF 10 | EA Excellence, Governance, Digital Enterprise |
| BIZBOK | Business Architecture Excellence |
| DAMA-DMBOK | Analytics, Knowledge, Information |
| FinOps Foundation | FinOps, Cloud |
| NIST SP 800-207 (Zero Trust) | Network, DevSecOps, Compliance |
| Google SRE Book | SRE, Observability |
| CNCF Cloud Native | Cloud, Platform, Infrastructure |

---

## Getting Started

```bash
# 1. Configure API key
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env.local

# 2. Install
npm install

# 3. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Try: *"Design an AI-first banking platform with autonomous operations"*

The Orchestrator will route to 4–6 relevant agents, stream their live outputs, and synthesise a unified architecture response.

---

## How It Differs from `arch-as-a-service`

| | `arch-as-a-service` | `efm-agentic-ai` |
|---|---|---|
| **Nature** | Form-based generator | Real multi-agent system |
| **Agents** | None — single LLM call per domain | 41 specialised agents + Orchestrator |
| **Routing** | User selects domain manually | Orchestrator selects agents via tool use |
| **Streaming** | Single agent stream | Multiple concurrent agent streams + synthesis |
| **Memory** | No session memory | Full conversation history across turns |
| **Multi-domain** | One domain per generation | Cross-domain synthesis in one response |
| **Tool use** | No | Yes — Claude tool_use API (agentic loop) |
| **Session** | Stateless | Stateful conversation with context |
