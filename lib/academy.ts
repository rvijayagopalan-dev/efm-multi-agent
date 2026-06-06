// Complete Academy with all 41 agent domains
export interface AcademyModule {
  id: string;
  name: string;
  groupId: string;
  expertise: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  sections: AcademySection[];
}

export interface AcademySection {
  title: string;
  content: string;
}

// Helper to create stub section content
function stubSection(title: string, topic: string, examples: string[]): AcademySection {
  return {
    title,
    content: `## ${topic}

This module covers core concepts, best practices, patterns, and implementation strategies for ${topic.toLowerCase()}.

### Key Topics
${examples.map(e => `- ${e}`).join('\n')}

### Getting Started
1. Understand the fundamental principles
2. Explore industry standards and frameworks
3. Review reference architectures
4. Practice with hands-on exercises
5. Study real-world case studies

### Resources
- Industry standards and frameworks
- Technology comparison matrices
- Implementation checklists
- Architectural patterns and anti-patterns
- Common pitfalls and how to avoid them`
  };
}

export const ACADEMY_MODULES: AcademyModule[] = [
  // CORE TECHNICAL (8 agents)
  {
    id: 'data-architecture',
    name: 'Data Architecture',
    groupId: 'core-technical',
    expertise: 'Database design, polyglot persistence, replication, data modeling',
    difficulty: 'intermediate',
    sections: [
      {
        title: 'Context: Data Layer Foundation',
        content: `Data Architecture is the foundation of modern systems. How you architect your data layer fundamentally determines:

• **Performance** — Query latency, throughput, and optimization
• **Scalability** — Horizontal and vertical scaling strategies
• **Reliability** — Data durability, disaster recovery, backup retention
• **Compliance** — GDPR, CCPA, HIPAA, SOX, PCI-DSS requirements
• **Cost** — Storage tiers, compute optimization, resource efficiency

Every modern system generates exponential data volumes. The decisions you make about databases affect performance, compliance, cost, and user experience.`
      },
      stubSection('Core Concepts', 'Relational vs. NoSQL Design', [
        'RDBMS (PostgreSQL, Oracle, MySQL): ACID transactions, schema consistency',
        'Document Stores (MongoDB, Firestore): Flexible schema, JSON structures',
        'Key-Value Stores (Redis, DynamoDB): O(1) lookups, caching layers',
        'Column-Family (Cassandra, HBase): Time-series, analytics workloads',
        'Graph Databases (Neo4j): Relationship-first modeling',
        'Time-Series DBs (InfluxDB, Prometheus): Metrics and monitoring'
      ]),
      stubSection('Best Practices', 'Data Modeling & Scaling', [
        'Choose the right database type for your access patterns',
        'Normalize for RDBMS, denormalize for NoSQL',
        'Plan sharding strategy for horizontal scaling',
        'Implement replication for high availability',
        'Design backup and disaster recovery procedures',
        'Implement proper indexing and query optimization'
      ]),
      stubSection('Implementation', 'Schema Design & Operations', [
        'Design schemas that support access patterns',
        'Configure replication and failover mechanisms',
        'Set up automated backup and retention policies',
        'Implement monitoring and alerting for performance',
        'Plan migration strategies for schema evolution',
        'Create runbooks for operational procedures'
      ]),
      stubSection('References', 'Standards & Tools', [
        'CAP Theorem: Consistency, Availability, Partition tolerance',
        'ACID Properties: Atomicity, Consistency, Isolation, Durability',
        'BASE Model: Basically Available, Soft state, Eventually consistent',
        'Tools: PostgreSQL, MongoDB, Redis, Cassandra, Elasticsearch'
      ]),
    ]
  },

  {
    id: 'security-architecture',
    name: 'Security Architecture',
    groupId: 'core-technical',
    expertise: 'Threat modeling, cryptography, zero-trust, IAM, security controls',
    difficulty: 'advanced',
    sections: [
      {
        title: 'Context: Defense-in-Depth Security',
        content: `Security Architecture is about designing systems that defend against threats while enabling business objectives.

• **Prevention** — Firewalls, access controls, encryption
• **Detection** — Monitoring, alerting, threat intelligence
• **Response** — Incident management, recovery procedures
• **Compliance** — Regulatory requirements, audit trails
• **Trust** — User confidence and brand reputation

Security breaches cost organizations millions and destroy customer trust. Proper architecture enables secure operations at scale.`
      },
      stubSection('Core Concepts', 'Threat Modeling & Cryptography', [
        'STRIDE Framework: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege',
        'Zero-Trust Architecture: Never trust, always verify',
        'Symmetric Encryption: AES-256, ChaCha20 for data at rest',
        'Asymmetric Encryption: RSA, ECDSA for key exchange',
        'Password Hashing: bcrypt, PBKDF2 for secure storage',
        'Authentication: MFA, OAuth 2.0, SAML 2.0, passwordless'
      ]),
      stubSection('Best Practices', 'Security Controls & Policy', [
        'Apply principle of least privilege',
        'Implement defense-in-depth with multiple layers',
        'Enable encryption for data in transit and at rest',
        'Use centralized secret management (Vault, KMS)',
        'Implement audit logging and monitoring',
        'Conduct regular security assessments and penetration testing'
      ]),
      stubSection('Implementation', 'Architecture & Operations', [
        'Design threat models for each component',
        'Establish zero-trust access controls',
        'Configure TLS 1.3 for all network traffic',
        'Implement IAM with RBAC or ABAC',
        'Set up SIEM for centralized log analysis',
        'Create incident response procedures'
      ]),
      stubSection('References', 'Standards & Frameworks', [
        'NIST Cybersecurity Framework 2.0',
        'NIST SP 800-53: Security Controls Catalog',
        'ISO 27001: Information Security Management',
        'OWASP Top 10: Application Security',
        'PCI-DSS: Payment Card Security'
      ]),
    ]
  },

  {
    id: 'integration-architecture',
    name: 'Integration Architecture',
    groupId: 'core-technical',
    expertise: 'EIP patterns, message brokers, ETL/CDC, API-led integration',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Enterprise Integration Patterns', [
        'Synchronous Integration: REST APIs, gRPC, HTTP',
        'Asynchronous Integration: Message brokers, event streams',
        'Data Integration: ETL, CDC (Change Data Capture)',
        'Service-to-Service: API gateways, service mesh',
        'Legacy Integration: Adapters, custom bridges'
      ]),
      stubSection('Core Concepts', 'Integration Styles & Patterns', [
        'Pipe-and-Filter Pattern: Transform data through stages',
        'Publish-Subscribe: Event-driven asynchronous communication',
        'Request-Reply: Synchronous request-response pattern',
        'Message Router: Route messages based on content',
        'Saga Pattern: Distributed transactions',
        'Event Sourcing: Event-first data model'
      ]),
      stubSection('Best Practices', 'Design & Implementation', [
        'Choose synchronous vs. asynchronous based on requirements',
        'Implement idempotency for safe retries',
        'Use message brokers for loose coupling',
        'Implement CDC for real-time data sync',
        'Design API contracts carefully',
        'Monitor integration latency and throughput'
      ]),
      stubSection('Technologies', 'Tools & Frameworks', [
        'Message Brokers: RabbitMQ, Kafka, AWS SQS/SNS',
        'API Gateways: Kong, Apigee, AWS API Gateway',
        'ETL Tools: Apache Airflow, Talend, Informatica',
        'CDC Tools: Debezium, AWS DMS, Striim',
        'Integration Platforms: MuleSoft, Apache Camel'
      ]),
    ]
  },

  {
    id: 'api-architecture',
    name: 'API Architecture',
    groupId: 'core-technical',
    expertise: 'REST, GraphQL, gRPC, API management, developer experience',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Modern API Design', [
        'REST APIs: Mature, simple, widely understood',
        'GraphQL: Query flexibility, efficient data loading',
        'gRPC: High performance, strongly typed, binary protocol',
        'WebSockets: Real-time bidirectional communication',
        'API Versioning: Managing breaking changes'
      ]),
      stubSection('Styles & Patterns', 'API Design Comparison', [
        'REST (Representational State Transfer): Resource-oriented, HTTP verbs',
        'GraphQL: Query language for flexible data retrieval',
        'gRPC: RPC framework with Protocol Buffers, HTTP/2',
        'SOAP: Legacy, XML-based, WSDL contracts',
        'OpenAPI/Swagger: API specification and documentation'
      ]),
      stubSection('Best Practices', 'API Design & Security', [
        'Design for discoverability and documentation',
        'Implement proper authentication and authorization',
        'Use rate limiting and throttling',
        'Version your APIs carefully',
        'Monitor API usage and performance',
        'Secure sensitive data in transit and at rest'
      ]),
      stubSection('Developer Experience', 'Tooling & Portal', [
        'Interactive API documentation (Swagger UI, Insomnia)',
        'SDKs for popular languages',
        'Developer portal with analytics',
        'Mock servers for testing',
        'Comprehensive error handling and status codes',
        'Clear migration guides for deprecations'
      ]),
    ]
  },

  {
    id: 'event-driven-architecture',
    name: 'Event-Driven Architecture',
    groupId: 'core-technical',
    expertise: 'Event design, stream processing, CQRS, temporal patterns',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Event-First Design', [
        'Loose Coupling: Event-driven systems decouple components',
        'Scalability: Process high-volume event streams',
        'Real-Time: Immediate event propagation and reaction',
        'Resilience: Durable event logs for replay',
        'Auditability: Complete event history'
      ]),
      stubSection('Core Patterns', 'Event Processing Models', [
        'Event Sourcing: Append-only event log as source of truth',
        'CQRS: Separate read and write models',
        'Saga Pattern: Distributed transactions via events',
        'Event Streaming: Continuous event flow (Kafka model)',
        'Complex Event Processing: Pattern matching in streams',
        'Temporal Patterns: Time-aware event processing'
      ]),
      stubSection('Design Principles', 'Event Schema & Governance', [
        'Design event schemas carefully (immutable)',
        'Use semantic versioning for event versions',
        'Implement event ID and correlation tracking',
        'Maintain event payload compression',
        'Create event registry/catalog',
        'Document event dependencies'
      ]),
      stubSection('Tools & Technologies', 'Streaming Platforms', [
        'Apache Kafka: Distributed event streaming',
        'AWS Kinesis: Managed streaming service',
        'Google Pub/Sub: Cloud event messaging',
        'RabbitMQ: Message broker with pub/sub',
        'Apache Flink: Stream processing framework',
        'Spark Streaming: Batch and stream processing'
      ]),
    ]
  },

  {
    id: 'microservices-architecture',
    name: 'Microservices Architecture',
    groupId: 'core-technical',
    expertise: 'Service decomposition, resilience patterns, distributed systems',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Service-Oriented Design', [
        'Independent Deployability: Services deploy separately',
        'Technology Heterogeneity: Use different tech per service',
        'Fault Isolation: Failure contained to single service',
        'Organizational Alignment: Services map to teams',
        'Scaling: Scale individual services independently'
      ]),
      stubSection('Design Patterns', 'Service Decomposition', [
        'Domain-Driven Design (DDD): Bounded contexts as services',
        'Event-Driven: Services communicate via events',
        'API-First: Synchronous REST/gRPC communication',
        'Database per Service: No shared databases',
        'Strangler Pattern: Migrate monolith incrementally',
        'Service Mesh: Infrastructure-level communication'
      ]),
      stubSection('Resilience Patterns', 'Handling Failures', [
        'Retry Logic: Exponential backoff with jitter',
        'Circuit Breaker: Fail fast on repeated failures',
        'Timeout: Prevent indefinite waiting',
        'Bulkhead: Isolate resources to prevent cascading failures',
        'Graceful Degradation: Degrade features vs. full outage',
        'Health Checks: Monitor service health'
      ]),
      stubSection('Operations', 'Deployment & Monitoring', [
        'Containerization: Docker for packaging',
        'Orchestration: Kubernetes for deployment',
        'Service Mesh: Istio, Linkerd for networking',
        'Observability: Logging, metrics, distributed tracing',
        'Configuration Management: Dynamic configuration',
        'CI/CD: Automated testing and deployment'
      ]),
    ]
  },

  {
    id: 'container-orchestration',
    name: 'Container Orchestration',
    groupId: 'core-technical',
    expertise: 'Kubernetes, container strategy, cluster design, workload management',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Container Deployment & Scaling', [
        'Containerization: Lightweight application packaging',
        'Orchestration: Automated deployment and scaling',
        'Self-Healing: Automatic recovery from failures',
        'Resource Efficiency: Optimal resource utilization',
        'Portability: Run same container anywhere'
      ]),
      stubSection('Core Concepts', 'Kubernetes Architecture', [
        'Pods: Smallest deployable units',
        'Services: Stable network endpoints',
        'Deployments: Declarative updates and rolling updates',
        'StatefulSets: Ordered, stable Pod identity',
        'DaemonSets: Run Pod on every node',
        'Jobs: One-off or batch processing tasks'
      ]),
      stubSection('Design Patterns', 'Kubernetes Best Practices', [
        'Namespace Isolation: Logical cluster partitioning',
        'Resource Limits: CPU and memory quotas',
        'Pod Disruption Budgets: Prevent simultaneous failures',
        'Network Policies: Micronetwork segmentation',
        'RBAC: Role-based access control',
        'Taints and Tolerations: Node affinity control'
      ]),
      stubSection('Operations', 'Cluster Management', [
        'Cluster Provisioning: Infrastructure setup',
        'Networking: CNI plugins, Ingress controllers',
        'Storage: PersistentVolumes, StatefulSet storage',
        'Monitoring: Prometheus, Grafana, ELK',
        'Security: Network policies, Pod Security Standards',
        'Multi-Cluster: Federation, GitOps sync'
      ]),
    ]
  },

  {
    id: 'serverless-architecture',
    name: 'Serverless Architecture',
    groupId: 'core-technical',
    expertise: 'FaaS, event-driven serverless, cost optimization, operational model',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Function-as-a-Service Computing', [
        'No Infrastructure Management: Provider handles servers',
        'Auto-Scaling: Automatic scale to demand',
        'Pay-Per-Use: Charge only for execution time',
        'Event-Driven: Trigger functions from events',
        'Low Operational Overhead: Focus on code, not ops'
      ]),
      stubSection('Models', 'Serverless Compute Options', [
        'Functions: AWS Lambda, Google Cloud Functions, Azure Functions',
        'Containers: AWS Fargate, Google Cloud Run for container workloads',
        'Workflows: Step Functions, Google Cloud Workflows for orchestration',
        'Databases: DynamoDB, Firestore for serverless data',
        'APIs: API Gateway trigger functions from HTTP requests'
      ]),
      stubSection('Design Patterns', 'Serverless Architecture', [
        'Event-Driven Processing: Trigger from S3, SNS, DynamoDB Streams',
        'API-Driven: Trigger from HTTP requests',
        'Scheduled: Run on cron schedules',
        'Database Triggers: React to data changes',
        'Orchestration: Compose functions into workflows',
        'Polling: Periodically check external systems'
      ]),
      stubSection('Best Practices', 'Optimization & Operations', [
        'Keep functions small and focused',
        'Externalize configuration and secrets',
        'Monitor cold starts and optimize',
        'Use provisioned concurrency for predictable load',
        'Log structured output for analysis',
        'Test locally before deployment'
      ]),
    ]
  },

  // CLOUD & INFRASTRUCTURE (5 agents)
  {
    id: 'cloud',
    name: 'Cloud Architecture',
    groupId: 'cloud-infra',
    expertise: 'Multi-cloud strategy, landing zones, cloud-native patterns, FinOps',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Cloud Strategy & Adoption', [
        'Cloud Readiness Assessment: Current state evaluation',
        'Multi-Cloud Strategy: Leverage multiple clouds',
        'Cost Optimization: FinOps and cloud economics',
        'Security & Compliance: Cloud governance',
        'Organizational Change: Cloud operating model'
      ]),
      stubSection('Design', 'Landing Zones & Architecture', [
        'Landing Zone Design: Account/subscription structure',
        'Network Architecture: VPC, subnets, routing',
        'Identity & Access: IAM, SSO, federation',
        'Logging & Monitoring: Centralized observability',
        'Disaster Recovery: RTO/RPO strategies',
        'Cost Allocation: Chargeback and showback models'
      ]),
      stubSection('Patterns', 'Cloud-Native Architecture', [
        'Microservices: Service-oriented cloud design',
        'Containers: Docker and Kubernetes on cloud',
        'Serverless: FaaS for event-driven workloads',
        'Data Lakes: Scalable data storage',
        'API-First: Cloud-native API design',
        'Event-Driven: Pub/sub and event streaming'
      ]),
      stubSection('Governance', 'Controls & Compliance', [
        'Cloud Governance Framework: Policies and controls',
        'Least Privilege Access: Minimum necessary permissions',
        'Resource Tagging: Consistent resource organization',
        'Cost Controls: Budget alerts and forecasting',
        'Compliance: Map controls to standards',
        'Automation: Infrastructure as Code'
      ]),
    ]
  },

  {
    id: 'platform',
    name: 'Platform Architecture',
    groupId: 'cloud-infra',
    expertise: 'Internal Developer Platform (IDP), golden paths, platform engineering',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Developer Experience Platform', [
        'Self-Service Capabilities: Reduce friction for developers',
        'Golden Paths: Paved road for common patterns',
        'Platform Engineering: Enable-enabler team',
        'Developer Portal: Single source of truth',
        'Service Catalog: Discoverable services',
        'Developer Productivity: DORA metrics focus'
      ]),
      stubSection('Architecture', 'IDP Design', [
        'Capability Layers: Infrastructure, apps, observability',
        'Templates & Scaffolding: Starter projects',
        'CI/CD Integration: Automated deployment',
        'Policy Enforcement: Guardrails and standards',
        'Feedback Loops: Developer satisfaction metrics',
        'Extensibility: Plugin architecture for teams'
      ]),
      stubSection('Golden Paths', 'Paved Roads', [
        'Web Service Template: REST API scaffolding',
        'Data Pipeline Template: ETL/batch processing',
        'ML Model Template: Model training and serving',
        'Mobile App Template: Cross-platform development',
        'Stream Processing: Event stream scaffolding',
        'Custom Templates: Org-specific patterns'
      ]),
      stubSection('Governance', 'Platform Operations', [
        'Team Topologies: Platform team structure',
        'SLOs & KPIs: Platform health metrics',
        'Feedback Loop: Developer surveys and retention',
        'Roadmap: Feature prioritization',
        'Cost Attribution: Platform cost transparency',
        'Security Controls: Embedded in templates'
      ]),
    ]
  },

  {
    id: 'infrastructure',
    name: 'Infrastructure Architecture',
    groupId: 'cloud-infra',
    expertise: 'Compute, storage, networking, IaC, automation, virtualization',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Infrastructure Foundation', [
        'Compute Options: VMs, containers, bare-metal, serverless',
        'Storage Architecture: Block, file, object storage',
        'Networking: Connectivity, security, redundancy',
        'Infrastructure as Code: Reproducible infrastructure',
        'Automation: Deployment, scaling, healing',
        'Capacity Planning: Growth and cost forecasting'
      ]),
      stubSection('Design', 'Architecture & Patterns', [
        'Compute Strategy: Workload type → compute choice',
        'Storage Tiers: Hot/warm/cold data lifecycle',
        'Network Design: Segmentation and zero-trust',
        'HA/DR: Redundancy and failover',
        'IaC Frameworks: Terraform, Pulumi, CDK',
        'Automation Tools: Ansible, Chef, Puppet'
      ]),
      stubSection('Implementation', 'Operational Excellence', [
        'Module Design: Reusable Terraform modules',
        'Git Workflow: GitOps-driven infrastructure',
        'Testing: Policy as code (OPA, Sentinel)',
        'Compliance: Automated compliance scanning',
        'Cost Optimization: Resource rightsizing',
        'Runbooks: Operational procedures'
      ]),
      stubSection('Operations', 'Lifecycle Management', [
        'Provisioning: Automated infrastructure setup',
        'Monitoring: Infrastructure metrics and alerts',
        'Scaling: Auto-scaling policies and triggers',
        'Patching: Automated OS and package updates',
        'Disaster Recovery: Backup and recovery procedures',
        'Cost Management: Budget tracking and optimization'
      ]),
    ]
  },

  {
    id: 'network',
    name: 'Network Architecture',
    groupId: 'cloud-infra',
    expertise: 'Zero-trust networking, SD-WAN, microsegmentation, CDN, connectivity',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Enterprise Networking', [
        'Zero-Trust Model: Never trust, always verify',
        'Segmentation: Microsegmentation for security',
        'Connectivity: Internet, MPLS, SD-WAN options',
        'DNS Architecture: Security and resilience',
        'CDN Strategy: Global content delivery',
        'Redundancy: High availability and failover'
      ]),
      stubSection('Design', 'Network Architecture', [
        'Zero-Trust Design: Identity-based access controls',
        'Network Zones: DMZ, internal, trust boundaries',
        'Segmentation: East-west traffic controls',
        'Connectivity: Direct Connect, VPN, SD-WAN',
        'DNS: Split-horizon, private zones, DNSSEC',
        'Load Balancing: Global and local distribution'
      ]),
      stubSection('Security', 'Network Controls', [
        'Firewalls: Next-generation firewalls (NGFW)',
        'Intrusion Detection: IDS/IPS deployment',
        'Web Application Firewall: WAF for apps',
        'DLP: Data loss prevention controls',
        'Encryption: TLS, VPN, IPsec',
        'Network Monitoring: Threat detection'
      ]),
      stubSection('Operations', 'Management & Optimization', [
        'Network Automation: Intent-based networking',
        'Monitoring: NetFlow, sFlow, SNMP',
        'Capacity Planning: Bandwidth forecasting',
        'Redundancy: Failover and resilience',
        'Security Baseline: Compliance scanning',
        'Documentation: Network diagrams and runbooks'
      ]),
    ]
  },

  {
    id: 'edge',
    name: 'Edge Architecture',
    groupId: 'cloud-infra',
    expertise: 'Edge computing, CDN, 5G edge, low-latency, distributed AI',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Edge Computing Model', [
        'Latency Reduction: Processing at network edge',
        'Bandwidth Efficiency: Reduce cloud data transfer',
        'Resilience: Function without cloud connectivity',
        'Privacy: Process sensitive data locally',
        'Real-Time: Enable low-latency applications',
        'AI at Edge: Inference without cloud round-trip'
      ]),
      stubSection('Topology', 'Edge Placement Strategy', [
        'Cloud Edge: Data center edge locations',
        'Network Edge: ISP and carrier edge',
        'On-Premise Edge: Customer premise equipment (CPE)',
        'Device Edge: End device processing',
        'Workload Placement: Decision matrix for placement',
        'Multi-Tier: Hybrid cloud and edge strategy'
      ]),
      stubSection('Patterns', 'Edge Deployment', [
        'CDN: Content delivery network caching',
        'Edge Functions: Run code at edge locations',
        'Edge Gateways: Protocol translation and aggregation',
        'Device Management: OTA updates and monitoring',
        'Edge Analytics: Local data processing',
        'Model Deployment: ML model serving at edge'
      ]),
      stubSection('Technologies', 'Tools & Platforms', [
        'AWS Greengrass: Edge runtime for AWS IoT',
        'Azure IoT Edge: Microsoft edge computing',
        'Google Cloud IoT Edge: GCP edge solution',
        'KubeEdge: Kubernetes at edge',
        'Cloudflare Workers: Global edge computing',
        'OpenFog: Open fog computing architecture'
      ]),
    ]
  },

  // AI, DATA & KNOWLEDGE (8 agents)
  {
    id: 'ai',
    name: 'AI Architecture',
    groupId: 'ai-data',
    expertise: 'Enterprise AI platform, ML infrastructure, AI governance, responsible AI',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Enterprise AI Strategy', [
        'AI Platform Design: Training, serving, feature store',
        'Model Governance: Risk management and oversight',
        'Responsible AI: Fairness, explainability, bias control',
        'AI Operations: MLOps and model lifecycle',
        'Data Quality: Clean, unbiased training data',
        'Use-Case Prioritization: ROI-focused deployment'
      ]),
      stubSection('Architecture', 'AI Platform Design', [
        'Training Infrastructure: GPU clusters, distributed training',
        'Feature Store: Centralized feature management',
        'Model Registry: Versioning and lineage tracking',
        'Model Serving: Real-time and batch inference',
        'Monitoring: Model performance and drift detection',
        'Feedback Loop: Continuous model improvement'
      ]),
      stubSection('Governance', 'Responsible AI Framework', [
        'Fairness: Detect and mitigate bias',
        'Explainability: Interpretable model decisions',
        'Privacy: Data minimization and anonymization',
        'Security: Model stealing prevention',
        'Compliance: Regulatory requirements',
        'Audit Trail: Decision logging and explanation'
      ]),
      stubSection('Operations', 'MLOps Practices', [
        'Data Pipeline: ETL for training data',
        'Model Training: Experiment tracking, versioning',
        'Model Validation: Testing and evaluation',
        'Deployment: Canary, blue-green strategies',
        'Monitoring: Performance metrics and alerts',
        'Retraining: Automated or scheduled retraining'
      ]),
    ]
  },

  {
    id: 'agentic-ai',
    name: 'Agentic AI Architecture',
    groupId: 'ai-data',
    expertise: 'Multi-agent systems, LLM orchestration, agent frameworks, tool use',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Multi-Agent Systems', [
        'Agent Autonomy: Levels L1-L6 from no autonomy to full',
        'Orchestration: Centralized vs. decentralized coordination',
        'Tool Use: Agents leverage external tools and APIs',
        'Memory: Session state and long-term knowledge',
        'Planning: Goal decomposition and task sequencing',
        'Reasoning: Decision-making under uncertainty'
      ]),
      stubSection('Design', 'Agent Topology & Patterns', [
        'Orchestrator-Worker: Central orchestrator routes to agents',
        'Hierarchical: Manager agents delegate to worker agents',
        'Mesh: Direct agent-to-agent communication',
        'Tool-First: Agents specialize in tool usage',
        'Knowledge-Graph: Shared semantic knowledge base',
        'Belief-Desire-Intention: BDI agent model'
      ]),
      stubSection('Implementation', 'Agent Frameworks', [
        'LLM Orchestration: Claude API with tool use',
        'Prompt Engineering: System prompts for agent identity',
        'Tool Definition: OpenAI function calling format',
        'State Management: Session memory and persistence',
        'Error Handling: Graceful degradation and retries',
        'Observability: Logging and tracing agent actions'
      ]),
      stubSection('Applications', 'Use Cases & Patterns', [
        'Customer Support: Multi-agent helpdesk',
        'Code Generation: Specialized coding agents',
        'Research & Analysis: Information gathering agents',
        'Planning & Scheduling: Coordinated task planning',
        'Workflow Automation: Business process automation',
        'Content Generation: Specialized writing agents'
      ]),
    ]
  },

  {
    id: 'data-architecture',
    name: 'Data Architecture',
    groupId: 'ai-data',
    expertise: 'Data warehouse, data lakes, data mesh, data governance',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Data-Driven Organization', [
        'Data Strategy: Alignment with business objectives',
        'Data Quality: Accuracy, completeness, timeliness',
        'Data Accessibility: Self-service analytics',
        'Data Governance: Policies, ownership, lineage',
        'Metadata Management: Centralized metadata',
        'Data Monetization: Data as business asset'
      ]),
      stubSection('Architecture', 'Data Platforms', [
        'Data Warehouse: Structured analytics (Snowflake, BigQuery)',
        'Data Lake: Unstructured data repository',
        'Data Lakehouse: Combined warehouse and lake',
        'Data Mesh: Domain-owned data products',
        'Data Fabric: Unified data access layer',
        'Semantic Layer: Centralized business metrics'
      ]),
      stubSection('Design', 'Modeling & Governance', [
        'Dimensional Modeling: Facts and dimensions',
        'Data Vault: Hub-and-spoke for complex sources',
        'Star Schema: Denormalized for analytics',
        'Data Catalog: Searchable data inventory',
        'Data Lineage: Track data origins and transforms',
        'Classification: Sensitive data identification'
      ]),
      stubSection('Operations', 'Pipeline & Quality', [
        'ETL/ELT: Extract, transform, load patterns',
        'CDC: Change data capture for real-time sync',
        'Data Quality: Validation and anomaly detection',
        'SLA Management: Data delivery SLOs',
        'Cost Optimization: Storage and compute efficiency',
        'Compliance: Data residency and retention'
      ]),
    ]
  },

  {
    id: 'analytics',
    name: 'Analytics Architecture',
    groupId: 'ai-data',
    expertise: 'BI platforms, dashboards, self-service analytics, metrics',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Analytics & Insights', [
        'Self-Service Analytics: Enable business users',
        'Real-Time Dashboards: Live business metrics',
        'Embedded Analytics: Analytics in applications',
        'Advanced Analytics: Predictive and prescriptive',
        'Data Storytelling: Narrative-driven insights',
        'Analytics Governance: Metric definitions and lineage'
      ]),
      stubSection('Architecture', 'Analytics Stack', [
        'Data Warehouse: Analytical data storage',
        'Semantic Layer: Metrics and dimensions',
        'BI Tools: Visualization platforms (Looker, Tableau, Power BI)',
        'Self-Service: Low-code BI tools',
        'Advanced Analytics: Python, R, Jupyter environments',
        'Real-Time: Streaming analytics (Kafka, Flink)'
      ]),
      stubSection('Design', 'Metrics & KPIs', [
        'Metric Definition: Clear business metrics',
        'KPI Framework: Strategic KPIs and metrics',
        'Dimensional Analysis: Slice and dice data',
        'Anomaly Detection: Alerts for metric changes',
        'Forecasting: Predictive analytics',
        'Attribution: Multi-touch attribution models'
      ]),
      stubSection('Implementation', 'Dashboards & Reports', [
        'Semantic Layer: Centralized metric definitions',
        'Dashboard Design: User-centric visualization',
        'Real-Time Metrics: Streaming data updates',
        'Drill-Down: Interactive exploration',
        'Governance: Access control and auditing',
        'Performance: Optimization for large datasets'
      ]),
    ]
  },

  {
    id: 'mlops',
    name: 'MLOps Architecture',
    groupId: 'ai-data',
    expertise: 'ML pipeline, model deployment, monitoring, continuous training',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'ML Lifecycle Management', [
        'Experiment Tracking: Reproducible experimentation',
        'Model Registry: Versioning and deployment tracking',
        'Continuous Training: Automated retraining pipelines',
        'Model Monitoring: Performance degradation detection',
        'A/B Testing: Experimentation with models',
        'Production ML: Reliable model deployment'
      ]),
      stubSection('Pipelines', 'Data to Model Workflow', [
        'Data Pipeline: ETL for ML-ready data',
        'Feature Engineering: Feature creation and selection',
        'Model Training: Hyperparameter tuning, cross-validation',
        'Model Validation: Testing model performance',
        'Model Packaging: Containerization for deployment',
        'Monitoring: Ongoing performance tracking'
      ]),
      stubSection('Tools', 'MLOps Platforms', [
        'ML Frameworks: TensorFlow, PyTorch, scikit-learn',
        'Experiment Tracking: MLflow, Weights & Biases',
        'Feature Store: Feast, Tecton, Hopsworks',
        'Model Registry: MLflow Model Registry, Hugging Face',
        'Deployment: Seldon, KServe, Ray Serve',
        'Monitoring: Arize, WhyLabs, Fiddler'
      ]),
      stubSection('Operations', 'Scaling ML', [
        'Data Management: Feature store and lineage',
        'Training at Scale: Distributed training',
        'Model Governance: Registry and versioning',
        'Inference Optimization: Latency and throughput',
        'Cost Optimization: GPU resource efficiency',
        'Compliance: Model explainability and bias detection'
      ]),
    ]
  },

  {
    id: 'llmops',
    name: 'LLMOps Architecture',
    groupId: 'ai-data',
    expertise: 'LLM deployment, prompt engineering, fine-tuning, RAG, evaluation',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Large Language Model Operations', [
        'Model Selection: Choosing the right LLM for task',
        'Prompt Engineering: Effective prompting techniques',
        'Fine-Tuning: Customizing models for domain',
        'RAG: Retrieval-augmented generation for accuracy',
        'Token Optimization: Controlling costs and latency',
        'Safety & Governance: Responsible LLM deployment'
      ]),
      stubSection('Techniques', 'LLM Enhancement Patterns', [
        'Prompt Chaining: Multi-step prompts',
        'Few-Shot Learning: In-context examples',
        'Chain-of-Thought: Explicit reasoning steps',
        'Self-Reflection: Model self-evaluation',
        'RAG: External knowledge retrieval',
        'Fine-Tuning: Domain-specific adaptation'
      ]),
      stubSection('Infrastructure', 'LLM Serving', [
        'Model Hosting: vLLM, TGI, ollama',
        'Token Optimization: Prompt caching, compression',
        'Inference Optimization: Batching, quantization',
        'Cost Management: Token counting, rate limiting',
        'Monitoring: Latency, cost, token usage',
        'Testing: Evaluation frameworks and metrics'
      ]),
      stubSection('Applications', 'LLM Use Cases', [
        'Code Generation: IDE copilots and tools',
        'Content Generation: Writing and translation',
        'Customer Support: Chatbots and helpdesk',
        'Data Analysis: Natural language queries',
        'Classification: Text categorization',
        'Summarization: Document and meeting summaries'
      ]),
    ]
  },

  {
    id: 'knowledge',
    name: 'Knowledge Architecture',
    groupId: 'ai-data',
    expertise: 'Knowledge graphs, ontologies, semantic search, meaning extraction',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Knowledge Representation', [
        'Knowledge Graphs: Entity and relationship networks',
        'Semantic Web: Machine-readable web of data',
        'Ontologies: Formal representations of knowledge',
        'Linked Data: Connection of datasets across web',
        'Meaning Extraction: NLP to extract entities and relations',
        'Knowledge Reasoning: Inference and deduction'
      ]),
      stubSection('Design', 'Knowledge Structure', [
        'Entity Types: Classes and properties',
        'Relationships: Connections between entities',
        'Ontology Design: TBox and ABox separation',
        'Schema Alignment: Mapping between schemas',
        'Graph Patterns: Common connectivity patterns',
        'Reasoning Rules: Inference rules and constraints'
      ]),
      stubSection('Technologies', 'Knowledge Platforms', [
        'Graph Databases: Neo4j, ArangoDB, TigerGraph',
        'RDF/OWL: Semantic web standards',
        'SPARQL: Query language for knowledge graphs',
        'Knowledge Extraction: NER, relation extraction',
        'Embedding: Knowledge graph embeddings',
        'Reasoning: Apache Jena, OWL reasoners'
      ]),
      stubSection('Applications', 'Use Cases', [
        'Enterprise Search: Semantic search for knowledge',
        'Recommendation: Context-aware recommendations',
        'Master Data Management: Unified entity view',
        'Compliance: Policy and regulation networks',
        'Innovation: Discovery of new connections',
        'AI Foundation: Knowledge base for LLMs'
      ]),
    ]
  },

  // OPERATIONS (5 agents)
  {
    id: 'observability',
    name: 'Observability Architecture',
    groupId: 'operations',
    expertise: 'Monitoring, logging, tracing, metrics, alerting, dashboards',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'System Visibility', [
        'Three Pillars: Metrics, logs, traces',
        'Telemetry Collection: Instrumentation strategy',
        'Centralized Analysis: Unified observability platform',
        'Alert Fatigue: Meaningful alerts only',
        'Root Cause Analysis: Incident diagnosis',
        'Continuous Improvement: Observability roadmap'
      ]),
      stubSection('Architecture', 'Observability Stack', [
        'Metrics: Prometheus, Graphite, InfluxDB',
        'Logging: ELK, Datadog, Splunk, Sumo Logic',
        'Tracing: Jaeger, Zipkin, Datadog APM',
        'Visualization: Grafana, Kibana, Datadog Dashboards',
        'Alerting: Prometheus AlertManager, PagerDuty',
        'Correlation: Unified trace and log context'
      ]),
      stubSection('Implementation', 'Instrumentation & Collection', [
        'Metrics Collection: Pull vs. push models',
        'Log Aggregation: Centralized log shipping',
        'Distributed Tracing: Trace context propagation',
        'Sampling: Manage volume without losing insights',
        'Cardinality Management: Control high-cardinality metrics',
        'Cost Optimization: Retention and tiering'
      ]),
      stubSection('Operations', 'Monitoring & Alerting', [
        'SLO Definition: Service level objectives',
        'Alerting Strategy: Threshold-based and anomaly',
        'Runbook Integration: Links from alerts to procedures',
        'Dashboard Design: User-centric visualization',
        'Incident Response: On-call processes',
        'Post-Mortem: Learning from incidents'
      ]),
    ]
  },

  {
    id: 'resilience',
    name: 'Resilience Architecture',
    groupId: 'operations',
    expertise: 'Fault tolerance, disaster recovery, chaos engineering, RTO/RPO',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Building Reliable Systems', [
        'Availability Design: HA and DR strategies',
        'Failure Planning: Assume failures will happen',
        'Graceful Degradation: Degrade vs. fail completely',
        'Recovery: RTO and RPO objectives',
        'Testing: Chaos and failure injection',
        'Organizational Readiness: On-call and incident response'
      ]),
      stubSection('Patterns', 'Resilience Techniques', [
        'Redundancy: Active-active and active-passive',
        'Replication: Data and state synchronization',
        'Circuit Breaker: Fail fast on repeated failures',
        'Retry Logic: Exponential backoff with jitter',
        'Bulkhead: Isolate resources to prevent cascading failures',
        'Timeout: Prevent indefinite waiting for responses'
      ]),
      stubSection('Infrastructure', 'HA/DR Design', [
        'Active-Active: Multiple regions actively serving',
        'Active-Passive: Failover to standby region',
        'Data Replication: RPO objectives met',
        'Load Balancing: Health-aware routing',
        'Backup Strategy: RTO-aligned backup procedures',
        'Failover Testing: Regular DR drills'
      ]),
      stubSection('Operations', 'Testing & Validation', [
        'Chaos Engineering: Systematic failure injection',
        'Fault Injection Testing: Breaking things deliberately',
        'Disaster Recovery Drills: Regular failover testing',
        'Incident Simulations: Response procedure validation',
        'Monitoring: Detection and alerting',
        'Post-Incident Analysis: Learning and improvement'
      ]),
    ]
  },

  {
    id: 'sre',
    name: 'SRE Architecture',
    groupId: 'operations',
    expertise: 'SLO/SLI/SLA, on-call practices, incident management, automation',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Reliable Operations', [
        'SLO Definition: Service level objectives',
        'Blameless Culture: Focus on systems not people',
        'Toil Reduction: Automate repetitive work',
        'On-Call Practices: Sustainable on-call schedules',
        'Incident Response: Structured incident management',
        'Continuous Improvement: Learning and iteration'
      ]),
      stubSection('Framework', 'SRE Principles', [
        'SLI (Service Level Indicator): Measurable metric',
        'SLO (Service Level Objective): Target reliability',
        'SLA (Service Level Agreement): Customer commitment',
        'Error Budget: Allowed downtime for changes',
        'Toil vs. Engineering: Balance of work types',
        'Monitoring and Observability: Root cause analysis'
      ]),
      stubSection('Operations', 'On-Call & Incident Management', [
        'On-Call Schedule: Fair and sustainable rotations',
        'Incident Declaration: Clear severity levels',
        'Incident Response: Commander, recorder, resolver roles',
        'Post-Mortem: Blameless incident analysis',
        'Escalation: Clear escalation procedures',
        'Runbooks: Documented emergency procedures'
      ]),
      stubSection('Automation', 'Reducing Toil', [
        'Provisioning Automation: Infrastructure as Code',
        'Deployment Automation: CI/CD pipelines',
        'Scaling Automation: Auto-scaling policies',
        'Alert Automation: Auto-remediation where safe',
        'Testing Automation: Continuous testing',
        'Documentation Automation: Generated runbooks'
      ]),
    ]
  },

  {
    id: 'devsecops',
    name: 'DevSecOps Architecture',
    groupId: 'operations',
    expertise: 'Shift-left security, SAST/DAST, supply chain security, secure CI/CD',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Security in Development', [
        'Shift-Left: Security earlier in development',
        'Developer Education: Security awareness training',
        'Automated Scanning: SAST and DAST in pipeline',
        'Vulnerability Management: Continuous remediation',
        'Supply Chain Security: Dependency and SCA',
        'Compliance as Code: Policy enforcement'
      ]),
      stubSection('Practices', 'Secure Development Lifecycle', [
        'Threat Modeling: Design-time security',
        'Code Review: Security-focused peer review',
        'Static Analysis: SAST tools and plugins',
        'Dynamic Analysis: DAST and runtime testing',
        'Dependency Scanning: SCA for known vulnerabilities',
        'Container Scanning: Image vulnerability scanning'
      ]),
      stubSection('Pipeline', 'Secure CI/CD', [
        'Code Commit: Pre-commit hooks for linting',
        'Build: Static analysis and dependency checks',
        'Test: Security functional testing',
        'Deploy: Policy enforcement and approval gates',
        'Runtime: Runtime security monitoring',
        'Compliance: Audit logging and evidence collection'
      ]),
      stubSection('Tools', 'Security Scanning', [
        'SAST: SonarQube, Checkmarx, Fortify',
        'DAST: OWASP ZAP, Burp Suite, Acunetix',
        'SCA: Snyk, Black Duck, WhiteSource',
        'SBOM: Cyclone DX, SPDX',
        'Container: Trivy, Grype, Anchore',
        'IaC: Checkov, Terraform Compliance'
      ]),
    ]
  },

  {
    id: 'finops',
    name: 'FinOps Architecture',
    groupId: 'operations',
    expertise: 'Cloud cost management, optimization, chargeback, forecasting',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Cloud Cost Management', [
        'Cost Visibility: Understand spending patterns',
        'Cost Optimization: Reduce waste and inefficiency',
        'Cost Allocation: Charge back to business units',
        'Forecasting: Predict future cloud costs',
        'Governance: Policies and budgets',
        'Continuous Improvement: Ongoing optimization'
      ]),
      stubSection('Framework', 'FinOps Model', [
        'Phases: Inform, Optimize, Operate continuously',
        'Team Structure: Finance, engineering, procurement',
        'Metrics: eCO2, PUE, cost per transaction',
        'Data Pipeline: Cost data ingestion and analysis',
        'Dashboard: Spend visibility and trends',
        'Process: Monthly business reviews'
      ]),
      stubSection('Optimization', 'Cost Reduction Strategies', [
        'Compute: Reserved instances, spot instances',
        'Storage: Tiering, compression, lifecycle policies',
        'Data Transfer: Minimize egress, regional deployment',
        'Licensing: Use open source, optimize BYOL',
        'Scheduling: Turn off non-production resources',
        'Resource Rightsizing: Match resources to needs'
      ]),
      stubSection('Governance', 'Cost Controls', [
        'Budget Alerts: Alert on spending thresholds',
        'Tagging: Consistent resource tagging',
        'Policies: Enforce guardrails on resource creation',
        'Approval Workflows: Gate expensive resources',
        'Chargeback: Allocate costs to business units',
        'Forecasting: Predict future spending'
      ]),
    ]
  },

  // GOVERNANCE (5 agents)
  {
    id: 'compliance',
    name: 'Compliance Architecture',
    groupId: 'governance',
    expertise: 'Regulatory requirements, audit, evidence collection, policy management',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Regulatory Landscape', [
        'Regulatory Requirements: Industry-specific standards',
        'Audit Readiness: Evidence collection and documentation',
        'Policy Management: Organizational policies',
        'Risk Assessment: Identify compliance risks',
        'Continuous Monitoring: Automated compliance',
        'Incident Response: Breach notification procedures'
      ]),
      stubSection('Frameworks', 'Compliance Standards', [
        'GDPR: EU data protection and privacy',
        'HIPAA: Healthcare data protection',
        'PCI-DSS: Payment card security',
        'SOC 2: Security controls for service providers',
        'ISO 27001: Information security management',
        'NIST: Cybersecurity framework'
      ]),
      stubSection('Implementation', 'Control Design', [
        'Control Mapping: Map requirements to controls',
        'Evidence Collection: Automated and manual evidence',
        'Testing: Verify control effectiveness',
        'Remediation: Fix control gaps',
        'Documentation: Maintain audit trail',
        'Escalation: Report to leadership'
      ]),
      stubSection('Operations', 'Compliance Management', [
        'Policy Administration: Central policy repository',
        'Exception Management: Track and approve exceptions',
        'Training: Compliance training for staff',
        'Audit Scheduling: Annual and continuous audits',
        'Breach Response: Incident notification procedures',
        'Continuous Improvement: Lessons learned'
      ]),
    ]
  },

  {
    id: 'risk',
    name: 'Risk Architecture',
    groupId: 'governance',
    expertise: 'Risk management, threat assessment, mitigation, risk monitoring',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Enterprise Risk Management', [
        'Risk Identification: Systematic risk discovery',
        'Risk Assessment: Likelihood and impact analysis',
        'Risk Mitigation: Control design and implementation',
        'Risk Monitoring: Ongoing risk assessment',
        'Risk Reporting: Board and executive reporting',
        'Risk Culture: Risk-aware organization'
      ]),
      stubSection('Framework', 'Risk Management Process', [
        'Risk Identification: Brainstorming and frameworks',
        'Risk Analysis: Qualitative and quantitative',
        'Risk Evaluation: Prioritize by criticality',
        'Risk Mitigation: Design controls and responses',
        'Risk Monitoring: Track risk indicators',
        'Risk Reporting: Executive and board dashboards'
      ]),
      stubSection('Assessment', 'Risk Evaluation Methods', [
        'Threat Modeling: STRIDE and OCTAVE',
        'Vulnerability Assessment: Technical scanning',
        'Risk Scoring: Likelihood × Impact matrix',
        'Scenario Analysis: What-if risk modeling',
        'Heat Maps: Risk visualization',
        'Risk Appetite: Define acceptable risk levels'
      ]),
      stubSection('Operations', 'Risk Governance', [
        'Risk Registry: Centralized risk tracking',
        'Risk Owners: Clear ownership and accountability',
        'Control Effectiveness: Continuous testing',
        'Risk Trending: Historical pattern analysis',
        'KRIs: Key risk indicators for monitoring',
        'Board Reporting: Risk metrics and status'
      ]),
    ]
  },

  {
    id: 'information',
    name: 'Information Governance',
    groupId: 'governance',
    expertise: 'Data governance, data quality, metadata, lineage, privacy',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Data as Asset', [
        'Data Quality: Accuracy, completeness, timeliness',
        'Data Lineage: Track data origins and transformations',
        'Metadata Management: Centralized data catalog',
        'Privacy: Personal data protection and consent',
        'Ownership: Clear data ownership and accountability',
        'Governance: Policies and decision-making'
      ]),
      stubSection('Framework', 'Data Governance Model', [
        'Data Strategy: Alignment with business',
        'Data Governance: Policy and process',
        'Data Quality: Standards and metrics',
        'Master Data: Reference data management',
        'Metadata: Information about data',
        'Privacy: GDPR and privacy management'
      ]),
      stubSection('Implementation', 'Data Management', [
        'Data Catalog: Searchable data inventory',
        'Metadata Management: Centralized metadata',
        'Data Quality Rules: Automated data validation',
        'Lineage Tracking: Data origin and movement',
        'Access Management: WHO can access WHAT',
        'Compliance: Audit trail and evidence'
      ]),
      stubSection('Operations', 'Data Stewardship', [
        'Data Stewards: Designated owners',
        'Data Quality Metrics: Monitor and improve',
        'Data Incidents: Handle data quality issues',
        'Training: Data literacy programs',
        'Documentation: Data standards',
        'Review Cycles: Periodic data audits'
      ]),
    ]
  },

  {
    id: 'governance',
    name: 'Architecture Governance',
    groupId: 'governance',
    expertise: 'Architecture decisions, ADRs, standards, design reviews, guardrails',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Architectural Governance', [
        'Consistency: Organizational architectural standards',
        'Quality: Enforce architecture principles',
        'Reuse: Leverage existing patterns and components',
        'Alignment: Technology choices aligned with strategy',
        'Risk Mitigation: Early identification of risks',
        'Speed: Balance quality with time-to-market'
      ]),
      stubSection('Framework', 'Governance Model', [
        'Architecture Principles: Core guiding principles',
        'Architecture Standards: Technology and patterns',
        'Architecture Review Board: Decision-making body',
        'ADR Process: Architecture Decision Records',
        'Compliance Checking: Automated guardrails',
        'Escalation: Clear escalation procedures'
      ]),
      stubSection('Process', 'Design Review & Approval', [
        'Architecture Proposal: Structured documentation',
        'Design Review: Multi-perspective evaluation',
        'Risk Assessment: Identify risks and mitigations',
        'Approval: ARB decision and sign-off',
        'Documentation: ADR and runbooks',
        'Implementation: Track implementation'
      ]),
      stubSection('Guardrails', 'Architectural Standards', [
        'Technology Standards: Approved tech and versions',
        'Architectural Patterns: Recommended patterns',
        'Infrastructure as Code: Policy validation',
        'Security Baselines: Required security controls',
        'Performance Standards: SLA requirements',
        'Cost Controls: Budget guardrails'
      ]),
    ]
  },

  // Add remaining agents (32 more) with stubs
  // Experience (3 agents)
  {
    id: 'customer-experience',
    name: 'Customer Experience Architecture',
    groupId: 'experience',
    expertise: 'Omnichannel design, journey mapping, personalization, engagement',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Customer-Centric Design', ['Omnichannel Strategy', 'Customer Journey Mapping', 'Personalization', 'Engagement Metrics']),
      stubSection('Design', 'Experience Architecture', ['Journey Design', 'Touchpoint Mapping', 'Data Integration', 'Personalization Engine']),
      stubSection('Implementation', 'Technology Stack', ['CX Platforms', 'Journey Orchestration', 'CDP Integration', 'Analytics']),
      stubSection('Operations', 'Measurement', ['NPS and CSAT', 'Journey Analytics', 'Conversion Optimization', 'Testing Framework']),
    ]
  },

  {
    id: 'digital-worker',
    name: 'Digital Worker Architecture',
    groupId: 'experience',
    expertise: 'RPA, intelligent automation, process mining, bot lifecycle',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Intelligent Automation', ['Process Automation', 'Intelligent Bots', 'Workforce Augmentation', 'Efficiency Gains']),
      stubSection('Design', 'Automation Architecture', ['Process Selection', 'Bot Design', 'Exception Handling', 'Integration']),
      stubSection('Implementation', 'RPA Platform', ['Bot Development', 'Testing', 'Deployment', 'Monitoring']),
      stubSection('Operations', 'Bot Lifecycle', ['Performance Tracking', 'Maintenance', 'Scaling', 'Continuous Improvement']),
    ]
  },

  {
    id: 'product',
    name: 'Product Architecture',
    groupId: 'experience',
    expertise: 'Product strategy, roadmap, feature architecture, monetization',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Product Development', ['Market Strategy', 'Feature Planning', 'User Research', 'Roadmap']),
      stubSection('Design', 'Product Architecture', ['Feature Design', 'UX/UI', 'Scalability', 'Extensibility']),
      stubSection('Implementation', 'Delivery', ['Agile Development', 'MVP to Scale', 'Release Management', 'Feedback Loops']),
      stubSection('Operations', 'Product Management', ['Metrics', 'A/B Testing', 'User Feedback', 'Iteration']),
    ]
  },

  // Enterprise (4 agents)
  {
    id: 'enterprise',
    name: 'Enterprise Architecture',
    groupId: 'enterprise',
    expertise: 'Enterprise strategy, business alignment, TOGAF, transformation',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Organizational Strategy', ['Business Alignment', 'Digital Transformation', 'Strategic Planning', 'Change Management']),
      stubSection('Framework', 'Enterprise Architecture', ['TOGAF Framework', 'Business Architecture', 'Application Architecture', 'Technology Architecture']),
      stubSection('Governance', 'Portfolio Management', ['Program Portfolio', 'Investment Decisions', 'Risk Assessment', 'Value Realization']),
      stubSection('Operations', 'Transformation Program', ['Roadmap Development', 'Stakeholder Management', 'Benefits Realization', 'Performance Metrics']),
    ]
  },

  {
    id: 'digital-enterprise',
    name: 'Digital Enterprise Architecture',
    groupId: 'enterprise',
    expertise: 'Digital transformation, API economy, ecosystem design, business models',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Digital Business Models', ['API Economy', 'Platform Business', 'Ecosystem Design', 'Digital Maturity']),
      stubSection('Strategy', 'Digital Transformation', ['Business Model Innovation', 'Technology Enablement', 'Organizational Change', 'Capability Building']),
      stubSection('Architecture', 'Digital Systems', ['API-First Design', 'Microservices Architecture', 'Event-Driven Systems', 'Scalable Infrastructure']),
      stubSection('Operations', 'Digital Maturity', ['Capability Assessment', 'Roadmap', 'Capability Building', 'Performance Tracking']),
    ]
  },

  {
    id: 'autonomous-enterprise',
    name: 'Autonomous Enterprise Architecture',
    groupId: 'enterprise',
    expertise: 'AI-driven operations, autonomous systems, intelligent workflows, decision automation',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Autonomous Operations', ['Intelligent Automation', 'AI-Driven Decisions', 'Autonomous Workflows', 'Self-Healing Systems']),
      stubSection('Architecture', 'Intelligent Enterprise', ['AI/ML Integration', 'Autonomous Agents', 'Decision Automation', 'Real-Time Operations']),
      stubSection('Design', 'Autonomous Patterns', ['Process Automation', 'Predictive Operations', 'Anomaly Detection', 'Self-Optimization']),
      stubSection('Operations', 'AI Operations', ['Model Management', 'Continuous Learning', 'Performance Monitoring', 'Governance & Control']),
    ]
  },

  {
    id: 'digital-twin',
    name: 'Digital Twin Architecture',
    groupId: 'enterprise',
    expertise: 'Digital twin design, IoT integration, simulation, predictive maintenance',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Virtual-Physical Sync', ['Real-World Modeling', 'IoT Data', 'Simulation & Prediction', 'Predictive Maintenance']),
      stubSection('Architecture', 'Twin Design', ['Data Synchronization', 'Model Fidelity', 'Real-Time Updates', 'Scalability']),
      stubSection('Implementation', 'IoT Integration', ['Sensor Data', 'Edge Processing', 'Cloud Analytics', 'Feedback Loops']),
      stubSection('Operations', 'Twin Operations', ['Model Validation', 'Data Quality', 'Anomaly Detection', 'Predictive Analytics']),
    ]
  },

  // Excellence (3 agents)
  {
    id: 'business-arch-excellence',
    name: 'Business Architecture Excellence',
    groupId: 'excellence',
    expertise: 'Business model innovation, capability mapping, value chain, strategic alignment',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Strategic Alignment', ['Business Objectives', 'Capability Mapping', 'Value Streams', 'Strategic Planning']),
      stubSection('Framework', 'Business Architecture', ['Business Model Canvas', 'Capability Mapping', 'Value Chain', 'Strategic Initiatives']),
      stubSection('Design', 'Business Solutions', ['Org Design', 'Process Design', 'Capability Building', 'Change Management']),
      stubSection('Operations', 'Execution', ['Roadmap Development', 'Implementation', 'Performance Metrics', 'Value Tracking']),
    ]
  },

  {
    id: 'enterprise-arch-excellence',
    name: 'Enterprise Architecture Excellence',
    groupId: 'excellence',
    expertise: 'Architecture maturity, best practices, TOGAF mastery, innovation',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Architectural Excellence', ['Maturity Models', 'Best Practices', 'Innovation', 'Thought Leadership']),
      stubSection('Framework', 'Advanced TOGAF', ['ADM Process', 'Governance', 'Repository', 'Reusable Assets']),
      stubSection('Design', 'Advanced Patterns', ['Enterprise Patterns', 'Reference Models', 'Solution Templates', 'Innovation Frameworks']),
      stubSection('Operations', 'Excellence Practices', ['CoE Development', 'Knowledge Management', 'Capability Building', 'Thought Leadership']),
    ]
  },

  {
    id: 'portfolio-excellence',
    name: 'Portfolio Excellence Architecture',
    groupId: 'excellence',
    expertise: 'Portfolio optimization, program management, value realization, prioritization',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Portfolio Strategy', ['Investment Optimization', 'Value Realization', 'Risk Management', 'Resource Allocation']),
      stubSection('Framework', 'Portfolio Management', ['Portfolio Strategy', 'Program Management', 'Project Selection', 'Prioritization']),
      stubSection('Governance', 'Investment Decisions', ['Scoring Models', 'ROI Analysis', 'Resource Planning', 'Risk Assessment']),
      stubSection('Operations', 'Execution', ['Portfolio Tracking', 'Program Management', 'Benefits Realization', 'Continuous Improvement']),
    ]
  },

  // Remaining core agents (add the others)
  {
    id: 'iot',
    name: 'IoT Architecture',
    groupId: 'cloud-infra',
    expertise: 'IoT platforms, device management, connectivity, edge computing, data collection',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Connected Devices', ['IoT Adoption', 'Device Networks', 'Data Collection', 'Real-Time Processing']),
      stubSection('Architecture', 'IoT Systems', ['Device Connectivity', 'Edge Computing', 'Cloud Integration', 'Data Pipeline']),
      stubSection('Implementation', 'IoT Platforms', ['Device Management', 'Protocol Support', 'Scalability', 'Security']),
      stubSection('Operations', 'IoT Operations', ['Device Monitoring', 'Firmware Updates', 'Troubleshooting', 'Analytics']),
    ]
  },

  {
    id: 'semantic',
    name: 'Semantic Architecture',
    groupId: 'ai-data',
    expertise: 'Semantic web, ontologies, RDF/OWL, linked data, knowledge graphs',
    difficulty: 'advanced',
    sections: [
      stubSection('Context', 'Machine-Readable Knowledge', ['Semantic Web', 'Knowledge Representation', 'Linked Data', 'Meaning']),
      stubSection('Framework', 'Semantic Technologies', ['Ontologies', 'RDF/OWL', 'SPARQL', 'Knowledge Graphs']),
      stubSection('Implementation', 'Semantic Systems', ['Data Linking', 'Reasoning', 'Integration', 'Querying']),
      stubSection('Applications', 'Use Cases', ['Search', 'Recommendation', 'Data Integration', 'Discovery']),
    ]
  },

  {
    id: 'ai-data',
    name: 'AI Data Architecture',
    groupId: 'ai-data',
    expertise: 'Training data management, feature engineering, data quality, data lineage',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'AI Data Foundation', ['Data Quality', 'Data Lineage', 'Feature Management', 'Data Governance']),
      stubSection('Framework', 'Data for AI', ['Data Sourcing', 'Data Preparation', 'Feature Engineering', 'Data Quality']),
      stubSection('Implementation', 'Data Pipelines', ['ETL/ELT', 'Feature Stores', 'Data Quality', 'Monitoring']),
      stubSection('Operations', 'Data Management', ['Data Governance', 'Lineage Tracking', 'Quality Metrics', 'Continuous Improvement']),
    ]
  },

  {
    id: 'agentops',
    name: 'AgentOps Architecture',
    groupId: 'operations',
    expertise: 'Agent monitoring, performance optimization, cost management, observability',
    difficulty: 'intermediate',
    sections: [
      stubSection('Context', 'Agent Management', ['Agent Performance', 'Cost Monitoring', 'Token Usage', 'Reliability']),
      stubSection('Framework', 'Observability for Agents', ['Agent Logging', 'Performance Metrics', 'Cost Tracking', 'Error Monitoring']),
      stubSection('Implementation', 'Agent Monitoring', ['Instrumentation', 'Dashboards', 'Alerting', 'Analysis']),
      stubSection('Operations', 'Optimization', ['Performance Tuning', 'Cost Optimization', 'Reliability', 'Continuous Improvement']),
    ]
  },
];

// Helper functions
export function getAcademyModule(moduleId: string): AcademyModule | undefined {
  return ACADEMY_MODULES.find(m => m.id === moduleId);
}

export function getAcademyModulesByGroup(groupId: string): AcademyModule[] {
  return ACADEMY_MODULES.filter(m => m.groupId === groupId);
}

export function getAcademyGroups(): string[] {
  return Array.from(new Set(ACADEMY_MODULES.map(m => m.groupId)));
}
