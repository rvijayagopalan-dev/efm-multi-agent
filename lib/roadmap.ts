// Enterprise Autonomous OS - Complete Implementation Roadmap

export interface RoadmapEstimate {
  scope: string;
  duration: string;
  cost: string;
  teamSize: string;
  engineers: number;
  budget: string;
  breakEven: string;
  annualSavings: string;
}

export interface Phase {
  id: string;
  number: number;
  name: string;
  title: string;
  months: string;
  duration: number;
  autonomyStart: string;
  autonomyEnd: string;
  agents: PhaseAgent[];
  quickWins: string[];
  successCriteria: string[];
  deliverables: string[];
  estimate: RoadmapEstimate;
  risks: string[];
  milestones: string[];
}

export interface PhaseAgent {
  id: string;
  name: string;
  category: 'SDLC' | 'TOGAF' | 'Enterprise';
  autonomyLevel: string;
}

export interface MaturityLevel {
  level: number;
  name: string;
  description: string;
  characteristics: string[];
  timeToReach: string;
  keyMetrics: string[];
}

export interface AnnualMetrics {
  year: number;
  cycleTime: string;
  quality: string;
  cost: string;
  compliance: string;
  teamSize: number;
  roi: string;
}

export const ENTERPRISE_OS_ROADMAP: Phase[] = [
  {
    id: 'phase-1',
    number: 1,
    name: 'FOUNDATION',
    title: 'Requirements Planning & Design Automation',
    months: 'Months 1-2',
    duration: 2,
    autonomyStart: 'L1 (Information)',
    autonomyEnd: 'L2 (Assistance)',
    agents: [
      { id: 'product-requirements-vision', name: 'Product Requirements & Vision', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'market-competitive-requirements', name: 'Market & Competitive Requirements', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'technical-requirements-architecture', name: 'Technical Requirements & Architecture', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'release-planning-roadmap', name: 'Release Planning & Roadmap', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'solution-system-design', name: 'Solution & System Design', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'database-data-design', name: 'Database & Data Model Design', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'api-integration-design', name: 'API & Integration Design', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'ux-interface-design', name: 'UX & Interface Design', category: 'SDLC', autonomyLevel: 'L3' },
    ],
    quickWins: [
      'Requirements clarity improves 25%',
      'Design cycle reduced by 30%',
      'Stakeholder alignment increases 20%',
      'Time-to-requirements drops from 1 week to 2 days',
    ],
    successCriteria: [
      'All 8 agents operational',
      'Requirements clarity > 95%',
      'Design review approval 100%',
      'Stakeholder alignment > 90%',
      'Time-to-requirements < 48 hours',
    ],
    deliverables: [
      'Agent deployment pipeline',
      'Requirements generation workflow',
      'Design automation templates',
      'Governance framework (draft)',
      'Success metrics dashboard',
    ],
    estimate: {
      scope: '8 SDLC agents (Requirements + Design)',
      duration: '2 months',
      cost: '$1.2M',
      teamSize: '3-4 engineers',
      engineers: 4,
      budget: '$1.2M',
      breakEven: '6-8 months',
      annualSavings: '$2-3M',
    },
    risks: [
      'Integration complexity with existing systems',
      'Team ramp-up time for agent development',
      'Stakeholder change management',
    ],
    milestones: [
      'Week 1: Architecture & design kickoff',
      'Week 2: First agent prototypes',
      'Week 3: Integration testing begins',
      'Week 4: Phase 1 agents go live',
      'Week 5-8: Refinement & optimization',
    ],
  },
  {
    id: 'phase-2',
    number: 2,
    name: 'DEVELOPMENT',
    title: 'Development & Testing Automation',
    months: 'Months 3-4',
    duration: 2,
    autonomyStart: 'L2 (Assistance)',
    autonomyEnd: 'L3 (Supervised)',
    agents: [
      { id: 'code-development-implementation', name: 'Code Development & Implementation', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'database-implementation-migration', name: 'Database Implementation & Migration', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'api-service-implementation', name: 'API & Service Implementation', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'frontend-ui-implementation', name: 'Frontend & UI Implementation', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'technical-documentation', name: 'Technical Documentation', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'test-planning-strategy', name: 'Test Planning & Strategy', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'automated-testing-ci', name: 'Automated Testing & CI Pipeline', category: 'SDLC', autonomyLevel: 'L4' },
    ],
    quickWins: [
      'Build time reduced 30%',
      'Test automation coverage jumps to 75%+',
      'Code quality improves 25%',
      'Development cycle reduced by 40%',
    ],
    successCriteria: [
      'All development agents operational',
      'Build success rate > 99%',
      'Unit test coverage > 80%',
      'Code quality score > 4/5',
      'Development cycle time < 2 weeks',
    ],
    deliverables: [
      'Development pipeline automation',
      'Test automation framework',
      'CI/CD pipeline configuration',
      'Code quality gates',
      'Documentation automation',
    ],
    estimate: {
      scope: '7 SDLC agents (Development + Basic Testing)',
      duration: '2 months',
      cost: '$1.4M',
      teamSize: '5-6 engineers',
      engineers: 6,
      budget: '$1.4M',
      breakEven: '4-6 months',
      annualSavings: '$3-4M',
    },
    risks: [
      'CI/CD pipeline complexity',
      'Test automation framework selection',
      'Legacy system integration challenges',
    ],
    milestones: [
      'Week 9: Development agents architecture',
      'Week 10: Test automation framework setup',
      'Week 11: CI/CD pipeline implementation',
      'Week 12: Phase 2 agents go live',
      'Week 13-16: Optimization & refinement',
    ],
  },
  {
    id: 'phase-3',
    number: 3,
    name: 'QUALITY',
    title: 'Comprehensive QA & Testing Automation',
    months: 'Months 5-6',
    duration: 2,
    autonomyStart: 'L3 (Supervised)',
    autonomyEnd: 'L4 (Guided)',
    agents: [
      { id: 'manual-functional-testing', name: 'Manual & Functional Testing', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'performance-load-testing', name: 'Performance & Load Testing', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'security-testing-vulnerability', name: 'Security Testing & Vulnerability', category: 'SDLC', autonomyLevel: 'L4' },
    ],
    quickWins: [
      'Defect escape rate reduced 50%',
      'Test automation coverage reaches 85%+',
      'Performance bottlenecks identified automatically',
      'Security vulnerabilities caught pre-release',
    ],
    successCriteria: [
      'All QA agents operational (5 total)',
      'Test coverage > 85%',
      'Defect escape rate < 2%',
      'Security tests 100% automated',
      'QA cycle time < 3 days',
    ],
    deliverables: [
      'Manual testing agent framework',
      'Performance testing infrastructure',
      'Security scanning integration',
      'QA metrics dashboard',
      'Test coverage reports',
    ],
    estimate: {
      scope: '3 additional QA agents (5 total QA)',
      duration: '2 months',
      cost: '$1.1M',
      teamSize: '4-5 engineers',
      engineers: 5,
      budget: '$1.1M',
      breakEven: '3-4 months',
      annualSavings: '$4-5M',
    },
    risks: [
      'Performance testing infrastructure setup',
      'Security scanning tool selection',
      'Test environment management',
    ],
    milestones: [
      'Week 17: QA agent architecture design',
      'Week 18: Performance testing framework',
      'Week 19: Security scanning setup',
      'Week 20: Phase 3 agents go live',
      'Week 21-24: Optimization & refinement',
    ],
  },
  {
    id: 'phase-4',
    number: 4,
    name: 'DEPLOYMENT',
    title: 'Release & Deployment Automation',
    months: 'Months 7-8',
    duration: 2,
    autonomyStart: 'L3 (Supervised)',
    autonomyEnd: 'L4 (Guided)',
    agents: [
      { id: 'release-management-planning', name: 'Release Management & Deployment Planning', category: 'SDLC', autonomyLevel: 'L3' },
      { id: 'infrastructure-environment-management', name: 'Infrastructure & Environment Management', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'continuous-deployment-pipeline', name: 'Continuous Deployment & Pipeline', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'release-validation-signoff', name: 'Release Validation & Sign-Off', category: 'SDLC', autonomyLevel: 'L3' },
    ],
    quickWins: [
      'Deployment time reduced 75% (2 weeks → 1 hour)',
      'Deployment success rate jumps to 99.5%+',
      'Rollback incidents drop to < 1%',
      'Infrastructure provisioning automated',
    ],
    successCriteria: [
      'All deployment agents operational',
      'Deployment success rate > 99.5%',
      'Rollback incidents < 1%',
      'Release validation 100%',
      'Deployment time < 1 hour',
    ],
    deliverables: [
      'Release management workflow',
      'Infrastructure-as-Code pipeline',
      'Deployment automation framework',
      'Blue-green deployment setup',
      'Release validation dashboard',
    ],
    estimate: {
      scope: '4 Deployment agents + infrastructure',
      duration: '2 months',
      cost: '$1.2M',
      teamSize: '3-4 engineers',
      engineers: 4,
      budget: '$1.2M',
      breakEven: '2-3 months',
      annualSavings: '$5-7M',
    },
    risks: [
      'Infrastructure automation complexity',
      'Deployment strategy (blue-green vs canary)',
      'Rollback procedure reliability',
    ],
    milestones: [
      'Week 25: Deployment agents architecture',
      'Week 26: IaC pipeline setup',
      'Week 27: Deployment automation',
      'Week 28: Phase 4 agents go live',
      'Week 29-32: Optimization & refinement',
    ],
  },
  {
    id: 'phase-5',
    number: 5,
    name: 'OPERATIONS',
    title: 'Production Operations & Self-Healing',
    months: 'Months 9-10',
    duration: 2,
    autonomyStart: 'L4 (Guided)',
    autonomyEnd: 'L5 (High Autonomy)',
    agents: [
      { id: 'production-monitoring-observability', name: 'Production Monitoring & Observability', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'incident-response-troubleshooting', name: 'Incident Response & Troubleshooting', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'production-support-maintenance', name: 'Production Support & Maintenance', category: 'SDLC', autonomyLevel: 'L3' },
    ],
    quickWins: [
      'MTTR reduced 75% (2-4 hours → 30 minutes)',
      'Incident detection < 1 minute',
      'System availability reaches 99.9%+',
      'Automated incident response activated',
    ],
    successCriteria: [
      'All operations agents operational',
      'System availability > 99.9%',
      'Incident MTTR < 30 minutes',
      'Support SLA compliance > 99%',
      'Incident detection < 1 minute',
    ],
    deliverables: [
      'Production monitoring setup',
      'Incident response automation',
      'Support ticket automation',
      'Observability dashboards',
      'Runbook automation',
    ],
    estimate: {
      scope: '3 Operations agents + monitoring stack',
      duration: '2 months',
      cost: '$0.9M',
      teamSize: '2-3 engineers',
      engineers: 3,
      budget: '$0.9M',
      breakEven: '1-2 months',
      annualSavings: '$7-10M',
    },
    risks: [
      'Monitoring tool complexity',
      'Incident response automation edge cases',
      'Alert fatigue and tuning',
    ],
    milestones: [
      'Week 33: Operations agents architecture',
      'Week 34: Monitoring stack deployment',
      'Week 35: Incident response automation',
      'Week 36: Phase 5 agents go live',
      'Week 37-40: Optimization & refinement',
    ],
  },
  {
    id: 'phase-6',
    number: 6,
    name: 'GOVERNANCE',
    title: 'SDLC Framework Governance & Metrics',
    months: 'Months 11-12',
    duration: 2,
    autonomyStart: 'L4 (Guided)',
    autonomyEnd: 'L5 (High Autonomy)',
    agents: [
      { id: 'agile-scrum-governance', name: 'Agile/Scrum Governance', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'safe-scaled-agile-governance', name: 'SAFe & Scaled Agile Governance', category: 'SDLC', autonomyLevel: 'L4' },
      { id: 'ci-cd-governance', name: 'CI/CD Governance', category: 'SDLC', autonomyLevel: 'L4' },
    ],
    quickWins: [
      'Framework compliance reaches 95%+',
      'Metrics dashboard live and automated',
      'Governance decisions automated',
      'Process adherence tracked automatically',
    ],
    successCriteria: [
      'All 28 SDLC agents operational',
      'Framework compliance > 95%',
      'Metrics tracked 100%',
      'Full end-to-end SDLC autonomy',
      'All governance gates automated',
    ],
    deliverables: [
      'Governance framework (Agile/SAFe/CI-CD)',
      'Metrics dashboard',
      'Compliance tracking system',
      'Process enforcement automation',
      'SDLC excellence center',
    ],
    estimate: {
      scope: '3 Governance agents + all SDLC integration',
      duration: '2 months',
      cost: '$0.8M',
      teamSize: '2-3 engineers + 1 process expert',
      engineers: 4,
      budget: '$0.8M',
      breakEven: '1 month',
      annualSavings: '$8-12M',
    },
    risks: [
      'Framework customization complexity',
      'Metrics definition and tracking',
      'Governance overhead',
    ],
    milestones: [
      'Week 41: Governance agents architecture',
      'Week 42: Framework integration',
      'Week 43: Metrics dashboard setup',
      'Week 44: Phase 6 agents go live',
      'Week 45-48: Optimization & refinement',
    ],
  },
  {
    id: 'phase-7',
    number: 7,
    name: 'TOGAF FOUNDATION',
    title: 'Enterprise Architecture - TOGAF ADM Vision & Governance',
    months: 'Months 1-3 (parallel with SDLC Phase 1)',
    duration: 3,
    autonomyStart: 'L1 (Information)',
    autonomyEnd: 'L3 (Supervised)',
    agents: [
      { id: 'togaf-architecture-vision', name: 'Architecture Vision', category: 'TOGAF', autonomyLevel: 'L3' },
      { id: 'togaf-governance-board', name: 'Architecture Governance Board', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-repository-manager', name: 'Architecture Repository Manager', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-standards-governance', name: 'Architecture Standards Governance', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-communication-alignment', name: 'Architecture Communication & Alignment', category: 'TOGAF', autonomyLevel: 'L3' },
    ],
    quickWins: [
      'Architecture vision defined & approved',
      'Governance board established',
      'Repository framework in place',
      'Stakeholder alignment > 90%',
    ],
    successCriteria: [
      'Architecture vision approved by stakeholders',
      'Governance board operational',
      'Repository populated with 100+ assets',
      'Standards documented and approved',
      'Stakeholder alignment > 90%',
    ],
    deliverables: [
      'Architecture Vision Statement',
      'Architecture Governance Charter',
      'Architecture Repository Framework',
      'Standards Information Base',
      'Stakeholder Communication Plan',
    ],
    estimate: {
      scope: '5 TOGAF foundation agents',
      duration: '3 months',
      cost: '$0.8M',
      teamSize: '2-3 architects',
      engineers: 3,
      budget: '$0.8M',
      breakEven: '6 months',
      annualSavings: '$2-3M',
    },
    risks: [
      'Executive stakeholder alignment',
      'Governance overhead concerns',
      'Repository tool selection',
    ],
    milestones: [
      'Week 1: TOGAF kickoff',
      'Week 2-3: Architecture Vision development',
      'Week 4: Governance board establishment',
      'Week 5-6: Repository setup',
      'Week 7-12: Standards development & communication',
    ],
  },
  {
    id: 'phase-8',
    number: 8,
    name: 'TOGAF CORE ARCHITECTURE',
    title: 'TOGAF ADM - Business, Data, Application, Technology',
    months: 'Months 4-9 (with SDLC Phases 2-5)',
    duration: 6,
    autonomyStart: 'L2 (Assistance)',
    autonomyEnd: 'L4 (Guided)',
    agents: [
      { id: 'togaf-business-architecture', name: 'Business Architecture', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-data-architecture', name: 'Data Architecture', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-application-architecture', name: 'Application Architecture', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-technology-architecture', name: 'Technology Architecture', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-risk-compliance', name: 'Architecture Risk & Compliance', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-capability-maturity', name: 'Architecture Capability & Maturity', category: 'TOGAF', autonomyLevel: 'L3' },
    ],
    quickWins: [
      'Business capability map created',
      'Data architecture designed',
      'Application portfolio rationalized',
      'Technology standards defined',
      'Architecture compliance framework operational',
    ],
    successCriteria: [
      'Business capability map completeness 100%',
      'Data architecture models complete',
      'Application coverage 100%',
      'Technology standards 100%',
      'Risk register maintained and updated',
      'Architecture compliance > 95%',
    ],
    deliverables: [
      'Business Capability Map',
      'Data Architecture Models',
      'Application Portfolio Analysis',
      'Technology Architecture & Roadmap',
      'Risk & Compliance Register',
      'Architecture Maturity Assessment',
    ],
    estimate: {
      scope: '6 TOGAF core architecture agents',
      duration: '6 months',
      cost: '$1.2M',
      teamSize: '4-5 architects',
      engineers: 5,
      budget: '$1.2M',
      breakEven: '4-6 months',
      annualSavings: '$3-5M',
    },
    risks: [
      'Architecture scope creep',
      'Stakeholder alignment on applications',
      'Technology standardization resistance',
    ],
    milestones: [
      'Week 13: Business architecture design',
      'Week 17: Data architecture design',
      'Week 21: Application architecture analysis',
      'Week 25: Technology architecture design',
      'Week 29: Risk & compliance framework',
      'Week 33: Maturity assessment & reporting',
    ],
  },
  {
    id: 'phase-9',
    number: 9,
    name: 'TOGAF PLANNING & IMPLEMENTATION',
    title: 'TOGAF ADM - Opportunities, Migration Planning, Governance',
    months: 'Months 10-12 (with SDLC Phases 6+)',
    duration: 3,
    autonomyStart: 'L3 (Supervised)',
    autonomyEnd: 'L4 (Guided)',
    agents: [
      { id: 'togaf-opportunities-solutions', name: 'Opportunities & Solutions', category: 'TOGAF', autonomyLevel: 'L3' },
      { id: 'togaf-migration-planning', name: 'Migration Planning', category: 'TOGAF', autonomyLevel: 'L3' },
      { id: 'togaf-implementation-governance', name: 'Implementation Governance', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-arch-change-management', name: 'Architecture Change Management', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-strategy-alignment', name: 'Strategy Alignment', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-operations-alignment', name: 'Operations Alignment', category: 'TOGAF', autonomyLevel: 'L4' },
      { id: 'togaf-portfolio-alignment', name: 'Portfolio Alignment', category: 'TOGAF', autonomyLevel: 'L4' },
    ],
    quickWins: [
      'Implementation roadmap defined',
      'Opportunities prioritized',
      'Migration plan documented',
      'Strategy-architecture alignment confirmed',
      'Full TOGAF ADM cycle complete',
    ],
    successCriteria: [
      'Solution identification > 90%',
      'Opportunity prioritization complete',
      'Migration plan 100% complete',
      'Cost-benefit analysis accuracy > 85%',
      'Strategy alignment > 90%',
      'Operations alignment > 95%',
      'Portfolio alignment > 85%',
    ],
    deliverables: [
      'Opportunity Assessment',
      'Solution Architecture Designs',
      'Implementation Roadmap',
      'Migration Plan',
      'Strategy-Architecture Alignment Report',
      'Operations Readiness Report',
      'Portfolio-Architecture Alignment Report',
    ],
    estimate: {
      scope: '7 TOGAF planning & integration agents',
      duration: '3 months',
      cost: '$0.9M',
      teamSize: '3-4 architects',
      engineers: 4,
      budget: '$0.9M',
      breakEven: '2-3 months',
      annualSavings: '$4-6M',
    },
    risks: [
      'Scope expansion in opportunities',
      'Migration complexity underestimation',
      'Cross-team alignment challenges',
    ],
    milestones: [
      'Week 37: Opportunities assessment',
      'Week 40: Migration planning',
      'Week 42: Implementation governance setup',
      'Week 44: Change management framework',
      'Week 45-48: Alignment verification & reporting',
    ],
  },
];

export const MATURITY_LEVELS: MaturityLevel[] = [
  {
    level: 0,
    name: 'INITIAL',
    description: 'Ad-hoc, manual processes. No formal automation.',
    characteristics: [
      'Manual SDLC and architecture decisions',
      'Limited documentation',
      'Inconsistent quality',
      'Reactive management',
      'No governance framework',
    ],
    timeToReach: 'Baseline',
    keyMetrics: [
      'Cycle time: 18-24 weeks',
      'Quality: 5-8% defect escape',
      'Compliance: 60%',
      'Availability: 99.5%',
    ],
  },
  {
    level: 1,
    name: 'REPEATABLE',
    description: 'Basic automation in place. Processes starting to standardize.',
    characteristics: [
      'Some agent automation (Phase 1-2)',
      'Basic documentation',
      'Improving quality metrics',
      'Manual oversight of automation',
      'Governance framework drafted',
    ],
    timeToReach: 'Months 1-4 (Phase 1-2)',
    keyMetrics: [
      'Cycle time: 12-16 weeks',
      'Quality: 3-5% defect escape',
      'Compliance: 75%',
      'Availability: 99.6%',
    ],
  },
  {
    level: 2,
    name: 'DEFINED',
    description: 'Comprehensive automation across all SDLC phases. TOGAF governance established.',
    characteristics: [
      'Full SDLC automation (6 phases)',
      'TOGAF vision & governance in place',
      'Comprehensive documentation',
      'Consistent quality',
      'Formal governance board operational',
    ],
    timeToReach: 'Months 1-8 (Phase 1-5 + TOGAF Phase 1-2)',
    keyMetrics: [
      'Cycle time: 8-12 weeks',
      'Quality: 1-2% defect escape',
      'Compliance: 90%',
      'Availability: 99.8%',
    ],
  },
  {
    level: 3,
    name: 'MANAGED',
    description: 'Metrics-driven optimization. Both SDLC and TOGAF fully operational.',
    characteristics: [
      'All 28 SDLC agents autonomous',
      'All 18 TOGAF agents deployed',
      'Metrics tracking & optimization',
      'Proactive compliance monitoring',
      'Architecture-driven portfolio management',
    ],
    timeToReach: 'Months 1-12 (All Phases)',
    keyMetrics: [
      'Cycle time: 8-10 weeks',
      'Quality: < 1% defect escape',
      'Compliance: 95%',
      'Availability: 99.9%',
    ],
  },
  {
    level: 4,
    name: 'OPTIMIZED',
    description: 'Continuous improvement and innovation. Self-organizing autonomous agents.',
    characteristics: [
      'Full autonomous orchestration (46 agents)',
      'Continuous optimization cycles',
      'Predictive risk management',
      'Architecture innovation',
      'Strategic human oversight only',
    ],
    timeToReach: 'Months 13-18+ (Post-implementation)',
    keyMetrics: [
      'Cycle time: 8-10 weeks (target)',
      'Quality: < 0.5% defect escape',
      'Compliance: 98%+',
      'Availability: 99.99%',
    ],
  },
];

export const ANNUAL_METRICS: AnnualMetrics[] = [
  {
    year: 0,
    cycleTime: '18-24 weeks',
    quality: '5-8% defect escape',
    cost: 'Baseline ($50M)',
    compliance: '60%',
    teamSize: 120,
    roi: 'Baseline (0%)',
  },
  {
    year: 1,
    cycleTime: '8-10 weeks (-55%)',
    quality: '< 1% defect escape (-95%)',
    cost: '-$12-15M (-25%)',
    compliance: '95% (+58%)',
    teamSize: 80,
    roi: '200-300% (breakeven achieved)',
  },
  {
    year: 2,
    cycleTime: '8 weeks (optimized)',
    quality: '< 0.5% defect escape (-99%)',
    cost: '-$18-22M (-40%)',
    compliance: '98% (+63%)',
    teamSize: 70,
    roi: '500-800%',
  },
  {
    year: 3,
    cycleTime: '8 weeks (target)',
    quality: '< 0.2% defect escape (-99%)',
    cost: '-$22-28M (-45%)',
    compliance: '99% (+65%)',
    teamSize: 65,
    roi: '1000-1500%',
  },
];

export const TOTAL_SYSTEM_ESTIMATE = {
  totalAgents: 114,
  sdlcAgents: 28,
  togafAgents: 18,
  enterpriseAgents: 68,
  totalMonths: 18,
  totalBudget: '$9.2M',
  totalTeamMonths: '19-25 engineers × 18 months',
  annualSavings: '$12-25M',
  paybackPeriod: '3-8 months',
  roi: {
    year1: '200-300%',
    year3: '1000-1500%',
  },
};
