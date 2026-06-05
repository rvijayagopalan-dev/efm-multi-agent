# Cloud Architecture: Complete Enterprise Architecture Relationship Map

---

## Executive Summary

Cloud Architecture occupies a **pivotal infrastructure position** in the enterprise architecture landscape — it is simultaneously a technology enabler, a strategic accelerator, a governance subject, and a delivery platform. It sits at the intersection of business intent and technical execution, translating organizational strategy into scalable, resilient, and economically efficient infrastructure. Understanding its relationships across the full EA landscape is essential for architects, CIOs, and technology leaders seeking coherent, integrated enterprise design.

---

## 1. Position in the EA Landscape

### 1.1 TOGAF Architecture Domain Mapping

Cloud Architecture does not reside exclusively in one TOGAF layer — it **spans all four domains** while being most densely concentrated in the Technology Architecture layer. The following table maps its presence and influence across each domain:

| TOGAF Layer | Cloud Architecture Presence | Nature of Involvement | Examples |
|---|---|---|---|
| **Business Architecture** | **Moderate** — indirect but critical | Enables business capability delivery, informs operating model design, supports cloud economics in business cases | Cloud consumption models (OpEx vs CapEx) shape financial architecture; cloud elasticity enables new business models like SaaS product delivery |
| **Data Architecture** | **High** — direct co-design | Cloud data services (data lakes, warehouses, streaming platforms) are defined here; data residency, sovereignty, and compliance constraints govern cloud topology choices | AWS S3/Azure Data Lake placement informed by GDPR; cloud-native data mesh architectures |
| **Application Architecture** | **High** — direct enabling layer | Cloud-native application patterns (microservices, serverless, containers) are defined in Application Architecture but realized in Cloud Architecture | Kubernetes cluster design, API Gateway placement, event-driven architectures on cloud event buses |
| **Technology Architecture** | **Core Domain** — primary home | Network topology, compute provisioning, storage architecture, security controls, IAM, cloud regions, and availability zones all live here | VPC design, Transit Gateway topology, cloud landing zones, identity federation |

> **Key Insight:** Cloud Architecture is the primary **Technology Architecture specialization** but exerts significant influence upstream into Application and Data layers, and receives strategic direction from Business Architecture through capacity planning, cost governance, and operating model decisions.

---

### 1.2 ArchiMate Perspective Mapping

ArchiMate's layered metamodel provides a more granular view of where Cloud Architecture artifacts and concepts manifest across the full architectural spectrum:

| ArchiMate Layer/Aspect | Cloud Architecture Manifestation | Specific ArchiMate Elements | Real-World Examples |
|---|---|---|---|
| **Motivation** | Cloud strategy rationale, cloud adoption principles, risk appetite for cloud | *Driver, Assessment, Goal, Principle, Constraint* | "Cloud-first principle"; TCO reduction goal; regulatory constraint on data residency |
| **Strategy** | Cloud adoption roadmap, capability-based planning for cloud, value stream optimization | *Capability, Resource, Course of Action* | Multi-cloud capability roadmap; cloud center of excellence (CCoE) as organizational resource |
| **Business Layer** | Cloud service consumption as business function; cloud operations as business process | *Business Function, Business Process, Business Role, Business Service* | FinOps as business function; cloud procurement process; Cloud Architect role |
| **Application Layer** | Cloud-native application components, PaaS service consumption, integration middleware | *Application Component, Application Service, Application Interface* | Lambda function as application component; API Gateway as application interface; SaaS integration |
| **Technology Layer** | Core cloud infrastructure — compute, network, storage, security primitives | *Technology Service, Node, Communication Network, Path, Artifact* | EC2 instance as Node; VPC as Communication Network; S3 bucket as Artifact |
| **Physical Layer** | Data center geography, cloud region physical infrastructure, colocation | *Distribution Network, Facility, Equipment* | AWS us-east-1 physical region; colocation connection via Direct Connect; edge PoP |
| **Implementation & Migration** | Cloud migration programs, workload phasing, landing zone deployment | *Work Package, Deliverable, Implementation Event, Gap* | Cloud migration wave planning; landing zone IaC deliverable; lift-and-shift gap analysis |

