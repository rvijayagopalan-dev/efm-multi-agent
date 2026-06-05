# Comprehensive Cloud Architecture Knowledge Graph

---

## 1. Entity Catalogue (Nodes)

---

### Core Concept Entities

| Entity Name | Definition | Category | Key Attributes |
|---|---|---|---|
| **Cloud Computing** | Delivery of computing services—servers, storage, databases, networking, software, analytics, intelligence—over the Internet to offer faster innovation, flexible resources, and economies of scale | Core Concept | Service models, deployment models, elasticity, on-demand provisioning |
| **Multi-Cloud Strategy** | Deliberate use of two or more cloud providers to avoid vendor lock-in, optimise cost, and increase resilience | Core Concept | Provider diversity, workload portability, governance complexity |
| **Hybrid Cloud** | Architecture combining private on-premises infrastructure with public cloud services, integrated through orchestration and networking | Core Concept | Latency sensitivity, data sovereignty, unified management plane |
| **Cloud-Native Architecture** | Design philosophy where applications are built specifically to exploit cloud platform capabilities—containerisation, microservices, serverless, and declarative APIs | Core Concept | Immutability, ephemeral workloads, 12-factor app principles |
| **Microservices** | Architectural style structuring an application as a collection of loosely coupled, independently deployable services, each responsible for a specific business capability | Core Concept | Service autonomy, API contracts, bounded context, fault isolation |
| **Serverless Computing** | Execution model where the cloud provider dynamically manages resource allocation; developers deploy functions without managing servers | Core Concept | Event-driven, stateless functions, auto-scaling, pay-per-execution |
| **Containers** | Lightweight, portable units of software packaging code and its dependencies together, sharing the host OS kernel | Core Concept | Image layers, namespace isolation, cgroups, portability |
| **Infrastructure as Code (IaC)** | Practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual processes | Core Concept | Idempotency, version control, declarative vs imperative, drift detection |
| **Service Mesh** | Dedicated infrastructure layer handling service-to-service communication, including discovery, load balancing, encryption, observability, and resilience | Core Concept | Sidecar proxy, control plane, data plane, mTLS |
| **Zero Trust Security** | Security model eliminating implicit trust by continuously validating every user, device, and connection even inside the network perimeter | Core Concept | Least privilege, microsegmentation, continuous authentication |
| **Resilience Engineering** | Discipline of designing systems that can absorb disturbances, recover gracefully, and adapt to changing conditions | Core Concept | Fault tolerance, chaos engineering, graceful degradation, RTO/RPO |
| **FinOps** | Financial Operations practice aligning cloud spending with business value through cross-functional collaboration between finance, engineering, and product | Core Concept | Unit economics, showback/chargeback, cost anomaly detection |
| **Data Mesh** | Decentralised data architecture treating data as a product, owned by domain teams who expose it via standardised interfaces | Core Concept | Domain ownership, data product, self-serve platform, federated governance |
| **Edge Computing** | Computation performed at or near data sources, reducing latency and bandwidth consumption compared to centralised cloud processing | Core Concept | Latency, bandwidth efficiency, offline capability, IoT integration |
| **Platform Engineering** | Internal discipline building and operating self-service infrastructure platforms (Internal Developer Platforms) to improve developer experience and reduce cognitive load | Core Concept | Golden paths, developer portals, paved roads, abstraction layers |

---

### Technology & Tool Entities

