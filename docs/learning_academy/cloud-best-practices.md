# Cloud Architecture Best Practices: A Comprehensive Practitioner's Guide

> **Scope:** Applicable across AWS, Azure, GCP, and hybrid/multi-cloud environments. Grounded in real-world enterprise delivery experience, AWS Well-Architected Framework, Azure Well-Architected Framework, Google Cloud Architecture Framework, TOGAF, SABSA, and NIST guidelines.

---

## 1. Architecture Design Best Practices

| # | Practice | Description | Rationale | Anti-Pattern to Avoid |
|---|---|---|---|---|
| 1 | **Design for Failure First** | Assume every component will fail. Design every tier — compute, network, storage, DNS — with failure as the baseline state, not the exception. Use chaos engineering to validate assumptions. | Cloud infrastructure is inherently ephemeral. Components fail at scale. Netflix's Chaos Monkey philosophy: if you haven't tested failure, you haven't tested your system. | Assuming cloud provider SLAs (~99.99%) eliminate failure risk. A single-AZ RDS instance with no read replica is a latent outage waiting to happen. |
| 2 | **Design for Horizontal Scalability** | Architect stateless application tiers that scale out (more instances) rather than up (bigger instances). Use load balancers, auto-scaling groups, and distributed queues. | Vertical scaling has a hard ceiling and requires downtime. Horizontal scaling is elastic, cost-efficient, and aligned with cloud-native principles. | Building fat, stateful monoliths where session state lives in memory on a single server — making auto-scaling impossible without session loss. |
| 3 | **Separate Stateful from Stateless Components** | Explicitly partition stateless compute (application servers, APIs, workers) from stateful components (databases, caches, file stores). Route persistence to managed services. | Stateless compute is trivially scalable and replaceable. Conflating state with compute creates scaling, recovery, and deployment complexity. | Storing session data, files, or transient state on ephemeral instance local storage (e.g., EC2 instance store) without replication. |
| 4 | **Design for Loose Coupling** | Interconnect components via well-defined APIs, message queues (SQS, Service Bus, Pub/Sub), or event streams (Kafka, EventBridge, Event Hubs). Avoid direct synchronous service-to-service calls in critical paths. | Tight coupling creates cascading failure chains. A single slow database query in a synchronous call chain can timeout an entire user-facing request. | Point-to-point synchronous HTTP chains with 8+ hops — each hop multiplies latency and failure probability. |
| 5 | **Adopt Multi-AZ as Minimum; Multi-Region for Critical Workloads** | Deploy active workloads across ≥2 Availability Zones by default. For RTO/RPO < 1 hour, evaluate active-active or active-passive multi-region designs. | A single AZ outage (AWS us-east-1b, Dec 2021; Azure East US 2020) is a documented, recurring event, not a theoretical risk. | Single-AZ deployments for production databases. Treating multi-AZ as optional to "save cost." |
| 6 | **Implement the Well-Architected Framework Pillars** | Evaluate every architecture against: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Conduct formal WAR reviews quarterly. | Provides a structured, vendor-endorsed checklist grounded in thousands of customer reviews. Identifies blind spots systematically. | Treating WAF as a one-time checkbox exercise at project inception rather than a continuous review cadence. |
| 7 | **Design Data Architecture Explicitly** | Define data residency, classification, lifecycle, retention, replication, and access patterns before selecting storage services. Choose purpose-built databases (OLTP vs. OLAP vs. Graph vs. Time-series). | The most expensive architectural mistakes in cloud are data architecture decisions: wrong database engine, unplanned egress costs, or compliance violations. | Using a single relational database (e.g., PostgreSQL) for every data use case — time-series telemetry, user sessions, analytics, and transactional data. |
| 8 | **Design Cost as a First-Class Requirement** | Include cost modelling in architecture decision records. Use cloud pricing calculators. Define cost guardrails (budget alerts, SCPs, spending limits) alongside functional requirements. | Cloud costs are operationally variable, not fixed capital. Without architectural guardrails, costs grow non-linearly — a 10x traffic spike becomes a 10x cost spike. | Designing for unlimited elasticity without auto-scaling maximum limits, egress cost analysis, or data transfer cost modelling. |
| 9 | **Apply the Principle of Least Privilege Structurally** | Design IAM roles, network boundaries, and service permissions with minimum required access at architecture time — not as a post-deployment hardening exercise. | 80% of cloud breaches involve compromised credentials or excessive privilege. Retrofitting least privilege is significantly harder and costlier than designing it in. | Creating wildcard IAM policies ("Action: *", "Resource: *") as temporary measures that become permanent. |
| 10 | **Embed Observability into Architecture** | Define logging, metrics, and tracing as architectural concerns: structured log formats, correlation IDs across service boundaries, SLI/SLO definitions, and trace propagation (OpenTelemetry). | You cannot operate what you cannot observe. Observability retrofit is expensive and incomplete — dark spots in telemetry become the location of your next P1 incident. | Treating monitoring as an infrastructure team afterthought. No distributed tracing in a microservices architecture means hours of forensic log correlation during incidents. |
| 11 | **Design Explicitly for Network Topology** | Define VPC/VNet architecture, CIDR ranges, subnet segmentation (public/private/data), peering, transit gateway, private endpoints, and on-premises connectivity before first deployment. | Network topology mistakes — overlapping CIDRs, flat networks, missing private endpoints — are the hardest architectural decisions to reverse without full redeployment. | Deploying with default VPCs or auto-assigned CIDR ranges that conflict with on-premises 10.0.0.0/8 space, requiring costly remediation. |
| 12 | **Use Infrastructure as Code from Day One** | Every resource — network, compute, storage, IAM, monitoring — must be provisioned via IaC (Terraform, Pulumi, CDK, Bicep). No manual console provisioning in non-sandbox environments. | Manual infrastructure creates undocumented drift, non-reproducible environments, and compliance gaps. IaC enables version control, peer review, and disaster recovery through code. | "ClickOps" production infrastructure that cannot be audited, reproduced, or recovered after accidental deletion. |
| 13 | **Apply Domain-Driven Decomposition for Service Boundaries** | Use Domain-Driven Design (DDD) bounded contexts to define microservice or modular monolith boundaries. Align service ownership with business capability, not technical layer. | Technology-aligned services ("the database team owns all data services") create organisational coupling that defeats the purpose of distributed architecture. | Decomposing by technical layer (UI service, business logic service, data service) — creates distributed monolith patterns with all the complexity but none of the independence. |
| 14 | **Design for Deployment Independence** | Each service or component must be deployable independently without coordinated releases. Use consumer-driven contract testing, versioned APIs, and feature flags. | Coordinated deployments across multiple services negate the velocity benefits of microservices. One team's release cycle blocks all others. | Requiring a "big bang" release window where 15 services must be deployed in exact sequence — the opposite of cloud-native agility. |
| 15 | **Document Architecture Decisions with ADRs** | Capture every significant architectural decision in Architecture Decision Records: context, options considered, decision, rationale, and consequences. Store in version-controlled repositories. | Architecture decisions without documented rationale become tribal knowledge. New team members make the same expensive mistakes. Auditors cannot trace compliance decisions. | Undocumented verbal decisions on architecture that contradict the actual implementation — leading to years of "why did we do it this way?" without answers. |