---

### 1.3 Relationship to Major EA Frameworks

| Framework | Relationship to Cloud Architecture | Integration Points | Practical Application |
|---|---|---|---|
| **TOGAF ADM** | Cloud Architecture is a specialization and realization domain within TOGAF's Technology Architecture phase (Phase D); Cloud Strategy inputs feed Phase A (Architecture Vision) | Phases A, B (capability enablement), C (application/data cloud patterns), D (primary domain), E/F (migration planning), G (governance) | Cloud landing zone defined in Phase D; cloud FinOps governance defined in Phase G |
| **ArchiMate 3.2** | Provides the modeling language for expressing cloud relationships, dependencies, and deployment architecture | Technology Layer nodes/services; Physical Layer for region/AZ modeling; Strategy Layer for cloud capability mapping | Modeling AWS VPCs as technology nodes; expressing cloud service dependencies via association/serving relationships |
| **BIAN (Banking Industry Architecture Network)** | Cloud Architecture provides the infrastructure substrate for BIAN service domains; BIAN service landscapes are increasingly cloud-native | BIAN Service Domains (e.g., Payment Order, Customer Offer) map to cloud-hosted microservices; BIAN coreless banking references cloud deployment | Core banking modernization on cloud using BIAN service domain decomposition |
| **BIZBOK (Business Architecture Guild)** | Cloud Architecture realizes business capabilities identified in BIZBOK value streams | Value stream stages map to cloud-deployed capability components; BIZBOK capability heat maps inform cloud investment priorities | Customer onboarding value stream realized via cloud-native identity and KYC services |
| **Zachman Framework** | Cloud Architecture addresses the *How* (Function), *Where* (Network/Location), and *What* (Data) columns primarily at Rows 4-6 (Designer, Builder, Subcontractor) | Network topology (Where × Designer); infrastructure provisioning (How × Builder) | Data center topology modeled in Zachman's Location × Designer cell |
| **COBIT 2019** | Cloud Architecture is subject to COBIT governance objectives, particularly APO (Align, Plan, Organize) and BAI (Build, Acquire, Implement) | APO07 (Managed Human Resources for cloud skills); BAI03 (Managed Solutions Identification for cloud-native design); DSS01 (Managed Operations) | Cloud governance board using COBIT's governance system; cloud risk management via COBIT risk framework |
| **ITIL 4** | Cloud Architecture underpins ITIL service management; cloud platforms are the technical foundation of the ITIL service catalog | Service Configuration Management (CMDB reflects cloud assets); Change Enablement for cloud deployments; Service Level Management for cloud SLAs | ServiceNow CMDB auto-discovering cloud assets; cloud IaC pipelines as change enablement practice |
| **SAFe (Scaled Agile Framework)** | Cloud Architecture enables the Continuous Delivery Pipeline in SAFe; cloud-native tooling supports DevSecOps at scale | System Architecture in SAFe maps to cloud platform architecture; Architectural Runway includes cloud foundation work | Shared cloud platform team as SAFe Platform Team; cloud landing zone as architectural runway investment |
| **eTOM (TM Forum)** | Cloud Architecture supports eTOM Resource Management processes; telecoms cloud transformation uses eTOM process alignment | Resource Domain (1.4) maps to cloud infrastructure management; Service Domain (1.3) maps to cloud-enabled service delivery | Telco cloud (OpenStack/Kubernetes-based) managed under eTOM resource process framework |

---

## 2. Upstream Dependencies (What Cloud Architecture Depends On)

Cloud Architecture cannot be designed in isolation. The following domains **must provide inputs, constraints, or decisions** before or during cloud architecture design activities.