| Entity Name | Definition | Category | Key Attributes |
|---|---|---|---|
| **Kubernetes (K8s)** | Open-source container orchestration system for automating deployment, scaling, and management of containerised applications | Technology | Pods, nodes, clusters, control plane, etcd, operators |
| **Terraform** | HashiCorp open-source IaC tool using a declarative configuration language (HCL) to provision and manage cloud infrastructure across providers | Technology | State files, providers, modules, plan/apply lifecycle |
| **AWS (Amazon Web Services)** | Amazon's public cloud platform offering 200+ services including compute (EC2), storage (S3), database (RDS/DynamoDB), and AI/ML | Technology | Regions, AZs, IAM, VPC, CloudFormation, Well-Architected |
| **Microsoft Azure** | Microsoft's public cloud platform integrating deeply with enterprise Microsoft ecosystem, Active Directory, and hybrid workloads | Technology | Azure AD, ARM templates, Azure Arc, ExpressRoute |
| **Google Cloud Platform (GCP)** | Google's public cloud emphasising AI/ML, data analytics (BigQuery), and Kubernetes innovation | Technology | GKE, BigQuery, Anthos, VPC-native networking |
| **Istio** | Open-source service mesh providing traffic management, security (mTLS), and observability for microservices running on Kubernetes | Technology | Envoy proxy, Pilot, Citadel, Mixer, telemetry |
| **Prometheus** | Open-source monitoring and alerting toolkit collecting time-series metrics from cloud-native applications via pull-based scraping | Technology | PromQL, exporters, alertmanager, scrape intervals |
| **Grafana** | Open-source observability and analytics platform providing dashboards for metrics, logs, and traces from multiple data sources | Technology | Panels, data sources, alerting, Loki, Tempo |
| **ArgoCD** | Declarative GitOps continuous delivery tool for Kubernetes, synchronising cluster state from Git repositories | Technology | Application CRDs, sync policies, rollback, health status |
| **Vault (HashiCorp)** | Secrets management tool providing secure storage, dynamic secrets generation, encryption as a service, and identity-based access | Technology | Secret engines, auth methods, policies, leases, seal/unseal |
| **Apache Kafka** | Distributed event streaming platform handling high-throughput, fault-tolerant, real-time data pipelines and streaming applications | Technology | Topics, partitions, consumer groups, brokers, offset management |
| **API Gateway** | Managed service acting as a single entry point for APIs, handling routing, authentication, rate limiting, SSL termination, and analytics | Technology | Routes, policies, throttling, transformation, caching |
| **Content Delivery Network (CDN)** | Globally distributed network of proxy servers caching content close to end users, reducing latency and origin load | Technology | PoPs, caching, TTL, edge rules, DDoS mitigation |
| **Virtual Private Cloud (VPC)** | Logically isolated section of a public cloud where resources are launched in a virtual network defined by the user | Technology | Subnets, route tables, security groups, NACLs, peering |
| **Object Storage** | Storage architecture managing data as objects with metadata and unique identifiers; highly scalable and durable (e.g., S3, Azure Blob) | Technology | Buckets, versioning, lifecycle policies, event notifications |

---

### Process & Practice Entities

| Entity Name | Definition | Category | Key Attributes |
|---|---|---|---|
| **CI/CD Pipeline** | Automated workflow combining Continuous Integration (code merging, testing) and Continuous Delivery/Deployment (automated release to production) | Process | Build, test, deploy stages; pipeline triggers; artifact management |
| **GitOps** | Operational model using Git as single source of truth for declarative infrastructure and application configuration, with automated reconciliation | Process | Pull-based deployment, reconciliation loop, audit trail |
| **Chaos Engineering** | Discipline of deliberately injecting failures into systems to test resilience and uncover weaknesses before they cause incidents | Process | Blast radius, steady-state hypothesis, fault injection, game days |
| **FinOps Practice** | Cross-functional workflow of optimising cloud spend through tagging governance, rightsizing, reserved instances, and savings plans | Process | Cost allocation, anomaly detection, budgets, showback reports |
| **Disaster Recovery Planning** | Structured approach for recovering IT systems and data after disruptive events, defining RTO, RPO, and recovery procedures | Process | RTO, RPO, backup strategy, runbook, failover testing |
| **Security Posture Management** | Continuous assessment and improvement of an organisation's security configuration, compliance status, and risk exposure in cloud environments | Process | CSPM, CWPP, compliance benchmarks, remediation workflows |
| **Cloud Migration** | Systematic process of moving applications, data, and workloads from on-premises or legacy environments to cloud platforms | Process | 7Rs (Rehost, Replatform, Refactor…), migration waves, TCO analysis |
| **DevSecOps** | Practice integrating security into every phase of the DevOps lifecycle—shifting security left to catch vulnerabilities earlier | Process | SAST, DAST, SCA, policy as code, security gates |
| **SRE (Site Reliability Engineering)** | Engineering discipline applying software engineering principles to operations, aiming to create scalable and highly reliable software systems | Process | SLI, SLO, SLA, error budgets, toil reduction, on-call |
| **Capacity Planning** | Process of predicting and provisioning adequate cloud resources to meet workload demands while optimising cost | Process | Trend analysis, headroom, reservation strategies, scaling thresholds |