---

## 2. Implementation Best Practices

| # | Practice | Description | How To Apply | Common Pitfall |
|---|---|---|---|---|
| 1 | **Implement CI/CD Pipelines for All Environments** | Every code and infrastructure change flows through automated build → test → security scan → deploy pipelines. No manual deployments to staging or production. | Use GitHub Actions, Azure DevOps, GitLab CI, or AWS CodePipeline. Enforce pipeline-only deployments via branch protection rules and removal of manual console access. | Maintaining "emergency" manual deployment mechanisms that become the default path under pressure, bypassing all quality gates. |
| 2 | **Use Immutable Infrastructure Patterns** | Replace infrastructure in place, never patch running instances. New version → new AMI/container image → deploy → cut traffic → terminate old instances. | Implement blue/green or canary deployments. Use golden AMI pipelines. Never SSH into production instances for configuration changes. | Treating cloud VMs like on-premises servers — SSH'ing in, patching in place, accumulating configuration drift that makes instances unreproducible. |
| 3 | **Implement Environment Parity** | Dev, Test, Staging, and Production environments must be architecturally identical, differing only in scale and data. Use the same IaC templates with environment-specific variable overlays. | Parameterise IaC modules with environment tiers. Use the same Terraform modules for dev and prod with different `.tfvars` files. Run integration tests in a production-like environment. | "Works on my machine/staging" failures caused by environment-specific configurations, different database engines, or missing services in lower environments. |
| 4 | **Enforce Tagging Standards Rigorously** | Every cloud resource must carry mandatory tags: environment, owner, cost-centre, application, data-classification, and created-by. Enforce via policy (AWS SCP, Azure Policy, GCP Organisation Policy). | Define tag taxonomy in governance documentation. Implement tag enforcement at deployment pipeline level. Use cloud custodian or AWS Config rules to detect and remediate tag violations. | Months of AWS Cost Explorer showing $2M/month with 60% of cost attributed to untagged resources — impossible to allocate back to business units. |
| 5 | **Implement Secrets Management from Day Zero** | Never store secrets in code, environment variables, or configuration files. Use dedicated secrets managers (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault) with rotation policies. | Integrate Vault/Secrets Manager SDK into application startup. Implement automatic rotation (30/60/90 day cycles). Use dynamic secrets for database credentials where possible. | Database passwords in plaintext in application.properties files committed to Git repositories — a breach discovered months later via GitHub secret scanning. |
| 6 | **Apply GitOps for Kubernetes Workloads** | Use Git as the single source of truth for Kubernetes cluster state. All changes flow through pull requests. ArgoCD or Flux continuously reconciles cluster state to git repository state. | Deploy ArgoCD/Flux as the cluster controller. Implement app-of-apps pattern for multi-cluster management. Enforce pull-request-only workflow with CODEOWNERS requirements. | Direct `kubectl apply` commands to production clusters from developer laptops — no audit trail, no peer review, instant configuration drift. |
| 7 | **Implement Blue/Green or Canary Deployment Patterns** | Deploy new versions alongside existing ones. Shift traffic incrementally (1% → 10% → 25% → 100%) monitoring error rates and latency at each step. Auto-rollback on threshold breach. | Use AWS CodeDeploy, Argo Rollouts, Kubernetes Flagger, or Azure Deployment Slots. Define SLO-based rollback gates. | Big-bang deployments where 100% of traffic shifts instantly to untested production code — a bad release at 2pm Friday affects all users simultaneously. |
| 8 | **Implement Structured, Centralised Logging** | All application logs must be structured (JSON format), include correlation IDs, and be shipped to a central log aggregation platform (Splunk, Datadog, ELK, CloudWatch Logs Insights). | Enforce structured logging via application logging libraries (structured-logging, winston, zerolog). Implement log shipping via sidecar containers or agents. Define retention policies per data classification. | Unstructured free-text logs from 200 microservices dumped into separate log groups with no correlation IDs — incident forensics takes 6 hours instead of 6 minutes. |
| 9 | **Implement Health Checks at Every Layer** | Define and implement liveness probes, readiness probes, and deep health checks for all services. Load balancers, Kubernetes, and auto-scaling groups must use health endpoints. | Implement `/health/live` (process running), `/health/ready` (dependencies available), and `/health/deep` (full dependency chain) endpoints. Fail readiness checks when downstream dependencies are unhealthy. | Load balancers routing traffic to instances that are running but functionally dead — returning 500 errors because their database connection pool is exhausted. |
| 10 | **Implement Automated Security Scanning in Pipelines** | Integrate SAST (static analysis), DAST (dynamic analysis), SCA (dependency scanning), container image scanning, and IaC scanning into every CI pipeline as blocking quality gates. | Use Snyk, Checkov, Trivy, OWASP ZAP, SonarQube, Semgrep. Fail builds on Critical/High vulnerabilities. Maintain allowlist for accepted risk with documented justification. | Shipping container images with 847 known CVEs because "we'll fix security after launch." One critical RCE vulnerability exploited within 72 hours of production deployment. |
| 11 | **Implement Cost Monitoring and Alerting** | Set budget alerts at 50%, 80%, and 100% of monthly budget per account/project. Implement anomaly detection. Review top-10 cost drivers weekly. | Use AWS Cost Anomaly Detection, Azure Cost Management Alerts, GCP Billing Budgets. Integrate cost reports into engineering team dashboards. Implement showback/chargeback. | A Lambda function in an infinite retry loop generating $47,000 in unexpected charges over a weekend — discovered on Monday morning. |
| 12 | **Validate Disaster Recovery Runbooks Regularly** | DR procedures must be tested, not just documented. Execute full DR drills quarterly. Time actual RTO achievement. Measure actual RPO against targets. | Schedule quarterly DR game days. Test backup restoration (not just backup creation). Validate cross-region failover. Document actual vs. target RTO/RPO gaps and remediation plans. | DR runbooks last tested 18 months ago, referencing deprecated console workflows and services that no longer exist — discovered during an actual outage. |
| 13 | **Implement Resource Limits and Quotas** | Define and enforce resource quotas per team/namespace/account: CPU limits, memory limits, storage quotas, API rate limits. Prevent runaway resource consumption. | Use Kubernetes LimitRanges and ResourceQuotas. Implement AWS Service Control Policies for expensive service limits. Set Terraform variable validation for instance type constraints. | A development team spinning up 500 `p3.16xlarge` GPU instances by accident — a $180,000 weekend bill discovered on Monday. |
| 14 | **Implement Automated Compliance Checks** | Use policy-as-code tools to continuously evaluate resource configurations against compliance baselines (CIS Benchmarks, PCI-DSS, HIPAA, NIST). Alert and auto-remediate violations. | Deploy AWS Config + Conformance Packs, Azure Policy Initiatives, GCP Security Command Centre, or Open Policy Agent (OPA) with Gatekeeper/Conftest. | Manual quarterly compliance audits that find 6-month-old misconfigurations — providing a false sense of security between audit cycles. |
| 15 | **Use Managed Services Over Self-Managed Where Justified** | Default to cloud-native managed services (RDS over self-managed PostgreSQL on EC2; EKS/AKS over self-managed Kubernetes; MSK over self-installed Kafka). Justify exceptions. | Evaluate total cost of ownership: managed service fee vs. operational cost of patching, upgrading, monitoring, and scaling self-managed alternatives. Document exceptions in ADRs. | Running self-managed Elasticsearch on EC2 requiring a dedicated 0.5 FTE for patch management, upgrades, and cluster rebalancing — while AWS OpenSearch exists. |

