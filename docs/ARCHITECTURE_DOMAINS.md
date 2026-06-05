# Enterprise Architecture Domains — EFM Agentic AI

This document catalogs all 33+ architecture domains and excellence frameworks currently implemented, plus identified gaps and proposed additions.

---

## Current Implementation (33 agents)

### ✓ Group 1: Cloud & Infrastructure (5)
- Cloud Architecture
- Platform Architecture
- Infrastructure Architecture
- Network Architecture
- Edge Architecture

### ✓ Group 2: AI, Data & Knowledge (8)
- AI Architecture
- Agentic AI Architecture
- Digital Worker Architecture
- Analytics Architecture
- MLOps Architecture
- LLMOps Architecture
- AgentOps Architecture
- Knowledge Architecture

### ✓ Group 3: Operations & Delivery (5)
- Observability Architecture
- SRE Architecture
- DevSecOps Architecture
- Digital Twin Architecture
- IoT Architecture

### ✓ Group 4: Governance & Risk (5)
- Governance Architecture
- Risk Architecture
- Compliance Architecture
- Resilience Architecture
- FinOps Architecture

### ✓ Group 5: Experience & Information (3)
- Customer Experience Architecture
- Product Architecture
- Information Architecture

### ✓ Group 6: Enterprise & Strategy (4)
- Digital Enterprise Architecture
- Autonomous Enterprise Architecture
- Architecture-as-Code Architecture
- Enterprise Semantic Architecture

### ✓ Group 7: Excellence Frameworks (3)
- Portfolio Excellence (EPEO)
- Enterprise Architecture Excellence (EAO)
- Business Architecture Excellence (BACoE)

**Total: 33 agents**

---

## Identified Gaps & Proposed Additions

### 📌 Group 8: Core Technical Architectures (8 new agents)

These are foundational architecture patterns missing from the current roster.

#### 8.1 **Data Architecture Agent** `data-architecture`
*Missing: Foundational data layer design*

**Expertise:** Database design, data modeling, polyglot persistence, data warehousing, data lakes, OLTP/OLAP, schema design, CAP theorem, ACID/BASE, distributed databases, time-series data.

**Responsibilities:**
- Design data models (relational, NoSQL, graph, time-series)
- Recommend database technologies (PostgreSQL, MongoDB, Neo4j, ClickHouse, etc.)
- Data consistency & partitioning strategies
- Backup, replication, sharding approaches
- Data archival & retention policies
- GDPR/CCPA compliance for data storage

**Standards:** CAP theorem, ACID, BASE, ISO/IEC 27001, data governance frameworks

---

#### 8.2 **Integration Architecture Agent** `integration-architecture`
*Missing: System integration patterns & middleware*

**Expertise:** Enterprise Integration Patterns (EIP), API gateways, message brokers, ESB design, event-driven integration, iPaaS, MuleSoft, Apache Kafka, RabbitMQ, API orchestration, EDI, B2B integrations.

**Responsibilities:**
- Design integration topologies (hub-and-spoke, choreography, point-to-point)
- Event-driven architecture design
- API gateway & management strategies
- Message broker selection & configuration
- ETL/ELT pipeline design
- Real-time vs. batch integration patterns
- Error handling & compensation flows

**Standards:** EIP, OpenAPI/Swagger, AsyncAPI, Apache Kafka patterns, MQTT

---

#### 8.3 **Security Architecture Agent** `security-architecture`
*Missing: Dedicated security-first architecture (beyond DevSecOps)*

**Expertise:** Defense-in-depth, threat modeling, cryptography, identity & access management, zero-trust, SIEM, secrets management, encryption strategies, supply-chain security, API security, authentication/authorization patterns.

**Responsibilities:**
- Threat modeling & attack surface analysis
- Authentication & authorization frameworks (OAuth2, OIDC, SAML, mTLS)
- Encryption strategies (data at rest, in transit, in use)
- Secrets management architecture
- Identity federation & SSO design
- Zero-trust network architecture
- Security controls mapping (NIST, ISO 27001)

**Standards:** NIST Cybersecurity Framework, ISO 27001/27002, OWASP Top 10, MITRE ATT&CK

---

#### 8.4 **API Architecture Agent** `api-architecture`
*Missing: API design patterns & API-first strategy*

**Expertise:** REST, GraphQL, gRPC, AsyncAPI design, API versioning, rate limiting, throttling, API product management, API monetization, OpenAPI/Swagger, API gateway patterns, API security.

**Responsibilities:**
- API design (REST, GraphQL, gRPC trade-offs)
- API versioning & evolution strategies
- API documentation standards
- Rate limiting & quota management
- API gateway selection & configuration
- API security (OAuth2, API keys, mTLS)
- API-first vs. API-as-an-afterthought approaches

