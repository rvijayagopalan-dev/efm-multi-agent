# EFM Agentic AI Learning Academy

Deep-dive educational resources for all 41 enterprise architecture agents.

Each learning module provides comprehensive coverage of an architecture domain through:
- **Context** — Why this domain matters
- **Core Concepts** — Foundational knowledge and terminology
- **Knowledge Graphs** — Visual relationships and dependencies
- **Ontologies** — Formal domain structure and classifications
- **Relationships** — How this domain connects to others
- **Best Practices** — Industry standards and patterns
- **Checklists** — Practical implementation guides
- **References** — Standards, frameworks, and external resources
- **Code Examples** — Implementation patterns and templates

---

## Core Technical Agents (Phase 1) — Deep Dives

Start here for comprehensive learning on foundational architecture domains.

### [Data Architecture Academy](data-architecture-academy.md)
**Focus:** Database design, polyglot persistence, data modeling, replication strategies

- Relational vs. NoSQL vs. Graph databases
- ACID/BASE consistency models
- Sharding, replication, partitioning strategies
- Data lifecycle management (retention, archival, purging)
- Knowledge graphs: data model relationships
- Implementation checklists and patterns

### [Integration Architecture Academy](integration-architecture-academy.md)
**Focus:** Enterprise Integration Patterns, message brokers, API gateways, event-driven systems

- Enterprise Integration Patterns (EIP) catalog
- Synchronous vs. asynchronous integration trade-offs
- Message broker selection (Kafka, RabbitMQ, Redis Streams)
- API gateway patterns and orchestration
- Event sourcing and CQRS patterns
- Distributed transaction patterns (Saga)

### [Security Architecture Academy](security-architecture-academy.md)
**Focus:** Defense-in-depth, threat modeling, cryptography, zero-trust, IAM

- Threat modeling methodologies (STRIDE, OCTAVE)
- Cryptography fundamentals (TLS, AEAD, key management)
- Zero-trust architecture design
- Identity & access management (OAuth2, OIDC, SAML)
- Secrets management and rotation
- Security controls mapping (NIST, ISO 27001)

### [API Architecture Academy](api-architecture-academy.md)
**Focus:** REST, GraphQL, gRPC, API-first design, versioning, rate limiting

- API design patterns comparison
- REST constraints and best practices
- GraphQL query language and federation
- gRPC performance optimization
- API versioning strategies
- Rate limiting and quota patterns
- OpenAPI/AsyncAPI specifications

### [Event-Driven Architecture Academy](event-driven-architecture-academy.md)
**Focus:** Event streaming, CQRS, event sourcing, Kafka, sagas

- Event modeling and schema design
- Event streaming platforms (Kafka, Pulsar, Kinesis)
- CQRS pattern with separate read/write models
- Event sourcing and event store design
- Saga pattern for distributed transactions
- Temporal reasoning and event ordering

### [Microservices Architecture Academy](microservices-architecture-academy.md)
**Focus:** Service decomposition (DDD), API contracts, service mesh, resilience patterns

- Domain-Driven Design for service boundaries
- API contract testing (Pact, Spring Cloud Contract)
- Service mesh architecture (Istio, Linkerd)
- Resilience patterns (circuit breaker, retry, timeout, bulkhead)
- Distributed tracing and observability
- Data consistency in distributed systems

### [Container & Orchestration Academy](container-orchestration-academy.md)
**Focus:** Kubernetes, container design, Operators, Helm, ArgoCD, RBAC

- Kubernetes cluster architecture and networking
- Container image best practices and security
- Pod patterns (sidecar, ambassador, adapter)
- Kubernetes Operators for custom resources
- Helm package management and templating
- GitOps with ArgoCD and FluxCD
- RBAC and security policies

### [Serverless Architecture Academy](serverless-architecture-academy.md)
**Focus:** Lambda/Cloud Functions, event-driven serverless, state management, cost optimization

- Serverless workload assessment and suitability
- Function design patterns and granularity
- State management strategies (DynamoDB, Firestore, external stores)
- Cold start mitigation and performance optimization
- Function composition and orchestration (Step Functions, Durable Functions)
- Cost modeling and optimization strategies
- Monitoring and debugging serverless applications

---

