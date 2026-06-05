# 🏗️ The Definitive Cloud Architecture Practitioner Checklist

> **Version:** 2.0 | **Framework Alignment:** AWS WAF, Azure WAF, GCP Architecture Framework, NIST CSF, ISO 27001, TOGAF, CMMI
> **Audience:** Cloud Architects, Solution Architects, Enterprise Architects, CTO/CIO, Platform Engineering Teams

---

## 📋 How to Use This Checklist

| Symbol | Meaning |
|--------|---------|
| 🔴 **CRITICAL** | Must be completed before proceeding; blocking item |
| 🟡 **HIGH** | Should be completed; risk if skipped |
| 🟢 **STANDARD** | Best practice; complete when applicable |
| 🔵 **ADVISORY** | Recommended; context-dependent |

---

## 1. Architecture Design Checklist

### 1.1 Strategy & Vision

> *Establishes the "why" and "where" before the "how" — ensures cloud adoption is business-driven, not technology-driven.*

- [ ] 🔴 **Business drivers documented and quantified:** Cloud adoption objectives (cost reduction, agility, innovation, resilience) are formally documented with measurable KPIs (e.g., "reduce infrastructure OPEX by 30% within 18 months"). *Acceptance Criteria: Signed-off business case with financial model and baseline metrics.*

- [ ] 🔴 **Cloud strategy type selected and justified:** Strategy explicitly classified as Cloud-Native, Cloud-First, Hybrid, Multi-Cloud, or Repatriation, with a documented rationale aligned to business constraints. *Acceptance Criteria: Strategy document ratified by CTO/CIO.*

- [ ] 🔴 **Target state architecture defined:** A future-state architecture diagram exists, showing application portfolio disposition (6R: Retain, Retire, Rehost, Replatform, Repurchase, Refactor) with completion timeline. *Acceptance Criteria: Disposition map covering ≥90% of in-scope applications.*

- [ ] 🟡 **Cloud provider(s) selected using structured criteria:** Provider selection evaluated against: latency, data sovereignty, service portfolio fit, vendor lock-in risk, commercial terms, support SLAs, and compliance certifications. *Acceptance Criteria: Scored evaluation matrix with ≥5 criteria, signed by Architecture Review Board (ARB).*

- [ ] 🟡 **Total Cost of Ownership (TCO) model completed:** Full TCO model includes compute, storage, network, licensing (BYOL vs. on-demand), egress costs, migration costs, training, and operational labor delta. *Acceptance Criteria: Minimum 3-year TCO with ±15% confidence interval.*

- [ ] 🟡 **Cloud operating model defined:** Target operating model (TOM) specifies whether cloud management will be centralized, federated, or hybrid, with roles for Platform Team, Cloud Centre of Excellence (CCoE), and business units. *Acceptance Criteria: RACI matrix published and agreed upon by stakeholders.*

- [ ] 🟡 **Application portfolio assessed and rationalized:** All in-scope applications assessed using a structured framework (e.g., Gartner TIME model) capturing: age, technical debt, business criticality, and cloud readiness score. *Acceptance Criteria: Portfolio database covering 100% of in-scope apps.*

- [ ] 🟡 **Regulatory and data residency constraints mapped:** Legal, privacy (GDPR, CCPA, PDPA), and data sovereignty requirements identified per workload, with cloud regions mapped to compliance requirements. *Acceptance Criteria: Data residency matrix signed by Legal and Compliance.*

- [ ] 🟢 **Stakeholder map and RACI created:** All stakeholders (CISO, CFO, business owners, platform team, regulators) identified with communication cadence and decision authority documented. *Acceptance Criteria: RACI reviewed and signed by each stakeholder.*

- [ ] 🟢 **Cloud adoption roadmap with phased milestones:** Roadmap broken into phases (Foundation → Migrate → Optimize → Innovate) with milestone dates, dependencies, and exit criteria per phase. *Acceptance Criteria: Roadmap approved in steering committee with budget allocated.*

- [ ] 🟢 **Build vs. Buy vs. SaaS decision framework established:** Criteria defined for when to build custom, use managed cloud services, or adopt SaaS (e.g., commodity functions default to SaaS/PaaS). *Acceptance Criteria: Decision tree documented and socialized with development teams.*