---

### Role & Organisation Entities

| Entity Name | Definition | Category | Key Attributes |
|---|---|---|---|
| **Cloud Architect** | Senior technical role designing cloud architecture solutions, defining standards, evaluating technologies, and aligning technical strategy with business goals | Role | Solution design, stakeholder communication, technology selection |
| **Platform Engineer** | Engineer building and operating internal developer platforms, toolchains, and golden-path templates for application teams | Role | Kubernetes operations, IaC authoring, developer experience |
| **Cloud Centre of Excellence (CCoE)** | Cross-functional team establishing cloud governance, standards, best practices, and enabling cloud adoption across the enterprise | Organisation | Governance, enablement, tooling standards, landing zones |
| **DevOps Engineer** | Engineer bridging development and operations, responsible for CI/CD pipelines, automation, and reliability of software delivery | Role | Pipeline automation, monitoring, incident response, scripting |
| **Security Engineer (Cloud)** | Specialist securing cloud infrastructure, workloads, and data through IAM hardening, network controls, and threat detection | Role | IAM policies, CSPM, WAF, encryption, compliance |
| **FinOps Practitioner** | Professional leading cloud financial management, working with engineering and finance to optimise cloud spend and forecast costs | Role | Cost analysis, chargeback models, savings recommendations |
| **Enterprise Architect** | Senior architect defining organisation-wide technology strategy, ensuring alignment between business capabilities and IT systems | Role | Business architecture, capability maps, roadmaps, governance |

---

### Standard & Framework Entities

| Entity Name | Definition | Category | Key Attributes |
|---|---|---|---|
| **AWS Well-Architected Framework** | AWS prescriptive guidance for building secure, high-performing, resilient, and efficient infrastructure across five pillars | Framework | Operational Excellence, Security, Reliability, Performance, Cost |
| **NIST Cloud Computing Framework** | US National Institute of Standards and Technology's reference architecture and definitions for cloud computing | Standard | Essential characteristics, service models, deployment models |
| **CIS Cloud Benchmarks** | Center for Internet Security consensus-based configuration guidelines for hardening cloud environments | Standard | Controls, scoring, implementation groups, remediation |
| **ISO/IEC 27017** | International standard providing guidelines for information security controls applicable to cloud services | Standard | Cloud-specific controls, shared responsibility, SLAs |
| **TOGAF (The Open Group Architecture Framework)** | Enterprise architecture methodology and framework providing comprehensive approach to design, planning, and governance | Framework | ADM, architecture domains, capability framework |
| **Cloud Adoption Framework (CAF)** | Microsoft/AWS/Google frameworks guiding organisations through cloud adoption across strategy, plan, ready, adopt, govern, manage phases | Framework | Readiness, migration, innovation, governance workstreams |
| **FinOps Foundation Framework** | Open framework defining FinOps principles, personas, capabilities, and maturity model for cloud financial management | Framework | Crawl/Walk/Run maturity, domains, capabilities |
| **OWASP Cloud Top 10** | Open Web Application Security Project's list of top cloud-specific security risks and mitigations | Standard | Misconfiguration, insecure APIs, inadequate IAM, data exposure |

---

### Outcome & Metric Entities