**Standards:** OpenAPI 3.x, AsyncAPI 2.x, GraphQL specification, HAL, JSON:API

---

#### 8.5 **Event-Driven Architecture Agent** `event-driven-architecture`
*Missing: Event-first design patterns*

**Expertise:** Event streaming, event sourcing, CQRS, Kafka architecture, event choreography vs. orchestration, sagas, compensating transactions, event schema management, Avro, Protobuf.

**Responsibilities:**
- Event schema design & management
- Event streaming topology (Kafka, Pulsar, Kinesis)
- Event sourcing & event store design
- CQRS pattern implementation
- Sagas & compensating transactions
- Event choreography patterns
- Temporal ordering & idempotency

**Standards:** Kafka ecosystem, CloudEvents spec, Avro, Protobuf

---

#### 8.6 **Microservices Architecture Agent** `microservices-architecture`
*Missing: Microservices-specific patterns (beyond Platform)*

**Expertise:** Service boundaries (DDD, strangler pattern), API contracts, distributed tracing, circuit breakers, bulkheads, service mesh (Istio, Linkerd), sidecar patterns, polyglot services, orchestration vs. choreography.

**Responsibilities:**
- Service decomposition strategies
- API contract definition & testing (Spring Cloud Contract, Pact)
- Distributed tracing instrumentation
- Resilience patterns (circuit breaker, retry, timeout)
- Service mesh architecture
- Sidecar & operator patterns
- Data consistency in distributed systems

**Standards:** CQRS, Saga pattern, Circuit breaker, Bulkhead, Timeout patterns

---

#### 8.7 **Container & Orchestration Architecture Agent** `container-orchestration`
*Missing: Kubernetes-native architecture patterns*

**Expertise:** Kubernetes architecture, container design, Pod patterns, Operators, Helm, ArgoCD, container networking, storage classes, RBAC, admission controllers, multi-cluster Kubernetes, GitOps.

**Responsibilities:**
- Kubernetes cluster design (single vs. multi-cluster)
- Container image strategy (base images, SBOMs, scanning)
- Pod networking & network policies
- Storage architecture (PVs, PVCs, StatefulSets)
- RBAC & security policies
- Kubernetes Operators for custom resources
- ArgoCD/FluxCD GitOps workflows
- Multi-cloud Kubernetes strategy

**Standards:** Kubernetes API, CNCF landscape, OCI image spec, Helm 3

---

#### 8.8 **Serverless Architecture Agent** `serverless-architecture`
*Missing: Serverless & FaaS patterns*

**Expertise:** Lambda, Cloud Functions, Cloud Run, event-driven serverless, function composition, cold starts, state management, cost optimization, frameworks (SAM, Serverless Framework), database considerations, API Gateway patterns.

**Responsibilities:**
- Serverless function design patterns
- Event source selection & configuration
- State management strategies (DynamoDB, Firestore, etc.)
- Cost optimization & concurrency tuning
- Cold start mitigation
- Function composition & orchestration (Step Functions, Durable Functions)
- Observability for serverless
- Hybrid serverless + container strategies

**Standards:** CloudFormation SAM, OpenFaaS spec, AWS Lambda best practices

---

### 📌 Group 9: Architectural Specializations (6 new agents)

Domain-specific architecture patterns for particular technology stacks or industries.

#### 9.1 **Database Architecture Agent** `database-architecture`
*Missing: Specialized database design (distinct from Data Architecture)*

**Expertise:** RDBMS (PostgreSQL, MySQL, Oracle), NoSQL (MongoDB, Cassandra), Search (Elasticsearch), Graph (Neo4j), Time-series (InfluxDB, Prometheus), In-memory (Redis, Memcached), NewSQL (CockroachDB, TiDB).

**Responsibilities:**
- Database selection matrix (consistency, availability, partition tolerance)
- Schema design & normalization (1NF–5NF, denormalization)
- Indexing strategies & query optimization
- Replication & failover topologies
- Backup & recovery procedures
- Capacity planning & scaling
- Multi-tenant data isolation

**Standards:** CAP theorem, ACID properties, ISO/IEC SQL standards, transaction isolation levels

---

#### 9.2 **Real-Time Architecture Agent** `realtime-architecture`
*Missing: Low-latency, streaming, and real-time systems*

**Expertise:** Stream processing (Kafka Streams, Flink, Spark Structured Streaming), real-time analytics, WebSockets, Server-Sent Events, MQTT, IoT real-time, latency SLOs, time-window aggregations, Lambda/Kappa architectures.