| # | Dependency Domain | Relationship Type | What It Provides | Coupling Strength | Failure Mode if Absent |
|---|---|---|---|---|---|
| 1 | **Enterprise Strategy & Business Architecture** | *Directive / Informing* | Business capability priorities, growth trajectory, M&A plans, revenue model (informs cloud scale, geography, and tenancy model) | **Strong** | Cloud architecture over/under-engineered; wrong regions selected; wrong tenancy model (single vs. multi-tenant) |
| 2 | **Security Architecture** | *Constraining / Co-designing* | Security policies, zero-trust requirements, encryption standards, identity federation requirements, threat models, compliance mandates | **Critical** | Non-compliant cloud design; unacceptable risk exposure; regulatory breach |
| 3 | **Data Architecture** | *Constraining / Informing* | Data classification, sovereignty requirements, residency constraints, data flow diagrams, retention policies, privacy requirements | **Strong** | Data placed in wrong regions; GDPR/data residency violations; non-compliant data egress paths |
| 4 | **Enterprise Architecture Governance** | *Authorizing / Constraining* | Architecture principles, standards, patterns approval, guardrails (e.g., approved cloud providers, prohibited services) | **Strong** | Uncontrolled cloud sprawl; inconsistent patterns; ungoverned vendor relationships |
| 5 | **Financial Architecture / FinOps** | *Constraining / Informing* | Budget envelopes, cost allocation models, chargeback/showback requirements, cloud spend governance thresholds | **Moderate–Strong** | Cloud costs uncontrolled; no accountability model; Reserved Instance/Savings Plans not optimized |
| 6 | **Risk Architecture & Enterprise Risk Management** | *Constraining / Informing* | Risk appetite statements, cloud-specific risk assessments (concentration risk, vendor lock-in risk), business continuity requirements | **Strong** | Single-cloud concentration risk not mitigated; RTO/RPO not architecturally enforced; regulatory capital impact |
| 7 | **Network Architecture** | *Co-designing / Dependency* | IP address space allocation, SD-WAN and MPLS integration, internet egress strategy, BGP topology, on-premises connectivity requirements | **Critical** | IP conflicts between cloud VPCs and on-prem; routing failures; insufficient bandwidth for cloud workloads |
| 8 | **Identity & Access Management (IAM) Architecture** | *Co-designing / Dependency* | Identity provider (IdP) integration requirements, federation protocols (SAML, OIDC), privileged access management, directory services architecture | **Critical** | Broken authentication in cloud; no centralized identity governance; privilege escalation risks |
| 9 | **Application Architecture** | *Informing / Consuming* | Application portfolio inventory, target architecture patterns (microservices, monolith), cloud-readiness assessments, 7R migration disposition | **Strong** | Cloud infrastructure designed for wrong workload patterns; over-provisioned or ill-suited instance families |
| 10 | **Compliance & Regulatory Architecture** | *Constraining* | Regulatory inventory (PCI-DSS, HIPAA, SOC2, ISO 27001, FedRAMP), audit requirements, control framework mapping, certifications required of cloud providers | **Critical** | Cloud deployment fails audit; certifications not achievable; regulatory penalties |
| 11 | **HR & Organizational Architecture** | *Informing* | Skills inventory, cloud talent strategy, operating model (centralized vs. federated cloud platform teams), CCoE model | **Moderate** | Cloud architecture designed beyond team capability; no CCoE to govern it; skills gaps cause operational failure |
| 12 | **Vendor Management / Sourcing Architecture** | *Enabling / Constraining* | Approved vendor lists, cloud provider contracts (EAs with AWS/Azure/GCP), licensing terms, exit strategy requirements | **Moderate–Strong** | Unauthorized cloud providers used; contract non-compliance; no leverage in negotiations |

---

## 3. Downstream Dependents (What Depends on Cloud Architecture)

Once Cloud Architecture decisions are made, the following domains **consume, rely upon, or are constrained by** the resulting cloud design.