- [ ] 🟢 **Vendor lock-in risk assessment completed:** Each architectural dependency on provider-specific services (e.g., AWS Lambda, Azure Cosmos DB) assessed for portability risk and mitigation strategy documented. *Acceptance Criteria: Lock-in register with risk ratings and mitigation for each proprietary service.*

- [ ] 🟢 **Architecture principles aligned to enterprise strategy:** Cloud architecture principles are derived from enterprise architecture principles (e.g., API-first, data as an asset, security by design) and do not contradict them. *Acceptance Criteria: Traceability matrix linking cloud principles to enterprise principles.*

- [ ] 🔵 **Sustainability and carbon footprint targets set:** Cloud architecture targets defined for carbon emissions (e.g., use of renewable-energy regions, rightsizing to reduce waste) aligned to corporate ESG goals. *Acceptance Criteria: Carbon KPIs included in architecture scorecard.*

- [ ] 🔵 **Innovation pipeline connected to cloud strategy:** Emerging technology candidates (GenAI, edge computing, IoT, serverless) mapped to business capability gaps with a structured evaluation mechanism. *Acceptance Criteria: Innovation backlog reviewed quarterly by architecture team.*

---

### 1.2 Design Principles

> *Non-negotiable architectural rules that constrain design decisions and ensure consistency across teams and workloads.*

- [ ] 🔴 **Design for failure (Chaos Engineering mindset):** Every component is designed assuming it will fail. No single point of failure exists without compensating controls. *Verification: Architecture diagram annotated with failure mode per component.*

- [ ] 🔴 **Security by design, not bolted-on:** Security controls (IAM, encryption, network segmentation) are first-class citizens in the architecture, not post-deployment additions. *Verification: Threat model produced before any implementation begins.*

- [ ] 🔴 **Least privilege enforced by default:** All identities (human and machine) are granted minimum permissions required; no wildcard IAM policies exist at creation. *Verification: IAM policy audit shows zero over-privileged accounts at launch.*

- [ ] 🟡 **Immutable infrastructure principle applied:** Infrastructure is replaced, not mutated; configuration drift is prevented through IaC-only deployments (no manual changes in production). *Verification: Change log shows 100% IaC-driven changes; no console modifications.*

- [ ] 🟡 **Everything as code (EaC) enforced:** Infrastructure (IaC), policy (PaC), pipelines (pipeline-as-code), and documentation (docs-as-code) are all version-controlled in a Git repository. *Verification: Git repository audit covers infra, policy, and pipeline definitions.*

- [ ] 🟡 **API-first and loosely coupled design:** All service integrations use well-defined APIs (REST, GraphQL, AsyncAPI); no direct database-to-database coupling across service boundaries. *Verification: API catalogue exists with >95% service-to-service integrations documented.*

- [ ] 🟡 **Scalability designed-in (horizontal over vertical):** Services scale horizontally (more instances) rather than vertically (bigger instances) by default; auto-scaling policies defined for all stateless tiers. *Verification: Load test results demonstrate linear scaling at 2×, 5×, 10× baseline load.*

- [ ] 🟡 **Cloud-native service preference:** Managed cloud services (PaaS, serverless) are preferred over self-managed IaaS equivalents unless a documented justification exists. *Verification: Architecture Decision Records (ADRs) exist for every IaaS choice where PaaS is available.*

- [ ] 🟢 **Observability built into every service:** Structured logging, distributed tracing, and metrics are mandatory for all services; not optional or add-on. *Verification: Observability contract in service definition template.*

- [ ] 🟢 **Cost awareness embedded in design:** Estimated monthly cloud cost included in every Architecture Decision Record; tagging strategy applied so cost is attributable to business units. *Verification: Cost allocation report shows ≥95% of spend tagged correctly.*

- [ ] 🟢 **Reversibility and evolvability prioritized:** Architecture decisions favor reversible choices; big-bang irreversible decisions escalated to ARB with higher scrutiny. *Verification: ADR log classifies each decision as reversible/irreversible.*

- [ ] 🟢 **Data gravity and locality considered:** Compute placed as close as possible to data to minimize latency and egress costs; multi-region data strategies account for data gravity. *Verification: Network topology diagram shows compute-to-data locality analysis.*

- [ ] 🔵 **Compliance-as-code integrated from day one:** Compliance policies (e.g., CIS Benchmarks, PCI-DSS controls) encoded as machine-readable policies (OPA, AWS Config Rules, Azure Policy) before deployment. *Verification: Policy library covers ≥80% of applicable compliance controls.*