**Responsibilities:**
- Stream processing topology design
- Windowing & aggregation strategies
- State management in streaming systems
- Exactly-once vs. at-least-once guarantees
- Real-time analytics pipelines
- Pub/sub topologies (MQTT, WebSockets)
- Latency monitoring & tracing

**Standards:** Apache Kafka, Flink, MQTT 5.0, WebSocket RFC 6455

---

#### 9.3 **Reference Architecture Agent** `reference-architecture`
*Missing: Pre-built, industry-specific architecture patterns*

**Expertise:** Well-Architecture Framework (AWS), Google Cloud Architecture Framework, Azure Architecture Center, industry blueprints (e-commerce, banking, healthcare, manufacturing), CARP frameworks, quickstart templates.

**Responsibilities:**
- Industry-specific architecture selection (e-commerce, fintech, healthtech, SaaS)
- Cloud provider architecture frameworks
- Workload-specific patterns (web, mobile, IoT, batch, stream)
- Well-architected reviews & scores
- Cost-optimized blueprints
- Security-first reference architectures
- Compliance-ready templates (HIPAA, PCI-DSS, GDPR)

**Standards:** AWS WAF, Google Cloud's ACES framework, Azure's design principles, TOGAF reference architectures

---

#### 9.4 **Messaging & Queuing Architecture Agent** `messaging-architecture`
*Missing: Message brokers, queues, and async patterns (beyond Integration)*

**Expertise:** RabbitMQ, Apache Kafka, AWS SQS/SNS, Azure Service Bus, Redis Streams, message patterns (pub/sub, request/reply, fanout), dead-letter queues, message ordering, exactly-once semantics.

**Responsibilities:**
- Message broker selection (latency, throughput, ordering)
- Topic & queue topology design
- Partition strategies & consumer groups
- Message serialization (JSON, Avro, Protobuf)
- Dead-letter queue handling
- Exactly-once message processing
- Message durability & replication

**Standards:** AMQP, MQTT, Apache Kafka protocol, CloudEvents

---

#### 9.5 **Machine Learning Ops Architecture Agent** `mlops-architecture-specialized`
*Refinement: More specialized than existing MLOps agent*

**Expertise:** ML feature stores (Feast, Tecton), model registries (MLflow, Hugging Face), model serving (KServe, BentoML, TensorFlow Serving), drift detection, retraining pipelines, A/B testing for ML, experiment tracking, AutoML, federated learning.

**Responsibilities:**
- Feature pipeline orchestration
- Model versioning & registry design
- Model deployment strategies (blue/green, canary for models)
- Model monitoring & drift detection
- Retraining automation triggers
- A/B testing framework for models
- Model explainability (XAI, SHAP)
- Data quality assurance for training

**Standards:** MLflow, Kubeflow, OpenML, MLOps.community, IEEE 2801

---

#### 9.6 **Infrastructure-as-Code Architecture Agent** `iac-architecture`
*Missing: IaC tooling & patterns (beyond Architecture-as-Code)*

**Expertise:** Terraform, CloudFormation, Ansible, Pulumi, Crossplane, Helm, declarative vs. imperative, state management, GitOps workflows, cost estimation, drift detection, multi-cloud IaC.

**Responsibilities:**
- IaC tool selection & comparison
- Declarative vs. imperative approaches
- Terraform module design & composition
- State file management & remote backends
- Version control integration (Git branches/workflows)
- Cost estimation from IaC
- Drift detection & remediation
- Multi-cloud IaC strategies

**Standards:** Terraform HCL, CloudFormation YAML/JSON, Crossplane CRDs, HelmChart specs

---

### 📌 Group 10: Emerging & Future-Forward Domains (4 new agents)

Next-generation architecture patterns gaining relevance.

#### 10.1 **AI/ML Architecture Agent (Specialized)** `ai-ml-ops-unified`
*Refined/expanded: Unified ML platform architecture*

**Expertise:** End-to-end ML systems (data → training → serving → monitoring), MLOps platforms, prompt engineering at scale, fine-tuning strategies, RAG systems, multi-model serving, guardrails, evaluation frameworks, production ML reliability.

**Responsibilities:**
- Data pipeline orchestration (DVC, MLflow, Kubeflow)
- Model training on clusters (distributed training, AutoML)
- Prompt management & optimization
- Fine-tuning at scale (LoRA, QLoRA)
- RAG system architecture
- Model evaluation & benchmarking
- Production guardrails & content filtering
- MLOps platform selection

**Standards:** MLOps.community maturity model, OpenML, Hugging Face Hub, LLM evaluation frameworks (HELM, OpenLLM-Leaderboard)

---