| Entity Name | Definition | Category | Key Attributes |
|---|---|---|---|
| **SLO (Service Level Objective)** | Internal target for a service's reliability, expressed as a measurable threshold over a time window (e.g., 99.9% availability) | Metric | Error budget, measurement window, indicator type |
| **SLI (Service Level Indicator)** | Specific quantitative measure of service behaviour used to evaluate compliance with SLOs (e.g., request latency p99) | Metric | Measurement source, aggregation method, threshold |
| **MTTR (Mean Time to Recovery)** | Average time required to restore a service after a failure; key indicator of operational maturity and incident response effectiveness | Metric | Incident log, recovery steps, automation impact |
| **MTBF (Mean Time Between Failures)** | Average time between system failures; indicator of reliability and system stability | Metric | Failure events, uptime tracking, CMDB data |
| **Cloud Cost per Unit** | Ratio of cloud spend to a meaningful business unit (e.g., cost per API call, cost per customer, cost per transaction) | Metric | Unit definition, allocation accuracy, trend tracking |
| **Deployment Frequency** | DORA metric measuring how often code is deployed to production; indicator of DevOps and delivery maturity | Metric | Pipeline data, deployment events, trend analysis |
| **Carbon Efficiency** | Measure of CO₂ emissions per unit of computational work; key sustainability metric for responsible cloud usage | Metric | PUE, renewable energy %, workload emissions intensity |
| **Security Posture Score** | Aggregated measure of an organisation's cloud security health, combining compliance, vulnerability, and misconfiguration data | Metric | CSPM findings, benchmark scores, risk weighting |

---

## 2. Relationship Catalogue (Edges)

---

### Foundation & Dependency Relationships

```
Cloud Computing --[ENABLES]--> Cloud-Native Architecture
  : Cloud platforms provide the primitives (compute, network, storage APIs) that enable cloud-native design patterns

Cloud-Native Architecture --[DEPENDS_ON]--> Containers
  : Cloud-native applications are fundamentally packaged and run as containers

Containers --[DEPENDS_ON]--> Kubernetes (K8s)
  : Container workloads at scale require orchestration to manage scheduling, scaling, and lifecycle

Kubernetes (K8s) --[ENABLES]--> Service Mesh
  : Kubernetes provides the pod and network model upon which service meshes operate

Kubernetes (K8s) --[ENABLES]--> Platform Engineering
  : Kubernetes serves as the foundational layer for most Internal Developer Platforms

Microservices --[DEPENDS_ON]--> API Gateway
  : Microservices expose capabilities via APIs requiring a managed entry point for routing and policy enforcement

Microservices --[DEPENDS_ON]--> Service Mesh
  : Service-to-service communication in microservices architectures requires resilience and observability provided by the mesh

Serverless Computing --[PART_OF]--> Cloud-Native Architecture
  : Serverless is a deployment paradigm within the broader cloud-native architectural philosophy

Hybrid Cloud --[DEPENDS_ON]--> Virtual Private Cloud (VPC)
  : Hybrid connectivity requires isolated virtual networking segments on the cloud side

Multi-Cloud Strategy --[DEPENDS_ON]--> Infrastructure as Code (IaC)
  : Managing infrastructure across multiple clouds consistently requires codified, provider-agnostic automation

Infrastructure as Code (IaC) --[DEPENDS_ON]--> Terraform
  : Terraform is the dominant implementation tool realising the IaC practice
```

---

### Governance & Management Relationships

```
Cloud Centre of Excellence (CCoE) --[GOVERNS]--> Cloud Computing
  : CCoE sets policies, standards, and guardrails for cloud usage across the enterprise

Cloud Centre of Excellence (CCoE) --[GOVERNS]--> FinOps Practice
  : CCoE owns cloud financial governance frameworks and cost management standards

Enterprise Architect --[GOVERNS]--> Multi-Cloud Strategy
  : Enterprise Architects define the strategic rationale and constraints for multi-cloud adoption

AWS Well-Architected Framework --[GOVERNS]--> Cloud-Native Architecture
  : The framework defines architectural best practices and review criteria for cloud workloads

TOGAF (The Open Group Architecture Framework) --[GOVERNS]--> Enterprise Architect
  : TOGAF provides the methodology and artefacts Enterprise Architects use to structure their work

Cloud Adoption Framework (CAF) --[GOVERNS]--> Cloud Migration
  : CAF provides the structured phases, readiness assessments, and landing zone patterns for migration programmes

CIS Cloud Benchmarks --[GOVERNS]--> Security Posture Management
  : CIS benchmarks provide the control baselines against which posture is assessed and scored

ISO/IEC 27017 --[GOVERNS]--> Zero Trust Security
  : ISO 27017 cloud security controls inform Zero Trust implementation requirements

OWASP Cloud Top 10 --[GOVERNS]--> DevSecOps
  : OWASP risks define the security gate criteria and scan targets in DevSecOps pipelines

FinOps Foundation Framework --[GOVERNS]--> FinOps Practice
  : The framework defines capabilities, maturity levels, and KPIs for FinOps practitioners

NIST Cloud Computing Framework --[DEFINED_BY]--> Cloud Computing
  : NIST provides the authoritative definitional model for cloud computing characteristics and service types
```