---

## 3. Security Best Practices

| # | Control | Practice | Standard/Framework | Priority |
|---|---|---|---|---|
| 1 | **Identity & Access Management** | Implement Zero Trust IAM: no persistent privileged access, just-in-time elevation via PAM tools (CyberArk, AWS IAM Identity Centre), MFA enforced for all humans, workload identity via IRSA/Workload Identity/Managed Identity. | NIST SP 800-207 (Zero Trust), CIS Benchmark v1.4, AWS Security Pillar | **P0 — Critical** |
| 2 | **Data Encryption** | Enforce encryption at rest (AES-256, KMS-managed keys) and in transit (TLS 1.2 minimum, TLS 1.3 preferred) for all data stores and service communication. Customer-managed keys (CMK) for regulated data. | PCI-DSS Req. 3 & 4, HIPAA §164.312, ISO 27001 A.10 | **P0 — Critical** |
| 3 | **Network Segmentation** | Implement defence-in-depth network architecture: public subnets (only load balancers), private subnets (application tier), isolated subnets (data tier). Security groups as stateful micro-firewalls. No direct internet access to data tier. | NIST SP 800-53 SC-7, CIS AWS Benchmark 5.x | **P0 — Critical** |
| 4 | **Secrets Management** | Zero secrets in code, config files, or environment variables. All secrets stored in Vault, AWS Secrets Manager, or Azure Key Vault with automated rotation. Detect secrets in code via pre-commit hooks and pipeline scanning (GitLeaks, TruffleHog). | OWASP Top 10 A02, CIS Control 3.11, SOC 2 CC6.1 | **P0 — Critical** |
| 5 | **Security Logging & Monitoring** | Enable cloud-native audit trails (CloudTrail, Azure Activity Log, GCP Cloud Audit Logs) across all accounts/subscriptions. Forward to immutable, centralised SIEM. Alert on: root account use, IAM policy changes, security group modifications, and failed auth patterns. | NIST SP 800-92, PCI-DSS Req. 10, SOC 2 CC7.2 | **P1 — High** |
| 6 | **Vulnerability Management** | Continuous container image scanning (Trivy, ECR scanning, Defender for Containers). OS-level CVE scanning (Inspector, Qualys). SLA for remediation: Critical ≤24h, High ≤7 days, Medium ≤30 days. | CIS Control 7, NIST SP 800-40, ISO 27001 A.12.6 | **P1 — High** |
| 7 | **Supply Chain Security** | Implement Software Bill of Materials (SBOM) generation for all container images. Sign images (Sigstore/Cosign, Notary). Enforce admission control (OPA Gatekeeper, Kyverno) to reject unsigned or high-CVE images. | NIST SP 800-161, SLSA Framework, EO 14028 | **P1 — High** |
| 8 | **Privileged Access Management** | No standing privileged access in production. Use break-glass accounts with full logging, approval workflows for elevated access, and automatic credential expiry. Record all privileged sessions. | CIS Control 12, PCI-DSS Req. 7 & 8, SOX ITGC | **P1 — High** |
| 9 | **DDoS & WAF Protection** | Deploy WAF (AWS WAF, Azure Front Door WAF, Cloud Armor) in front of all internet-facing endpoints. Enable managed rule sets for OWASP Top 10. Enable DDoS protection (AWS Shield Advanced, Azure DDoS Protection Standard) for production. | OWASP Top 10, NIST SP 800-61, CIS Control 13 | **P1 — High** |
| 10 | **Data Classification & DLP** | Classify all data assets (Public, Internal, Confidential, Restricted). Apply automated DLP scanning (Macie, Purview, DLP API) to detect misplaced sensitive data. Enforce classification-based storage controls. | NIST SP 800-60, ISO 27001 A.8.2, GDPR Art. 25 | **P2 — Medium** |
| 11 | **Security Posture Management (CSPM)** | Deploy Cloud Security Posture Management tools (AWS Security Hub, Microsoft Defender for Cloud, GCP Security Command Centre, Wiz, Prisma Cloud) for continuous misconfiguration detection across entire cloud estate. | CIS Benchmarks, NIST SP 800-53, CSA CCM | **P2 — Medium** |
| 12 | **Incident Response Playbooks** | Maintain and test cloud-specific incident response playbooks: credential compromise, data exfiltration, ransomware, cryptomining. Conduct tabletop exercises quarterly. Integrate with SIEM automated runbooks. | NIST SP 800-61 Rev 2, ISO 27035, SOC 2 CC7.3 | **P2 — Medium** |

