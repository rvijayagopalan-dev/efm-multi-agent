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