---

### Implementation Relationships

```
CI/CD Pipeline --[IMPLEMENTS]--> GitOps
  : GitOps workflows are realised through CI/CD pipelines that watch Git and apply changes declaratively

ArgoCD --[IMPLEMENTS]--> GitOps
  : ArgoCD is the primary Kubernetes-native tool implementing GitOps reconciliation loops

DevSecOps --[IMPLEMENTS]--> Security Posture Management
  : DevSecOps pipelines implement automated security checks contributing to posture management

Terraform --[IMPLEMENTS]--> Infrastructure as Code (IaC)
  : Terraform realises IaC principles through provider plugins, HCL declarations, and state management

Istio --[IMPLEMENTS]--> Service Mesh
  : Istio is the leading implementation of the service mesh pattern on Kubernetes

Vault (HashiCorp) --[IMPLEMENTS]--> Zero Trust Security
  : Vault provides dynamic secrets and identity-based access, core mechanisms of Zero Trust

Platform Engineering --[IMPLEMENTS]--> Cloud-Native Architecture
  : Platform Engineering teams build the internal platforms that operationalise cloud-native patterns

SRE (Site Reliability Engineering) --[IMPLEMENTS]--> Resilience Engineering
  : SRE practices—error budgets, chaos experiments, runbooks—are the operational implementation of resilience

Chaos Engineering --[IMPLEMENTS]--> Resilience Engineering
  : Chaos Engineering is the experimental practice that validates resilience design assumptions
```

---

### Monitoring & Measurement Relationships

```
Prometheus --[MONITORS]--> Kubernetes (K8s)
  : Prometheus scrapes kube-state-metrics and node exporters to monitor Kubernetes cluster health

Grafana --[MONITORS]--> Cloud Computing
  : Grafana aggregates metrics, logs, and traces from cloud platforms into operational dashboards

SRE (Site Reliability Engineering) --[MEASURES]--> SLO (Service Level Objective)
  : SRE teams define, track, and act on SLOs as the core reliability management mechanism

SLO (Service Level Objective) --[DEPENDS_ON]--> SLI (Service Level Indicator)
  : SLOs are formulated as thresholds applied to underlying SLIs

SLI (Service Level Indicator) --[MEASURES]--> Cloud-Native Architecture
  : SLIs quantify the observable behaviour of cloud-native services from a user perspective

MTTR (Mean Time to Recovery) --[MEASURES]--> Resilience Engineering
  : MTTR is the primary quantitative outcome metric for resilience engineering efforts

Deployment Frequency --[MEASURES]--> CI/CD Pipeline
  : Deployment Frequency (DORA) directly measures the throughput of CI/CD pipeline operations

FinOps Practitioner --[MONITORS]--> Cloud Cost per Unit
  : FinOps practitioners track unit cost metrics to identify optimisation opportunities

Security Posture Score --[MEASURES]--> Zero Trust Security
  : Posture scores aggregate Zero Trust control effectiveness across the environment

Carbon Efficiency --[MEASURES]--> Cloud Computing
  : Carbon efficiency metrics quantify the environmental footprint of cloud operations
```

---

### Enablement Relationships