---

## 4. Operational Best Practices

| # | Area | Practice | Tooling | KPI |
|---|---|---|---|---|
| 1 | **Observability** | Implement the three pillars of observability: Metrics (RED: Rate, Errors, Duration + USE: Utilisation, Saturation, Errors), structured Logs, and distributed Traces. Define SLIs/SLOs for every user-facing service. | Prometheus + Grafana, Datadog, New Relic, AWS CloudWatch + X-Ray, OpenTelemetry | SLO error budget burn rate < 100%; MTTD (Mean Time to Detect) < 5 min |
| 2 | **Incident Management** | Implement a structured incident management lifecycle: Detection → Triage → Declare → Mitigate → Resolve → Review. Define severity levels (P1-P4) with clear escalation paths and stakeholder communication cadences. | PagerDuty, OpsGenie, Jira Service Management, Slack incident channels, Statuspage | MTTR (P1) < 1 hour; Incident Review completion rate 100%; Repeat incident rate < 10% |
| 3 | **Change Management** | Classify changes (standard/normal/emergency). All production changes require: change record, rollback plan, test evidence, and approval. Implement change freeze periods around critical business dates. | ServiceNow, Jira, AWS Change Manager, Azure Change Management | Change failure rate < 5%; Unauthorised change rate = 0%; Mean time between failures (MTBF) trending upward |
| 4 | **Capacity Planning** | Review capacity metrics monthly: CPU/memory headroom, storage growth rates, database connection pool utilisation, API quota consumption. Forecast 3-6 months ahead using trend analysis. | CloudWatch/Azure Monitor dashboards, Grafana capacity panels, cloud provider Cost Explorer | P95 CPU utilisation < 70%; Database connection pool < 80%; Storage growth forecast ≤ provisioned capacity |
| 5 | **Cost Optimisation Operations** | Weekly FinOps review of: idle resources, rightsizing recommendations, Reserved Instance/Savings Plan coverage, spot instance opportunities, and data transfer costs. Assign cost ownership to engineering teams. | AWS Compute Optimizer, Azure Advisor, GCP Recommender, CloudHealth, Apptio Cloudability | RI/SP coverage > 70%; Idle resource spend < 5% of total; Cost per transaction trending downward |
| 6 | **Patch & Vulnerability Management** | Automated patching pipelines for OS and middleware: build new golden AMI/container image on patch release → test → roll out via auto-scaling group replacement. Critical patches: 24h SLA. | AWS Systems Manager Patch Manager, Azure Update Manager, Ansible, Packer | Critical CVE remediation time < 24h; High CVE < 7 days; Patch compliance rate > 99% |
| 7 | **Backup & Recovery** | Automate backups with tested restoration procedures. Test backup restoration monthly — not just backup creation. Validate cross-region backup accessibility. Document and test RTO/RPO achievement. | AWS Backup, Azure Backup, GCP Backup for GKE, Velero (Kubernetes), Terraform state backup | Backup success rate > 99.9%; Restoration test success rate 100%; Actual RTO ≤ Target RTO |
| 8 | **Configuration Management** | Maintain desired state configuration for all resources via IaC. Detect and alert on configuration drift (manual changes bypassing IaC). Auto-remediate or block drift within defined compliance windows. | AWS Config + Auto-Remediation, Azure Policy, Terraform Drift Detection (Spacelift, Atlantis), Ansible | Configuration drift incidents = 0 undetected; Drift remediation time < 4h; IaC coverage = 100% of production resources |
| 9 | **Runbook Automation** | Convert top 20 repetitive operational tasks into automated runbooks. Reduce MTTR through pre-approved automated responses to known failure modes. Document and test runbooks quarterly. | AWS Systems Manager Automation, Azure Automation, Ansible Playbooks, PagerDuty Event Orchestration | Automated response rate for known incidents > 60%; Manual toil hours trending downward quarter-over-quarter |
| 10 | **SRE Practices: Error Budgets** | Define SLOs for every production service. Track error budget consumption weekly. When error budget is < 20% remaining, freeze non-reliability work and focus engineering capacity on reliability improvements. | Prometheus + Sloth (SLO framework), Nobl9, Datadog SLO tracking, Grafana SLO dashboards | Error budget consumption rate < 100%; SLO compliance > 99.5%; Feature vs. reliability investment ratio balanced |
| 11 | **Multi-Account/Subscription Operations** | Centralise operational tooling: security findings, cost data, compliance posture, and audit logs aggregated at Organisation/Management Account level. Use automation to manage 10-100s of accounts consistently. | AWS Organizations + Control Tower, Azure Management Groups + Defender for Cloud, GCP Organisation + Security Command Centre | Policy compliance rate across all accounts > 99%; Centralised visibility coverage = 100% of accounts |
| 12 | **Chaos Engineering** | Deliberately inject failures in production (or production-like staging): terminate instances, introduce network latency, exhaust connection pools, fail AZs. Validate system resilience matches architectural assumptions. | AWS Fault Injection Simulator, Azure Chaos Studio, Gremlin, Chaos Monkey, Litmus (Kubernetes) | Chaos experiment frequency ≥ monthly; Discovered resilience gaps remediated within sprint; MTTR decreasing after experiments |

