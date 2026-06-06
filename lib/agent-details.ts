// Complete agent details including roles and responsibilities

export interface AgentDetail {
  id: string;
  name: string;
  category: 'SDLC' | 'TOGAF' | 'Enterprise';
  phase?: number;
  autonomyLevel?: string;
  type?: string;
  role: string;
  responsibilities: string[];
  keyOutputs: string[];
  inputs?: string[];
  frameworks?: string[];
}

export const AGENT_DETAILS: AgentDetail[] = [
  // SDLC AGENTS (28)

  // Phase 1: Requirements & Planning
  {
    id: 'product-requirements-vision',
    name: 'Product Requirements & Vision Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L3',
    role: 'Requirements Strategist',
    responsibilities: [
      'Gather and analyze business requirements',
      'Create and refine user stories',
      'Define acceptance criteria',
      'Establish product vision alignment',
      'Manage requirements traceability',
      'Prioritize features with stakeholders'
    ],
    keyOutputs: ['User stories', 'Acceptance criteria', 'Product vision document', 'Requirements backlog'],
    inputs: ['Business goals', 'Stakeholder interviews', 'Market research', 'Competitor analysis'],
    frameworks: ['Agile User Stories', 'MoSCoW Prioritization', 'INVEST Criteria', 'Jira', 'Azure DevOps']
  },
  {
    id: 'market-competitive-requirements',
    name: 'Market & Competitive Requirements Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L3',
    role: 'Market Analyst',
    responsibilities: [
      'Analyze competitive landscape',
      'Identify market opportunities',
      'Assess customer needs',
      'Prioritize features based on market demand',
      'Track competitive positioning',
      'Recommend feature differentiation'
    ],
    keyOutputs: ['Competitive analysis', 'Market opportunity assessment', 'Feature prioritization', 'Differentiation strategy'],
    inputs: ['Market research data', 'Competitor intelligence', 'Customer feedback', 'Industry reports'],
    frameworks: ['Porter\'s Five Forces', 'SWOT Analysis', 'Blue Ocean Strategy', 'Market Sizing', 'Customer Personas']
  },
  {
    id: 'technical-requirements-architecture',
    name: 'Technical Requirements & Architecture Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L3',
    role: 'Technical Requirements Specialist',
    responsibilities: [
      'Translate business requirements to technical specs',
      'Assess technical feasibility',
      'Identify architectural constraints',
      'Define non-functional requirements',
      'Recommend technology stack',
      'Risk assessment for technical decisions'
    ],
    keyOutputs: ['Technical specifications', 'Feasibility assessment', 'Architecture constraints', 'Technology recommendations'],
    inputs: ['Business requirements', 'Current tech stack', 'Infrastructure capacity', 'Security requirements'],
    frameworks: ['C4 Model', 'System Design', 'NFR Framework', 'Technology Radar', 'Architecture Tradeoffs']
  },
  {
    id: 'release-planning-roadmap',
    name: 'Release Planning & Roadmap Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L3',
    role: 'Release Planner',
    responsibilities: [
      'Plan release schedules',
      'Create product roadmap',
      'Estimate capacity and resources',
      'Manage release dependencies',
      'Coordinate with stakeholders',
      'Track milestone progress'
    ],
    keyOutputs: ['Release schedule', 'Product roadmap', 'Capacity plan', 'Dependency map', 'Milestone definitions'],
    inputs: ['Feature backlog', 'Team capacity', 'Market timing', 'Business priorities'],
    frameworks: ['Roadmap Planning', 'Release Management', 'Sprint Planning', 'Capacity Planning', 'Gantt Charts']
  },
  {
    id: 'solution-system-design',
    name: 'Solution & System Design Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L4',
    role: 'Solution Architect',
    responsibilities: [
      'Design end-to-end solutions',
      'Create system architecture',
      'Design component interactions',
      'Evaluate design options',
      'Document design decisions',
      'Conduct architecture reviews'
    ],
    keyOutputs: ['Architecture diagrams', 'Design specifications', 'Component models', 'Architecture decision records'],
    inputs: ['Technical requirements', 'Scalability needs', 'Integration points', 'Performance targets'],
    frameworks: ['UML', 'C4 Model', 'TOGAF', 'Design Patterns', 'Architectural Decision Records']
  },
  {
    id: 'database-data-design',
    name: 'Database & Data Model Design Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L4',
    role: 'Data Architect',
    responsibilities: [
      'Design database schemas',
      'Create entity-relationship models',
      'Optimize data structures',
      'Plan data governance',
      'Design master data management',
      'Ensure data quality standards'
    ],
    keyOutputs: ['Database schemas', 'ER diagrams', 'Data governance framework', 'Data dictionary'],
    inputs: ['Entity definitions', 'Data relationships', 'Performance requirements', 'Compliance rules'],
    frameworks: ['Entity-Relationship Modeling', 'Database Normalization', 'SQL', 'NoSQL Design', 'Data Governance']
  },
  {
    id: 'api-integration-design',
    name: 'API & Integration Design Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L4',
    role: 'API & Integration Architect',
    responsibilities: [
      'Design API contracts',
      'Define integration patterns',
      'Plan API versioning',
      'Design service interfaces',
      'Plan API security',
      'Create integration specifications'
    ],
    keyOutputs: ['API specifications', 'Integration patterns', 'Service contracts', 'Security specifications'],
    inputs: ['Service requirements', 'Integration needs', 'API standards', 'Security policies'],
    frameworks: ['RESTful Design', 'OpenAPI', 'gRPC', 'Message Queues', 'Event-Driven Architecture']
  },
  {
    id: 'ux-interface-design',
    name: 'UX & Interface Design Agent',
    category: 'SDLC',
    phase: 1,
    autonomyLevel: 'L3',
    role: 'UX/UI Designer',
    responsibilities: [
      'Create user experience flows',
      'Design user interfaces',
      'Ensure accessibility compliance',
      'Design responsive layouts',
      'Conduct usability testing',
      'Maintain design consistency'
    ],
    keyOutputs: ['User flows', 'UI mockups', 'Design prototypes', 'Accessibility compliance report'],
    inputs: ['User research', 'Acceptance criteria', 'Design guidelines', 'Accessibility requirements'],
    frameworks: ['Figma', 'Sketch', 'Adobe XD', 'WCAG Standards', 'Design Systems']
  },

  // Phase 2: Development & Testing
  {
    id: 'code-development-implementation',
    name: 'Code Development & Implementation Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L4',
    role: 'Software Developer',
    responsibilities: [
      'Write production code',
      'Implement features',
      'Follow coding standards',
      'Conduct code reviews',
      'Manage technical debt',
      'Maintain code documentation'
    ],
    keyOutputs: ['Production code', 'Code commits', 'Code documentation', 'Implementation notes'],
    inputs: ['Design specifications', 'Code requirements', 'API contracts', 'Testing criteria'],
    frameworks: ['Node.js', 'React', 'Docker', 'Git', 'CI/CD Pipelines']
  },
  {
    id: 'database-implementation-migration',
    name: 'Database Implementation & Migration Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L4',
    role: 'Database Developer',
    responsibilities: [
      'Implement database schemas',
      'Create migration scripts',
      'Execute data migrations',
      'Optimize database queries',
      'Manage schema versioning',
      'Ensure data integrity'
    ],
    keyOutputs: ['Migration scripts', 'Database implementations', 'Query optimizations', 'Performance reports'],
    inputs: ['Database schemas', 'Data models', 'Performance baselines', 'Migration data'],
    frameworks: ['SQL', 'PostgreSQL', 'MongoDB', 'Liquibase', 'Database Optimization']
  },
  {
    id: 'api-service-implementation',
    name: 'API & Service Implementation Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L4',
    role: 'API Developer',
    responsibilities: [
      'Implement APIs and services',
      'Build microservices',
      'Implement service contracts',
      'Handle integration development',
      'Implement security measures',
      'Create service documentation'
    ],
    keyOutputs: ['API implementations', 'Service code', 'Integration implementations', 'API documentation'],
    inputs: ['API specifications', 'Integration patterns', 'Service contracts', 'Security protocols'],
    frameworks: ['Express.js', 'Spring Boot', 'FastAPI', 'GraphQL', 'Swagger/OpenAPI']
  },
  {
    id: 'frontend-ui-implementation',
    name: 'Frontend & UI Implementation Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L4',
    role: 'Frontend Developer',
    responsibilities: [
      'Implement UI designs',
      'Build responsive interfaces',
      'Implement frontend logic',
      'Optimize frontend performance',
      'Implement accessibility features',
      'Create component library'
    ],
    keyOutputs: ['Frontend code', 'UI components', 'Performance optimizations', 'Component documentation'],
    inputs: ['UI designs', 'Design specifications', 'Component requirements', 'Performance targets'],
    frameworks: ['React', 'Vue.js', 'TypeScript', 'CSS-in-JS', 'Testing Libraries']
  },
  {
    id: 'technical-documentation',
    name: 'Technical Documentation Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L3',
    role: 'Technical Writer',
    responsibilities: [
      'Create architecture documentation',
      'Write API documentation',
      'Document design decisions',
      'Create implementation guides',
      'Maintain knowledge base',
      'Generate code documentation'
    ],
    keyOutputs: ['Architecture docs', 'API docs', 'Implementation guides', 'Runbooks', 'Knowledge base articles'],
    inputs: ['Design specifications', 'Implementation details', 'Architecture decisions', 'Code repositories'],
    frameworks: ['Markdown', 'Confluence', 'Swagger', 'GitBook', 'Technical Writing Standards']
  },
  {
    id: 'test-planning-strategy',
    name: 'Test Planning & Strategy Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L4',
    role: 'QA Strategist',
    responsibilities: [
      'Create test strategies',
      'Define test coverage requirements',
      'Plan testing approach',
      'Identify test scenarios',
      'Design quality metrics',
      'Create test plans'
    ],
    keyOutputs: ['Test plans', 'Coverage matrices', 'Quality metrics framework', 'Risk assessment reports'],
    inputs: ['Requirements', 'Design specs', 'Test data', 'Quality standards'],
    frameworks: ['Jest', 'Selenium', 'Test automation frameworks', 'BDD', 'Test case management']
  },
  {
    id: 'automated-testing-ci',
    name: 'Automated Testing & CI Pipeline Agent',
    category: 'SDLC',
    phase: 2,
    autonomyLevel: 'L4',
    role: 'Test Automation Engineer',
    responsibilities: [
      'Create automated test suites',
      'Implement unit tests',
      'Build integration tests',
      'Set up CI/CD pipelines',
      'Configure test frameworks',
      'Maintain test automation code'
    ],
    keyOutputs: ['Test automation code', 'CI/CD configurations', 'Test reports', 'Coverage reports'],
    inputs: ['Test plans', 'Code repositories', 'API contracts', 'Test scenarios'],
    frameworks: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Jest', 'Pytest']
  },

  // Phase 3: QA & Testing
  {
    id: 'manual-functional-testing',
    name: 'Manual & Functional Testing Agent',
    category: 'SDLC',
    phase: 3,
    autonomyLevel: 'L3',
    role: 'QA Tester',
    responsibilities: [
      'Design test cases',
      'Execute manual testing',
      'Perform exploratory testing',
      'Conduct user acceptance testing',
      'Log and track defects',
      'Verify bug fixes'
    ],
    keyOutputs: ['Test cases', 'Test execution reports', 'Defect reports', 'UAT results', 'Testing evidence'],
    inputs: ['Test plans', 'Requirements', 'Application builds', 'Test data'],
    frameworks: ['TestRail', 'JIRA', 'Confluence', 'Manual Testing', 'Defect Tracking']
  },
  {
    id: 'performance-load-testing',
    name: 'Performance & Load Testing Agent',
    category: 'SDLC',
    phase: 3,
    autonomyLevel: 'L4',
    role: 'Performance Engineer',
    responsibilities: [
      'Design performance tests',
      'Execute load testing',
      'Identify performance bottlenecks',
      'Conduct stress testing',
      'Measure performance metrics',
      'Recommend optimizations'
    ],
    keyOutputs: ['Performance test reports', 'Load test results', 'Bottleneck analysis', 'Optimization recommendations'],
    inputs: ['Performance requirements', 'System architecture', 'Load scenarios', 'Baseline metrics'],
    frameworks: ['JMeter', 'LoadRunner', 'Gatling', 'New Relic', 'Datadog']
  },
  {
    id: 'security-testing-vulnerability',
    name: 'Security Testing & Vulnerability Agent',
    category: 'SDLC',
    phase: 3,
    autonomyLevel: 'L4',
    role: 'Security Tester',
    responsibilities: [
      'Conduct security testing',
      'Run SAST/DAST tools',
      'Perform vulnerability scanning',
      'Conduct penetration testing',
      'Identify security issues',
      'Track vulnerability remediation'
    ],
    keyOutputs: ['Security test reports', 'Vulnerability reports', 'Penetration test results', 'Security findings'],
    inputs: ['Application code', 'Security requirements', 'Threat models', 'Compliance standards'],
    frameworks: ['OWASP', 'SonarQube', 'Burp Suite', 'Snyk', 'Penetration Testing']
  },

  // Phase 4: Deployment & Release
  {
    id: 'release-management-planning',
    name: 'Release Management & Deployment Planning Agent',
    category: 'SDLC',
    phase: 4,
    autonomyLevel: 'L3',
    role: 'Release Manager',
    responsibilities: [
      'Plan release schedules',
      'Coordinate release activities',
      'Create release notes',
      'Plan rollback strategies',
      'Manage release checklists',
      'Track release metrics'
    ],
    keyOutputs: ['Release plans', 'Release notes', 'Deployment checklists', 'Rollback plans', 'Release metrics'],
    inputs: ['Test results', 'Build artifacts', 'Feature list', 'Deployment windows'],
    frameworks: ['Release Management', 'Deployment Planning', 'Change Management', 'Rollback Procedures']
  },
  {
    id: 'infrastructure-environment-management',
    name: 'Infrastructure & Environment Management Agent',
    category: 'SDLC',
    phase: 4,
    autonomyLevel: 'L4',
    role: 'Infrastructure Engineer',
    responsibilities: [
      'Provision infrastructure',
      'Create deployment environments',
      'Manage infrastructure-as-code',
      'Configure environment variables',
      'Set up environment monitoring',
      'Ensure environment parity'
    ],
    keyOutputs: ['Infrastructure code', 'Environment configurations', 'Deployment specifications', 'Infrastructure documentation'],
    inputs: ['Architecture specifications', 'Resource requirements', 'Security policies', 'Compliance needs'],
    frameworks: ['Terraform', 'CloudFormation', 'Kubernetes', 'Docker', 'Infrastructure as Code']
  },
  {
    id: 'continuous-deployment-pipeline',
    name: 'Continuous Deployment & Pipeline Agent',
    category: 'SDLC',
    phase: 4,
    autonomyLevel: 'L4',
    role: 'DevOps Engineer',
    responsibilities: [
      'Build CI/CD pipelines',
      'Automate deployment processes',
      'Implement blue-green deployments',
      'Configure automated testing',
      'Manage pipeline configurations',
      'Monitor pipeline health'
    ],
    keyOutputs: ['Pipeline configurations', 'Deployment automations', 'Deployment strategies', 'Pipeline metrics'],
    inputs: ['Build artifacts', 'Test suites', 'Infrastructure specs', 'Deployment requirements'],
    frameworks: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'AWS CodePipeline', 'Spinnaker']
  },
  {
    id: 'release-validation-signoff',
    name: 'Release Validation & Sign-Off Agent',
    category: 'SDLC',
    phase: 4,
    autonomyLevel: 'L3',
    role: 'Release Validator',
    responsibilities: [
      'Validate release readiness',
      'Verify test completion',
      'Check deployment success',
      'Validate acceptance criteria',
      'Conduct release sign-off',
      'Track release success'
    ],
    keyOutputs: ['Release validation reports', 'Sign-off documentation', 'Deployment verification', 'Success metrics'],
    inputs: ['Test reports', 'Deployment logs', 'Acceptance criteria', 'Release documentation'],
    frameworks: ['Release Checklist', 'Sign-off Process', 'Go/No-Go Criteria', 'Deployment Validation']
  },

  // Phase 5: Operations & Support
  {
    id: 'production-monitoring-observability',
    name: 'Production Monitoring & Observability Agent',
    category: 'SDLC',
    phase: 5,
    autonomyLevel: 'L4',
    role: 'Observability Engineer',
    responsibilities: [
      'Set up monitoring and alerts',
      'Configure logging infrastructure',
      'Implement distributed tracing',
      'Create performance dashboards',
      'Monitor application health',
      'Track performance metrics'
    ],
    keyOutputs: ['Monitoring configurations', 'Dashboard definitions', 'Alert rules', 'Logging setup', 'Observability documentation'],
    inputs: ['Application metrics', 'System logs', 'Performance targets', 'Alert thresholds'],
    frameworks: ['Prometheus', 'ELK Stack', 'Grafana', 'DataDog', 'New Relic']
  },
  {
    id: 'incident-response-troubleshooting',
    name: 'Incident Response & Troubleshooting Agent',
    category: 'SDLC',
    phase: 5,
    autonomyLevel: 'L4',
    role: 'Incident Response Lead',
    responsibilities: [
      'Respond to production incidents',
      'Troubleshoot system issues',
      'Perform root cause analysis',
      'Create incident reports',
      'Implement preventive measures',
      'Update runbooks'
    ],
    keyOutputs: ['Incident reports', 'Root cause analysis', 'Preventive measures', 'Updated runbooks', 'Lessons learned'],
    inputs: ['Incident alerts', 'System logs', 'Performance data', 'Historical incidents'],
    frameworks: ['Incident Command System', 'RCA Process', 'Blameless Postmortems', 'ITIL', 'On-call Management']
  },
  {
    id: 'production-support-maintenance',
    name: 'Production Support & Maintenance Agent',
    category: 'SDLC',
    phase: 5,
    autonomyLevel: 'L3',
    role: 'Support Engineer',
    responsibilities: [
      'Provide production support',
      'Fix production bugs',
      'Apply patches and hotfixes',
      'Manage technical debt',
      'Update documentation',
      'Support feature optimization'
    ],
    keyOutputs: ['Bug fixes', 'Hotfix releases', 'Support documentation', 'Maintenance logs', 'Performance optimizations'],
    inputs: ['Production issues', 'Bug reports', 'Support tickets', 'Performance data'],
    frameworks: ['Hotfix Management', 'Patch Management', 'Support Ticketing', 'Maintenance Windows', 'SLA Management']
  },

  // Phase 6: Governance
  {
    id: 'agile-scrum-governance',
    name: 'Agile/Scrum Governance Agent',
    category: 'SDLC',
    phase: 6,
    autonomyLevel: 'L4',
    role: 'Scrum Master',
    responsibilities: [
      'Enforce Agile/Scrum practices',
      'Manage sprint planning',
      'Facilitate sprint ceremonies',
      'Track team velocity',
      'Coach teams on Agile',
      'Manage retrospectives'
    ],
    keyOutputs: ['Sprint plans', 'Velocity reports', 'Backlog refinement docs', 'Agile metrics', 'Retrospective summaries'],
    inputs: ['Backlog items', 'Team capacity', 'Sprint goals', 'Historical velocity'],
    frameworks: ['Scrum', 'Kanban', 'Jira', 'Azure DevOps', 'Sprint Ceremonies']
  },
  {
    id: 'safe-scaled-agile-governance',
    name: 'SAFe & Scaled Agile Governance Agent',
    category: 'SDLC',
    phase: 6,
    autonomyLevel: 'L4',
    role: 'Release Train Engineer',
    responsibilities: [
      'Enforce SAFe practices',
      'Manage program increments',
      'Coordinate across teams',
      'Manage dependencies',
      'Track portfolio metrics',
      'Facilitate PI planning'
    ],
    keyOutputs: ['PI plans', 'Roadmaps', 'Dependency maps', 'Portfolio metrics', 'PI metrics'],
    inputs: ['Portfolio backlog', 'Team plans', 'Strategic goals', 'Cross-team dependencies'],
    frameworks: ['SAFe', 'PI Planning', 'Agile Release Trains', 'Portfolio Management', 'Program Increment']
  },
  {
    id: 'ci-cd-governance',
    name: 'CI/CD Governance Agent',
    category: 'SDLC',
    phase: 6,
    autonomyLevel: 'L4',
    role: 'DevOps Governance Lead',
    responsibilities: [
      'Enforce CI/CD best practices',
      'Manage pipeline standards',
      'Track delivery metrics',
      'Ensure deployment automation',
      'Enforce quality gates',
      'Manage release standards'
    ],
    keyOutputs: ['CI/CD standards', 'Pipeline configurations', 'Quality gates', 'Delivery metrics', 'Best practices documentation'],
    inputs: ['Pipeline definitions', 'Quality criteria', 'Deployment logs', 'Performance metrics'],
    frameworks: ['CI/CD Best Practices', 'Quality Gates', 'Deployment Automation', 'Release Standards', 'Metrics & Analytics']
  },

  // TOGAF AGENTS (18)

  // Phase 7: TOGAF Foundation
  {
    id: 'togaf-architecture-vision',
    name: 'Architecture Vision Agent',
    category: 'TOGAF',
    phase: 7,
    autonomyLevel: 'L3',
    role: 'Enterprise Architecture Lead',
    responsibilities: [
      'Define architecture scope',
      'Identify business drivers',
      'Conduct stakeholder analysis',
      'Create architecture vision',
      'Establish success criteria',
      'Define governance framework'
    ],
    keyOutputs: ['Architecture Vision Statement', 'Stakeholder Map', 'Business Driver Assessment', 'Success Criteria', 'Governance Charter'],
    inputs: ['Business strategy', 'Stakeholder needs', 'Current state assessment', 'Regulatory requirements'],
    frameworks: ['TOGAF', 'Stakeholder Management', 'Business Analysis', 'Governance Framework', 'Vision Statements']
  },
  {
    id: 'togaf-governance-board',
    name: 'Architecture Governance Board Agent',
    category: 'TOGAF',
    phase: 7,
    autonomyLevel: 'L4',
    role: 'Architecture Governance Chair',
    responsibilities: [
      'Chair ARB meetings',
      'Review architecture decisions',
      'Approve architecture changes',
      'Monitor compliance',
      'Escalate issues',
      'Define governance policies'
    ],
    keyOutputs: ['ARB Meeting Minutes', 'Decision Records', 'Approvals/Rejections', 'Governance Policies', 'Escalation Summaries'],
    inputs: ['Architecture proposals', 'Change requests', 'Compliance reports', 'Risk assessments'],
    frameworks: ['TOGAF ARB', 'Decision-Making', 'Governance Policies', 'Compliance Monitoring', 'Escalation Procedures']
  },
  {
    id: 'togaf-repository-manager',
    name: 'Architecture Repository Manager Agent',
    category: 'TOGAF',
    phase: 7,
    autonomyLevel: 'L4',
    role: 'Repository Manager',
    responsibilities: [
      'Maintain architecture repository',
      'Manage architecture assets',
      'Maintain reference models',
      'Maintain design patterns',
      'Manage standards base',
      'Provide repository access'
    ],
    keyOutputs: ['Architecture Repository Database', 'Asset Catalog', 'Pattern Library', 'Standards Library', 'Reference Models'],
    inputs: ['Architecture artifacts', 'Design patterns', 'Standards documents', 'Reference models'],
    frameworks: ['Architecture Repository', 'Asset Management', 'Knowledge Management', 'Database Systems', 'Version Control']
  },
  {
    id: 'togaf-standards-governance',
    name: 'Architecture Standards Governance Agent',
    category: 'TOGAF',
    phase: 7,
    autonomyLevel: 'L4',
    role: 'Standards Manager',
    responsibilities: [
      'Define architecture standards',
      'Define building blocks',
      'Define design patterns',
      'Define naming conventions',
      'Monitor compliance',
      'Update standards'
    ],
    keyOutputs: ['Standards Documentation', 'Building Block Catalog', 'Design Pattern Library', 'Naming Conventions', 'Compliance Reports'],
    inputs: ['Business requirements', 'Technology landscape', 'Best practices', 'Industry standards'],
    frameworks: ['TOGAF Standards', 'Building Blocks', 'Design Patterns', 'Naming Conventions', 'Standards Governance']
  },
  {
    id: 'togaf-communication-alignment',
    name: 'Architecture Communication & Alignment Agent',
    category: 'TOGAF',
    phase: 7,
    autonomyLevel: 'L3',
    role: 'Architecture Communicator',
    responsibilities: [
      'Communicate architecture vision',
      'Engage stakeholders',
      'Create communication materials',
      'Conduct workshops',
      'Manage feedback',
      'Ensure alignment'
    ],
    keyOutputs: ['Communication Plans', 'Presentation Materials', 'Workshop Materials', 'Feedback Summaries', 'Alignment Reports'],
    inputs: ['Architecture vision', 'Stakeholder concerns', 'Project status', 'Architecture changes'],
    frameworks: ['Communication Planning', 'Stakeholder Engagement', 'Workshop Facilitation', 'Feedback Management', 'Alignment Frameworks']
  },

  // Phase 8: TOGAF Core Architecture
  {
    id: 'togaf-business-architecture',
    name: 'Business Architecture Agent',
    category: 'TOGAF',
    phase: 8,
    autonomyLevel: 'L4',
    role: 'Business Architect',
    responsibilities: [
      'Define business strategy',
      'Model business processes',
      'Create capability map',
      'Define business entities',
      'Identify business metrics',
      'Map stakeholders'
    ],
    keyOutputs: ['Business Strategy Model', 'Business Capability Map', 'Business Process Models', 'Organization Map', 'Business Metrics'],
    inputs: ['Business strategy', 'Process documentation', 'Organizational structure', 'Capability assessment'],
    frameworks: ['Business Process Modeling', 'Capability Mapping', 'Value Stream Mapping', 'BPMN', 'Business Models']
  },
  {
    id: 'togaf-data-architecture',
    name: 'Data Architecture Agent',
    category: 'TOGAF',
    phase: 8,
    autonomyLevel: 'L4',
    role: 'Data Architect',
    responsibilities: [
      'Define data entities',
      'Create data models',
      'Define data governance',
      'Map data to capabilities',
      'Define quality standards',
      'Design MDM'
    ],
    keyOutputs: ['Data Entity Model', 'Data Governance Framework', 'Data Quality Standards', 'MDM Design', 'Data Dictionary'],
    inputs: ['Data requirements', 'Business entities', 'Integration needs', 'Governance policies'],
    frameworks: ['Data Modeling', 'Data Governance', 'Master Data Management', 'Data Quality Frameworks', 'Semantic Models']
  },
  {
    id: 'togaf-application-architecture',
    name: 'Application Architecture Agent',
    category: 'TOGAF',
    phase: 8,
    autonomyLevel: 'L4',
    role: 'Application Architect',
    responsibilities: [
      'Define application portfolio',
      'Create capability map',
      'Design architecture',
      'Define integration patterns',
      'Design API architecture',
      'Identify redundancies'
    ],
    keyOutputs: ['Application Portfolio Map', 'Application Architecture Diagram', 'Integration Architecture', 'API Architecture', 'Rationalization Plan'],
    inputs: ['Business capabilities', 'Application inventory', 'Integration requirements', 'Technology constraints'],
    frameworks: ['Application Portfolio Management', 'Integration Patterns', 'Microservices Architecture', 'API Architecture', 'Application Rationalization']
  },
  {
    id: 'togaf-technology-architecture',
    name: 'Technology Architecture Agent',
    category: 'TOGAF',
    phase: 8,
    autonomyLevel: 'L4',
    role: 'Technology Architect',
    responsibilities: [
      'Define technology standards',
      'Design infrastructure',
      'Define platform architecture',
      'Define security architecture',
      'Define network architecture',
      'Create technology roadmap'
    ],
    keyOutputs: ['Technology Standards', 'Infrastructure Architecture', 'Platform Architecture Design', 'Security Architecture', 'Technology Roadmap'],
    inputs: ['Application requirements', 'Infrastructure assessments', 'Security policies', 'Technology trends'],
    frameworks: ['Infrastructure as Code', 'Cloud Architecture', 'Network Design', 'Security Architecture', 'Technology Standards']
  },
  {
    id: 'togaf-risk-compliance',
    name: 'Architecture Risk & Compliance Agent',
    category: 'TOGAF',
    phase: 8,
    autonomyLevel: 'L4',
    role: 'Risk & Compliance Manager',
    responsibilities: [
      'Identify architecture risks',
      'Track risk mitigation',
      'Perform compliance reviews',
      'Audit adherence',
      'Manage contracts',
      'Track compliance metrics'
    ],
    keyOutputs: ['Risk Register', 'Risk Mitigation Plans', 'Compliance Assessment Reports', 'Audit Reports', 'Architecture Contracts'],
    inputs: ['Architecture designs', 'Regulatory requirements', 'Risk assessments', 'Compliance standards'],
    frameworks: ['Risk Management', 'Compliance Management', 'Audit Frameworks', 'Risk Mitigation', 'Regulatory Mapping']
  },
  {
    id: 'togaf-capability-maturity',
    name: 'Architecture Capability & Maturity Agent',
    category: 'TOGAF',
    phase: 8,
    autonomyLevel: 'L3',
    role: 'Capability Development Lead',
    responsibilities: [
      'Assess architecture capability',
      'Define maturity model',
      'Track maturity progression',
      'Identify capability gaps',
      'Plan improvements',
      'Train architecture team'
    ],
    keyOutputs: ['Capability Assessment Reports', 'Maturity Model Definition', 'Capability Roadmap', 'Training Plans', 'Maturity Progression Reports'],
    inputs: ['Current capabilities', 'Target state vision', 'Skill assessments', 'Learning needs'],
    frameworks: ['Capability Maturity Models', 'CMMI', 'Training & Development', 'Skills Assessment', 'Capability Building']
  },

  // Phase 9: TOGAF Planning & Integration
  {
    id: 'togaf-opportunities-solutions',
    name: 'Opportunities & Solutions Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L3',
    role: 'Solutions Strategist',
    responsibilities: [
      'Identify opportunities',
      'Evaluate solutions',
      'Perform cost-benefit analysis',
      'Identify quick wins',
      'Define solution components',
      'Prioritize solutions'
    ],
    keyOutputs: ['Opportunity Assessment', 'Solution Architecture Designs', 'Cost-Benefit Analysis', 'Implementation Roadmap', 'Quick Wins List'],
    inputs: ['Gap analysis', 'Business case', 'Technology options', 'Resource constraints'],
    frameworks: ['Solution Architecture', 'Cost-Benefit Analysis', 'Innovation Management', 'Opportunity Assessment', 'Solution Prioritization']
  },
  {
    id: 'togaf-migration-planning',
    name: 'Migration Planning Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L3',
    role: 'Migration Planner',
    responsibilities: [
      'Create migration plan',
      'Identify dependencies',
      'Define migration waves',
      'Define resource requirements',
      'Identify risks',
      'Plan transition'
    ],
    keyOutputs: ['Migration Plan', 'Dependency Map', 'Wave/Phase Schedule', 'Resource Plan', 'Risk Register', 'Transition Architecture'],
    inputs: ['Current state architecture', 'Target state design', 'Dependency analysis', 'Resource availability'],
    frameworks: ['Migration Planning', 'Dependency Mapping', 'Wave Planning', 'Risk Management', 'Transition Architecture']
  },
  {
    id: 'togaf-implementation-governance',
    name: 'Implementation Governance Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L4',
    role: 'Implementation Overseer',
    responsibilities: [
      'Monitor implementation',
      'Track compliance',
      'Manage change requests',
      'Track benefits realization',
      'Monitor project health',
      'Manage communication'
    ],
    keyOutputs: ['Implementation Status Reports', 'Compliance Reports', 'Benefits Tracking Reports', 'Issue & Risk Log', 'Stakeholder Communications'],
    inputs: ['Project status', 'Compliance data', 'Benefits metrics', 'Project metrics'],
    frameworks: ['Project Governance', 'Implementation Monitoring', 'Benefits Realization', 'Change Management', 'Stakeholder Communication']
  },
  {
    id: 'togaf-arch-change-management',
    name: 'Architecture Change Management Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L4',
    role: 'Change Management Lead',
    responsibilities: [
      'Monitor compliance',
      'Process change requests',
      'Evaluate change impact',
      'Update baselines',
      'Maintain repository',
      'Identify technical debt'
    ],
    keyOutputs: ['Change Request Evaluations', 'Updated Architecture Baselines', 'Technical Debt Register', 'Compliance Reviews', 'Architecture Evolution Plan'],
    inputs: ['Change requests', 'Architecture baselines', 'Compliance requirements', 'Technical debt assessments'],
    frameworks: ['Change Management Process', 'Impact Analysis', 'Baseline Management', 'Technical Debt Management', 'Architecture Evolution']
  },
  {
    id: 'togaf-strategy-alignment',
    name: 'Architecture-to-Strategy Alignment Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L4',
    role: 'Strategy Alignment Officer',
    responsibilities: [
      'Align architecture with strategy',
      'Map decisions to goals',
      'Align roadmaps',
      'Track value realization',
      'Identify strategic risks',
      'Align leadership'
    ],
    keyOutputs: ['Strategy Alignment Assessment', 'Architecture-Strategy Mapping', 'Strategic Value Reports', 'Alignment Metrics', 'Risk Reports'],
    inputs: ['Business strategy', 'Architecture roadmap', 'Strategic goals', 'Value metrics'],
    frameworks: ['Strategy Alignment', 'Balanced Scorecard', 'OKRs', 'Value Realization', 'Strategic Roadmapping']
  },
  {
    id: 'togaf-operations-alignment',
    name: 'Architecture-to-Operations Alignment Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L4',
    role: 'Operations Alignment Manager',
    responsibilities: [
      'Ensure architecture supports operations',
      'Define operational requirements',
      'Plan operational transition',
      'Define runbooks',
      'Train operations team',
      'Monitor compliance'
    ],
    keyOutputs: ['Operational Requirement Specs', 'Operational Readiness Reports', 'Runbooks and Procedures', 'Training Materials', 'Operational Compliance Reports'],
    inputs: ['Architecture design', 'Operational capabilities', 'Support procedures', 'Training needs'],
    frameworks: ['Operations Management', 'Runbook Development', 'Operational Readiness', 'Training & Development', 'ITIL Processes']
  },
  {
    id: 'togaf-portfolio-alignment',
    name: 'Architecture-to-Portfolio Alignment Agent',
    category: 'TOGAF',
    phase: 9,
    autonomyLevel: 'L4',
    role: 'Portfolio Alignment Director',
    responsibilities: [
      'Align portfolio with architecture',
      'Map projects to initiatives',
      'Track portfolio health',
      'Identify misalignment',
      'Recommend adjustments',
      'Track ROI'
    ],
    keyOutputs: ['Portfolio-Architecture Alignment Reports', 'Project-Initiative Mapping', 'ROI Analysis', 'Portfolio Adjustment Recommendations', 'Investment Tracking Reports'],
    inputs: ['Project portfolio', 'Architecture roadmap', 'Strategic initiatives', 'Investment data'],
    frameworks: ['Portfolio Management', 'Project Mapping', 'ROI Analysis', 'Investment Analysis', 'Portfolio Optimization']
  },

  // ENTERPRISE AGENTS (68)

  // Executive & C-Suite (7)
  {
    id: 'ceo',
    name: 'Chief Executive Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Chief Executive',
    responsibilities: [
      'Set strategic vision',
      'Manage board relations',
      'Ensure shareholder value',
      'Establish competitive positioning',
      'Guide organizational culture',
      'Make capital allocation decisions'
    ],
    keyOutputs: ['Strategic direction', 'Board reports', 'Shareholder communications', 'Organizational vision'],
    inputs: ['Market analysis', 'Financial reports', 'Board feedback', 'Competitive intelligence'],
    frameworks: ['Strategic Planning', 'Board Governance', 'Stakeholder Management', 'Financial Planning', 'Corporate Strategy']
  },
  {
    id: 'cfo',
    name: 'Chief Financial Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Financial Leader',
    responsibilities: [
      'Manage financial planning',
      'Optimize capital allocation',
      'Ensure financial controls',
      'Manage risk',
      'Handle treasury operations',
      'Provide financial reporting'
    ],
    keyOutputs: ['Financial plans', 'Budget allocations', 'Financial reports', 'Cost-benefit analyses'],
    inputs: ['Financial statements', 'Budget requests', 'Market data', 'Risk assessments'],
    frameworks: ['Financial Planning', 'ERP Systems', 'SAP', 'Excel', 'Financial Modeling']
  },
  {
    id: 'coo',
    name: 'Chief Operating Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Operations Leader',
    responsibilities: [
      'Drive operational efficiency',
      'Optimize processes',
      'Manage supply chain',
      'Manage vendor relationships',
      'Ensure business continuity',
      'Monitor operational metrics'
    ],
    keyOutputs: ['Operations roadmap', 'Process improvements', 'Efficiency reports', 'Business continuity plans'],
    inputs: ['Operations metrics', 'Process data', 'Vendor reports', 'Supply chain data'],
    frameworks: ['Operations Management', 'Lean Six Sigma', 'Supply Chain Management', 'Process Optimization', 'Business Continuity']
  },
  {
    id: 'cto',
    name: 'Chief Technology Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Technology Leader',
    responsibilities: [
      'Set technology strategy',
      'Guide innovation',
      'Manage tech debt',
      'Evaluate emerging tech',
      'Define R&D investments',
      'Manage tech partnerships'
    ],
    keyOutputs: ['Technology strategy', 'Innovation roadmap', 'Technology assessments', 'R&D plans'],
    inputs: ['Technology trends', 'Innovation proposals', 'Tech debt assessments', 'Partnership opportunities'],
    frameworks: ['Technology Strategy', 'Innovation Management', 'Tech Radar', 'R&D Planning', 'Partnership Management']
  },
  {
    id: 'chro',
    name: 'Chief Human Resources Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Human Resources Leader',
    responsibilities: [
      'Manage talent acquisition',
      'Design organizational structure',
      'Set compensation strategy',
      'Drive culture development',
      'Manage leadership development',
      'Handle employee engagement'
    ],
    keyOutputs: ['Talent strategies', 'Org design', 'Compensation plans', 'Culture initiatives'],
    inputs: ['Talent market data', 'Employee feedback', 'Compensation benchmarks', 'Cultural assessments'],
    frameworks: ['Talent Management', 'HR Planning', 'Compensation & Benefits', 'Organizational Design', 'Employee Engagement']
  },
  {
    id: 'cro',
    name: 'Chief Risk Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Risk Management Leader',
    responsibilities: [
      'Identify enterprise risks',
      'Manage compliance',
      'Manage audit function',
      'Plan business continuity',
      'Handle crisis management',
      'Monitor risk metrics'
    ],
    keyOutputs: ['Risk assessments', 'Compliance reports', 'Audit plans', 'Crisis plans'],
    inputs: ['Risk assessments', 'Regulatory requirements', 'Incident data', 'Audit findings'],
    frameworks: ['Risk Management', 'Compliance Management', 'Audit Frameworks', 'Crisis Management', 'Business Continuity']
  },
  {
    id: 'cmo',
    name: 'Chief Marketing Officer',
    category: 'Enterprise',
    type: 'Executive',
    role: 'Marketing Leader',
    responsibilities: [
      'Set brand strategy',
      'Drive market demand',
      'Manage customer acquisition',
      'Manage marketing tech',
      'Track ROI',
      'Guide competitive positioning'
    ],
    keyOutputs: ['Marketing strategy', 'Campaign plans', 'Brand guidelines', 'Market analysis'],
    inputs: ['Market research', 'Customer data', 'Campaign metrics', 'Competitive analysis'],
    frameworks: ['Marketing Strategy', 'Brand Management', 'Digital Marketing', 'Marketing Analytics', 'Campaign Management']
  },

  // Business Operations (8)
  {
    id: 'bpm',
    name: 'Business Process Management',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Process Improvement Manager',
    responsibilities: [
      'Design business processes',
      'Automate processes',
      'Implement RPA',
      'Apply Lean/Six Sigma',
      'Analyze process metrics',
      'Optimize workflows'
    ],
    keyOutputs: ['Process designs', 'Automation roadmaps', 'Process improvements', 'Efficiency metrics'],
    inputs: ['Current processes', 'Process metrics', 'Automation opportunities', 'Business requirements'],
    frameworks: ['Lean Six Sigma', 'BPM Tools', 'RPA Platforms', 'Process Mining', 'Workflow Automation']
  },
  {
    id: 'csr',
    name: 'Customer Success & Revenue',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Customer Success Leader',
    responsibilities: [
      'Manage customer lifecycle',
      'Develop retention strategies',
      'Forecast revenue',
      'Score customer health',
      'Predict churn',
      'Manage account expansion'
    ],
    keyOutputs: ['Customer success plans', 'Revenue forecasts', 'Health scores', 'Retention strategies'],
    inputs: ['Customer data', 'Transaction history', 'Support tickets', 'Engagement metrics'],
    frameworks: ['Customer Success Management', 'CRM Systems', 'Analytics Platforms', 'Predictive Analytics', 'Revenue Operations']
  },
  {
    id: 'pm',
    name: 'Product Management',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Product Manager',
    responsibilities: [
      'Define product vision',
      'Prioritize features',
      'Manage requirements',
      'Plan go-to-market',
      'Analyze product metrics',
      'Drive product strategy'
    ],
    keyOutputs: ['Product roadmap', 'Feature prioritization', 'Requirements', 'Product strategy'],
    inputs: ['Market research', 'Customer feedback', 'Product metrics', 'Competitive analysis'],
    frameworks: ['Product Management', 'JIRA', 'Confluence', 'Product Analytics', 'Go-to-Market Strategy']
  },
  {
    id: 'sa',
    name: 'Sales Architecture',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Sales Operations Leader',
    responsibilities: [
      'Design sales organization',
      'Optimize sales process',
      'Manage territories',
      'Plan channel strategy',
      'Manage sales tools',
      'Track sales metrics'
    ],
    keyOutputs: ['Sales structure', 'Sales processes', 'Territory plans', 'Channel strategy'],
    inputs: ['Sales data', 'Market segmentation', 'Sales processes', 'Tool requirements'],
    frameworks: ['Sales Operations', 'CRM Tools', 'Sales Enablement', 'Territory Planning', 'Channel Strategy']
  },
  {
    id: 'pvm',
    name: 'Procurement & Vendor Management',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Vendor Management Lead',
    responsibilities: [
      'Select vendors',
      'Negotiate contracts',
      'Ensure compliance',
      'Manage supplier relationships',
      'Optimize costs',
      'Monitor performance'
    ],
    keyOutputs: ['Vendor strategies', 'Contracts', 'Performance metrics', 'Cost savings'],
    inputs: ['Procurement needs', 'Market pricing', 'Vendor data', 'Performance metrics'],
    frameworks: ['Vendor Management', 'Contract Management', 'Procurement Systems', 'SLA Management', 'Supplier Relationship']
  },
  {
    id: 'qc',
    name: 'Quality & Compliance',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Quality & Compliance Manager',
    responsibilities: [
      'Manage quality systems',
      'Map regulatory requirements',
      'Monitor compliance',
      'Prepare audits',
      'Track certifications',
      'Manage quality metrics'
    ],
    keyOutputs: ['Quality plans', 'Compliance reports', 'Audit preparations', 'Certification tracking'],
    inputs: ['Regulatory requirements', 'Quality data', 'Audit findings', 'Process data'],
    frameworks: ['ISO Standards', 'Quality Management Systems', 'Compliance Management', 'Audit Frameworks', 'Certification Management']
  },
  {
    id: 'ir',
    name: 'Innovation & R&D',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Innovation Manager',
    responsibilities: [
      'Manage innovation portfolio',
      'Evaluate emerging tech',
      'Allocate R&D budget',
      'Manage patents',
      'Track innovation metrics',
      'Foster innovation culture'
    ],
    keyOutputs: ['Innovation portfolio', 'Tech evaluations', 'Patent strategies', 'Innovation metrics'],
    inputs: ['Innovation proposals', 'Technology trends', 'Patent data', 'R&D budgets'],
    frameworks: ['Innovation Management', 'R&D Portfolio Management', 'Patent Management', 'Technology Scouting', 'Idea Management']
  },
  {
    id: 'esg',
    name: 'Sustainability & ESG',
    category: 'Enterprise',
    type: 'Operations',
    role: 'Sustainability Manager',
    responsibilities: [
      'Define ESG strategy',
      'Measure carbon footprint',
      'Manage social programs',
      'Report on sustainability',
      'Adopt green tech',
      'Engage stakeholders'
    ],
    keyOutputs: ['ESG strategy', 'Sustainability reports', 'Carbon tracking', 'Social programs'],
    inputs: ['ESG standards', 'Operational data', 'Stakeholder feedback', 'Carbon metrics'],
    frameworks: ['ESG Frameworks', 'Sustainability Reporting', 'Carbon Management', 'Social Impact', 'Stakeholder Engagement']
  },

  // Management & Organizational (6)
  {
    id: 'cm',
    name: 'Change Management',
    category: 'Enterprise',
    type: 'Management',
    role: 'Change Manager',
    responsibilities: [
      'Plan change strategy',
      'Manage stakeholder change',
      'Address resistance',
      'Plan communications',
      'Assess change impact',
      'Track adoption'
    ],
    keyOutputs: ['Change plans', 'Communication strategies', 'Impact assessments', 'Adoption tracking'],
    inputs: ['Change initiatives', 'Stakeholder feedback', 'Impact data', 'Adoption metrics'],
    frameworks: ['Change Management', 'Stakeholder Management', 'Communication Planning', 'ADKAR Model', 'Change Impact Analysis']
  },
  {
    id: 'od',
    name: 'Organizational Design',
    category: 'Enterprise',
    type: 'Management',
    role: 'Organizational Designer',
    responsibilities: [
      'Design organization structure',
      'Define roles',
      'Optimize span of control',
      'Design CoEs',
      'Assess maturity',
      'Plan reorganization'
    ],
    keyOutputs: ['Org designs', 'Role definitions', 'Accountability matrices', 'Maturity assessments'],
    inputs: ['Business strategy', 'Capability needs', 'Organizational data', 'Process flows'],
    frameworks: ['Organizational Design', 'Job Design', 'Organizational Behavior', 'Accountability Frameworks', 'Org Maturity Models']
  },
  {
    id: 'perf',
    name: 'Performance Management',
    category: 'Enterprise',
    type: 'Management',
    role: 'Performance Manager',
    responsibilities: [
      'Define KPIs',
      'Design scorecards',
      'Create dashboards',
      'Set targets',
      'Track performance',
      'Align compensation'
    ],
    keyOutputs: ['KPI definitions', 'Scorecards', 'Performance dashboards', 'Compensation alignment'],
    inputs: ['Business strategy', 'Performance data', 'Operational metrics', 'Compensation budgets'],
    frameworks: ['Balanced Scorecard', 'OKRs', 'KPI Management', 'Business Intelligence', 'Performance Analytics']
  },
  {
    id: 'km',
    name: 'Knowledge Management',
    category: 'Enterprise',
    type: 'Management',
    role: 'Knowledge Manager',
    responsibilities: [
      'Design knowledge architecture',
      'Manage documentation',
      'Build learning ecosystem',
      'Create communities of practice',
      'Capture lessons learned',
      'Drive organizational learning'
    ],
    keyOutputs: ['Knowledge architecture', 'Content management', 'Learning plans', 'Knowledge bases'],
    inputs: ['Documentation', 'Lessons learned', 'Learning needs', 'Expertise data'],
    frameworks: ['Knowledge Management', 'Content Management Systems', 'Learning Management', 'Communities of Practice', 'Wiki/Documentation Platforms']
  },
  {
    id: 'ppm',
    name: 'Project & Program Management',
    category: 'Enterprise',
    type: 'Management',
    role: 'Program Manager',
    responsibilities: [
      'Optimize portfolio',
      'Manage governance',
      'Manage methodologies',
      'Allocate resources',
      'Track benefits',
      'Manage PMO'
    ],
    keyOutputs: ['Portfolio analysis', 'Program governance', 'Project plans', 'Benefits realization'],
    inputs: ['Project data', 'Strategic goals', 'Resource availability', 'Budget allocations'],
    frameworks: ['Project Management', 'PMI/PMBOK', 'Agile', 'Portfolio Management', 'Program Management Office']
  },
  {
    id: 'sm',
    name: 'Stakeholder Management',
    category: 'Enterprise',
    type: 'Management',
    role: 'Stakeholder Manager',
    responsibilities: [
      'Map stakeholders',
      'Plan engagement',
      'Communicate updates',
      'Resolve conflicts',
      'Manage executive reporting',
      'Build relationships'
    ],
    keyOutputs: ['Stakeholder maps', 'Engagement plans', 'Communications', 'Executive reports'],
    inputs: ['Stakeholder data', 'Project updates', 'Feedback', 'Executive summary data'],
    frameworks: ['Stakeholder Management', 'Communication Planning', 'Conflict Resolution', 'Executive Reporting', 'Relationship Management']
  },

  // Strategic Business (6)
  {
    id: 'ci',
    name: 'Competitive Intelligence',
    category: 'Enterprise',
    type: 'Strategy',
    role: 'Competitive Analyst',
    responsibilities: [
      'Analyze competitors',
      'Track market trends',
      'Profile competitors',
      'Position strategically',
      'Identify opportunities',
      'Monitor environment'
    ],
    keyOutputs: ['Competitive analysis', 'Market trends', 'Competitor profiles', 'Strategic positioning'],
    inputs: ['Market data', 'Competitor data', 'Industry reports', 'Customer feedback'],
    frameworks: ['Competitive Intelligence', 'SWOT Analysis', 'Porter\'s Five Forces', 'Market Research', 'Trend Analysis']
  },
  {
    id: 'bmi',
    name: 'Business Model Innovation',
    category: 'Enterprise',
    type: 'Strategy',
    role: 'Business Model Strategist',
    responsibilities: [
      'Design business models',
      'Innovate revenue',
      'Analyze value chains',
      'Design platforms',
      'Monetize ecosystems',
      'Validate models'
    ],
    keyOutputs: ['Business model designs', 'Revenue models', 'Value chain analysis', 'Platform designs'],
    inputs: ['Market opportunities', 'Revenue data', 'Technology capabilities', 'Customer needs'],
    frameworks: ['Business Model Canvas', 'Value Chain Analysis', 'Lean Startup', 'Platform Design', 'Revenue Model Innovation']
  },
  {
    id: 'ma',
    name: 'Mergers & Acquisitions',
    category: 'Enterprise',
    type: 'Strategy',
    role: 'M&A Manager',
    responsibilities: [
      'Identify targets',
      'Conduct due diligence',
      'Plan integration',
      'Identify synergies',
      'Track post-merger',
      'Manage integration'
    ],
    keyOutputs: ['M&A analysis', 'Due diligence reports', 'Integration plans', 'Synergy tracking'],
    inputs: ['Target companies', 'Financial data', 'Market analysis', 'Synergy opportunities'],
    frameworks: ['M&A Process', 'Due Diligence', 'Financial Modeling', 'Integration Planning', 'Synergy Realization']
  },
  {
    id: 'ep',
    name: 'Ecosystem & Partnership',
    category: 'Enterprise',
    type: 'Strategy',
    role: 'Partnership Manager',
    responsibilities: [
      'Develop partnership strategy',
      'Design ecosystems',
      'Manage alliances',
      'Manage co-innovation',
      'Measure partner value',
      'Manage relationships'
    ],
    keyOutputs: ['Partnership strategies', 'Ecosystem designs', 'Alliance agreements', 'Partner metrics'],
    inputs: ['Partner opportunities', 'Ecosystem data', 'Co-innovation proposals', 'Partner metrics'],
    frameworks: ['Partnership Strategy', 'Ecosystem Design', 'Alliance Management', 'Co-innovation', 'Partner Relationship Management']
  },
  {
    id: 'dbt',
    name: 'Digital Business Transformation',
    category: 'Enterprise',
    type: 'Strategy',
    role: 'Digital Transformation Lead',
    responsibilities: [
      'Define digital strategy',
      'Design digital channels',
      'Build digital capability',
      'Drive culture change',
      'Transform operations',
      'Measure digital maturity'
    ],
    keyOutputs: ['Digital strategy', 'Channel designs', 'Capability roadmaps', 'Transformation plans'],
    inputs: ['Business goals', 'Digital trends', 'Customer data', 'Capability assessments'],
    frameworks: ['Digital Transformation', 'Digital Strategy', 'Digital Channels', 'Digital Tools & Platforms', 'Maturity Models']
  },
  {
    id: 'cxt',
    name: 'Customer Experience Transformation',
    category: 'Enterprise',
    type: 'Strategy',
    role: 'Customer Experience Director',
    responsibilities: [
      'Map customer journeys',
      'Design omnichannel',
      'Define CX metrics',
      'Manage voice of customer',
      'Drive innovation',
      'Transform processes'
    ],
    keyOutputs: ['Journey maps', 'Experience designs', 'CX metrics', 'Transformation plans'],
    inputs: ['Customer data', 'Journey research', 'Feedback', 'Process information'],
    frameworks: ['Customer Journey Mapping', 'Omnichannel Design', 'Voice of Customer', 'CX Analytics', 'Process Transformation']
  },

  // Technical Architecture (41)
  {
    id: 'api-arch',
    name: 'API Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'API Architect',
    responsibilities: ['Design API strategy', 'Define standards', 'Manage versioning', 'Ensure security', 'Optimize performance'],
    keyOutputs: ['API standards', 'Architecture documentation', 'API guidelines'],
    inputs: ['Service requirements', 'API standards', 'Security policies', 'Performance targets'],
    frameworks: ['RESTful Design', 'OpenAPI', 'GraphQL', 'API Security', 'API Versioning']
  },
  {
    id: 'data-arch',
    name: 'Data Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Data Architect',
    responsibilities: ['Design data platforms', 'Define data models', 'Ensure governance', 'Manage quality'],
    keyOutputs: ['Data architecture', 'Data models', 'Governance policies'],
    inputs: ['Data requirements', 'Source systems', 'Data volumes', 'Quality standards'],
    frameworks: ['Data Modeling', 'Data Warehousing', 'Data Lakes', 'Data Governance', 'Data Quality Frameworks']
  },
  {
    id: 'int-arch',
    name: 'Integration Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Integration Architect',
    responsibilities: ['Design integration patterns', 'Manage protocols', 'Ensure interoperability'],
    keyOutputs: ['Integration designs', 'Pattern library', 'Technical guidelines'],
    inputs: ['System requirements', 'Integration needs', 'Protocol requirements', 'Performance criteria'],
    frameworks: ['Integration Patterns', 'ESB', 'API Integration', 'Middleware', 'Event-Driven Architecture']
  },
  {
    id: 'ms-arch',
    name: 'Microservices Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Microservices Architect',
    responsibilities: ['Design microservices', 'Define boundaries', 'Manage communication'],
    keyOutputs: ['Microservices designs', 'Service specifications'],
    inputs: ['Business capabilities', 'Service requirements', 'Scalability needs', 'Communication patterns'],
    frameworks: ['Microservices Pattern', 'Service Mesh', 'Container Orchestration', 'Domain-Driven Design', 'API Contracts']
  },
  {
    id: 'eda-arch',
    name: 'Event-Driven Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Event Architecture Specialist',
    responsibilities: ['Design event flows', 'Manage event brokers', 'Ensure consistency'],
    keyOutputs: ['Event architectures', 'Event specifications'],
    inputs: ['Event requirements', 'Message patterns', 'Scalability needs', 'Consistency requirements'],
    frameworks: ['Event-Driven Architecture', 'Message Queues', 'Event Streaming', 'CQRS', 'Event Sourcing']
  },
  {
    id: 'cont-arch',
    name: 'Container Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Container Architect',
    responsibilities: ['Design containerization', 'Manage orchestration', 'Optimize resources'],
    keyOutputs: ['Container strategies', 'Orchestration designs'],
    inputs: ['Application requirements', 'Deployment needs', 'Resource constraints', 'Scaling requirements'],
    frameworks: ['Docker', 'Kubernetes', 'Container Security', 'Image Registry', 'Container Orchestration']
  },
  {
    id: 'sl-arch',
    name: 'Serverless Architecture',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Serverless Architect',
    responsibilities: ['Design serverless', 'Optimize costs', 'Ensure scalability'],
    keyOutputs: ['Serverless designs', 'Cost models'],
    inputs: ['Workload requirements', 'Cost constraints', 'Scalability needs', 'Integration points'],
    frameworks: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Frameworks', 'Cost Optimization']
  },
  {
    id: 'search',
    name: 'Enterprise Search & Discovery',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Search Architecture Lead',
    responsibilities: ['Design search', 'Manage indexing', 'Optimize discovery'],
    keyOutputs: ['Search architectures', 'Index strategies'],
    inputs: ['Content sources', 'Search requirements', 'Performance targets', 'Scalability needs'],
    frameworks: ['Elasticsearch', 'Solr', 'Search Algorithms', 'Information Retrieval', 'Indexing Strategies']
  },
  {
    id: 'cloud',
    name: 'Cloud Architecture & Strategy',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Cloud Architect',
    responsibilities: ['Design cloud strategy', 'Select providers', 'Manage migrations'],
    keyOutputs: ['Cloud strategies', 'Migration plans', 'Cost optimizations'],
    inputs: ['Application requirements', 'Infrastructure needs', 'Cost budgets', 'Migration scope'],
    frameworks: ['AWS', 'Azure', 'Google Cloud', 'Cloud Patterns', 'Multi-cloud Strategy']
  },
  {
    id: 'infra',
    name: 'Infrastructure & Platform Engineering',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Infrastructure Architect',
    responsibilities: ['Design infrastructure', 'Manage platforms', 'Ensure scalability'],
    keyOutputs: ['Infrastructure designs', 'Platform specifications'],
    inputs: ['Application requirements', 'Performance needs', 'Availability goals', 'Compliance requirements'],
    frameworks: ['Infrastructure as Code', 'Terraform', 'CloudFormation', 'Ansible', 'Puppet']
  },
  {
    id: 'net-sec',
    name: 'Network & Security Infrastructure',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Network Security Architect',
    responsibilities: ['Design networks', 'Manage security', 'Ensure compliance'],
    keyOutputs: ['Network designs', 'Security architectures'],
    inputs: ['Network requirements', 'Security policies', 'Compliance standards', 'Threat models'],
    frameworks: ['Network Security', 'Zero Trust', 'Firewalls', 'VPNs', 'Network Segmentation']
  },
  {
    id: 'dr',
    name: 'Disaster Recovery & BC',
    category: 'Enterprise',
    type: 'Technical',
    role: 'DR/BC Manager',
    responsibilities: ['Design DR', 'Plan recovery', 'Test continuity'],
    keyOutputs: ['DR plans', 'BC strategies', 'Recovery procedures'],
    inputs: ['RTO/RPO requirements', 'Business criticality', 'Infrastructure inventory', 'Backup systems'],
    frameworks: ['Disaster Recovery', 'Business Continuity', 'Backup & Restore', 'Failover Mechanisms', 'DR Testing']
  },
  {
    id: 'finops',
    name: 'Cost Optimization & FinOps',
    category: 'Enterprise',
    type: 'Technical',
    role: 'FinOps Manager',
    responsibilities: ['Optimize costs', 'Manage budgets', 'Track spending'],
    keyOutputs: ['Cost analyses', 'Budget allocations', 'Savings reports'],
    inputs: ['Cloud spending data', 'Budget targets', 'Cost drivers', 'Optimization opportunities'],
    frameworks: ['FinOps', 'Cost Allocation', 'Budget Management', 'Cost Optimization', 'Chargeback Models']
  },
  {
    id: 'data-strat',
    name: 'Data Strategy & Governance',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Data Strategist',
    responsibilities: ['Define data strategy', 'Manage governance', 'Ensure compliance'],
    keyOutputs: ['Data strategies', 'Governance policies', 'Compliance reports'],
    inputs: ['Data assets', 'Business needs', 'Regulatory requirements', 'Data maturity'],
    frameworks: ['Data Governance', 'Data Stewardship', 'Data Quality', 'Data Privacy', 'Data Compliance']
  },
  {
    id: 'analytics',
    name: 'Analytics & BI',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Analytics Lead',
    responsibilities: ['Design analytics', 'Build dashboards', 'Generate insights'],
    keyOutputs: ['Analytics designs', 'Dashboards', 'Business insights'],
    inputs: ['Data sources', 'Business questions', 'Metrics requirements', 'User needs'],
    frameworks: ['Tableau', 'Power BI', 'Looker', 'Analytics Tools', 'Data Visualization']
  },
  {
    id: 'ml-ai',
    name: 'Machine Learning & AI',
    category: 'Enterprise',
    type: 'Technical',
    role: 'AI/ML Architect',
    responsibilities: ['Design ML/AI', 'Manage models', 'Ensure ethics'],
    keyOutputs: ['ML/AI strategies', 'Model designs', 'Ethics frameworks'],
    inputs: ['Use cases', 'Training data', 'Performance targets', 'Ethical guidelines'],
    frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'ML Platforms', 'MLOps']
  },
  {
    id: 'data-eng',
    name: 'Data Engineering & Pipelines',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Data Engineer',
    responsibilities: ['Design pipelines', 'Build ETL', 'Ensure quality'],
    keyOutputs: ['Pipeline designs', 'ETL specifications', 'Quality metrics'],
    inputs: ['Source systems', 'Target requirements', 'Data volumes', 'Quality standards'],
    frameworks: ['Apache Airflow', 'Spark', 'Kafka', 'ETL Tools', 'Data Pipeline Frameworks']
  },
  {
    id: 'kg',
    name: 'Knowledge Graph & Semantics',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Knowledge Graph Specialist',
    responsibilities: ['Design knowledge graphs', 'Define semantics', 'Manage ontologies'],
    keyOutputs: ['Graph designs', 'Ontology specifications'],
    inputs: ['Domain knowledge', 'Semantic requirements', 'Relationship data', 'Classification schemes'],
    frameworks: ['RDF', 'OWL', 'Neo4j', 'Graph Databases', 'Semantic Web Technologies']
  },
  {
    id: 'bigdata',
    name: 'Big Data & Streaming',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Big Data Architect',
    responsibilities: ['Design big data', 'Manage streaming', 'Optimize performance'],
    keyOutputs: ['Big data designs', 'Streaming architectures'],
    inputs: ['Data volume requirements', 'Streaming needs', 'Performance targets', 'Latency requirements'],
    frameworks: ['Hadoop', 'Spark', 'Kafka', 'Flink', 'Big Data Platforms']
  },
  {
    id: 'dq',
    name: 'Data Quality & Master Data',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Data Quality Manager',
    responsibilities: ['Define quality', 'Manage master data', 'Ensure consistency'],
    keyOutputs: ['Quality standards', 'MDM designs', 'Quality reports'],
    inputs: ['Data sources', 'Quality requirements', 'Master data', 'Quality metrics'],
    frameworks: ['Data Quality Tools', 'Master Data Management', 'Data Profiling', 'Data Cleansing', 'Quality Frameworks']
  },
  {
    id: 'privacy',
    name: 'Privacy & Data Protection',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Privacy Officer',
    responsibilities: ['Ensure privacy', 'Manage compliance', 'Protect data'],
    keyOutputs: ['Privacy policies', 'Compliance reports', 'Protection strategies'],
    inputs: ['Regulatory requirements', 'Data inventory', 'Privacy assessments', 'Security controls'],
    frameworks: ['GDPR', 'CCPA', 'Privacy Frameworks', 'Data Protection', 'Privacy by Design']
  },
  {
    id: 'ai-ethics',
    name: 'AI Ethics & Governance',
    category: 'Enterprise',
    type: 'Technical',
    role: 'AI Ethics Lead',
    responsibilities: ['Define AI ethics', 'Manage governance', 'Ensure fairness'],
    keyOutputs: ['Ethics frameworks', 'Governance policies', 'Fairness reports'],
    inputs: ['AI systems', 'Ethical guidelines', 'Bias assessments', 'Stakeholder feedback'],
    frameworks: ['AI Ethics Frameworks', 'Fairness Metrics', 'Responsible AI', 'Governance Models', 'Bias Detection']
  },
  {
    id: 'obs',
    name: 'Observability & Monitoring',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Observability Engineer',
    responsibilities: ['Design observability', 'Manage monitoring', 'Create dashboards'],
    keyOutputs: ['Observability strategies', 'Monitoring designs', 'Dashboards'],
    inputs: ['Application metrics', 'System logs', 'User behavior data', 'Performance targets'],
    frameworks: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Observability Platforms']
  },
  {
    id: 'sre',
    name: 'Site Reliability Engineering',
    category: 'Enterprise',
    type: 'Technical',
    role: 'SRE Lead',
    responsibilities: ['Define SLOs', 'Manage reliability', 'Optimize systems'],
    keyOutputs: ['SLO definitions', 'Reliability reports', 'Optimization plans'],
    inputs: ['Service requirements', 'Performance data', 'Incident history', 'Optimization opportunities'],
    frameworks: ['SLO/SLI/SLA Framework', 'Error Budgets', 'Toil Reduction', 'Reliability Engineering', 'Incident Management']
  },
  {
    id: 'devops',
    name: 'DevOps & Continuous Delivery',
    category: 'Enterprise',
    type: 'Technical',
    role: 'DevOps Lead',
    responsibilities: ['Design DevOps', 'Manage pipelines', 'Enable delivery'],
    keyOutputs: ['DevOps strategies', 'Pipeline designs', 'Delivery metrics'],
    inputs: ['Development requirements', 'Deployment needs', 'Infrastructure specs', 'Quality gates'],
    frameworks: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Deployment Automation', 'DevOps Tools']
  },
  {
    id: 'logs',
    name: 'Log Analytics & Troubleshooting',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Log Analytics Specialist',
    responsibilities: ['Design logging', 'Analyze logs', 'Troubleshoot issues'],
    keyOutputs: ['Logging strategies', 'Analysis tools', 'Troubleshooting guides'],
    inputs: ['Application logs', 'System logs', 'Error messages', 'Performance data'],
    frameworks: ['ELK Stack', 'Splunk', 'Log Analysis Tools', 'Pattern Recognition', 'Troubleshooting Methodologies']
  },
  {
    id: 'perf-opt',
    name: 'Performance & Optimization',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Performance Engineer',
    responsibilities: ['Optimize performance', 'Manage resources', 'Measure metrics'],
    keyOutputs: ['Optimization strategies', 'Performance reports', 'Resource allocation'],
    inputs: ['Performance baselines', 'Resource data', 'Bottleneck analysis', 'User load data'],
    frameworks: ['Performance Testing', 'Profiling Tools', 'Load Testing', 'Caching Strategies', 'Database Optimization']
  },
  {
    id: 'incident',
    name: 'Incident & Problem Management',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Incident Manager',
    responsibilities: ['Manage incidents', 'Analyze problems', 'Prevent recurrence'],
    keyOutputs: ['Incident reports', 'Problem analysis', 'Prevention plans'],
    inputs: ['Incident alerts', 'Problem reports', 'Historical data', 'Root cause analysis'],
    frameworks: ['ITIL Incident Management', 'Problem Management', 'Incident Response', 'RCA Tools', 'Escalation Procedures']
  },
  {
    id: 'arch-gov',
    name: 'Architecture Governance',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Architecture Governance Lead',
    responsibilities: ['Enforce standards', 'Manage compliance', 'Review decisions'],
    keyOutputs: ['Governance policies', 'Compliance reports', 'Architecture reviews'],
    inputs: ['Architecture decisions', 'Standards', 'Compliance requirements', 'Design reviews'],
    frameworks: ['Architecture Governance', 'Decision Records', 'Compliance Frameworks', 'Architecture Reviews', 'Standards Enforcement']
  },
  {
    id: 'sec-arch',
    name: 'Security Architecture & DevSecOps',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Security Architect',
    responsibilities: ['Design security', 'Manage threats', 'Ensure compliance'],
    keyOutputs: ['Security architectures', 'Threat models', 'Security policies'],
    inputs: ['Security requirements', 'Threat assessments', 'Compliance standards', 'Security controls'],
    frameworks: ['Security Architecture', 'Threat Modeling', 'DevSecOps', 'Security Controls', 'Zero Trust Architecture']
  },
  {
    id: 'compliance',
    name: 'Regulatory Compliance & Risk',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Compliance Officer',
    responsibilities: ['Ensure compliance', 'Manage risks', 'Monitor regulations'],
    keyOutputs: ['Compliance reports', 'Risk assessments', 'Regulatory tracking'],
    inputs: ['Regulatory requirements', 'Control implementations', 'Risk data', 'Audit findings'],
    frameworks: ['Compliance Frameworks', 'Risk Management', 'Regulatory Monitoring', 'Audit Processes', 'Control Implementation']
  },
  {
    id: 'audit',
    name: 'Audit & Assurance',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Audit Lead',
    responsibilities: ['Conduct audits', 'Assure quality', 'Track findings'],
    keyOutputs: ['Audit reports', 'Assurance findings', 'Remediation tracking'],
    inputs: ['Audit scope', 'Control documentation', 'Test results', 'Risk data'],
    frameworks: ['Audit Frameworks', 'Assurance Methodologies', 'SOX', 'COSO', 'Internal Audit']
  },
  {
    id: 'itsm',
    name: 'IT Service Management',
    category: 'Enterprise',
    type: 'Technical',
    role: 'ITSM Manager',
    responsibilities: ['Manage services', 'Define processes', 'Ensure quality'],
    keyOutputs: ['Service catalogs', 'ITSM processes', 'SLA agreements'],
    inputs: ['Service requirements', 'User needs', 'Process documentation', 'Performance data'],
    frameworks: ['ITIL', 'IT Service Management', 'Service Desk Tools', 'Incident Management', 'Change Management']
  },
  {
    id: 'cjx',
    name: 'Customer Journey & Experience',
    category: 'Enterprise',
    type: 'Technical',
    role: 'CX Designer',
    responsibilities: ['Map journeys', 'Design experiences', 'Measure satisfaction'],
    keyOutputs: ['Journey maps', 'Experience designs', 'Satisfaction metrics'],
    inputs: ['Customer research', 'Touchpoint data', 'Feedback', 'Behavioral data'],
    frameworks: ['Customer Journey Mapping', 'Experience Design', 'Customer Analytics', 'NPS/CSAT', 'Experience Metrics']
  },
  {
    id: 'ux',
    name: 'User Experience & Design',
    category: 'Enterprise',
    type: 'Technical',
    role: 'UX Designer',
    responsibilities: ['Design interfaces', 'Conduct research', 'Test usability'],
    keyOutputs: ['Design specs', 'Research reports', 'Usability tests'],
    inputs: ['User research', 'Design requirements', 'Accessibility guidelines', 'Brand guidelines'],
    frameworks: ['Figma', 'Adobe XD', 'Sketch', 'Usability Testing', 'Design Systems']
  },
  {
    id: 'a11y',
    name: 'Accessibility & Inclusive Design',
    category: 'Enterprise',
    type: 'Technical',
    role: 'Accessibility Specialist',
    responsibilities: ['Ensure accessibility', 'Test compliance', 'Educate teams'],
    keyOutputs: ['Accessibility reports', 'Compliance documentation', 'Training materials'],
    inputs: ['Design specifications', 'Code implementations', 'Accessibility standards', 'User feedback'],
    frameworks: ['WCAG Standards', 'Section 508', 'Accessibility Testing Tools', 'Inclusive Design', 'A11y Frameworks']
  },
  {
    id: 'eai',
    name: 'Enterprise Application Integration',
    category: 'Enterprise',
    type: 'Technical',
    role: 'EAI Architect',
    responsibilities: ['Design EAI', 'Manage integrations', 'Ensure interoperability'],
    keyOutputs: ['EAI designs', 'Integration specs', 'Interoperability reports'],
    inputs: ['Application requirements', 'System inventory', 'Integration patterns', 'Protocol requirements'],
    frameworks: ['Enterprise Integration Patterns', 'ESB', 'Middleware', 'API Integration', 'Message Queuing']
  },
  {
    id: 'api-mgmt',
    name: 'API Management & Marketplace',
    category: 'Enterprise',
    type: 'Technical',
    role: 'API Manager',
    responsibilities: ['Manage API lifecycle', 'Create marketplace', 'Monitor usage'],
    keyOutputs: ['API catalogs', 'Marketplace designs', 'Usage reports'],
    inputs: ['API inventory', 'API usage data', 'Developer needs', 'Business goals'],
    frameworks: ['API Management Platforms', 'API Gateway', 'API Marketplace', 'Developer Portal', 'API Analytics']
  },
  {
    id: 'edi',
    name: 'EDI & B2B Integration',
    category: 'Enterprise',
    type: 'Technical',
    role: 'EDI Specialist',
    responsibilities: ['Design EDI', 'Manage B2B', 'Ensure accuracy'],
    keyOutputs: ['EDI designs', 'B2B specifications', 'Accuracy reports'],
    inputs: ['Trading partner requirements', 'Transaction data', 'Compliance requirements', 'Message formats'],
    frameworks: ['EDI Standards', 'X12', 'EDIFACT', 'B2B Integration', 'Trading Partner Management']
  },
  {
    id: 'mdm',
    name: 'Master Data Management',
    category: 'Enterprise',
    type: 'Technical',
    role: 'MDM Lead',
    responsibilities: ['Manage master data', 'Ensure quality', 'Govern data'],
    keyOutputs: ['MDM strategies', 'Data governance', 'Quality metrics'],
    inputs: ['Data sources', 'Master data inventory', 'Quality requirements', 'Governance policies'],
    frameworks: ['MDM Platforms', 'Data Governance', 'Data Quality', 'Master Data Registry', 'Data Stewardship']
  },
];