| # | Dependent Domain | Relationship Type | What They Consume | Impact of Failure | Recovery Complexity |
|---|---|---|---|---|---|
| 1 | **Application Architecture & Development** | *Consuming / Enabling* | Compute platforms (VMs, containers, serverless), PaaS services, deployment environments (dev/test/prod), CI/CD infrastructure | Applications cannot deploy; development environments unavailable; release pipelines broken | **High** |
| 2 | **DevSecOps / Platform Engineering** | *Consuming / Enabling* | Cloud landing zones, IaC pipelines, container orchestration (Kubernetes), artifact registries, cloud-native CI/CD tooling | Platform teams cannot deliver; inner/outer loop tooling fails; developer productivity collapses | **High** |
| 3 | **Data & Analytics Architecture** | *Consuming / Enabling* | Cloud storage (S3, ADLS), compute (EMR, Databricks, BigQuery), streaming (Kinesis, Event Hubs, Pub/Sub), ML platforms (SageMaker, Azure ML) | Data pipelines fail; analytics workloads unavailable; ML model training and inference halt | **High** |
| 4 | **Security Operations (SecOps)** | *Consuming / Governed by* | Cloud-native security tooling (AWS Security Hub, Azure Defender, GCP Security Command Center), VPC flow logs, CloudTrail/Activity Log, SIEM feeds | Security visibility lost; threat detection blind spots; incident response compromised | **Critical** |
| 5 | **Business Continuity & Disaster Recovery** | *Consuming / Constrained by* | Multi-region availability, cross-region replication, backup services (AWS Backup, Azure Backup), RTO/RPO-aligned infrastructure | DR capability degraded; RTO/RPO SLAs breached; regulatory compliance failures during incidents | **Critical** |
| 6 | **Integration Architecture** | *Consuming / Enabling* | API Gateway, event buses (EventBridge, Service Bus), message queues (SQS, Azure Service Bus), iPaaS platforms | Enterprise integration breaks; B2B/partner connectivity fails; internal system-of-record integration gaps | **High** |
| 7 | **IT Operations & SRE** | *Consuming / Governing* | Cloud monitoring (CloudWatch, Azure Monitor), observability stacks, auto-scaling policies, incident management tooling, CMDB cloud discovery | Operational visibility lost; SLA breaches undetected; capacity management failures | **High** |
| 8 | **FinOps & Cloud Financial Management** | *Consuming / Governed by* | Cloud billing data, cost allocation tags, Reserved Instance/Savings Plans inventory, usage metrics by service/account/team | Uncontrolled cloud spend; cost center misallocation; budget overruns; no accountability | **Moderate–High** |
| 9 | **Product Engineering Teams** | *Consuming* | Cloud environments (accounts/subscriptions), shared services (auth, messaging, storage), cloud platform abstractions | Product teams cannot build or deploy; time-to-market extended; competitive disadvantage | **High** |
| 10 | **Customer Experience / Digital Channels** | *Consuming* | CDN infrastructure, cloud-hosted APIs, geo-distributed compute for low-latency delivery, cloud-native authentication | Digital channels degraded or unavailable; customer-facing outages; brand/revenue impact | **Critical** |
| 11 | **Workplace Technology & End-User Computing** | *Consuming* | Cloud-hosted identity (Azure AD/Entra ID), SaaS management, Virtual Desktop Infrastructure (Azure AVD, AWS WorkSpaces), cloud-hosted collaboration | Authentication failures; VDI unavailability; productivity tool outages | **Moderate–High** |
| 12 | **Supplier & Partner Ecosystem Architecture** | *Consuming* | B2B API platforms, cloud-hosted partner portals, EDI/integration services on cloud, shared data exchange infrastructure | Partner integrations break; supply chain data exchange halts; contractual SLA violations | **Moderate** |

---

## 4. Complementary Domains (Sibling Relationships)

These domains share a **peer-level, mutually reinforcing relationship** with Cloud Architecture — neither fully upstream nor downstream, but co-evolving and co-designing.