---

## 5. Governance Best Practices

### 5.1 Decision Rights and RACI Clarity

**Effective cloud governance requires unambiguous ownership at every decision level:**

| Decision Type | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Cloud Provider Selection | Cloud CoE / Enterprise Architecture | CTO / CIO | CISO, CFO, Business Stakeholders | All Engineering Teams |
| Account/Landing Zone Design | Cloud Platform Team | Cloud CoE Lead | Security, Networking, Finance | Application Teams |
| Service Catalogue Additions | Cloud CoE / Security | Architecture Review Board | Application Teams, Legal | All Teams |
| Workload Architecture | Application Architect | Product Engineering Lead | Cloud CoE, Security | Platform Team |
| Security Exception Approval | CISO / Security Architecture | CISO | Legal, Risk, Engineering | Audit |
| FinOps Commitments (RI/SP) | FinOps Team | CFO | Engineering Leads, Cloud CoE | Finance |
| Production Change Approval | Change Manager | Service Owner | Architecture, Security | Stakeholders |

**Key principle:** RACI documents must be living artefacts, reviewed quarterly and updated when organisational structures change.

---

### 5.2 Architecture Review Process

**Tiered review gates based on risk and novelty:**

```
Tier 1 — Standard/Pre-Approved Patterns (No Review Required)
  ├── Using approved service catalogue entries
  ├── Within existing approved architecture patterns
  └── Cost impact < $10k/month
  
Tier 2 — Lightweight Review (Architecture Guild, 3 days)
  ├── New service types within existing approved providers
  ├── Cost impact $10k–$100k/month
  └── Changes to existing approved patterns
  
Tier 3 — Architecture Review Board (ARB) (2-week cycle)
  ├── Net-new cloud providers or regions
  ├── Cross-domain architectural changes
  ├── Cost impact > $100k/month
  ├── Security architecture changes
  └── Regulatory/compliance scope changes
  
Tier 4 — Executive Architecture Steering Committee
  ├── Multi-year strategic commitments (enterprise agreements)
  ├── Core platform architecture changes
  └── M&A integration architecture decisions
```

