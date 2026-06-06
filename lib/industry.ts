// Industry Architecture - Sectors, Domains, Business Models & Ontologies

export interface IndustrySector {
  id: string;
  name: string;
  description: string;
  domains: IndustryDomain[];
  icon: string;
}

export interface IndustryDomain {
  id: string;
  name: string;
  description: string;
  keyCharacteristics: string[];
  businessModels: BusinessModel[];
  ontology: Ontology;
  knowledgeGraph: KnowledgeGraph;
  externalForces: ExternalForces;
  trends: Trend[];
  disruptions: Disruption[];
  strategicImplications: StrategicImplication[];
}

export interface BusinessModel {
  name: string;
  description: string;
  examples: string[];
  keyActivities: string[];
}

export interface Ontology {
  entities: OntologyEntity[];
  relationships: OntologyRelationship[];
  properties: Record<string, string[]>;
}

export interface OntologyEntity {
  name: string;
  definition: string;
  examples?: string[];
}

export interface OntologyRelationship {
  source: string;
  target: string;
  type: string;
  cardinality: string;
}

export interface KnowledgeGraph {
  nodes: KGNode[];
  edges: KGEdge[];
  clusters: KGCluster[];
}

export interface KGNode {
  id: string;
  label: string;
  type: string;
  properties?: Record<string, string>;
}

export interface KGEdge {
  source: string;
  target: string;
  type: string;
  weight?: number;
}

export interface KGCluster {
  id: string;
  name: string;
  nodeIds: string[];
  color: string;
}

export interface ExternalForces {
  political: ExternalFactor[];
  economic: ExternalFactor[];
  social: ExternalFactor[];
  technological: ExternalFactor[];
  environmental: ExternalFactor[];
  legal: ExternalFactor[];
}

export interface ExternalFactor {
  name: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  trajectory: 'accelerating' | 'stable' | 'declining';
  timeframe: string; // e.g., "2024-2026", "immediate", "long-term"
  implications?: string[];
}

export interface Trend {
  id: string;
  name: string;
  description: string;
  category: 'technology' | 'market' | 'consumer' | 'regulatory' | 'operational';
  momentum: 'high' | 'medium' | 'low';
  horizon: 'near-term' | 'mid-term' | 'long-term'; // 1yr, 2-3yr, 3-5yr+
  affectedBusinessModels: string[];
  opportunities: string[];
  threats: string[];
}

export interface Disruption {
  id: string;
  name: string;
  description: string;
  source: string; // technology, market entrant, regulatory, consumer behavior
  likelihood: 'high' | 'medium' | 'low';
  timeToImpact: string; // "immediate", "1-2 years", "3-5 years"
  affectedSegments: string[];
  mitigationStrategies: string[];
  winnerCharacteristics: string[];
}

export interface StrategicImplication {
  id: string;
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  relatedForces: string[]; // references to external forces
  requiredCapabilities: string[];
  timeline: string;
  investmentRequired: 'high' | 'medium' | 'low';
  expectedROI: string;
}

export interface ScenarioAnalysis {
  name: string;
  description: string;
  probability: number; // 0-1
  timeframe: string;
  strategicActions: string[];
  requiredInvestments: string[];
}