```
Platform Engineering --[ENABLES]--> DevOps Engineer
  : Platform teams provide golden paths and self-service tooling that reduce DevOps toil

GitOps --[ENABLES]--> CI/CD Pipeline
  : GitOps principles shape how CI/CD pipelines are designed around declarative, auditable state

Service Mesh --[ENABLES]--> Zero Trust Security
  : Service mesh provides mTLS and policy enforcement enabling Zero Trust between workloads

Edge Computing --[ENABLES]--> Cloud-Native Architecture
  : Edge nodes extend cloud-native workloads to the network edge, enabling low-latency scenarios

Apache Kafka --[ENABLES]--> Microservices
  : Kafka's event streaming backbone enables asynchronous, decoupled communication between microservices

Content Delivery Network (CDN) --[ENABLES]--> Cloud Computing
  : CDNs extend cloud content delivery globally, improving performance and reducing origin load

Data Mesh --[ENABLES]--> Multi-Cloud Strategy
  : Data Mesh's domain-oriented data products can be independently deployed across cloud providers

Resilience Engineering --[ENABLES]--> SLO (Service Level Objective)
  : Resilience practices directly improve the ability to meet SLO targets

FinOps Practice --[ENABLES]--> Multi-Cloud Strategy
  : FinOps provides the financial visibility and optimisation capabilities needed to justify multi-cloud costs

Zero Trust Security --[ENABLES]--> Hybrid Cloud
  : Zero Trust provides the consistent identity and access model needed across hybrid network boundaries
```

---

### Production & Consumption Relationships

```
CI/CD Pipeline --[PRODUCES]--> Containers
  : CI/CD pipelines build, test, and publish container images as their primary artefacts

Infrastructure as Code (IaC) --[PRODUCES]--> Virtual Private Cloud (VPC)
  : IaC tooling provisions VPC resources declaratively as part of infrastructure stack creation

Cloud Computing --[PRODUCES]--> Object Storage
  : Cloud platforms provide object storage as a core managed service output

Chaos Engineering --[PRODUCES]--> MTTR (Mean Time to Recovery)
  : Chaos experiments generate real recovery data that improves MTTR measurement accuracy

Apache Kafka --[PRODUCES]--> Data Mesh
  : Kafka acts as the event backbone feeding data streams into data mesh domain products

DevSecOps --[PRODUCES]--> Security Posture Score
  : DevSecOps pipelines output security findings that aggregate into posture scores

SRE (Site Reliability Engineering) --[PRODUCES]--> MTBF (Mean Time Between Failures)
  : SRE reliability work directly improves MTBF through systematic elimination of failure causes

Kubernetes (K8s) --[CONSUMES]--> Object Storage
  : Kubernetes persistent volumes and stateful workloads consume object storage for state persistence

Serverless Computing --[CONSUMES]--> API Gateway
  : Serverless functions are commonly triggered and exposed through API Gateway endpoints

Microservices --[CONSUMES]--> Apache Kafka
  : Microservices publish and subscribe to Kafka topics for event-driven integration
```

---

### Integration Relationships

```
AWS (Amazon Web Services) --[INTEGRATES_WITH]--> Terraform
  : Terraform's AWS provider integrates natively with hundreds of AWS services via APIs

Microsoft Azure --[INTEGRATES_WITH]--> Hybrid Cloud
  : Azure Arc and ExpressRoute are Azure's primary mechanisms for hybrid cloud integration

Google Cloud Platform (GCP) --[INTEGRATES_WITH]--> Kubernetes (K8s)
  : GCP originated Kubernetes and maintains deepest integration through GKE managed service

Istio --[INTEGRATES_WITH]--> Prometheus
  : Istio automatically exposes service mesh telemetry in Prometheus-compatible format

ArgoCD --[INTEGRATES_WITH]--> Vault (HashiCorp)
  : ArgoCD integrates with Vault for secure secrets injection during GitOps deployment workflows

Grafana --[INTEGRATES_WITH]--> Prometheus
  : Grafana natively queries Prometheus as a primary data source for metrics visualisation

API Gateway --[INTEGRATES_WITH]--> Microservices
  : API Gateway integrates with service registries and backends to route traffic to microservices

Content Delivery Network (CDN) --[INTEGRATES_WITH]--> Object Storage
  : CDNs integrate with object storage origins to serve static assets at the edge

Edge Computing --[INTEGRATES_WITH]--> Multi-Cloud Strategy
  : Edge nodes from multiple providers extend multi-cloud strategies to the physical edge tier
```