#### 10.2 **Distributed Systems Architecture Agent** `distributed-systems-architecture`
*Missing: Consensus, coordination, and consistency patterns*

**Expertise:** Distributed consensus (Raft, Paxos, PBFT), coordination services (etcd, Zookeeper, Consul), eventual consistency, strong consistency patterns, vector clocks, happened-before relationships, split-brain scenarios.

**Responsibilities:**
- Consensus algorithm selection
- Distributed transaction patterns (2PC, Saga)
- Coordination service architecture
- Partition tolerance strategies
- Consistency models (strong, eventual, causal)
- Distributed tracing & debugging
- Byzantine fault tolerance (when relevant)

**Standards:** Raft, Paxos, SWIM gossip protocol, vector clocks, CRDTs

---

#### 10.3 **Quantum-Ready Architecture Agent** `quantum-ready-architecture`
*Emerging: Quantum computing integration & hybrid systems*

**Expertise:** Quantum algorithm integration, hybrid classical-quantum systems, quantum simulators, post-quantum cryptography, quantum-safe migration paths, VQE, QAOA, quantum ML algorithms.

**Responsibilities:**
- Quantum algorithm identification opportunities
- Hybrid quantum-classical system design
- Quantum circuit design & optimization
- Error correction & mitigation strategies
- Post-quantum cryptography migration
- Quantum ML algorithm selection
- Quantum simulator selection (Qiskit, Cirq)

**Standards:** OpenQASM, Qiskit, IBM Quantum, AWS Braket, post-quantum cryptography (NIST PQC)

---

#### 10.4 **Edge AI Architecture Agent** `edge-ai-architecture`
*Missing: On-device ML & edge inference patterns*

**Expertise:** TensorFlow Lite, ONNX Runtime, MediaPipe, on-device inference, model quantization, mobile ML, embedded systems ML, federated learning, privacy-preserving ML at edge.

**Responsibilities:**
- Model compression & quantization
- Edge inference framework selection (TFLite, ONNX, TVM)
- On-device privacy preservation
- Federated learning architecture
- Offline ML capabilities
- Edge GPU/TPU utilization
- Model update strategies
- Bandwidth optimization

**Standards:** ONNX, MediaPipe, TensorFlow Lite, OpenVINO, federated learning papers (FLOWER framework)

---

### 📌 Group 11: Non-Functional & Quality Domains (5 new agents)

Cross-cutting architectural concerns often under-represented.

#### 11.1 **Performance Architecture Agent** `performance-architecture`
*Missing: Systematic performance design & optimization*

**Expertise:** Latency SLOs, throughput targets, performance benchmarking, profiling, caching strategies (L1–L3, CDN, Redis), database query optimization, load testing, capacity planning, Amdahl's law, little's law.

**Responsibilities:**
- SLO/SLI definition for latency & throughput
- Benchmarking & baseline establishment
- Caching layer design (multiple levels)
- Database query optimization
- Load testing strategy & tooling
- Capacity planning & forecasting
- Profiling & flame graph analysis
- Performance monitoring & dashboards

**Standards:** SRE book, Google's SRE principles, SPEC benchmarks, TPC standards

---

#### 11.2 **Scalability Architecture Agent** `scalability-architecture`
*Missing: Growth patterns, horizontal & vertical scaling*

**Expertise:** Horizontal vs. vertical scaling, elasticity, load balancing, auto-scaling policies, session state management, database scaling (sharding, CQRS), distributed caching, global traffic routing.

**Responsibilities:**
- Scaling bottleneck identification
- Horizontal scaling patterns
- Session state management (stateless design)
- Database scaling strategies (read replicas, sharding)
- Load balancer selection & configuration
- Auto-scaling policy design
- Global load balancing (Anycast, GeoDNS)
- Multi-region failover

**Standards:** CAP theorem, eventual consistency, consistent hashing, load-balancing algorithms (LRU, weighted round-robin)

---

#### 11.3 **Reliability & Fault Tolerance Architecture Agent** `reliability-architecture`
*Missing: Systematic failure handling & recovery*

**Expertise:** Failure modes (crash failures, Byzantine failures, slow nodes), bulkheads, circuit breakers, retries, timeouts, chaos engineering, fault injection, degradation strategies, SLA design.

**Responsibilities:**
- Fault tree & FMEA analysis
- Resilience pattern design (bulkhead, circuit breaker, retry, timeout)
- Cascading failure prevention
- Graceful degradation & feature flags
- Chaos engineering & fault injection
- Recovery time objective (RTO) / Recovery point objective (RPO)
- SLA/SLO/SLI hierarchy
- Observability for failures