| # | Domain | Relationship Type | Combined Value | Integration Model | Key Collaboration Points |
|---|---|---|---|---|---|
| 1 | **Security Architecture** | *Co-design / Mutual Constraint* | Cloud Architecture + Security = Secure-by-design cloud deployments; shared responsibility model enforced architecturally | Joint design sessions; security guardrails embedded in IaC; shared control frameworks | Landing zone security policies; network segmentation design; encryption key management; identity architecture |
| 2 | **Network Architecture** | *Co-design / Interdependence* | Cloud Architecture + Network = Hybrid connectivity fabric; SD-WAN to cloud integration; zero-trust network access | Jointly own connectivity blueprints; shared routing governance; Network team designs WAN; Cloud team designs VPC/VNET | BGP routing between on-prem and cloud; Direct Connect/ExpressRoute circuit sizing; DNS architecture |
| 3 | **Data Architecture** | *Co-design / Symbiotic* | Cloud Architecture + Data = Cloud-native data platform; data mesh on cloud; governed data lake/lakehouse | Data architects define logical models; Cloud architects realize physical storage/compute topology | Data zone architecture (raw/curated/consumption); cloud-native lakehouse (Delta Lake, Apache Iceberg); streaming architecture |
| 4 | **Application Architecture** | *Realizing / Enabling* | Cloud Architecture provides the execution substrate for application architecture decisions; cloud-native patterns emerge from both | Application architects define patterns; Cloud architects validate feasibility and implement enabling services | Container platform design (EKS/AKS/GKE); serverless pattern enablement; API gateway architecture |
| 5 | **DevSecOps / Platform Engineering** | *Enabling / Consuming* | Cloud Architecture provides the platform; Platform Engineering operationalizes it into developer-ready abstractions | Cloud Architects define cloud standards; Platform Engineers build internal developer platforms (IDP) on those standards | Golden path templates; IaC module libraries (Terraform/Pulumi); developer self-service portals |
| 6 | **Integration Architecture** | *Enabling / Co-design* | Cloud Architecture provides event buses, API gateways, and messaging infrastructure; Integration Architecture defines the patterns | Joint ownership of cloud-native integration topology; API governance shared | Event-driven architecture on cloud event buses; API marketplace on cloud API Gateway; hybrid integration patterns |
| 7 | **Enterprise Risk Architecture** | *Informing / Constrained by* | Cloud Architecture provides technical risk controls; Risk Architecture provides the risk appetite and residual risk governance | Cloud Architects participate in risk assessments; Risk architects validate cloud controls | Cloud concentration risk assessment; vendor exit planning; resilience architecture reviews |
| 8 | **FinOps Architecture** | *Mutual Enablement* | Cloud Architecture creates the cost optimization levers; FinOps operationalizes cloud financial governance using those levers | Shared tagging taxonomy; Cloud Architects design for cost efficiency; FinOps validates and monitors | Reserved Instance strategy; auto-scaling cost implications; multi-cloud cost allocation |
| 9 | **Sustainability / Green IT Architecture** | *Emerging Co-design* | Cloud Architecture determines energy consumption; Sustainability Architecture uses cloud's carbon reporting to optimize | Cloud region selection informed by renewable energy availability; carbon-aware workload scheduling | AWS/Azure/GCP carbon footprint tooling; region selection for sustainability; rightsizing for energy efficiency |
| 10 | **Workplace Technology Architecture** | *Enabling / Consuming* | Cloud Architecture provides identity, SaaS integration, and VDI infrastructure that Workplace Technology consumes | Shared identity fabric (Azure AD/Entra ID); joint SaaS governance; cloud-hosted endpoint management | Microsoft 365 / Google Workspace cloud integration; Azure AVD design; MDM cloud backend |

---

## 5. Full Relationship Matrix

The following matrix covers **all 30 architecture domains** from a comprehensive enterprise architecture library, mapping each domain's relationship to Cloud Architecture.

> **Legend:**
> - **Direction:** ↑ Upstream (provides to Cloud) | ↓ Downstream (consumes from Cloud) | ↔ Bidirectional/Peer
> - **Strength:** ★★★★★ Critical | ★★★★ Strong | ★★★ Moderate | ★★ Weak | ★ Minimal
> - **Relationship Type:** Constraining | Enabling | Informing | Co-designing | Consuming | Governing | Authorizing | Realizing