---

### 1.3 Architecture Decisions

> *Formal governance of key decisions that have long-term structural impact — using Architecture Decision Records (ADRs).*

- [ ] 🔴 **Architecture Decision Record (ADR) process established:** A lightweight but mandatory ADR template (context, decision, status, consequences, alternatives considered) is in use; all significant decisions recorded. *Verification: ADR repository accessible to all architects; minimum 1 ADR per major component.*

- [ ] 🔴 **Compute paradigm decision documented:** Explicit decision between VM/container/serverless/bare-metal for each workload tier, with rationale (performance, cost, operational overhead). *Verification: ADR-001 (Compute Strategy) exists and is ARB-approved.*

- [ ] 🔴 **Networking topology decision documented:** Hub-and-spoke, mesh, or flat network design selected and documented with security zone definitions, connectivity (VPN/ExpressRoute/DirectConnect), and IP address plan. *Verification: Network architecture diagram reviewed by CISO and Network team.*

- [ ] 🔴 **Identity and Access Management (IAM) strategy decided:** Federated identity (SAML, OIDC), multi-account strategy (AWS Organizations/Azure Management Groups), and privileged access model (PAM) selected and documented. *Verification: IAM architecture diagram signed off by CISO.*

- [ ] 🟡 **Data architecture and storage tier decisions made:** Database per service, shared database, event sourcing, or CQRS patterns selected per workload; storage tiers (hot/warm/cold/archive) defined with lifecycle policies. *Verification: Data flow diagram covers all services; ADR for each major data store.*

- [ ] 🟡 **Multi-region and disaster recovery strategy decided:** Active-active, active-passive, pilot light, or backup-restore strategy selected for each workload tier with RPO and RTO targets explicitly defined. *Verification: DR runbook exists; RPO/RTO validated through a tabletop or failover test.*

- [ ] 🟡 **Container orchestration platform decision made:** Kubernetes (self-managed/managed: EKS/AKS/GKE), serverless containers (Fargate/Cloud Run), or none — selected with lifecycle support commitment. *Verification: ADR with evaluation of total cost of ownership including operational overhead.*

- [ ] 🟡 **Service mesh decision documented:** Use of service mesh (Istio, Linkerd, AWS App Mesh) vs. library-based (Envoy sidecar) vs. none, with mTLS, observability, and traffic management requirements driving the decision. *Verification: ADR exists; if mesh adopted, operational runbook included.*

- [ ] 🟡 **CI/CD platform and deployment strategy decided:** Platform (GitHub Actions, GitLab CI, Jenkins, Azure DevOps) and deployment patterns (blue/green, canary, rolling, feature flags) selected for each service tier. *Verification: Pipeline-as-code committed to repo; deployment strategy per application documented.*

- [ ] 🟢 **Event streaming vs. messaging decision made:** Apache Kafka, AWS Kinesis, Azure Service Bus, Google Pub/Sub, or RabbitMQ selected per use case, with ordering, durability, and throughput requirements justified. *Verification: ADR with throughput benchmarks and retention requirements.*

- [ ] 🟢 **Observability platform decided:** Centralized logging (ELK, OpenSearch, Splunk, Datadog), APM (Datadog, Dynatrace, New Relic, OpenTelemetry), and distributed tracing stack selected. *Verification: Observability platform operational before first workload migrated.*

- [ ] 🟢 **Landing Zone design finalized:** Cloud landing zone (AWS Control Tower, Azure Landing Zones, GCP Landing Zone) blueprint defined with account/subscription structure, network topology, and security baseline. *Verification: Landing zone deployed to non-production and validated against CIS Benchmarks.*

- [ ] 🔵 **FinOps tooling and governance decided:** Cloud cost management tool (CloudHealth, Apptio Cloudability, AWS Cost Explorer, Azure Cost Management) selected; tagging taxonomy and budget alert thresholds defined. *Verification: Cost anomaly detection alerts configured before production launch.*

---

## 2. Implementation Readiness Checklist

### 2.1 People & Skills

> *Ensures the human capital is available, capable, and organized to execute the architecture.*

- [ ] 🔴 **Cloud skills gap assessment completed:** Current team skills benchmarked against required cloud skills (AWS/Azure/GCP certifications as proxy); gap analysis with training plan and timeline produced. *Verification: Skills matrix spreadsheet with training budget allocated.*