## Other Agent Learning Modules (Coming Soon)

### Cloud & Infrastructure
- [Cloud Architecture Academy](cloud-architecture-academy.md)
- [Platform Architecture Academy](platform-architecture-academy.md)
- [Infrastructure Architecture Academy](infrastructure-architecture-academy.md)
- [Network Architecture Academy](network-architecture-academy.md)
- [Edge Architecture Academy](edge-architecture-academy.md)

### AI, Data & Knowledge
- [AI Architecture Academy](ai-architecture-academy.md)
- [Agentic AI Architecture Academy](agentic-ai-architecture-academy.md)
- [Digital Worker Architecture Academy](digital-worker-architecture-academy.md)
- [Analytics Architecture Academy](analytics-architecture-academy.md)
- [MLOps Architecture Academy](mlops-architecture-academy.md)
- [LLMOps Architecture Academy](llmops-architecture-academy.md)
- [AgentOps Architecture Academy](agentops-architecture-academy.md)
- [Knowledge Architecture Academy](knowledge-architecture-academy.md)

### Operations & Delivery
- [Observability Architecture Academy](observability-architecture-academy.md)
- [SRE Architecture Academy](sre-architecture-academy.md)
- [DevSecOps Architecture Academy](devsecops-architecture-academy.md)
- [Digital Twin Architecture Academy](digital-twin-architecture-academy.md)
- [IoT Architecture Academy](iot-architecture-academy.md)

### Governance & Risk
- [Governance Architecture Academy](governance-architecture-academy.md)
- [Risk Architecture Academy](risk-architecture-academy.md)
- [Compliance Architecture Academy](compliance-architecture-academy.md)
- [Resilience Architecture Academy](resilience-architecture-academy.md)
- [FinOps Architecture Academy](finops-architecture-academy.md)

### Experience & Information
- [Customer Experience Architecture Academy](customer-experience-architecture-academy.md)
- [Product Architecture Academy](product-architecture-academy.md)
- [Information Architecture Academy](information-architecture-academy.md)

### Enterprise & Strategy
- [Digital Enterprise Architecture Academy](digital-enterprise-architecture-academy.md)
- [Autonomous Enterprise Architecture Academy](autonomous-enterprise-architecture-academy.md)
- [Architecture-as-Code Academy](arch-as-code-academy.md)
- [Enterprise Semantic Architecture Academy](semantic-architecture-academy.md)

### Excellence Frameworks
- [Portfolio Excellence Academy](portfolio-excellence-academy.md)
- [Enterprise Architecture Excellence Academy](enterprise-arch-excellence-academy.md)
- [Business Architecture Excellence Academy](business-arch-excellence-academy.md)

---

## Learning Paths by Role

### For Enterprise Architects
1. Start: [Enterprise Architecture Excellence Academy](enterprise-arch-excellence-academy.md)
2. Foundation: Cloud, Platform, Governance architectures
3. Deep Dive: All core technical domains

### For Solution Architects
1. Start: Understanding your domain (Cloud, Data, Integration, etc.)
2. Foundation: Core technical architectures relevant to your solutions
3. Deep Dive: Security, Compliance, Operations for your tech stack

### For Data Engineers
1. Start: [Data Architecture Academy](data-architecture-academy.md)
2. Foundation: Analytics, MLOps, Integration architectures
3. Deep Dive: Event-driven, real-time streaming patterns

### For Platform Engineers
1. Start: [Platform Architecture Academy](platform-architecture-academy.md)
2. Foundation: Container/Orchestration, Infrastructure, Network
3. Deep Dive: DevOps, SRE, Observability

### For Security Engineers
1. Start: [Security Architecture Academy](security-architecture-academy.md)
2. Foundation: DevSecOps, Network, Compliance
3. Deep Dive: All architecture domains from security perspective

### For AI/ML Engineers
1. Start: [AI Architecture Academy](ai-architecture-academy.md) and [Agentic AI Academy](agentic-ai-architecture-academy.md)
2. Foundation: MLOps, LLMOps, AgentOps
3. Deep Dive: Integration, Data, Analytics for ML systems

---

## Academy Structure

Each learning module follows this consistent structure:

### 1. Context
- Why this architecture domain exists
- Business drivers and technical drivers
- Common pain points
- Evolution and history