**Standards:** OWASP resilience, Google SRE, Chaos Toolkit, fault injection patterns

---

#### 11.4 **Cost Optimization Architecture Agent** `cost-optimization-architecture`
*Refinement: Beyond FinOps*

**Expertise:** Unit economics, cost models, waste detection, right-sizing, reserved/committed discounts, spot instances, serverless cost optimization, data transfer optimization, storage tiering.

**Responsibilities:**
- Cost modeling & forecasting
- Waste detection & optimization opportunities
- Reserved instance vs. on-demand analysis
- Spot/preemptible instance strategies
- Serverless cost optimization
- Storage tiering (S3 intelligent-tiering, Iceberg)
- Compute optimization (right-sizing, scheduling)
- Cost-per-user/feature metrics
- Chargeback & showback models

**Standards:** FinOps Foundation framework, AWS Cost Explorer, GCP Cost Intelligence, unit economics metrics

---

#### 11.5 **Testability Architecture Agent** `testability-architecture`
*Missing: Test-driven architecture & architecture for testing*

**Expertise:** Test pyramid, testability patterns, contract testing, integration test architecture, test data management, test environment design, chaos testing, property-based testing, mutation testing.

**Responsibilities:**
- Testability assessment of architecture
- Test pyramid definition (unit/integration/e2e ratios)
- Contract test design (Pact, Spring Cloud Contract)
- Test data strategy & generation
- Test environment topology
- Synthetic monitoring
- Property-based testing (QuickCheck, hypothesis)
- Mutation testing for test quality

**Standards:** Test pyramid, SonarQube, Pact, contract testing patterns

---

---

## Implementation Roadmap

### Phase 1: Core Technical (Highest Priority)
Priority: Groups 8.1–8.3, 9.1 (Data, Integration, Security, Database)
Impact: Foundational for most architecture requests
Timeline: Next sprint

### Phase 2: Async & Streaming (High Priority)
Priority: Groups 8.5–8.6, 9.2, 9.4 (Event-driven, Microservices, Real-time, Messaging)
Impact: Critical for modern distributed systems
Timeline: 2 weeks

### Phase 3: Infrastructure & Operations (Medium Priority)
Priority: Groups 8.4, 8.7–8.8, 9.6 (API, Container, Serverless, IaC)
Impact: Day-to-day architecture decisions
Timeline: Month 2

### Phase 4: Specializations (Medium Priority)
Priority: Groups 9.3, 9.5, 10.1–10.2 (Reference, MLOps-specialized, Distributed Systems, AI/ML)
Impact: Domain-specific expertise
Timeline: Month 2–3

### Phase 5: Emerging & Quality (Lower Priority)
Priority: Groups 10.3–10.4, 11.1–11.5 (Quantum, Edge AI, Performance, Reliability, Cost, Testing)
Impact: Forward-looking, quality attributes
Timeline: Month 3+

---

## Agent Count Projection

| Group | Current | New | Total |
|---|---|---|---|
| 1. Cloud & Infrastructure | 5 | — | 5 |
| 2. AI, Data & Knowledge | 8 | — | 8 |
| 3. Operations & Delivery | 5 | — | 5 |
| 4. Governance & Risk | 5 | — | 5 |
| 5. Experience & Information | 3 | — | 3 |
| 6. Enterprise & Strategy | 4 | — | 4 |
| 7. Excellence Frameworks | 3 | — | 3 |
| **8. Core Technical** | — | **8** | **8** |
| **9. Specializations** | — | **6** | **6** |
| **10. Emerging** | — | **4** | **4** |
| **11. Quality Attributes** | — | **5** | **5** |
| **TOTAL** | **33** | **23** | **56** |

Final system: **56 agents** providing comprehensive enterprise architecture coverage.

---

## Mapping to TOGAF 9 / ISO/IEC/IEEE 42010

| Domain | TOGAF Phase | ADM Function |
|---|---|---|
| Data, API, Integration | Phase B (Business) | Baseline, target analysis |
| Microservices, Event-Driven | Phase C (System & Information) | Application, data, technology |
| Security, Reliability, Performance | Phase D (Technology) | Standards, infrastructure |
| Container, IaC, Quantum | Phase E–F (Implementation) | Projects, migration |
| Reference, Cost, Testing | Governance | Compliance, quality gates |

---

## Success Criteria

- [ ] All 23 new agent system prompts written & validated
- [ ] Agent definitions added to `lib/agents.ts` with expertise & tools
- [ ] 56-agent system tested end-to-end
- [ ] Orchestrator routing logic tested (correct agent selection)
- [ ] Documentation updated with new domains
- [ ] User feedback loop: domain coverage completeness