- [ ] 🔴 **Cloud Centre of Excellence (CCoE) established:** CCoE team formed with defined mandate covering: guardrails, training, best practices, tooling, and community of practice. Minimum viable CCoE: 3-5 people. *Verification: CCoE charter signed; team org chart published.*

- [ ] 🔴 **Roles and responsibilities for cloud operations defined:** Cloud Engineer, Cloud Architect, Site Reliability Engineer (SRE), FinOps Analyst, Cloud Security Engineer roles defined with job descriptions. *Verification: All production-critical roles filled or transition plan documented.*

- [ ] 🟡 **Certification and training programme underway:** Target certifications defined per role (e.g., AWS Solutions Architect for architects, AWS Security Specialty for security engineers); training subscriptions procured (A Cloud Guru, Pluralsight, Cloud Academy). *Verification: ≥70% of cloud team members hold at least one relevant certification.*

- [ ] 🟡 **Cloud-native development practices training completed:** Development teams trained on: 12-Factor App methodology, containerization (Docker), IaC (Terraform/Pulumi/CDK), and cloud-native patterns. *Verification: Training completion records; ≥80% of devs trained before coding starts.*

- [ ] 🟡 **SRE/Platform team staffed and empowered:** SRE team (or Platform Engineering function) exists with toil reduction mandate, SLO ownership, and authority to reject unreliable deployments. *Verification: SRE team charter exists; error budget policy defined.*

- [ ] 🟢 **Change management and culture programme active:** Organizational change management (OCM) plan addresses: stakeholder buy-in, fear of job displacement, new ways of working, and DevOps culture shift. *Verification: OCM plan exists; regular all-hands updates occurring.*

- [ ] 🟢 **Cloud vendor support plan engaged:** Enterprise support (AWS Enterprise, Azure Unified, GCP Premium) or equivalent contracted; Trusted Advisor / Well-Architected Review access confirmed. *Verification: Support contract signed; escalation path to TAM documented.*

- [ ] 🔵 **Cloud architecture community of practice running:** Internal community of practice meets ≥monthly to share learnings, review ADRs, and discuss emerging patterns. *Verification: Meeting cadence established; artefacts published to internal wiki.*

---

### 2.2 Process & Tooling

> *Establishes the operational machinery that enables consistent, repeatable, and auditable cloud delivery.*

- [ ] 🔴 **IaC tooling selected and standardized:** Infrastructure-as-Code tool (Terraform, Pulumi, AWS CDK, Bicep, CloudFormation) selected; team trained; module library initialized. *Verification: IaC linting, security scanning (Checkov, tfsec), and state backend configured.*

- [ ] 🔴 **Git branching strategy and code review policy defined:** Branch strategy (GitFlow, trunk-based development) selected; PR review requirements (≥2 reviewers, CI pass required) enforced via branch protection rules. *Verification: Repository settings show branch protection enabled; policy documented.*

- [ ] 🔴 **CI/CD pipeline for infrastructure and applications operational:** Automated pipeline exists covering: lint → unit test → security scan → build → deploy (non-prod) → integration test → promote to prod. *Verification: Pipeline diagram reviewed; sample deployment completed end-to-end.*

- [ ] 🟡 **Secret management solution implemented:** Secrets (API keys, passwords, certificates) stored in a dedicated vault (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager); no secrets in code or environment variables. *Verification: Secret scan in CI pipeline (GitLeaks, Trufflehog) returns zero findings.*

- [ ] 🟡 **Policy-as-Code (PaC) pipeline integrated:** OPA/Rego, AWS Service Control Policies, Azure Policy, or Sentinel policies deployed in pipeline to block non-compliant infrastructure before deployment. *Verification: Sample non-compliant IaC rejected at CI stage; policy coverage report.*

- [ ] 🟡 **Developer portal / internal developer platform (IDP) configured:** Self-service portal (Backstage, Cortex, or custom) provides developers access to: approved service templates, documentation, cost data, and pipeline status. *Verification: Developer portal accessible; ≥3 golden path templates available.*

- [ ] 🟡 **Change management process (ITIL-aligned) defined for cloud:** Cloud change types (standard, normal, emergency) classified; approval workflows, change windows, and rollback criteria documented. *Verification: ITSM tool updated with cloud change categories; first change advisory board (CAB) run.*