// Industry Data
export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'fintech',
    name: 'Financial Services & FinTech',
    description: 'Banking, payments, insurance, wealth management, cryptocurrency',
    icon: '💰',
    domains: [
      {
        id: 'banking',
        name: 'Digital Banking',
        description: 'Core banking, payments, lending, deposit services',
        externalForces: {
          political: [
            {
              name: 'Regulatory Tightening',
              description: 'Increasing regulations on data privacy (GDPR, CCPA), open banking mandates, and financial crime prevention',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate',
              implications: ['Higher compliance costs', 'API-first architecture requirements', 'Data governance investments']
            },
            {
              name: 'Digital Currency Initiatives',
              description: 'Central Bank Digital Currencies (CBDCs) development and pilot programs',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2027',
              implications: ['New payment infrastructure', 'Changed settlement models', 'Competitive threat to traditional banking']
            }
          ],
          economic: [
            {
              name: 'Interest Rate Volatility',
              description: 'Central banks adjusting rates in response to inflation and economic cycles',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing',
              implications: ['Margin compression', 'Asset-liability management challenges', 'Loan portfolio risk']
            },
            {
              name: 'Digital Payment Growth',
              description: 'Consumer preference shift from cash to digital payments (50% YoY growth in some markets)',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate',
              implications: ['Revenue diversification opportunity', 'Infrastructure investment needs', 'Competitive pressure from fintechs']
            }
          ],
          social: [
            {
              name: 'Consumer Digital Expectations',
              description: 'Customers expect mobile-first, 24/7, personalized banking experiences like consumer apps',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate',
              implications: ['UX/UI modernization required', 'API platform development', 'Talent acquisition in digital']
            },
            {
              name: 'Financial Inclusion Demands',
              description: 'Growing expectation for banking services for underbanked and unbanked populations',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term',
              implications: ['New market opportunities', 'Simplified account opening', 'Lower-cost service models']
            }
          ],
          technological: [
            {
              name: 'AI and Machine Learning',
              description: 'AI-powered risk assessment, fraud detection, customer service, and personalization',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate',
              implications: ['Competitive necessity', 'Data quality imperatives', 'Talent shortage in AI/ML']
            },
            {
              name: 'Cloud Migration',
              description: 'Industry shift from on-premise to cloud infrastructure (50%+ of banking workloads by 2025)',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate',
              implications: ['Legacy system modernization', 'Security and compliance risks', 'Operational cost reduction']
            },
            {
              name: 'Blockchain and Crypto',
              description: 'Emerging threat and opportunity from decentralized finance and cryptocurrencies',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2026',
              implications: ['New competitive threats', 'Settlement innovations', 'Regulatory challenges']
            }
          ],
          environmental: [
            {
              name: 'ESG Integration Requirements',
              description: 'Investor and regulator pressure to integrate ESG factors in lending and operations',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term',
              implications: ['Credit risk assessment changes', 'Portfolio rebalancing', 'Reporting infrastructure']
            },
            {
              name: 'Sustainable Finance Opportunities',
              description: 'Growth in green lending, sustainable bonds, and ESG-linked products',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term',
              implications: ['New product development', 'Market differentiation', 'Expertise development']
            }
          ],
          legal: [
            {
              name: 'Open Banking Requirements',
              description: 'PSD2 (EU), Open Banking (UK), and similar initiatives mandating API access to customer data',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'immediate',
              implications: ['API platforms required', 'Third-party integrations', 'Data security imperatives']
            },
            {
              name: 'Anti-Money Laundering (AML) Enforcement',
              description: 'Increasing penalties and global AML coordination efforts',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing',
              implications: ['Compliance automation needs', 'KYC/KYB infrastructure', 'Transaction monitoring']
            }
          ]
        },
        trends: [
          {
            id: 'trend-api-economy',
            name: 'API Economy in Banking',
            description: 'Banks exposing services as APIs for third-party developers and fintech partners',
            category: 'technology',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Traditional Bank', 'Neobank', 'Banking-as-a-Service'],
            opportunities: ['New revenue streams', 'Ecosystem partnerships', 'Customer data monetization'],
            threats: ['Commoditization of services', 'Third-party risks', 'Customer switching costs reduction']
          },
          {
            id: 'trend-embedded-finance',
            name: 'Embedded Finance',
            description: 'Financial services embedded in non-financial platforms (buy-now-pay-later, in-app payments)',
            category: 'market',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Traditional Bank', 'Banking-as-a-Service'],
            opportunities: ['Reach new customers', 'White-label partnerships', 'Point-of-sale lending'],
            threats: ['Margin compression', 'Disintermediation', 'Competition from tech platforms']
          },
          {
            id: 'trend-personalization',
            name: 'Hyper-Personalization',
            description: 'AI-driven personalized products, pricing, and offers based on individual behavior',
            category: 'technology',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Traditional Bank', 'Neobank'],
            opportunities: ['Improved conversion rates', 'Customer retention', 'Cross-sell effectiveness'],
            threats: ['Data privacy backlash', 'Regulatory scrutiny', 'Talent gaps']
          },
          {
            id: 'trend-super-apps',
            name: 'Super Apps Strategy',
            description: 'Banking platforms expanding beyond finance into lifestyle, commerce, and services',
            category: 'market',
            momentum: 'medium',
            horizon: 'mid-term',
            affectedBusinessModels: ['Neobank', 'Banking-as-a-Service'],
            opportunities: ['Increased engagement', 'Ecosystem lock-in', 'Revenue diversification'],
            threats: ['Regulatory complexity', 'Operational complexity', 'Antitrust concerns']
          }
        ],
        disruptions: [
          {
            id: 'disrupt-cbdc',
            name: 'Central Bank Digital Currency',
            description: 'CBDC deployment eliminating need for traditional deposit accounts and settlement',
            source: 'regulatory',
            likelihood: 'medium',
            timeToImpact: '3-5 years',
            affectedSegments: ['Retail Banking', 'Payment Services'],
            mitigationStrategies: ['Partner with central banks', 'Develop CBDC integration layers', 'Focus on value-added services'],
            winnerCharacteristics: ['Technology capability', 'Regulatory relationships', 'Customer loyalty']
          },
          {
            id: 'disrupt-crypto',
            name: 'Cryptocurrency/DeFi Disruption',
            description: 'Crypto and decentralized finance replacing traditional banking for tech-savvy segments',
            source: 'technology',
            likelihood: 'medium',
            timeToImpact: '2-4 years',
            affectedSegments: ['Young consumers', 'Digital-native businesses', 'Cross-border payments'],
            mitigationStrategies: ['Offer crypto custody services', 'Create bridge products', 'Educate customers', 'Invest in blockchain'],
            winnerCharacteristics: ['Digital credibility', 'Technology infrastructure', 'Customer trust']
          },
          {
            id: 'disrupt-big-tech',
            name: 'Big Tech Financial Services',
            description: 'Apple, Google, Amazon entering banking with super-apps and financial services',
            source: 'market entrant',
            likelihood: 'high',
            timeToImpact: 'immediate',
            affectedSegments: ['Consumer Banking', 'Payments', 'Credit Cards'],
            mitigationStrategies: ['Partner with tech companies', 'Differentiate on trust/security', 'Niche specialization', 'API-first approach'],
            winnerCharacteristics: ['Customer relationships', 'Technology capability', 'Brand trust']
          }
        ],
        strategicImplications: [
          {
            id: 'strat-platform',
            title: 'Migrate to API-First Platform Architecture',
            description: 'Transform from legacy monoliths to composable, API-first microservices architecture',
            priority: 'critical',
            relatedForces: ['Open Banking Requirements', 'API Economy', 'Cloud Migration'],
            requiredCapabilities: ['Microservices expertise', 'API platform engineering', 'Cloud architecture'],
            timeline: '2-3 years',
            investmentRequired: 'high',
            expectedROI: '30-40% operational cost reduction, 2-3x faster time-to-market'
          },
          {
            id: 'strat-ai',
            title: 'Build AI/ML Capabilities',
            description: 'Develop in-house AI/ML teams and infrastructure for risk, fraud, and personalization',
            priority: 'critical',
            relatedForces: ['AI and Machine Learning', 'Hyper-Personalization'],
            requiredCapabilities: ['Data science teams', 'ML infrastructure', 'Data governance'],
            timeline: '1-2 years',
            investmentRequired: 'high',
            expectedROI: '20-30% fraud reduction, 15-25% churn reduction through personalization'
          },
          {
            id: 'strat-ecosystem',
            title: 'Build Fintech Ecosystem Partnerships',
            description: 'Create API marketplace and partnerships with fintech, startups, and non-financial platforms',
            priority: 'high',
            relatedForces: ['Embedded Finance', 'API Economy'],
            requiredCapabilities: ['Developer relations', 'API security', 'Partner management'],
            timeline: '1-2 years',
            investmentRequired: 'medium',
            expectedROI: '10-20% revenue growth from new channels'
          },
          {
            id: 'strat-cloud',
            title: 'Accelerate Cloud Migration',
            description: 'Move critical workloads to cloud to improve scalability, cost, and time-to-market',
            priority: 'high',
            relatedForces: ['Cloud Migration', 'Big Tech Financial Services'],
            requiredCapabilities: ['Cloud architecture', 'Security/compliance', 'DevOps'],
            timeline: '2-3 years',
            investmentRequired: 'high',
            expectedROI: '20-30% infrastructure cost reduction'
          },
          {
            id: 'strat-cybersecurity',
            title: 'Strengthen Cybersecurity Posture',
            description: 'Build zero-trust architecture, threat intelligence, and incident response capabilities',
            priority: 'critical',
            relatedForces: ['Open Banking Requirements', 'AML Enforcement'],
            requiredCapabilities: ['Security architecture', 'Threat intelligence', 'Compliance automation'],
            timeline: 'ongoing',
            investmentRequired: 'high',
            expectedROI: 'Risk mitigation, regulatory compliance, customer trust'
          }
        ],
        keyCharacteristics: [
          'Real-time transaction processing',
          'High security and compliance (PCI-DSS, GDPR)',
          'Scalable infrastructure',
          'API-first architecture',
          'Multi-channel access (mobile, web, ATM)'
        ],
        businessModels: [
          {
            name: 'Traditional Bank',
            description: 'Full-service banking with physical branches',
            examples: ['JPMorgan Chase', 'Barclays', 'DBS'],
            keyActivities: ['Deposits', 'Lending', 'Investment services', 'Risk management']
          },
          {
            name: 'Neobank',
            description: 'Digital-only bank without physical branches',
            examples: ['Revolut', 'N26', 'Wise'],
            keyActivities: ['Account opening', 'Payments', 'Savings', 'Mobile-first experience']
          },
          {
            name: 'Banking-as-a-Service',
            description: 'Embedded banking APIs for 3rd parties',
            examples: ['Marqeta', 'Rapyd', 'Plaid'],
            keyActivities: ['API provisioning', 'Infrastructure', 'Compliance management']
          }
        ],
        ontology: {
          entities: [
            { name: 'Customer', definition: 'Individual or business account holder', examples: ['Retail customer', 'Corporate account'] },
            { name: 'Account', definition: 'Financial holding for customer', examples: ['Checking', 'Savings', 'Credit'] },
            { name: 'Transaction', definition: 'Movement of funds', examples: ['Deposit', 'Withdrawal', 'Transfer'] },
            { name: 'Payment', definition: 'Obligation settlement', examples: ['ACH', 'Wire', 'Card payment'] },
            { name: 'Compliance Rule', definition: 'Regulatory requirement', examples: ['KYC', 'AML', 'Transaction limits'] }
          ],
          relationships: [
            { source: 'Customer', target: 'Account', type: 'owns', cardinality: '1:N' },
            { source: 'Account', target: 'Transaction', type: 'contains', cardinality: '1:N' },
            { source: 'Transaction', target: 'Payment', type: 'executes', cardinality: '1:1' },
            { source: 'Customer', target: 'Compliance Rule', type: 'subject_to', cardinality: 'N:N' }
          ],
          properties: {
            'Customer': ['customerId', 'name', 'email', 'riskProfile'],
            'Account': ['accountNumber', 'balance', 'accountType', 'status'],
            'Transaction': ['transactionId', 'amount', 'timestamp', 'status']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'bank', label: 'Bank', type: 'Institution' },
            { id: 'customer', label: 'Customer', type: 'Actor' },
            { id: 'account', label: 'Account', type: 'Asset' },
            { id: 'payment_system', label: 'Payment System', type: 'Technology' },
            { id: 'regulator', label: 'Regulator', type: 'Institution' },
            { id: 'fraud_detection', label: 'Fraud Detection', type: 'Service' }
          ],
          edges: [
            { source: 'bank', target: 'customer', type: 'serves' },
            { source: 'customer', target: 'account', type: 'owns' },
            { source: 'bank', target: 'payment_system', type: 'uses' },
            { source: 'bank', target: 'regulator', type: 'regulated_by' },
            { source: 'payment_system', target: 'fraud_detection', type: 'integrates' }
          ],
          clusters: [
            { id: 'operational', name: 'Operations', nodeIds: ['bank', 'payment_system', 'account'], color: '#3B82F6' },
            { id: 'governance', name: 'Governance', nodeIds: ['regulator', 'fraud_detection'], color: '#EF4444' },
            { id: 'market', name: 'Market', nodeIds: ['customer'], color: '#10B981' }
          ]
        }
      },
      {
        id: 'payments',
        name: 'Payment Processing',
        description: 'Credit cards, debit cards, digital wallets, cross-border payments',
        externalForces: {
          political: [
            {
              name: 'Stablecoin Regulation',
              description: 'Governments defining regulatory frameworks for stablecoins and digital payment tokens',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2025'
            }
          ],
          economic: [
            {
              name: 'Cross-Border Payment Growth',
              description: '40% YoY growth in cross-border payments driven by e-commerce and gig economy',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          social: [
            {
              name: 'Contactless Payment Adoption',
              description: 'Post-pandemic shift to contactless and mobile payments (70%+ in developed markets)',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ],
          technological: [
            {
              name: 'Real-Time Payment Networks',
              description: 'Adoption of instant payment systems (FedNow, RTP, TIPS) replacing batch processing',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [],
          legal: [
            {
              name: 'Interchange Fee Regulation',
              description: 'EU, UK, and other markets capping interchange fees and transaction costs',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ]
        },
        trends: [
          {
            id: 'trend-bnpl',
            name: 'Buy Now Pay Later (BNPL)',
            description: 'Rapid growth of BNPL products as alternative to credit cards for point-of-sale payments',
            category: 'market',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Payment Processor', 'Payment Network'],
            opportunities: ['Partner with BNPL providers', 'Offer BNPL integration', 'Credit products'],
            threats: ['Credit card usage decline', 'Margin compression', 'New competitor entrants']
          }
        ],
        disruptions: [
          {
            id: 'disrupt-wallets',
            name: 'Digital Wallets Dominance',
            description: 'Apple Pay, Google Pay, Alipay, WeChat Pay replacing card-based payments',
            source: 'technology',
            likelihood: 'high',
            timeToImpact: 'immediate',
            affectedSegments: ['Card processors', 'Merchants'],
            mitigationStrategies: ['Build wallet integrations', 'Offer wallet infrastructure', 'Focus on settlement'],
            winnerCharacteristics: ['Technology integration', 'Merchant relationships', 'Consumer trust']
          }
        ],
        strategicImplications: [
          {
            id: 'strat-realtime',
            title: 'Transition to Real-Time Payment Networks',
            description: 'Migrate from batch to real-time settlement using FedNow, RTP, TIPS, or SWIFT gpi',
            priority: 'high',
            relatedForces: ['Real-Time Payment Networks'],
            requiredCapabilities: ['Real-time infrastructure', 'Liquidity management', 'Settlement networks'],
            timeline: '1-2 years',
            investmentRequired: 'high',
            expectedROI: 'Competitive advantage, reduced settlement risk'
          }
        ],
        keyCharacteristics: [
          'Sub-second latency requirements',
          'PCI-DSS Level 1 compliance',
          'Global payment networks',
          'Fraud prevention',
          'Settlement and reconciliation'
        ],
        businessModels: [
          {
            name: 'Payment Processor',
            description: 'Processes transactions for merchants',
            examples: ['Square', 'Stripe', 'PayPal'],
            keyActivities: ['Transaction processing', 'Merchant onboarding', 'Settlement']
          },
          {
            name: 'Payment Network',
            description: 'Network infrastructure for payments',
            examples: ['Visa', 'Mastercard', 'American Express'],
            keyActivities: ['Network operations', 'Standards setting', 'Dispute resolution']
          }
        ],
        ontology: {
          entities: [
            { name: 'Merchant', definition: 'Business accepting payments' },
            { name: 'Payment Method', definition: 'Instrument for payment' },
            { name: 'Settlement', definition: 'Fund transfer to merchant' },
            { name: 'Dispute', definition: 'Contested transaction' }
          ],
          relationships: [
            { source: 'Merchant', target: 'Payment Method', type: 'accepts', cardinality: 'N:N' },
            { source: 'Payment Method', target: 'Settlement', type: 'results_in', cardinality: '1:1' },
            { source: 'Settlement', target: 'Dispute', type: 'may_trigger', cardinality: '1:N' }
          ],
          properties: {
            'Merchant': ['merchantId', 'name', 'category', 'riskScore'],
            'Payment Method': ['type', 'network', 'securityFeatures']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'merchant', label: 'Merchant', type: 'Actor' },
            { id: 'processor', label: 'Processor', type: 'Intermediary' },
            { id: 'payment_gateway', label: 'Payment Gateway', type: 'Technology' },
            { id: 'network', label: 'Network', type: 'Infrastructure' },
            { id: 'acquiring_bank', label: 'Acquiring Bank', type: 'Institution' },
            { id: 'issuing_bank', label: 'Issuing Bank', type: 'Institution' }
          ],
          edges: [
            { source: 'merchant', target: 'processor', type: 'contracts_with' },
            { source: 'processor', target: 'payment_gateway', type: 'uses' },
            { source: 'processor', target: 'acquiring_bank', type: 'partners_with' },
            { source: 'acquiring_bank', target: 'network', type: 'connects_to' },
            { source: 'network', target: 'issuing_bank', type: 'routes_to' }
          ],
          clusters: [
            { id: 'merchants', name: 'Merchant Ecosystem', nodeIds: ['merchant', 'processor', 'payment_gateway'], color: '#F59E0B' },
            { id: 'networks', name: 'Payment Networks', nodeIds: ['acquiring_bank', 'network', 'issuing_bank'], color: '#8B5CF6' }
          ]
        }
      },
      {
        id: 'insurance',
        name: 'Insurance Technology',
        description: 'Policy management, claims processing, underwriting, risk assessment',
        externalForces: {
          political: [
            {
              name: 'Climate Change Regulation',
              description: 'Governments mandating climate risk disclosure and pricing in insurance products',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ],
          economic: [
            {
              name: 'Rising Claims Costs',
              description: 'Climate events, cyberattacks, and litigation driving 15-20% YoY claims inflation',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          social: [
            {
              name: 'Direct Insurance Demand',
              description: 'Consumers preferring direct digital insurance purchases over agents (40% shift)',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          technological: [
            {
              name: 'AI-Powered Underwriting',
              description: 'Machine learning models replacing traditional actuarial underwriting',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [
            {
              name: 'Climate Risk Modeling',
              description: 'Need for advanced climate risk models to price and manage catastrophe risk',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          legal: [
            {
              name: 'Cyber Insurance Mandates',
              description: 'Regulators requiring cyber insurance coverage for critical infrastructure',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ]
        },
        trends: [
          {
            id: 'trend-parametric',
            name: 'Parametric Insurance',
            description: 'Trigger-based insurance payouts rather than traditional claims assessment',
            category: 'technology',
            momentum: 'medium',
            horizon: 'mid-term',
            affectedBusinessModels: ['InsurTech'],
            opportunities: ['Faster claims', 'New risk types', 'Customer satisfaction'],
            threats: ['Basis risk', 'Regulatory uncertainty']
          }
        ],
        disruptions: [
          {
            id: 'disrupt-insurance-pools',
            name: 'Peer-to-Peer Insurance',
            description: 'Community-based insurance pools using blockchain and smart contracts',
            source: 'technology',
            likelihood: 'low',
            timeToImpact: '3-5 years',
            affectedSegments: ['Micro-insurance', 'Niche coverage'],
            mitigationStrategies: ['Partner with P2P platforms', 'Develop niche products', 'Build community models'],
            winnerCharacteristics: ['Community trust', 'Technology capability', 'Niche expertise']
          }
        ],
        strategicImplications: [
          {
            id: 'strat-climate-pricing',
            title: 'Develop Advanced Climate Risk Pricing Models',
            description: 'Build proprietary climate risk models using satellite data, IoT, and AI',
            priority: 'critical',
            relatedForces: ['Climate Change Regulation', 'Climate Risk Modeling'],
            requiredCapabilities: ['Data science', 'Climate expertise', 'Actuarial modeling'],
            timeline: '1-2 years',
            investmentRequired: 'high',
            expectedROI: 'Competitive advantage, accurate pricing, portfolio optimization'
          }
        ],
        keyCharacteristics: [
          'Complex risk modeling',
          'Regulatory compliance (NAIC, SOX)',
          'Claims automation',
          'Policyholder engagement',
          'Actuarial analytics'
        ],
        businessModels: [
          {
            name: 'InsurTech',
            description: 'Digital-first insurance distribution',
            examples: ['Lemonade', 'Root', 'Policy Genius'],
            keyActivities: ['Direct distribution', 'AI underwriting', 'Claims automation']
          }
        ],
        ontology: {
          entities: [
            { name: 'Policyholder', definition: 'Insurance coverage owner' },
            { name: 'Policy', definition: 'Insurance contract' },
            { name: 'Claim', definition: 'Request for coverage payout' },
            { name: 'Risk', definition: 'Insurable risk factor' }
          ],
          relationships: [
            { source: 'Policyholder', target: 'Policy', type: 'owns', cardinality: '1:N' },
            { source: 'Policy', target: 'Claim', type: 'covers', cardinality: '1:N' },
            { source: 'Policy', target: 'Risk', type: 'covers', cardinality: 'N:N' }
          ],
          properties: {
            'Policyholder': ['customerId', 'name', 'riskProfile'],
            'Policy': ['policyNumber', 'coverage', 'premium', 'status']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'insurer', label: 'Insurer', type: 'Institution' },
            { id: 'policyholder', label: 'Policyholder', type: 'Actor' },
            { id: 'broker', label: 'Broker', type: 'Intermediary' },
            { id: 'claims_processor', label: 'Claims Processor', type: 'Service' },
            { id: 'risk_assessor', label: 'Risk Assessor', type: 'Service' }
          ],
          edges: [
            { source: 'policyholder', target: 'broker', type: 'consults' },
            { source: 'broker', target: 'insurer', type: 'intermediates' },
            { source: 'policyholder', target: 'claims_processor', type: 'submits_claim' },
            { source: 'insurer', target: 'risk_assessor', type: 'uses' }
          ],
          clusters: [
            { id: 'distribution', name: 'Distribution', nodeIds: ['policyholder', 'broker'], color: '#06B6D4' },
            { id: 'operations', name: 'Operations', nodeIds: ['claims_processor', 'risk_assessor'], color: '#EC4899' }
          ]
        }
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Hospitals, pharma, biotech, medical devices, health tech',
    icon: '🏥',
    domains: [
      {
        id: 'hospital-networks',
        name: 'Hospital Networks',
        description: 'Integrated healthcare delivery systems',
        externalForces: {
          political: [
            {
              name: 'Healthcare Policy Shifts',
              description: 'Governments pushing toward value-based care and outcomes-driven reimbursement',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          economic: [
            {
              name: 'Reimbursement Pressure',
              description: 'Declining reimbursement rates and pressure on margins (3-5% declining YoY)',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          social: [
            {
              name: 'Telehealth Normalization',
              description: 'Patients expecting virtual care options for non-emergency services',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          technological: [
            {
              name: 'AI Diagnostics',
              description: 'Machine learning models outperforming radiologists in image interpretation',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [
            {
              name: 'Healthcare Sustainability',
              description: 'Hospitals reducing carbon footprint and waste',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ],
          legal: [
            {
              name: 'Interoperability Mandates',
              description: 'Regulations requiring health data portability and system interoperability',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2025'
            }
          ]
        },
        trends: [
          {
            id: 'trend-home-based-care',
            name: 'Home-Based Care Expansion',
            description: 'Shift of care delivery from hospitals to homes using remote monitoring and telehealth',
            category: 'market',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Integrated Delivery Network'],
            opportunities: ['Cost reduction', 'Patient satisfaction', 'Scale advantage'],
            threats: ['Cannibalization of inpatient revenue', 'Technology requirements']
          }
        ],
        disruptions: [],
        strategicImplications: [
          {
            id: 'strat-telehealth',
            title: 'Build Omnichannel Care Delivery Platform',
            description: 'Integrate in-person, virtual, home-based, and asynchronous care into unified platform',
            priority: 'critical',
            relatedForces: ['Telehealth Normalization', 'Home-Based Care Expansion'],
            requiredCapabilities: ['Telehealth infrastructure', 'Remote monitoring', 'Integration capability'],
            timeline: '1-2 years',
            investmentRequired: 'high',
            expectedROI: '20-30% reduction in readmissions, improved patient satisfaction'
          }
        ],
        keyCharacteristics: [
          'HIPAA compliance',
          'Electronic health records (EHR)',
          'Interoperability requirements',
          'Patient data privacy',
          'Real-time monitoring'
        ],
        businessModels: [
          {
            name: 'Integrated Delivery Network',
            description: 'Hospitals with clinics and services',
            examples: ['Mayo Clinic', 'Cleveland Clinic', 'Kaiser'],
            keyActivities: ['Patient care', 'Service delivery', 'Quality management']
          }
        ],
        ontology: {
          entities: [
            { name: 'Patient', definition: 'Individual receiving care' },
            { name: 'Provider', definition: 'Medical professional' },
            { name: 'Diagnosis', definition: 'Medical condition' },
            { name: 'Treatment Plan', definition: 'Course of care' }
          ],
          relationships: [
            { source: 'Patient', target: 'Provider', type: 'sees', cardinality: 'N:N' },
            { source: 'Patient', target: 'Diagnosis', type: 'has', cardinality: 'N:N' },
            { source: 'Diagnosis', target: 'Treatment Plan', type: 'guides', cardinality: 'N:1' }
          ],
          properties: {
            'Patient': ['patientId', 'name', 'medicalHistory'],
            'Provider': ['licenseNumber', 'specialization']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'patient', label: 'Patient', type: 'Actor' },
            { id: 'hospital', label: 'Hospital', type: 'Institution' },
            { id: 'ehr', label: 'EHR System', type: 'Technology' },
            { id: 'lab', label: 'Lab Services', type: 'Service' },
            { id: 'pharmacy', label: 'Pharmacy', type: 'Service' }
          ],
          edges: [
            { source: 'patient', target: 'hospital', type: 'admitted_to' },
            { source: 'hospital', target: 'ehr', type: 'uses' },
            { source: 'ehr', target: 'lab', type: 'orders_from' },
            { source: 'ehr', target: 'pharmacy', type: 'orders_from' }
          ],
          clusters: [
            { id: 'care', name: 'Care Delivery', nodeIds: ['patient', 'hospital', 'lab', 'pharmacy'], color: '#EF4444' },
            { id: 'tech', name: 'Technology', nodeIds: ['ehr'], color: '#3B82F6' }
          ]
        }
      }
    ]
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    description: 'Omnichannel retail, marketplaces, supply chain, customer engagement',
    icon: '🛍️',
    domains: [
      {
        id: 'ecommerce',
        name: 'E-Commerce Platforms',
        description: 'Online retail, marketplaces, digital storefronts',
        externalForces: {
          political: [
            {
              name: 'Digital Tax Regulations',
              description: 'Countries implementing digital services taxes and online sales tax requirements',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          economic: [
            {
              name: 'Logistics Cost Inflation',
              description: '20-30% increase in shipping costs due to fuel, labor, and capacity constraints',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ],
          social: [
            {
              name: 'Omnichannel Expectations',
              description: 'Consumers expect seamless online-to-offline shopping experiences',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          technological: [
            {
              name: 'AR/VR Shopping',
              description: 'Augmented and virtual reality enabling try-before-buy online experiences',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'mid-term'
            }
          ],
          environmental: [
            {
              name: 'Sustainable Shipping Pressure',
              description: 'Consumer demand and regulation pushing toward carbon-neutral delivery',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ],
          legal: [
            {
              name: 'Data Privacy Compliance',
              description: 'GDPR, CCPA, and similar regulations requiring data minimization and transparency',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ]
        },
        trends: [
          {
            id: 'trend-livestream-commerce',
            name: 'Livestream Commerce',
            description: 'Live video shopping events combining entertainment, influencer endorsements, and instant purchase',
            category: 'market',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Direct-to-Consumer', 'Marketplace'],
            opportunities: ['New sales channels', 'Higher engagement', 'Influencer partnerships'],
            threats: ['Content production costs', 'Audience building challenges']
          },
          {
            id: 'trend-social-commerce',
            name: 'Social Commerce Integration',
            description: 'Shopping experiences integrated directly into social media platforms',
            category: 'market',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Marketplace'],
            opportunities: ['New distribution channels', 'Reduced friction', 'Impulse buying'],
            threats: ['Platform dependency', 'Margin pressure']
          }
        ],
        disruptions: [
          {
            id: 'disrupt-super-apps',
            name: 'Super App Commerce Dominance',
            description: 'Asian-style super apps (TikTok Shop, WeChat, Alipay) taking e-commerce market share',
            source: 'market entrant',
            likelihood: 'high',
            timeToImpact: '1-2 years',
            affectedSegments: ['Marketplace', 'Direct-to-Consumer'],
            mitigationStrategies: ['Partner with social platforms', 'Build in-app commerce', 'Focus on niche communities'],
            winnerCharacteristics: ['Social integration', 'User engagement', 'Trust and authenticity']
          }
        ],
        strategicImplications: [
          {
            id: 'strat-logistics',
            title: 'Optimize Last-Mile Delivery Economics',
            description: 'Invest in alternative delivery models (crowdsourcing, micro-fulfillment, drones) to reduce costs',
            priority: 'high',
            relatedForces: ['Logistics Cost Inflation', 'Sustainable Shipping Pressure'],
            requiredCapabilities: ['Supply chain optimization', 'Technology integration', 'Sustainability expertise'],
            timeline: '2-3 years',
            investmentRequired: 'high',
            expectedROI: '15-25% reduction in delivery costs'
          },
          {
            id: 'strat-social-commerce',
            title: 'Build Social Commerce Capabilities',
            description: 'Develop livestream, influencer, and social-integrated shopping features',
            priority: 'high',
            relatedForces: ['Livestream Commerce', 'Social Commerce Integration'],
            requiredCapabilities: ['Content production', 'Influencer relations', 'Platform integration'],
            timeline: '1-2 years',
            investmentRequired: 'medium',
            expectedROI: '20-30% increase in engagement and AOV'
          }
        ],
        keyCharacteristics: [
          'High availability and scalability',
          'Personalization engines',
          'Inventory management',
          'Fraud detection',
          'Recommendation systems'
        ],
        businessModels: [
          {
            name: 'Direct-to-Consumer',
            description: 'Brands selling directly online',
            examples: ['Shopify stores', 'Brand websites'],
            keyActivities: ['Product sales', 'Customer service', 'Marketing']
          },
          {
            name: 'Marketplace',
            description: 'Platform connecting sellers and buyers',
            examples: ['Amazon', 'eBay', 'Alibaba'],
            keyActivities: ['Seller onboarding', 'Transaction facilitation', 'Dispute resolution']
          }
        ],
        ontology: {
          entities: [
            { name: 'Customer', definition: 'Buyer on platform' },
            { name: 'Product', definition: 'Item for sale' },
            { name: 'Order', definition: 'Customer purchase' },
            { name: 'Inventory', definition: 'Stock management' },
            { name: 'Shipment', definition: 'Delivery logistics' }
          ],
          relationships: [
            { source: 'Customer', target: 'Order', type: 'places', cardinality: '1:N' },
            { source: 'Order', target: 'Product', type: 'contains', cardinality: 'N:N' },
            { source: 'Product', target: 'Inventory', type: 'tracked_by', cardinality: '1:1' },
            { source: 'Order', target: 'Shipment', type: 'generates', cardinality: '1:1' }
          ],
          properties: {
            'Customer': ['customerId', 'email', 'preferences'],
            'Product': ['sku', 'price', 'category', 'inventory'],
            'Order': ['orderId', 'total', 'status', 'timestamp']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'customer', label: 'Customer', type: 'Actor' },
            { id: 'platform', label: 'E-Commerce Platform', type: 'Institution' },
            { id: 'seller', label: 'Seller', type: 'Actor' },
            { id: 'warehouse', label: 'Warehouse', type: 'Facility' },
            { id: 'logistics', label: 'Logistics Provider', type: 'Service' },
            { id: 'payment', label: 'Payment Gateway', type: 'Service' }
          ],
          edges: [
            { source: 'customer', target: 'platform', type: 'uses' },
            { source: 'seller', target: 'platform', type: 'sells_on' },
            { source: 'platform', target: 'warehouse', type: 'operates' },
            { source: 'warehouse', target: 'logistics', type: 'partners_with' },
            { source: 'customer', target: 'payment', type: 'pays_via' }
          ],
          clusters: [
            { id: 'marketplace', name: 'Marketplace', nodeIds: ['platform', 'customer', 'seller'], color: '#F59E0B' },
            { id: 'logistics', name: 'Supply Chain', nodeIds: ['warehouse', 'logistics'], color: '#10B981' },
            { id: 'payments', name: 'Payments', nodeIds: ['payment'], color: '#8B5CF6' }
          ]
        }
      }
    ]
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    description: 'Software, cloud platforms, AI/ML, cybersecurity, developer tools',
    icon: '💻',
    domains: [
      {
        id: 'saas-platforms',
        name: 'SaaS Platforms',
        description: 'Cloud-based software services',
        externalForces: {
          political: [],
          economic: [
            {
              name: 'Macro Downturn Impact',
              description: 'Recession concerns causing budget cuts and longer sales cycles (40% longer)',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ],
          social: [
            {
              name: 'Remote Work Normalization',
              description: 'Hybrid/remote work becoming standard, driving collaboration software demand',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ],
          technological: [
            {
              name: 'AI Integration Imperative',
              description: 'Every SaaS application adding AI features; competitive necessity',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            },
            {
              name: 'Data Integration Demands',
              description: 'Customers expecting seamless data flows between applications via APIs',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [],
          legal: [
            {
              name: 'Data Residency Requirements',
              description: 'Countries mandating data storage within borders (GDPR, China, India)',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ]
        },
        trends: [
          {
            id: 'trend-low-code',
            name: 'Low-Code/No-Code Platforms',
            description: 'Enterprise customers building applications with low-code platforms',
            category: 'technology',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Horizontal SaaS', 'Vertical SaaS'],
            opportunities: ['Lower implementation costs', 'Faster deployment', 'Customer empowerment'],
            threats: ['Developer importance reduction', 'Commoditization risk']
          },
          {
            id: 'trend-vertical-saas',
            name: 'Vertical SaaS Growth',
            description: 'Industry-specific SaaS solutions capturing share from horizontal platforms',
            category: 'market',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Vertical SaaS'],
            opportunities: ['Market focus', 'Higher retention', 'Premium pricing'],
            threats: ['Smaller addressable markets', 'Tech giant competition']
          }
        ],
        disruptions: [
          {
            id: 'disrupt-open-source',
            name: 'Open Source Enterprise Software',
            description: 'Enterprise-grade open-source alternatives reducing SaaS adoption',
            source: 'technology',
            likelihood: 'medium',
            timeToImpact: '2-3 years',
            affectedSegments: ['Developer tools', 'Infrastructure software'],
            mitigationStrategies: ['Offer managed services', 'Build on open source', 'Focus on UX'],
            winnerCharacteristics: ['Community engagement', 'Developer relations', 'Services capabilities']
          }
        ],
        strategicImplications: [
          {
            id: 'strat-ai-integration',
            title: 'Build AI-Powered Features Across Product',
            description: 'Integrate LLMs, ML models, and AI assistants into core product features',
            priority: 'critical',
            relatedForces: ['AI Integration Imperative'],
            requiredCapabilities: ['ML engineering', 'Prompt engineering', 'Data quality'],
            timeline: '1-2 years',
            investmentRequired: 'high',
            expectedROI: '20-30% improvement in user productivity'
          },
          {
            id: 'strat-integration-platform',
            title: 'Build API Integration Marketplace',
            description: 'Create ecosystem of pre-built integrations and API connections to other SaaS tools',
            priority: 'high',
            relatedForces: ['Data Integration Demands'],
            requiredCapabilities: ['API engineering', 'Partner management', 'Developer relations'],
            timeline: '1-2 years',
            investmentRequired: 'medium',
            expectedROI: '10-15% increase in retention and expansion revenue'
          }
        ],
        keyCharacteristics: [
          'Multi-tenancy',
          'API-first architecture',
          'Subscription billing',
          'Auto-scaling infrastructure',
          'Data isolation and security'
        ],
        businessModels: [
          {
            name: 'Horizontal SaaS',
            description: 'Broad use case applications',
            examples: ['Salesforce', 'HubSpot', 'Slack'],
            keyActivities: ['Feature development', 'Customer support', 'Integration marketplace']
          },
          {
            name: 'Vertical SaaS',
            description: 'Industry-specific solutions',
            examples: ['Veeva', 'Toast', 'Zenoti'],
            keyActivities: ['Domain expertise', 'Compliance', 'Industry partnerships']
          }
        ],
        ontology: {
          entities: [
            { name: 'Tenant', definition: 'Customer organization' },
            { name: 'User', definition: 'Individual platform user' },
            { name: 'Feature', definition: 'Platform capability' },
            { name: 'Integration', definition: '3rd party connection' },
            { name: 'Subscription', definition: 'Billing arrangement' }
          ],
          relationships: [
            { source: 'Tenant', target: 'User', type: 'contains', cardinality: '1:N' },
            { source: 'Tenant', target: 'Feature', type: 'uses', cardinality: 'N:N' },
            { source: 'Tenant', target: 'Integration', type: 'enables', cardinality: 'N:N' },
            { source: 'Tenant', target: 'Subscription', type: 'has', cardinality: '1:1' }
          ],
          properties: {
            'Tenant': ['tenantId', 'name', 'industry', 'size'],
            'User': ['userId', 'role', 'permissions'],
            'Subscription': ['planType', 'billingCycle', 'mrr']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'saas_vendor', label: 'SaaS Vendor', type: 'Institution' },
            { id: 'customer', label: 'Customer', type: 'Actor' },
            { id: 'api', label: 'API Layer', type: 'Technology' },
            { id: 'database', label: 'Database', type: 'Technology' },
            { id: 'analytics', label: 'Analytics', type: 'Service' },
            { id: 'support', label: 'Support', type: 'Service' }
          ],
          edges: [
            { source: 'customer', target: 'saas_vendor', type: 'subscribes_to' },
            { source: 'saas_vendor', target: 'api', type: 'exposes' },
            { source: 'api', target: 'database', type: 'accesses' },
            { source: 'saas_vendor', target: 'analytics', type: 'uses' },
            { source: 'customer', target: 'support', type: 'receives_from' }
          ],
          clusters: [
            { id: 'business', name: 'Business Model', nodeIds: ['saas_vendor', 'customer'], color: '#3B82F6' },
            { id: 'platform', name: 'Platform', nodeIds: ['api', 'database', 'analytics'], color: '#8B5CF6' },
            { id: 'support', name: 'Support', nodeIds: ['support'], color: '#10B981' }
          ]
        }
      }
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    description: 'Production, supply chain, logistics, industrial IoT',
    icon: '🏭',
    domains: [
      {
        id: 'smart-manufacturing',
        name: 'Smart Manufacturing (Industry 4.0)',
        description: 'Connected factories, IoT, predictive maintenance',
        externalForces: {
          political: [
            {
              name: 'Reshoring Initiatives',
              description: 'Governments incentivizing domestic manufacturing through subsidies and tariffs',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2026'
            }
          ],
          economic: [
            {
              name: 'Supply Chain Resilience',
              description: 'Post-pandemic push toward diversified, local supply chains',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          social: [
            {
              name: 'Skilled Labor Shortage',
              description: '40% of factory workers retiring in next 10 years; talent gap worsening',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ],
          technological: [
            {
              name: 'Edge Computing Adoption',
              description: 'Real-time processing at factory floor through edge computing and 5G',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [
            {
              name: 'Carbon-Neutral Manufacturing',
              description: 'Pressure to achieve net-zero emissions in manufacturing operations',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ],
          legal: [
            {
              name: 'Supply Chain Transparency',
              description: 'Regulations requiring visibility into emissions and labor practices',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ]
        },
        trends: [
          {
            id: 'trend-predictive-maintenance',
            name: 'Predictive Maintenance',
            description: 'AI-powered predictive maintenance reducing downtime and extending equipment life',
            category: 'technology',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Connected Factory'],
            opportunities: ['Uptime improvement', 'Cost savings', 'OEM services'],
            threats: ['Complexity', 'Data quality dependence']
          }
        ],
        disruptions: [],
        strategicImplications: [
          {
            id: 'strat-digital-twin',
            title: 'Develop Digital Twin Capabilities',
            description: 'Create virtual replicas of production lines for simulation, optimization, and training',
            priority: 'high',
            relatedForces: ['Edge Computing Adoption', 'Predictive Maintenance'],
            requiredCapabilities: ['3D modeling', 'IoT integration', 'Simulation expertise'],
            timeline: '2-3 years',
            investmentRequired: 'high',
            expectedROI: '20-30% production efficiency gains'
          }
        ],
        keyCharacteristics: [
          'Real-time monitoring',
          'Predictive maintenance',
          'Supply chain visibility',
          'Quality control automation',
          'Production optimization'
        ],
        businessModels: [
          {
            name: 'Connected Factory',
            description: 'IoT-enabled production',
            examples: ['Siemens Digital Industries', 'GE Digital'],
            keyActivities: ['Equipment monitoring', 'Predictive analytics', 'Production optimization']
          }
        ],
        ontology: {
          entities: [
            { name: 'Equipment', definition: 'Manufacturing machinery' },
            { name: 'Production Line', definition: 'Assembly workflow' },
            { name: 'Raw Material', definition: 'Input stock' },
            { name: 'Finished Product', definition: 'Output unit' },
            { name: 'Quality Metric', definition: 'Quality measurement' }
          ],
          relationships: [
            { source: 'Equipment', target: 'Production Line', type: 'part_of', cardinality: 'N:1' },
            { source: 'Raw Material', target: 'Production Line', type: 'input_to', cardinality: 'N:1' },
            { source: 'Production Line', target: 'Finished Product', type: 'produces', cardinality: '1:N' },
            { source: 'Finished Product', target: 'Quality Metric', type: 'measured_by', cardinality: '1:N' }
          ],
          properties: {
            'Equipment': ['equipmentId', 'type', 'maintenanceSchedule'],
            'Production Line': ['lineId', 'capacity', 'efficiency']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'factory', label: 'Factory', type: 'Facility' },
            { id: 'equipment', label: 'Equipment', type: 'Asset' },
            { id: 'iot_sensors', label: 'IoT Sensors', type: 'Technology' },
            { id: 'analytics', label: 'Analytics Engine', type: 'Technology' },
            { id: 'maintenance', label: 'Maintenance Team', type: 'Actor' }
          ],
          edges: [
            { source: 'factory', target: 'equipment', type: 'contains' },
            { source: 'equipment', target: 'iot_sensors', type: 'equipped_with' },
            { source: 'iot_sensors', target: 'analytics', type: 'feeds' },
            { source: 'analytics', target: 'maintenance', type: 'alerts' }
          ],
          clusters: [
            { id: 'infrastructure', name: 'Infrastructure', nodeIds: ['factory', 'equipment'], color: '#6B7280' },
            { id: 'digital', name: 'Digital Layer', nodeIds: ['iot_sensors', 'analytics'], color: '#3B82F6' },
            { id: 'operations', name: 'Operations', nodeIds: ['maintenance'], color: '#10B981' }
          ]
        }
      }
    ]
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    description: 'Telecom operators, media, broadcasting, internet service',
    icon: '📡',
    domains: [
      {
        id: '5g-networks',
        name: '5G & Network Infrastructure',
        description: '5G rollout, edge computing, network slicing',
        externalForces: {
          political: [
            {
              name: 'Geopolitical Competition',
              description: 'US-China competition over 5G dominance and supply chain control',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          economic: [
            {
              name: 'CAPEX Requirements',
              description: '$200B+ needed for global 5G deployment over 5 years',
              impact: 'high',
              trajectory: 'stable',
              timeframe: '2024-2028'
            }
          ],
          social: [],
          technological: [
            {
              name: 'Open RAN Movement',
              description: 'Shift toward open, disaggregated RAN architecture',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'medium-term'
            }
          ],
          environmental: [
            {
              name: 'Energy Efficiency Demands',
              description: '5G infrastructure consuming 3x power of 4G; need for efficiency',
              impact: 'medium',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          legal: [
            {
              name: 'Spectrum Regulation',
              description: 'Governments controlling spectrum allocation and usage rights',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ]
        },
        trends: [
          {
            id: 'trend-network-slicing',
            name: 'Network Slicing for Enterprise',
            description: 'Creating dedicated network slices for enterprise use cases (manufacturing, autonomous vehicles)',
            category: 'technology',
            momentum: 'medium',
            horizon: 'mid-term',
            affectedBusinessModels: ['Telecom Operator'],
            opportunities: ['B2B revenue', 'Premium pricing', 'New use cases'],
            threats: ['Operational complexity', 'SLA requirements']
          }
        ],
        disruptions: [],
        strategicImplications: [
          {
            id: 'strat-open-ran',
            title: 'Adopt Open RAN Architecture',
            description: 'Transition from proprietary to open, disaggregated RAN for vendor flexibility and cost reduction',
            priority: 'high',
            relatedForces: ['Open RAN Movement'],
            requiredCapabilities: ['O-RAN expertise', 'Integration engineering', 'Interoperability testing'],
            timeline: '2-3 years',
            investmentRequired: 'high',
            expectedROI: '15-20% reduction in CAPEX'
          }
        ],
        keyCharacteristics: [
          'Ultra-low latency (sub-millisecond)',
          'High bandwidth',
          'Network slicing',
          'Edge computing integration',
          'Service level agreements'
        ],
        businessModels: [
          {
            name: 'Telecom Operator',
            description: 'Network infrastructure provider',
            examples: ['Verizon', 'Deutsche Telekom', 'China Mobile'],
            keyActivities: ['Network deployment', 'Subscriber management', 'Service delivery']
          }
        ],
        ontology: {
          entities: [
            { name: 'Network Slice', definition: 'Virtualized network instance' },
            { name: 'Subscriber', definition: 'Customer service user' },
            { name: 'Service', definition: 'Network service offering' },
            { name: 'SLA', definition: 'Service level agreement' }
          ],
          relationships: [
            { source: 'Subscriber', target: 'Service', type: 'uses', cardinality: 'N:N' },
            { source: 'Service', target: 'Network Slice', type: 'runs_on', cardinality: '1:1' },
            { source: 'Service', target: 'SLA', type: 'bound_by', cardinality: '1:1' }
          ],
          properties: {
            'Service': ['serviceType', 'bandwidth', 'latency'],
            'Subscriber': ['subscriberId', 'serviceType', 'region']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'operator', label: 'Operator', type: 'Institution' },
            { id: 'network', label: '5G Network', type: 'Infrastructure' },
            { id: 'edge', label: 'Edge Computing', type: 'Technology' },
            { id: 'subscriber', label: 'Subscriber', type: 'Actor' },
            { id: 'application', label: 'Application', type: 'Service' }
          ],
          edges: [
            { source: 'operator', target: 'network', type: 'operates' },
            { source: 'network', target: 'edge', type: 'integrates' },
            { source: 'subscriber', target: 'network', type: 'connects_to' },
            { source: 'network', target: 'application', type: 'supports' }
          ],
          clusters: [
            { id: 'infrastructure', name: 'Infrastructure', nodeIds: ['operator', 'network', 'edge'], color: '#6B7280' },
            { id: 'services', name: 'Services', nodeIds: ['subscriber', 'application'], color: '#F59E0B' }
          ]
        }
      }
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    description: 'Oil & gas, renewables, power grid, water management',
    icon: '⚡',
    domains: [
      {
        id: 'smart-grid',
        name: 'Smart Grid & Renewables',
        description: 'Distributed energy, grid modernization, renewables integration',
        externalForces: {
          political: [
            {
              name: 'Net-Zero Mandates',
              description: 'Countries mandating 100% renewable electricity by 2030-2050',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2050'
            }
          ],
          economic: [
            {
              name: 'Renewable Cost Parity',
              description: 'Solar and wind now cheaper than fossil fuels in most markets',
              impact: 'high',
              trajectory: 'stable',
              timeframe: 'ongoing'
            }
          ],
          social: [
            {
              name: 'Consumer Energy Prosumers',
              description: 'Households installing rooftop solar and batteries; becoming energy producers',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          technological: [
            {
              name: 'Battery Storage Breakthroughs',
              description: 'Grid-scale batteries enabling renewable energy storage and dispatch',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [
            {
              name: 'Climate Emergency Response',
              description: 'Urgent transition away from fossil fuels required for climate targets',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          legal: []
        },
        trends: [
          {
            id: 'trend-demand-response',
            name: 'Demand Response Programs',
            description: 'Real-time demand flexibility helping balance variable renewable generation',
            category: 'technology',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Utility Company'],
            opportunities: ['Load balancing', 'Cost savings', 'Consumer engagement'],
            threats: ['Consumer privacy', 'Behavior change challenges']
          }
        ],
        disruptions: [],
        strategicImplications: [
          {
            id: 'strat-flexibility-market',
            title: 'Build Flexibility and Demand Response Markets',
            description: 'Create platforms for real-time trading of energy flexibility and demand response',
            priority: 'high',
            relatedForces: ['Demand Response Programs', 'Battery Storage Breakthroughs'],
            requiredCapabilities: ['Market design', 'Real-time systems', 'Consumer engagement'],
            timeline: '2-3 years',
            investmentRequired: 'medium',
            expectedROI: 'Grid stability, cost reduction, consumer engagement'
          }
        ],
        keyCharacteristics: [
          'Real-time grid management',
          'Renewable source integration',
          'Demand response',
          'Cybersecurity for critical infrastructure',
          'Predictive grid management'
        ],
        businessModels: [
          {
            name: 'Utility Company',
            description: 'Traditional energy distribution',
            examples: ['Duke Energy', 'NextEra Energy'],
            keyActivities: ['Power generation', 'Distribution', 'Customer service']
          }
        ],
        ontology: {
          entities: [
            { name: 'Power Plant', definition: 'Generation facility' },
            { name: 'Grid Node', definition: 'Distribution point' },
            { name: 'Consumer', definition: 'Energy user' },
            { name: 'Energy Source', definition: 'Generation type' }
          ],
          relationships: [
            { source: 'Power Plant', target: 'Energy Source', type: 'uses', cardinality: 'N:1' },
            { source: 'Power Plant', target: 'Grid Node', type: 'feeds', cardinality: 'N:N' },
            { source: 'Grid Node', target: 'Consumer', type: 'serves', cardinality: '1:N' }
          ],
          properties: {
            'Power Plant': ['capacity', 'efficiency', 'fuelType'],
            'Grid Node': ['voltage', 'capacity', 'location']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'utility', label: 'Utility', type: 'Institution' },
            { id: 'generation', label: 'Generation', type: 'Facility' },
            { id: 'distribution', label: 'Distribution Network', type: 'Infrastructure' },
            { id: 'consumer', label: 'Consumer', type: 'Actor' },
            { id: 'smart_meters', label: 'Smart Meters', type: 'Technology' },
            { id: 'renewable', label: 'Renewable Source', type: 'Resource' }
          ],
          edges: [
            { source: 'utility', target: 'generation', type: 'operates' },
            { source: 'generation', target: 'distribution', type: 'feeds' },
            { source: 'distribution', target: 'consumer', type: 'supplies' },
            { source: 'consumer', target: 'smart_meters', type: 'equipped_with' },
            { source: 'generation', target: 'renewable', type: 'may_use' }
          ],
          clusters: [
            { id: 'infrastructure', name: 'Infrastructure', nodeIds: ['generation', 'distribution'], color: '#6B7280' },
            { id: 'digital', name: 'Digital Monitoring', nodeIds: ['smart_meters'], color: '#3B82F6' },
            { id: 'market', name: 'Market', nodeIds: ['consumer'], color: '#10B981' }
          ]
        }
      }
    ]
  },
  {
    id: 'transportation',
    name: 'Transportation & Mobility',
    description: 'Airlines, automotive, shipping, public transit, logistics',
    icon: '✈️',
    domains: [
      {
        id: 'autonomous-vehicles',
        name: 'Autonomous Vehicles',
        description: 'Self-driving cars, autonomous delivery, fleet management',
        externalForces: {
          political: [
            {
              name: 'Autonomous Vehicle Regulation',
              description: 'Governments developing frameworks for AVs; liability and insurance questions',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2026'
            }
          ],
          economic: [
            {
              name: 'Labor Displacement',
              description: '3.5M truck drivers and delivery drivers at risk from autonomous vehicles',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '3-5 years'
            }
          ],
          social: [
            {
              name: 'Consumer Trust Building',
              description: 'Safety concerns and need to build consumer confidence in autonomous vehicles',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'ongoing'
            }
          ],
          technological: [
            {
              name: 'AI Safety Advances',
              description: 'Need for explainable AI and fail-safe systems for autonomous vehicles',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          environmental: [
            {
              name: 'Vehicle Electrification',
              description: 'Shift to electric vehicles enabling lower operating costs for AVs',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: 'immediate'
            }
          ],
          legal: [
            {
              name: 'Liability and Insurance',
              description: 'Unclear liability and insurance models for autonomous vehicles',
              impact: 'high',
              trajectory: 'accelerating',
              timeframe: '2024-2026'
            }
          ]
        },
        trends: [
          {
            id: 'trend-last-mile',
            name: 'Autonomous Last-Mile Delivery',
            description: 'Autonomous robots and small vehicles for last-mile package delivery',
            category: 'technology',
            momentum: 'high',
            horizon: 'near-term',
            affectedBusinessModels: ['Autonomous Fleet Service'],
            opportunities: ['Cost reduction', 'Speed improvement', 'Environmental benefits'],
            threats: ['Safety concerns', 'Regulatory uncertainty', 'Infrastructure requirements']
          }
        ],
        disruptions: [
          {
            id: 'disrupt-mobility',
            name: 'Robotaxi Disrupting Vehicle Ownership',
            description: 'Robotaxis making personal vehicle ownership economically obsolete',
            source: 'technology',
            likelihood: 'medium',
            timeToImpact: '3-5 years',
            affectedSegments: ['Vehicle manufacturers', 'Insurance', 'Parking'],
            mitigationStrategies: ['Develop autonomous fleet services', 'Partner with tech leaders', 'Focus on shared mobility'],
            winnerCharacteristics: ['Fleet management expertise', 'Technology capability', 'Scale']
          }
        ],
        strategicImplications: [
          {
            id: 'strat-av-infrastructure',
            title: 'Build Autonomous Vehicle Infrastructure',
            description: 'Develop fleets, charging networks, maintenance facilities, and operational capabilities',
            priority: 'critical',
            relatedForces: ['Autonomous Vehicle Regulation', 'Vehicle Electrification'],
            requiredCapabilities: ['Fleet management', 'Operations at scale', 'Technology integration'],
            timeline: '2-4 years',
            investmentRequired: 'high',
            expectedROI: 'New revenue streams, cost reduction in delivery'
          },
          {
            id: 'strat-av-safety',
            title: 'Build AI Safety and Explainability',
            description: 'Develop safety-critical AI systems with explainability for regulatory approval',
            priority: 'critical',
            relatedForces: ['AI Safety Advances', 'Autonomous Vehicle Regulation'],
            requiredCapabilities: ['Safety engineering', 'Explainable AI', 'Regulatory expertise'],
            timeline: '1-2 years',
            investmentRequired: 'high',
            expectedROI: 'Regulatory approval, consumer trust, insurance requirements'
          }
        ],
        keyCharacteristics: [
          'Real-time decision making',
          'Computer vision',
          'Fleet management at scale',
          'Safety assurance',
          'Integration with infrastructure'
        ],
        businessModels: [
          {
            name: 'Autonomous Fleet Service',
            description: 'Robotaxi and delivery services',
            examples: ['Waymo', 'Cruise', 'Tesla'],
            keyActivities: ['Vehicle operations', 'Route optimization', 'Fleet maintenance']
          }
        ],
        ontology: {
          entities: [
            { name: 'Vehicle', definition: 'Autonomous unit' },
            { name: 'Route', definition: 'Travel path' },
            { name: 'Passenger', definition: 'Service user' },
            { name: 'Destination', definition: 'Target location' }
          ],
          relationships: [
            { source: 'Vehicle', target: 'Route', type: 'follows', cardinality: 'N:1' },
            { source: 'Passenger', target: 'Vehicle', type: 'uses', cardinality: 'N:N' },
            { source: 'Route', target: 'Destination', type: 'reaches', cardinality: 'N:1' }
          ],
          properties: {
            'Vehicle': ['vehicleId', 'capacity', 'status', 'location'],
            'Route': ['routeId', 'distance', 'estimatedTime']
          }
        },
        knowledgeGraph: {
          nodes: [
            { id: 'fleet_operator', label: 'Fleet Operator', type: 'Institution' },
            { id: 'vehicle', label: 'Autonomous Vehicle', type: 'Asset' },
            { id: 'ai_system', label: 'AI Decision System', type: 'Technology' },
            { id: 'passenger', label: 'Passenger', type: 'Actor' },
            { id: 'infrastructure', label: 'City Infrastructure', type: 'Facility' }
          ],
          edges: [
            { source: 'fleet_operator', target: 'vehicle', type: 'operates' },
            { source: 'vehicle', target: 'ai_system', type: 'powered_by' },
            { source: 'passenger', target: 'vehicle', type: 'requests' },
            { source: 'vehicle', target: 'infrastructure', type: 'integrates_with' }
          ],
          clusters: [
            { id: 'operations', name: 'Fleet Operations', nodeIds: ['fleet_operator', 'vehicle'], color: '#6B7280' },
            { id: 'intelligence', name: 'AI & Decision', nodeIds: ['ai_system'], color: '#8B5CF6' },
            { id: 'market', name: 'Market', nodeIds: ['passenger'], color: '#F59E0B' }
          ]
        }
      }
    ]
  }
];

// Helper functions
export function getIndustrySector(sectorId: string): IndustrySector | undefined {
  return INDUSTRY_SECTORS.find(s => s.id === sectorId);
}

export function getIndustryDomain(sectorId: string, domainId: string): IndustryDomain | undefined {
  const sector = getIndustrySector(sectorId);
  return sector?.domains.find(d => d.id === domainId);
}

export function getAllDomains(): IndustryDomain[] {
  return INDUSTRY_SECTORS.flatMap(s => s.domains);
}

export function searchIndustries(query: string): IndustrySector[] {
  const lowercaseQuery = query.toLowerCase();
  return INDUSTRY_SECTORS.filter(sector =>
    sector.name.toLowerCase().includes(lowercaseQuery) ||
    sector.description.toLowerCase().includes(lowercaseQuery) ||
    sector.domains.some(d =>
      d.name.toLowerCase().includes(lowercaseQuery) ||
      d.description.toLowerCase().includes(lowercaseQuery)
    )
  );
}