**Review artefacts required:**
- Architecture Decision Record (ADR)
- Threat model (STRIDE analysis minimum)
- Cost estimate (3-year TCO with assumptions)
- Non-functional requirements validation
- DR/resilience design
- Dependency mapping

---

### 5.3 Standards Enforcement Mechanisms

**Defence-in-depth enforcement — never rely on a single control:**

| Layer | Mechanism | Tools | Enforcement Style |
|---|---|---|---|
| **Pre-Commit** | Developer workstation checks | pre-commit hooks, Checkov, tflint | Advisory (warn) |
| **CI Pipeline** | Automated policy scans on PRs | Checkov, OPA Conftest, Terrascan, Snyk IaC | Blocking (fail build) |
| **Deployment Gate** | Policy-as-code pre-deployment check | OPA Gatekeeper, Kyverno, Sentinel (Terraform Cloud) | Blocking (prevent deploy) |
| **Runtime Detective** | Continuous resource configuration monitoring | AWS Config Rules, Azure Policy, GCP Org Policy | Alert + Auto-remediate |
| **Periodic Audit** | Human review of architectural compliance | Architecture guild reviews, penetration testing, WAF assessments | Advisory (findings backlog) |

---

### 5.4 Exception and Waiver Management

**Critical principle: Make doing the right thing easier than requesting an exception.**