- [ ] 🟢 **Container registry and artifact management configured:** Private container registry (ECR, ACR, GCR, JFrog Artifactory) configured with image scanning (Trivy, Snyk, Clair), retention policies, and immutable tags enforced. *Verification: Image scan policy blocks CRITICAL CVEs from promotion to production.*

- [ ] 🟢 **Configuration management database (CMDB) updated for cloud:** Cloud resources (VMs, clusters, databases, functions) auto-discovered and fed into CMDB via cloud APIs; CMDB accuracy target ≥95%. *Verification: CMDB reconciliation report shows ≥95% accuracy vs. cloud inventory.*

- [ ] 🟢 **FinOps process and tooling operational:** Monthly cloud cost review meeting scheduled; budget alerts configured; showback/chargeback model implemented; rightsizing recommendations reviewed weekly. *Verification: Cost allocation report available; budget alerts firing correctly in test.*

- [ ] 🔵 **Platform engineering golden paths published:** ≥3 "golden path" templates (e.g., web app, data pipeline, ML inference) available as IaC modules with opinionated defaults for security, observability, and cost. *Verification: Golden paths tested end-to-end; documentation published.*

- [ ] 🔵 **Chaos Engineering tooling provisioned:** Chaos tooling (AWS Fault Injection Simulator, Chaos Monkey, Gremlin, LitmusChaos) available in non-production environments; GameDay process defined. *Verification: First chaos experiment run in staging; results documented.*

---

### 2.3 Infrastructure & Platform

> *Validates that the cloud foundation (Landing Zone) and platform infrastructure are production-grade before workloads land.*

- [ ] 🔴 **Cloud Landing Zone deployed and validated:** Landing zone (account structure, networking, security baseline, logging) deployed and validated against a defined baseline (CIS Benchmarks, AWS Foundations Benchmark). *Verification: Automated compliance scan (AWS Security Hub, Azure Security Score, GCP Security Command Center) score ≥80%.*

- [ ] 🔴 **Network topology deployed and tested:** VPC/VNet architecture (hub-and-spoke or mesh), subnets, route tables, NAT gateways, and peering connections deployed; end-to-end connectivity tests passed. *Verification: Connectivity test matrix (all required paths tested) shows 100% pass.*