---

### Role & Responsibility Relationships

```
Cloud Architect --[DEFINED_BY]--> AWS Well-Architected Framework
  : Cloud Architects use the Well-Architected Framework to define reference architectures and reviews

Cloud Architect --[MANAGES]--> Multi-Cloud Strategy
  : Cloud Architects own the technical decisions underpinning multi-cloud platform choices

Platform Engineer --[MANAGED_BY]--> Cloud Centre of Excellence (CCoE)
  : Platform engineers frequently operate within or report to the CCoE governance structure

Security Engineer (Cloud) --[IMPLEMENTS]--> DevSecOps
  : Security Engineers define the security gates, policies, and tools embedded in DevSecOps workflows

FinOps Practitioner --[IMPLEMENTS]--> FinOps Practice
  : FinOps Practitioners are the role responsible for executing the FinOps operational cycle

DevOps Engineer --[IMPLEMENTS]--> CI/CD Pipeline
  : DevOps Engineers design, build, and maintain the CI/CD pipeline infrastructure

Enterprise Architect --[PART_OF]--> Cloud Centre of Excellence (CCoE)
  : Enterprise Architects typically hold a steering or advisory role within the CCoE governance body
```

---

### Extension & Replacement Relationships

```
Cloud-Native Architecture --[REPLACES]--> Cloud Migration (legacy monoliths)
  : Cloud-native refactoring replaces the lift-and-shift migration pattern for new workloads

Zero Trust Security --[REPLACES]--> Hybrid Cloud (perimeter security model)
  : Zero Trust replaces implicit perimeter-based trust models still common in hybrid environments

Data Mesh --[EXTENDS]--> Cloud-Native Architecture
  : Data Mesh extends cloud-native principles (domain ownership, APIs, self-service) to the data layer

Edge Computing --[EXTENDS]--> Cloud Computing
  : Edge computing extends the cloud computing model to locations requiring ultra-low latency

Serverless Computing --[EXTENDS]--> Microservices
  : Serverless functions extend the microservices pattern to finer-grained, event-driven execution units

Service Mesh --[EXTENDS]--> API Gateway
  : Service mesh extends API Gateway concerns (routing, security) to internal east-west service traffic

GitOps --[EXTENDS]--> Infrastructure as Code (IaC)
  : GitOps extends IaC by adding continuous reconciliation, audit, and pull-based deployment semantics
```

---

### Trigger Relationships

```
SLO (Service Level Objective) --[TRIGGERS]--> Chaos Engineering
  : Approaching SLO breach (error budget burn) triggers chaos experiments to identify failure modes proactively

Security Posture Score --[TRIGGERS]--> DevSecOps
  : Declining posture scores trigger pipeline policy tightening and automated remediation workflows

Cloud Cost per Unit --[TRIGGERS]--> Capacity Planning
  : Rising unit costs trigger capacity planning reviews and rightsizing exercises

MTTR (Mean Time to Recovery) --[TRIGGERS]--> SRE (Site Reliability Engineering)
  : Poor MTTR metrics trigger SRE postmortem processes and reliability improvement sprints

Deployment Frequency --[TRIGGERS]--> CI/CD Pipeline
  : Deployment frequency targets trigger pipeline investment and automation prioritisation decisions
```

---

## 3. Knowledge Clusters

---

### Cluster 1: Cloud Foundation & Service Model Cluster

**Purpose:** Establishes the fundamental building blocks of cloud computing and its deployment/service models.