### 2. Core Concepts
- Foundational terminology
- Key principles and patterns
- Comparison with alternatives
- Decision frameworks

### 3. Knowledge Graphs
- Visual domain structure
- Relationships between concepts
- Dependency diagrams
- Decision trees

### 4. Ontologies
- Formal domain classification
- Entity types and relationships
- Attributes and properties
- Classification schemes

### 5. Relationships
- How this domain connects to others
- Dependencies and prerequisites
- Integration points
- Cross-cutting concerns

### 6. Best Practices
- Industry standards (TOGAF, NIST, ISO, etc.)
- Proven patterns and anti-patterns
- Common pitfalls and how to avoid them
- Performance and scalability guidance

### 7. Checklists
- Design decision checklist
- Implementation checklist
- Review/audit checklist
- Migration checklist

### 8. References
- Standards and frameworks
- Academic papers and research
- Industry certifications
- External resources

### 9. Code Examples
- Architecture-as-Code (Terraform, CloudFormation, Pulumi)
- Configuration examples (YAML, JSON)
- Implementation patterns (Python, Go, Java, etc.)
- Complete working examples

---

## How to Use This Academy

### Self-Study
1. Choose your domain of interest
2. Read from Context → Core Concepts → Best Practices
3. Use Checklists for practical application
4. Reference Code Examples for implementation

### Team Training
1. Assign learning modules by role
2. Use Checklists for team workshops
3. Discuss Relationships to understand cross-domain dependencies
4. Build shared mental models from Knowledge Graphs

### Architecture Review
1. Reference Best Practices
2. Use Checklists for design validation
3. Consult Relationships for integration points
4. Apply Code Examples for consistency

### Implementation
1. Follow implementation checklists
2. Use Code Examples as templates
3. Reference Best Practices for decisions
4. Validate against Ontologies and Knowledge Graphs

---

## Contributing to the Academy

Each module is living documentation. To contribute:

1. **Add Examples** — Real-world implementations you've seen
2. **Share Patterns** — Document proven approaches
3. **Expand Relationships** — Show connections to other domains
4. **Add References** — Link to standards and research
5. **Refine Checklists** — Based on practical experience

Submit pull requests or issues to improve these learning resources.

---

## Quick Reference

| Domain | Focus | Best For |
|---|---|---|
| Data Architecture | Database design, modeling | Data engineers, architects |
| Integration | EIP, message brokers, APIs | Integration engineers, platform architects |
| Security | Threat modeling, zero-trust | Security engineers, architects |
| API | REST, GraphQL, gRPC | API designers, backend engineers |
| Event-Driven | Event streaming, CQRS | Event architects, backend engineers |
| Microservices | Service decomposition, DDD | Microservices architects, engineers |
| Containers | Kubernetes, orchestration | Platform engineers, DevOps |
| Serverless | Functions, event-driven | Cloud architects, serverless engineers |
| Cloud | Multi-cloud strategy | Cloud architects, platform engineers |
| AI | Enterprise AI platforms | ML architects, data scientists |
| ... and 31 more | ... | ... |

---

## Learning Timeline

**Beginner (0–3 months)**
- Core Concepts from 3–4 domains
- Understanding Relationships
- First Checklists

**Intermediate (3–12 months)**
- Deep Concepts from all domains
- Building Knowledge Graphs
- Creating implementations

**Advanced (12+ months)**
- Mastering Best Practices
- Contributing domain expertise
- Teaching others

---

## Standards Referenced

All academy modules ground learning in industry standards:

- **TOGAF 10** — Enterprise architecture framework
- **NIST AI RMF** — AI Risk Management
- **ISO 27001/27002** — Information security
- **ISO 42001** — AI Management
- **BIZBOK** — Business architecture
- **DAMA-DMBOK** — Data management
- **CAP Theorem** — Distributed systems
- **Enterprise Integration Patterns** — Integration design

---

**Academy Version:** 1.0  
**Last Updated:** 2026-06-05  
**System:** EFM Agentic AI Learning Academy  
**Audience:** Enterprise architects, solution architects, engineers, teams

*Begin your learning journey by selecting a domain above or choosing a learning path for your role.*