- [ ] 🔴 **DNS and certificate management operational:** Private DNS resolver, public DNS zones, and automated certificate management (ACM, Let's Encrypt, ACME protocol) configured; wildcard certificates avoided. *Verification: DNS resolution tests pass for all service names; certificates auto-renew ≥30 days before expiry.*

- [ ] 🔴 **Centralized logging and audit trail operational:** All cloud accounts ship API audit logs (CloudTrail, Azure Activity Log, GCP Audit Logs) to immutable, centralized log store retained for ≥12 months (or regulatory requirement). *Verification: Log pipeline tested; simulated API call appears in SIEM within 5 minutes.*

- [ ] 🔴 **Identity platform federated and MFA enforced:** SSO (Okta, Azure AD, AWS IAM Identity Center) integrated with cloud accounts; MFA enforced for all human access; break-glass accounts documented and secured. *Verification: Login with SSO tested; MFA bypass attempt blocked; break-glass account inventory audit passed.*

- [ ] 🟡 **Baseline security controls deployed (Security Baseline):** AWS Security Hub/Azure Defender/GCP SCC enabled; GuardDuty/Defender for Cloud/Security Command Center active; findings routed to SIEM. *Verification: Critical and High findings generate SIEM alerts within SLA.*

- [ ] 🟡 **Container platform (Kubernetes) hardened:** CIS Kubernetes Benchmark applied; Pod Security Standards enforced (Restricted profile); network policies deployed; admission webhooks (OPA/Kyverno) active. *Verification: kube-bench score ≥90%; sample policy violation blocked at admission.*

- [ ] 🟡 **Backup and recovery infrastructure deployed:** Backup solution (AWS Backup, Azure Backup, Velero for K8s) configured with defined schedules, retention policies, and tested restore procedures. *Verification: Restore test completed for each critical data store; RTO/RPO measured.*

- [ ] 🟡 **Service mesh or zero-trust network controls active:** mTLS between services enforced; service-to-service authorization policies deployed; lateral movement restricted by design. *Verification: Unauthorized service-to-service call blocked; mTLS certificate rotation automated.*

- [ ] 🟢 **Tagging and resource naming convention enforced:** Mandatory tags (environment, owner, cost-center, application, data-classification) enforced via policy; naming convention documented and linting applied in IaC. *Verification: Automated scan shows ≥98% of resources correctly tagged.*

- [ ] 🟢 **Patching and image refresh pipeline operational:** OS/base image patching pipeline runs ≥weekly; new images validated in staging before promotion; immutable AMIs/container images used. *Verification: Patch currency report shows ≥95% of compute within 30 days of patch.*

- [ ] 🔵 **Edge and CDN infrastructure provisioned (if applicable):** CDN (CloudFront, Azure CDN, GCP Cloud CDN) configured with WAF, DDoS protection, caching policies, and origin protection (origin shield). *Verification: Cache hit ratio ≥60% for static assets; DDoS simulation passed.*

---

## 3. Security & Compliance Checklist

### 3.1 Security Controls

> *Maps directly to NIST CSF functions (Identify, Protect, Detect, Respond, Recover) and ISO 27001 Annex A controls.*

- [ ] 🔴 **Threat model completed for each workload** *(NIST CSF: ID.RA-1; ISO 27001: A.8.2)*: STRIDE or PASTA threat model produced; threats ranked by likelihood × impact; mitigations mapped to controls. *Verification: Threat model document signed by Security Architect; all HIGH threats have mitigations.*

- [ ] 🔴 **Zero Trust Architecture (ZTA) principles applied** *(NIST SP 800-207)*: "Never trust, always verify" enforced; no implicit trust based on network location; all access requires authentication and authorization. *Verification: Network-based implicit trust paths identified as zero; ZTA maturity assessment score ≥3/5.*

- [ ] 🔴 **Encryption at rest enforced for all data stores** *(NIST CSF: PR.DS-1; ISO 27001: A.10.1)*: All databases, object storage, block storage, and backups encrypted using AES-256 or higher; customer-managed keys (CMK) used for sensitive data. *Verification: Resource inventory scan shows 100% encryption at rest; CMK key rotation configured ≤365 days.*

- [ ] 🔴 **Encryption in transit enforced** *(NIST CSF: PR.DS-2; ISO 27001: A.10.1)*: TLS 1.2 minimum (TLS 1.3 preferred) enforced on all endpoints; deprecated protocols (SSLv3, TLS 1.0/1.1) blocked by policy. *Verification: SSL Labs scan A grade for all public endpoints; internal traffic TLS validated via packet capture.*

- [ ] 🔴 **Privileged Access Management (PAM) deployed** *(NIST CSF: PR.AC-4; ISO 27001: A.9.2)*: Just-in-time (JIT) access for admin roles via PAM tool (CyberArk, BeyondTrust, AWS IAM Identity Center); session recording for privileged sessions. *Verification: Persistent privileged access accounts = zero; JIT access audit log available.*

- [ ] 🔴 **SIEM/SOC integration active** *(NIST CSF: DE.CM-1; ISO 27001: A.12.4)*: All security events (auth failures, privilege escalation, API anomalies, network anomalies) ingested into SIEM; SOC analyst runbooks exist. *Verification: Simulated attack (MITRE ATT&CK T1078) generates SIEM alert within 15 minutes.*

- [ ] 🟡 **Vulnerability management programme operational** *(NIST CSF: ID.RA-1; ISO 27001: A.12.6)*: Continuous vulnerability scanning (Qualys, Tenable.io, AWS Inspector, Prisma Cloud) for compute, containers, and code; critical CVEs patched within 24 hours. *Verification: Vulnerability SLA report shows critical CVE remediation ≤24h for last 3 months.*

- [ ] 🟡 **Web Application Firewall (WAF) deployed** *(NIST CSF: PR.PT-4)*: WAF (AWS WAF, Azure WAF, Cloudflare, F5) deployed in front of all public-facing APIs and web apps; OWASP Top 10 rule sets active; custom rules for business logic. *Verification: OWASP Top 10 penetration test passed with WAF active.*

- [ ] 🟡 **DDoS protection enabled** *(NIST CSF: PR.PT-4)*: Cloud-native DDoS protection (AWS Shield Advanced, Azure DDoS Protection Standard, GCP Cloud Armor) enabled for all public-facing endpoints. *Verification: DDoS protection coverage report shows 100% of public endpoints covered.*

- [ ] 🟡 **Secret scanning in CI/CD pipeline active** *(NIST CSF: PR.DS-5)*: Pre-commit hooks and CI pipeline stages scan for secrets (API keys, passwords, certificates) using tools like GitLeaks, Trufflehog, or GitHub Advanced Security. *Verification: Intentional secret commit in test branch is blocked at CI stage.*

- [ ] 🟡 **Container and image security scanning enforced** *(NIST CSF: PR.IP-1)*: All container images scanned for CVEs (Trivy, Snyk, Clair) before deployment; images with CRITICAL CVEs blocked from production. *Verification: Admission webhook blocks deployment of unscanned or critical-CVE images.*

- [ ] 🟢 **Security Information and Event Management (SIEM) tuned** *(NIST CSF: DE.CM-7)*: SIEM alert false positive rate <10%; detection rules reviewed quarterly; MITRE ATT&CK coverage mapped. *Verification: SIEM coverage report shows ≥60% MITRE ATT&CK technique coverage.*

- [ ] 🟢 **Data Loss Prevention (DLP) controls deployed** *(ISO 27001: A.8.3)*: DLP policy monitors for exfiltration of sensitive data (PII, financial data, IP) via email, API, storage; alerts generated for violations. *Verification: DLP test (synthetic PII exfiltration attempt) generates alert.*

- [ ] 🟢 **Cloud Security Posture Management (CSPM) active** *(NIST CSF: ID.AM-3)*: CSPM tool (Prisma Cloud, Wiz, Orca Security, AWS Security Hub) continuously assesses cloud configuration against CIS Benchmarks. *Verification: CSPM score ≥80%; critical misconfigurations auto-remediated or alerted within 1 hour.*

- [ ] 🔵 **Supply chain security controls implemented** *(NIST CSF: ID.SC-4; SLSA Framework)*: Software Bill of Materials (SBOM) generated for all applications; dependency vulnerability scanning (OWASP Dependency-Check, Snyk) in pipeline; SLSA Level ≥2 achieved. *Verification: SBOM generated for all services; no known exploited vulnerabilities in dependencies.*

---

### 3.2 Compliance & Regulatory

- [ ] 🔴 **Applicable regulations and standards inventoried:** All applicable regulations (GDPR, HIPAA, PCI-DSS, SOX, ISO 27001, FedRAMP, APRA CPS 234) listed per workload; compliance obligation register maintained. *Verification: Register reviewed by Legal and Compliance; signed off annually.*

- [ ] 🔴 **Cloud provider compliance certifications verified:** Provider's compliance certifications for applicable regulations confirmed (e.g., AWS ISO 27001 certificate, GCP PCI-DSS AOC); in-scope services verified against provider compliance scope. *Verification: Provider certification documents on file; services used confirmed in-scope.*

- [ ] 🔴 **Shared responsibility model documented per workload:** For each workload, the provider vs. customer security responsibilities documented; gaps in customer responsibility addressed with controls. *Verification: Shared responsibility matrix per workload exists; no unaddressed customer responsibilities.*

- [ ] 🟡 **GDPR / Privacy-by-design controls implemented (if applicable):** Data subject rights (access, erasure, portability) implementable via technical controls; data retention and deletion automated; consent management integrated. *Verification: Data erasure request completed end-to-end within 30 days in test.*

- [ ] 🟡 **PCI-DSS scope defined and minimized (if applicable):** Cardholder Data Environment (CDE) scope documented; network segmentation isolates CDE; tokenization used to minimize scope. *Verification: PCI QSA reviewed scope; segmentation penetration test passed.*

- [ ] 🟡 **Audit logging meets regulatory retention requirements:** Log retention periods comply with longest applicable regulation (e.g., SOX requires 7 years, PCI-DSS 12 months); immutable storage used. *Verification: Log retention policy configuration validated; retention test completed.*

- [ ] 🟢 **Penetration testing schedule and policy established:** External penetration test performed ≥annually (required for PCI-DSS, SOC 2); cloud-specific test covers: IAM escalation paths, SSRF, metadata API abuse, storage misconfiguration. *Verification: Pentest report available; critical and high findings remediated before go-live.*

- [ ] 🟢 **Third-party risk assessments for cloud providers completed:** Cloud providers assessed against organizational third-party risk framework; SLAs reviewed for compliance with contractual obligations. *Verification: Third-party risk assessment on file for each major provider.*

- [ ] 🟢 **Data Processing Agreements (DPA) signed with providers:** DPA signed with all cloud providers processing personal data; sub-processor list reviewed. *Verification: DPA documents on file; legal review completed.*