```
┌─────────────────────────────────────────────────────────────┐
│  CLOUD FOUNDATION CLUSTER                                   │
│                                                             │
│  Cloud Computing                                            │
│       │ ENABLES                                             │
│       ▼                                                     │
│  Cloud-Native Architecture ──PART_OF──► Serverless         │
│       │ DEPENDS_ON                                          │
│       ▼                                                     │
│  Containers ──DEPENDS_ON──► Kubernetes (K8s)               │
│       │                         │                           │
│       │                         │ ENABLES                   │
│       ▼                         ▼                           │
│  Microservices ◄──EXTENDS── Serverless Computing           │
│       │                                                     │
│       ▼                                                     │
│  Hybrid Cloud ──DEPENDS_ON──► Virtual Private Cloud        │
│       │                                                     │
│  Multi-Cloud Strategy                                       │
│                                                             │
│  Key Relationships:                                         │
│  NIST Framework ──DEFINED_BY──► Cloud Computing            │
│  Edge Computing ──EXTENDS──► Cloud Computing               │
└─────────────────────────────────────────────────────────────┘
```

**Internal Relationships:**

| Source | Relationship | Target |
|---|---|---|
| Cloud Computing | ENABLES | Cloud-Native Architecture |
| Cloud-Native Architecture | DEPENDS_ON | Containers |
| Containers | DEPENDS_ON | Kubernetes (K8s) |
| Serverless Computing | PART_OF | Cloud-Native Architecture |
| Serverless Computing | EXTENDS | Microservices |
| Hybrid Cloud | DEPENDS_ON | Virtual Private Cloud (VPC) |
| Edge Computing | EXTENDS | Cloud Computing |
| NIST Cloud Computing Framework | DEFINED_BY | Cloud Computing |

---

### Cluster 2: Platform & Infrastructure Automation Cluster

**Purpose:** Groups the tools and practices that enable consistent, repeatable infrastructure provisioning and platform delivery.

```
┌─────────────────────────────────────────────────────────────┐
│  PLATFORM & INFRASTRUCTURE AUTOMATION CLUSTER               │
│                                                             │
│  Infrastructure as Code (IaC)                               │
│       │ IMPLEMENTED_BY                                      │
│       ▼                                                     │
│  Terraform ──INTEGRATES_WITH──► AWS / Azure / GCP          │
│       │                                                     │
│  GitOps ──EXTENDS──► IaC                                   │
│       │ IMPLEMENTED_BY                                      │
│       ▼                                                     │
│  ArgoCD ──INTEGRATES_WITH──► Vault (HashiCorp)             │
│       │                                                     │
│  CI/CD Pipeline ──IMPLEMENTS──► GitOps                     │
│       │ PRODUCES                                            │
│       ▼                                                     │
│  Containers ──MANAGED_BY──► Kubernetes (K8s)               │
│                                                             │
│  Platform Engineering ──IMPLEMENTS──► Cloud-Native Arch    │
│       │ ENABLES                                             │
│       ▼                                                     │
│  DevOps Engineer                                            │
└─────────────────────────────────────────────────────────────┘
```

**Internal Relationships:**

| Source | Relationship | Target |
|---|---|---|
| Terraform | IMPLEMENTS | Infrastructure as Code (IaC) |
| GitOps | EXTENDS | Infrastructure as Code (IaC) |
| ArgoCD | IMPLEMENTS | GitOps |
| CI/CD Pipeline | IMPLEMENTS | GitOps |
| CI/CD Pipeline | PRODUCES | Containers |
| ArgoCD | INTEGRATES_WITH | Vault (HashiCorp) |
| Platform Engineering | ENABLES | DevOps Engineer |
| Deployment Frequency | MEASURES | CI/CD Pipeline |
| Terraform | INTEGRATES_WITH | AWS (Amazon Web Services) |

---

### Cluster 3: Cloud-Native Networking & Service Communication Cluster

**Purpose:** Covers how services discover, communicate with, and secure one another in cloud-native environments.

```
┌─────────────────────────────────────────────────────────────┐
│  NETWORKING & SERVICE COMMUNICATION CLUSTER                 │
│                                                             │
│  API Gateway ──INTEGRATES_WITH──► Microservices            │
│       │                               │                     │
│       │ EXTENDED_BY                   │ CONSUMES            │
│       ▼                               ▼                     │
│  Service Mesh ──IMPLEMENTED_BY──► Istio                    │
│       │                               │                     │
│       │ ENABLES                       │ INTEGRATES_WITH     │