| # | Architecture Domain | Relationship to Cloud Architecture | Direction | Strength | Relationship Type | Notes |
|---|---|---|---|---|---|---|
| 1 | **Enterprise / Business Architecture** | Provides strategic intent, capability priorities, and operating model that shape cloud strategy | ↑ | ★★★★ | Informing / Directing | Cloud strategy must trace to business capability investment priorities; M&A strategy drives multi-cloud or cloud-neutral decisions |
| 2 | **Security Architecture** | Mutual co-design; Security provides non-negotiable constraints; Cloud realizes security controls | ↔ | ★★★★★ | Co-designing / Constraining | Shared responsibility model; zero-trust network architecture; encryption and key management co-owned |
| 3 | **Data Architecture** | Co-design of cloud data platforms; Data provides residency/sovereignty constraints | ↔ | ★★★★ | Co-designing / Constraining | Cloud-native lakehouse, data mesh, and streaming architectures co-designed; GDPR/data residency constraints from Data Architecture |
| 4 | **Application Architecture** | Cloud Architecture enables and is shaped by application patterns | ↔ | ★★★★ | Enabling / Informing | Cloud-native app patterns (microservices, serverless) defined jointly; application portfolio drives cloud migration approach |
| 5 | **Network Architecture** | Sibling domain; co-designs hybrid connectivity and cloud network topology | ↔ | ★★★★★ | Co-designing / Interdependence | VPC/VNET design, BGP routing, Direct Connect/ExpressRoute, SD-WAN integration jointly owned |
| 6 | **Integration Architecture** | Cloud Architecture provides integration infrastructure; Integration defines patterns | ↔ | ★★★★ | Enabling / Co-designing | API Gateway, event bus, messaging fabric provided by Cloud; integration patterns (EDA, ESB-to-cloud) defined by Integration Architecture |
| 7 | **Identity & Access Management Architecture** | IAM provides identity requirements; Cloud implements and enforces them | ↑↔ | ★★★★★ | Co-designing / Constraining | Cloud IAM policies, RBAC, ABAC, federation (SAML/OIDC) co-designed; IAM is foundational to cloud security posture |
| 8 | **DevSecOps / Platform Engineering Architecture** | Cloud Architecture provides the platform foundation that Platform Engineering operationalizes | ↓↔ | ★★★★ | Enabling / Consuming | Cloud landing zones consumed by Platform Engineering; IaC standards set by Cloud Architecture; developer platforms built on cloud |
| 9 | **Enterprise Risk Architecture** | Provides risk appetite, concentration risk guidance, and risk governance | ↑ | ★★★★ | Constraining / Informing | Cloud vendor concentration risk; sovereign risk for cross-border data; business continuity risk thresholds |
| 10 | **Compliance & Regulatory Architecture** | Provides binding compliance constraints that directly shape cloud design | ↑ | ★★★★★ | Constraining | PCI-DSS network segmentation; HIPAA data encryption; FedRAMP for US federal; DORA for EU financial services; SOC2 audit scope |
| 11 | **Financial Architecture / FinOps** | Co-governs cloud economics; Cloud enables cost optimization levers | ↔ | ★★★★ | Co-designing / Governing | Tag-based cost allocation; Reserved Instance/Savings Plans strategy; chargeback models; FinOps tooling (Apptio Cloudability, AWS Cost Explorer) |
| 12 | **HR & Organizational Architecture** | Provides talent model, CCoE structure, and skills strategy | ↑ | ★★★ | Informing | Cloud skills taxonomy; CCoE organizational design; federated vs. centralized cloud team model |
| 13 | **Vendor Management / Sourcing Architecture** | Provides approved vendor lists, contract frameworks, and exit strategy requirements | ↑ | ★★★ | Constraining / Enabling | AWS/Azure/GCP enterprise agreements; license mobility to cloud; cloud exit strategy contractual requirements |
| 14 | **IT Operations Architecture** | Consumes cloud monitoring and observability; co-designs operational runbooks for cloud | ↓↔ | ★★★★ | Consuming / Co-designing | Cloud-native monitoring (CloudWatch/Azure Monitor); SRE practices for cloud; CMDB cloud asset discovery; incident management on cloud |
| 15 | **Business Continuity & DR Architecture** | Consumes cloud resilience capabilities; sets RTO/RPO that cloud must meet | ↓↑ | ★★★★★ | Consuming / Constraining | Multi-region active-active/active-passive designs; cloud backup and restore; chaos engineering on cloud platforms |
| 16 | **Information Security / Cybersecurity Architecture** | Overlaps with Security Architecture; provides threat intelligence and SOC tooling requirements | ↑↔ | ★★★★★ | Constraining / Co-designing | Cloud SIEM integration; CSPM (Cloud Security Posture Management); threat detection via cloud-native security services |
| 17 | **Data Governance Architecture** | Provides data quality, lineage, and catalog requirements that cloud data platforms must support | ↑↔ | ★★★★ | Constraining / Enabling | Cloud-native data catalog (AWS Glue, Azure Purview, Google Dataplex); data quality tooling on cloud; lineage tracking |
| 18 | **Analytics & Business Intelligence Architecture** | Consumes cloud data platform infrastructure; defines analytical workload patterns | ↓ | ★★★★ | Consuming | Cloud data warehouse (Snowflake, Redshift, BigQuery, Synapse) infrastructure; cloud ML/AI platform for BI augmentation |
| 19 | **AI & Machine Learning Architecture** | Consumes cloud compute (GPU instances), ML platforms, and data infrastructure | ↓ | ★★★★ | Consuming | GPU cluster design (P3/P4 EC2, Azure NDv4); ML pipeline orchestration (SageMaker Pipelines, Azure ML); MLOps on cloud |
| 20 | **Workplace Technology Architecture** | Consumes cloud identity, SaaS integration infrastructure, and VDI | ↓ | ★★★ | Consuming | Azure AD/Entra ID; Microsoft 365 cloud integration; AVD/WorkSpaces VDI; cloud endpoint management (Intune) |
| 21 | **Customer Experience Architecture** | Consumes cloud delivery infrastructure (CDN, edge, API) for digital channel performance | ↓ | ★★★★ | Consuming | CloudFront/Azure CDN/Cloud CDN; cloud-hosted API Gateway for CX APIs; cloud-native auth (Cognito, Azure AD B2C) |
| 22 | **Product Architecture** | Product teams consume cloud environments and shared platform services | ↓ | ★★★★ | Consuming | Cloud account/subscription vending; shared services (auth, messaging, observability); product team cloud guardrails |
| 23 | **Supplier & Partner Ecosystem Architecture** | Consumes cloud-hosted B2B integration infrastructure | ↓ | ★★★ | Consuming | Cloud-hosted EDI; B2B API gateway; partner portal on cloud; shared data exchange (cloud-hosted) |
| 24 | **Portfolio & Program Management Architecture** | Cloud Architecture participates in program delivery; receives investment prioritization | ↑↓ | ★★★ | Informing / Consuming | Cloud migration program managed via PPM tools; cloud architecture work packages in project portfolio |
| 25 | **Sustainability / Green IT Architecture** | Provides sustainability requirements; Cloud Architecture operationalizes carbon-aware design | ↑↔ | ★★★ | Informing / Enabling | Cloud carbon footprint reporting (AWS/Azure/GCP sustainability dashboards); carbon-aware region selection; rightsizing for sustainability |
| 26 | **Reference Architecture & Standards Architecture** | Provides approved cloud reference architectures and technology standards | ↑ | ★★★★ | Authorizing / Constraining | Cloud Well-Architected Framework alignment; approved IaC module library; cloud design patterns catalog |
| 27 | **Enterprise Information Architecture** | Provides the information model and taxonomy that cloud data stores must conform to | ↑ | ★★★ | Constraining / Informing | Canonical data model applied to cloud data stores; cloud-based master data management |
| 28 | **IT Asset Management Architecture** | Cloud assets (instances, licenses, SaaS subscriptions) must be tracked and governed | ↓↑ | ★★★ | Co-designing / Consuming | Cloud asset inventory in ITAM tools; CSAM (Cloud Software Asset Management); auto-discovery of cloud resources in CMDB |
| 29 | **Change & Release Architecture** | Cloud deployments are managed via change processes; Cloud enables CI/CD for change automation | ↓↑ | ★★★ | Consuming / Enabling | IaC-driven change management; GitOps for cloud configuration; cloud-native CI/CD pipelines under change governance |
| 30 | **Enterprise Architecture Governance** | Provides the overarching governance framework, principles, and architectural review authority | ↑ | ★★★★★ | Governing / Authorizing | Architecture Review Board (ARB) approves cloud designs; EA principles constrain cloud choices; cloud exception management process |