**Exception process:**
1. **Submit** formal exception request with: business justification, risk assessment, compensating controls, and proposed duration
2. **Review** by Architecture Review Board + Security Architecture within defined SLA (standard: 5 business days)
3. **Approve/Reject** with documented rationale — exceptions are time-bound (default: 90 days, max: 1 year)
4. **Register** in exception register with owner, expiry date, and review milestone
5. **Monitor** exception compliance — track compensating controls via automated checks
6. **Review** at expiry — renew, close, or escalate to permanent standard change
7. **Escalate** unresolved or repeated exceptions to Architecture Steering Committee

**Anti-pattern:** Exception registers that grow indefinitely with no expiry review — exceptions becoming the de facto standard.

---

### 5.5 Architecture Metrics and Scorecard

| Category | Metric | Target | Reporting Cadence |
|---|---|---|---|
| **Standards Compliance** | % of workloads passing automated policy checks | > 99% | Weekly |
| **Review Process** | ARB review cycle time | < 10 business days | Monthly |
| **Technical Debt** | Architecture exceptions active | < 5 per domain | Monthly |
| **IaC Coverage** | % of production resources managed by IaC | 100% | Weekly |
| **Security Posture** | CSPM critical/high finding count | 0 Critical, < 10 High | Daily |
| **Cost Governance** | % of resources with compliant tagging | > 99% | Weekly |
| **Reliability** | SLO compliance rate across portfolio | > 99.5% | Weekly |
| **Innovation Rate** | New approved patterns added to catalogue | ≥ 2 per quarter | Quarterly |
| **DR Readiness** | % of P1 workloads with tested DR plans | 100% | Quarterly |
| **WAF Assessment Coverage** | % of P1/P2 workloads with WAF review in last 12 months | 100% | Quarterly |

---

## 6. Team & Organisation Best Practices

| # | Practice | Rationale | Implementation | Success Indicator |
|---|---|---|---|---|
| 1 | **Establish a Cloud Centre of Excellence (CoE)** | Cloud adoption without central coordination creates tool sprawl, incons