---

## 6. Value Chain Position

### 6.1 Cloud Architecture in the Enterprise Value Chain

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ENTERPRISE VALUE CHAIN                                 │
├─────────────────┬───────────────┬──────────────┬──────────────┬────────────┤
│  STRATEGY &     │  ARCHITECTURE │  DELIVERY &  │  OPERATIONS  │  VALUE     │
│  GOVERNANCE     │  & DESIGN     │  BUILD       │  & MANAGE    │  REALIZATION│
│                 │               │              │              │            │
│ • Business      │ ◄══ CLOUD ══► │ • Platform   │ • Cloud Ops  │ • Product  │
│   Strategy      │  ARCHITECTURE │   Engineering│ • FinOps     │   Revenue  │
│ • EA Governance │               │ • DevSecOps  │ • SecOps     │ • Customer │
│ • Risk Mgmt     │ • Cloud       │ • App Dev    │ • SRE/ITSM   │   Value    │
│ • Compliance    │   Strategy    │ • Data Eng   │ • BCDR       │ • Cost     │
│                 │ • Cloud       │ • Integration│ • Monitoring │   Efficiency│
│                 │   Topology    │              │              │            │
└─────────────────┴───────────────┴──────────────┴──────────────┴────────────┘
```

### 6.2 How Cloud Architecture Enables Upstream Strategy

| Strategic Intent | How Cloud Architecture Enables It | Example |
|---|---|---|
| **Business Agility & Speed** | Elastic infrastructure reduces time-to-environment from weeks to minutes; cloud PaaS removes undifferentiated heavy lifting | AWS account vending via Service Catalog enables product teams to provision environments in <15 minutes vs. 6-week server procurement cycles |
| **Cost Transformation (CapEx→OpEx)** | Cloud consumption model converts fixed infrastructure investment to variable operating expense aligned with business usage | Enterprise migrates 80% of on-premises data center to cloud, reducing infrastructure CapEx by 60% while enabling OpEx alignment to revenue |
| **Global Market Entry** | Cloud regions enable geographic expansion without physical infrastructure investment | SaaS company enters 3 new markets by activating cloud regions in EU, APAC, and LATAM within 90 days |
| **M&A Integration** | Cloud-native architecture accelerates post-merger IT integration; cloud landing zones enable rapid subsidiary onboarding | Acquirer onboards acquired company into cloud landing zone within 60 days, enabling data integration vs. traditional 18-month integration programs |
| **Innovation & Differentiation** | Cloud AI/ML services democratize advanced analytics; cloud experimentation reduces cost of innovation failure | Retailer launches ML-powered personalization engine using SageMaker in 90 days; A/B testing infrastructure on cloud enables rapid product experimentation |
| **ESG & Sustainability Goals** | Cloud providers' renewable energy commitments and carbon reporting enable corporate sustainability reporting | Microsoft's 100% renewable energy pledge and Azure carbon dashboard enables company to report Scope 3 cloud emissions reduction |

### 6.3 How Cloud Architecture Supports Downstream Delivery

| Downstream Delivery Domain | Cloud Architecture Support | Specific Mechanisms |
|---|---|---|
| **Software Delivery** | Cloud-native CI/CD pipelines; containerized build environments; on-demand ephemeral test environments | GitHub Actions on cloud runners; AWS CodePipeline; ephemeral Kubernetes namespaces for testing |
| **Data & Analytics Delivery** | Elastic compute for data processing