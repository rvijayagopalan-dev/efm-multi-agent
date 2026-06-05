# Cloud Architecture Formal Ontology (CAFO)

## Ontology Specification — Version 2.1.0

---

## 1. Ontology Metadata

### 1.1 Core Identification

| Attribute | Value |
|---|---|
| **Ontology Name** | Cloud Architecture Formal Ontology (CAFO) |
| **Version** | 2.1.0 |
| **Release Date** | 2024-01-15 |
| **Status** | Stable / Production |
| **Description** | A comprehensive formal ontology for representing all concepts, relationships, constraints, and principles governing Cloud Architecture domains, including infrastructure, services, deployment, governance, security, and operational patterns |
| **Primary Author** | Cloud Architecture Knowledge Engineering Consortium |
| **Contact** | cafo-governance@cloudontology.org |

### 1.2 Namespace Declarations

```turtle
@prefix cafo:    <https://ontology.cloudarchitecture.org/cafo/2.1#> .
@prefix cafo-core: <https://ontology.cloudarchitecture.org/cafo/core#> .
@prefix cafo-sec: <https://ontology.cloudarchitecture.org/cafo/security#> .
@prefix cafo-net: <https://ontology.cloudarchitecture.org/cafo/network#> .
@prefix cafo-gov: <https://ontology.cloudarchitecture.org/cafo/governance#> .
@prefix owl:     <http://www.w3.org/2002/07/owl#> .
@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:     <http://www.w3.org/2001/XMLSchema#> .
@prefix skos:    <http://www.w3.org/2004/02/skos/core#> .
@prefix dc:      <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix schema:  <https://schema.org/> .
@prefix foaf:    <http://xmlns.com/foaf/0.1/> .
@prefix prov:    <http://www.w3.org/ns/prov#> .
@prefix sh:      <http://www.w3.org/ns/shacl#> .
@prefix togaf:   <https://www.opengroup.org/togaf/ontology#> .
@prefix archimate: <https://www.opengroup.org/archimate/ontology#> .
@prefix nist:    <https://csrc.nist.gov/ontology/cloud#> .
```

### 1.3 Ontology Declaration (Turtle/OWL)

```turtle
<https://ontology.cloudarchitecture.org/cafo/2.1>
    rdf:type owl:Ontology ;
    owl:versionIRI <https://ontology.cloudarchitecture.org/cafo/2.1> ;
    owl:versionInfo "2.1.0" ;
    dc:title "Cloud Architecture Formal Ontology (CAFO)" ;
    dc:description "Comprehensive formal ontology for Cloud Architecture domains" ;
    dc:creator "Cloud Architecture Knowledge Engineering Consortium" ;
    dc:date "2024-01-15"^^xsd:date ;
    dcterms:license <https://creativecommons.org/licenses/by/4.0/> ;
    dcterms:rights "CC BY 4.0 — Attribution Required" ;
    owl:imports <http://www.w3.org/2004/02/skos/core> ;
    owl:imports <http://purl.org/dc/terms/> ;
    rdfs:comment "Aligned with NIST SP 800-145, TOGAF 10, ArchiMate 3.2, ISO/IEC 17788" .
```

### 1.4 Alignment with Standard Ontologies

| Standard Ontology | Alignment Type | Mapping Strategy | Key Classes Mapped |
|---|---|---|---|
| **OWL 2 DL** | Native language | Full OWL 2 DL expressivity (SROIQ) | All classes expressed as OWL Classes |
| **SKOS Core** | Structural alignment | SKOS ConceptScheme for thesaurus view | All cafo: classes have skos:Concept equivalents |
| **Dublin Core / DCTerms** | Metadata alignment | DC elements for ontology metadata | dcterms:title, dcterms:description, dcterms:subject |
| **Schema.org** | Loose alignment | rdfs:seeAlso mappings | schema:Service → cafo:CloudService; schema:SoftwareApplication → cafo:CloudApplication |
| **FOAF** | Agent alignment | foaf:Organization → cafo:CloudProvider | Actor and stakeholder modeling |
| **PROV-O** | Provenance alignment | prov:Entity → cafo:CloudResource | Lineage and audit trail modeling |
| **NIST SP 800-145** | Definitional alignment | owl:equivalentClass assertions | Service models (IaaS, PaaS, SaaS), deployment models |
| **ISO/IEC 17788** | Definitional alignment | rdfs:isDefinedBy references | Cloud terminology and framework |
| **TOGAF 10** | Architecture alignment | owl:equivalentClass for metamodel entities | Application Component, Technology Component, Node |
| **ArchiMate 3.2** | Modeling alignment | Cross-ontology property mappings | Technology Layer, Application Layer, Motivation Aspect |

### 1.5 License and Governance

```
License:     Creative Commons Attribution 4.0 International (CC BY 4.0)
Repository:  https://github.com/cloud-architecture-ontology/cafo
Governance:  Cloud Architecture Ontology Steering Committee (CAOSC)
Change Process:
  - Minor versions (2.x.y): Editorial corrections, addition of individuals
  - Major minor (2.x.0): New classes/properties, backward-compatible
  - Major (x.0.0): Breaking changes, deprecation of core classes
Review Cycle: Annual full review; quarterly patch releases
Issue Tracker: https://github.com/cloud-architecture-ontology/cafo/issues
```

---

## 2. Class Hierarchy (Taxonomy)

### 2.1 Complete Class Hierarchy

```
owl:Thing
  └── ArchitectureDomain                          [Abstract root for all architecture concepts]
        └── CloudDomain                           [Root class for all cloud architecture concepts]
              │
              ├── CloudConcept                    [Abstract: foundational cloud concepts]
              │     ├── CloudCharacteristic        [NIST essential characteristics of cloud]
              │     │     ├── OnDemandSelfService
              │     │     ├── BroadNetworkAccess
              │     │     ├── ResourcePooling
              │     │     ├── RapidElasticity
              │     │     └── MeasuredService
              │     └── CloudPrinciple             [Guiding architectural principles]
              │           ├── DesignPrinciple
              │           └── OperationalPrinciple
              │
              ├── CloudServiceModel               [NIST service classification taxonomy]
              │     ├── IaaS                       [Infrastructure as a Service]
              │     │     ├── ComputeIaaS
              │     │     ├── StorageIaaS
              │     │     └── NetworkIaaS
              │     ├── PaaS                       [Platform as a Service]
              │     │     ├── ApplicationPaaS
              │     │     ├── DatabasePaaS
              │     │     ├── IntegrationPaaS
              │     │     └── AIMLPaaS
              │     ├── SaaS                       [Software as a Service]
              │     │     ├── BusinessApplicationSaaS
              │     │     ├── CollaborationSaaS
              │     │     └── AnalyticsSaaS
              │     └── XaaS                       [Anything-as-a-Service extensions]
              │           ├── FaaS                 [Function as a Service / Serverless]
              │           ├── CaaS                 [Container as a Service]
              │           ├── DaaS                 [Data as a Service]
              │           ├── BaaS                 [Backend as a Service]
              │           └── SecaaS               [Security as a Service]
              │
              ├── CloudDeploymentModel            [Deployment context classification]
              │     ├── PublicCloud
              │     ├── PrivateCloud
              │     │     ├── OnPremisesPrivateCloud
              │     │     └── HostedPrivateCloud
              │     ├── HybridCloud
              │     │     ├── HybridCloudStrategy
              │     │     └── HybridCloudConnectivity
              │     ├── MultiCloud
              │     │     ├── MultiCloudStrategy
              │     │     └── MultiCloudManagement
              │     └── CommunityCloud
              │
              ├── CloudResource                   [Abstract: any consumable cloud entity]
              │     ├── ComputeResource            [Processing and execution resources]
              │     │     ├── VirtualMachine
              │     │     │     ├── GeneralPurposeVM
              │     │     │     ├── MemoryOptimizedVM
              │     │     │     ├── ComputeOptimizedVM
              │     │     │     └── GPUAcceleratedVM
              │     │     ├── Container
              │     │     │     ├── DockerContainer
              │     │     │     └── OCI_Container
              │     │     ├── ServerlessFunction
              │     │     ├── BareMetalServer
              │     │     └── EdgeComputeNode
              │     │
              │     ├── StorageResource            [Data persistence resources]
              │     │     ├── BlockStorage
              │     │     │     ├── SSDBlockStorage
              │     │     │     └── HDDBlockStorage
              │     │     ├── ObjectStorage
              │     │     ├── FileStorage
              │     │     │     ├── NFSStorage
              │     │     │     └── SMBStorage
              │     │     ├── ArchiveStorage
              │     │     └── EphemeralStorage
              │     │
              │     ├── NetworkResource            [Connectivity and routing resources]
              │     │     ├── VirtualNetwork
              │     │     │     ├── VPC
              │     │     │     └── VLAN
              │     │     ├── LoadBalancer
              │     │     │     ├── ApplicationLoadBalancer
              │     │     │     └── NetworkLoadBalancer
              │     │     ├── DNSService
              │     │     ├── CDN
              │     │     ├── VPNGateway
              │     │     ├── DirectConnectLink
              │     │     └── Firewall
              │     │           ├── NetworkFirewall
              │     │           └── WAF
              │     │
              │     └── ManagedService             [Provider-managed higher-level services]
              │           ├── ManagedDatabase
              │           │     ├── RelationalDatabase
              │           │     ├── NoSQLDatabase
              │           │     ├── InMemoryDatabase
              │           │     └── TimeSeriesDatabase
              │           ├── ManagedMessageQueue
              │           ├── ManagedCacheService
              │           ├── ManagedSearchService
              │           └── ManagedMLService
              │
              ├── CloudArchitecturalPattern       [Reusable architectural solutions]
              │     ├── ComputePattern
              │     │     ├── MicroservicesPattern
              │     │     ├── ServerlessPattern
              │     │     ├── EventDrivenPattern
              │     │     └── ServiceMeshPattern
              │     ├── DataPattern
              │     │     ├── LambdaArchitecturePattern
              │     │     ├── KappaArchitecturePattern
              │     │     ├── DataLakePattern
              │     │     └── CQRSPattern
              │     ├── ResiliencyPattern
              │     │     ├── CircuitBreakerPattern
              │     │     ├── RetryPattern
              │     │     ├── BulkheadPattern
              │     │     └── SagaPattern
              │     └── SecurityPattern
              │           ├── ZeroTrustPattern
              │           ├── DefenseInDepthPattern
              │           └── SecretsManagementPattern
              │
              ├── CloudInfrastructure             [Physical and virtual infrastructure]
              │     ├── DataCenter
              │     │     ├── HyperscaleDataCenter
              │     │     └── EdgeDataCenter
              │     ├── AvailabilityZone
              │     ├── CloudRegion
              │     ├── PhysicalHost
              │     ├── Hypervisor
              │     │     ├── TypeOneHypervisor
              │     │     └── TypeTwoHypervisor
              │     └── ContainerOrchestrationPlatform
              │           └── KubernetesPlatform
              │
              ├── CloudSecurity                   [Security-specific concepts]
              │     ├── IdentityAccessManagement
              │     │     ├── FederatedIdentity
              │     │     ├── ServiceAccount
              │     │     └── RoleBasedAccessControl
              │     ├── CloudEncryption
              │     │     ├── DataAtRestEncryption
              │     │     └── DataInTransitEncryption
              │     ├── SecurityControl
              │     │     ├── PreventiveControl
              │     │     ├── DetectiveControl
              │     │     └── CorrectiveControl
              │     ├── ComplianceFramework
              │     │     ├── RegulatoryCompliance
              │     │     └── IndustryStandardCompliance
              │     └── ThreatModel
              │           ├── CloudThreat
              │           └── Vulnerability
              │
              ├── CloudNetworkTopology            [Network architecture concepts]
              │     ├── HubAndSpokeTopology
              │     ├── MeshTopology
              │     ├── TransitNetworkTopology
              │     └── ServiceMesh
              │           ├── SidecarProxy
              │           └── ControlPlane
              │
              ├── CloudGovernance                 [Governance, policy, compliance concepts]
              │     ├── CloudPolicy
              │     │     ├── ResourcePolicy
              │     │     ├── SecurityPolicy
              │     │     └── CostPolicy
              │     ├── CloudOrganizationalUnit
              │     │     ├── ManagementGroup
              │     │     ├── CloudAccount
              │     │     └── ResourceGroup
              │     ├── TaggingStrategy
              │     └── LandingZone
              │           ├── FoundationLandingZone
              │           └── ApplicationLandingZone
              │
              ├── CloudOperations                 [Operational management concepts]
              │     ├── Observability
              │     │     ├── Monitoring
              │     │     ├── Logging
              │     │     ├── Tracing
              │     │     └── MetricsCollection
              │     ├── SiteReliabilityEngineering
              │     │     ├── SLI                  [Service Level Indicator]
              │     │     ├── SLO                  [Service Level Objective]
              │     │     └── SLA                  [Service Level Agreement]
              │     ├── DisasterRecovery
              │     │     ├── BackupStrategy
              │     │     ├── RecoveryPlan
              │     │     └── FailoverMechanism
              │     └── CloudAutomation
              │           ├── InfrastructureAsCode
              │           ├── ConfigurationManagement
              │           └── CI_CD_Pipeline
              │
              ├── CloudEconomics                  [FinOps and cost management]
              │     ├── CloudPricingModel
              │     │     ├── OnDemandPricing
              │     │     ├── ReservedCapacityPricing
              │     │     ├── SpotPricing
              │     │     └── SavingsPlan
              │     ├── CostOptimizationStrategy
              │     ├── FinOpsCapability
              │     └── CloudBudget
              │
              ├── CloudProvider                   [Cloud service provider entities]
              │     ├── HyperscaleProvider
              │     │     ├── AWSProvider
              │     │     ├── AzureProvider
              │     │     └── GCPProvider
              │     ├── RegionalProvider
              │     └── ManagedServiceProvider
              │
              └── CloudStakeholder               [Actors and roles in cloud ecosystems]
                    ├── CloudConsumer
                    ├── CloudBroker
                    ├── CloudAuditor
                    └── CloudCarrier
```

### 2.2 Class Definitions

| Class | IRI Fragment | Parent Class | OWL Type | Description | Source Standard |
|---|---|---|---|---|---|
| `CloudDomain` | cafo:CloudDomain | ArchitectureDomain | owl:Class | Root class encompassing all cloud computing architecture concepts, aligned with ISO/IEC 17788 cloud vocabulary | ISO/IEC 17788 |
| `CloudServiceModel` | cafo:CloudServiceModel | CloudDomain | owl:Class | Abstract classification of cloud service delivery models; instances are mutually exclusive service categories | NIST SP 800-145 |
| `IaaS` | cafo:IaaS | CloudServiceModel | owl:Class | Infrastructure as a Service: provider manages physical/virtual infrastructure; consumer controls OS, middleware, applications | NIST SP 800-145 §3.2.1 |
| `PaaS` | cafo:PaaS | CloudServiceModel | owl:Class | Platform as a Service: provider manages infrastructure + runtime; consumer deploys applications on managed platform | NIST SP 800-145 §3.2.2 |
| `SaaS` | cafo:SaaS | CloudServiceModel | owl:Class | Software as a Service: provider manages entire stack; consumer configures application through limited interfaces | NIST SP 800-145 §3.2.3 |
| `FaaS` | cafo:FaaS | XaaS | owl:Class | Function as a Service / Serverless compute: event-triggered stateless functions with automatic scaling to zero | CNCF Serverless WG |
| `CaaS` | cafo:CaaS | XaaS | owl:Class | Container as a Service: managed container lifecycle including orchestration, scheduling, and networking | OCI / CNCF |
| `CloudDeploymentModel` | cafo:CloudDeploymentModel | CloudDomain | owl:Class | Classification of cloud infrastructure deployment and ownership models | NIST SP 800-145 §3.3 |
| `PublicCloud` | cafo:PublicCloud | CloudDeploymentModel | owl:Class | Infrastructure owned by provider, shared among multiple tenants, accessible via public internet or dedicated circuits | NIST SP 800-145 |
| `PrivateCloud` | cafo:PrivateCloud | CloudDeploymentModel | owl:Class | Dedicated cloud infrastructure provisioned exclusively for a single organization | NIST SP 800-145 |
| `HybridCloud` | cafo:HybridCloud | CloudDeploymentModel | owl:Class | Composition of two or more distinct cloud deployments (private/public) bound by standardized technology enabling data/app portability | NIST SP 800-145 |
| `MultiCloud` | cafo:MultiCloud | CloudDeploymentModel | owl:Class | Use of multiple public cloud provider services by a single organization to avoid vendor lock-in and optimize capabilities | Gartner / CNCF |
| `CloudResource` | cafo:CloudResource | CloudDomain | owl:Class | Abstract superclass for any consumable, measurable cloud artifact that can be provisioned, configured, and managed | ISO/IEC 17789 |
| `ComputeResource` | cafo:ComputeResource | CloudResource | owl:Class | Cloud resources providing processing capability including virtual machines, containers, and serverless functions | CSA |
| `VirtualMachine` | cafo:VirtualMachine | ComputeResource | owl:Class | Software-defined compute instance running on hypervisor-managed infrastructure with isolated OS and resource allocation | VMware / IEEE |
| `Container` | cafo:Container | ComputeResource | owl:Class | Lightweight, portable execution environment sharing host OS kernel with isolated userspace, packages, and dependencies | OCI Spec |
| `ServerlessFunction` | cafo:ServerlessFunction | ComputeResource | owl:Class | Stateless, event-triggered execution unit managed entirely by provider; scales from zero; billed per invocation | CNCF |
| `StorageResource` | cafo:StorageResource | CloudResource | owl:Class | Cloud resources providing data persistence and retrieval capabilities | SNIA |
| `ObjectStorage` | cafo:ObjectStorage | StorageResource | owl:Class | Flat namespace storage of binary objects with metadata and unique identifier; accessed via HTTP API; infinitely scalable | SNIA Cloud Storage |
| `BlockStorage` | cafo:BlockStorage | StorageResource | owl:Class | Raw storage volumes presented as block devices to compute resources; supports filesystem formatting | SNIA |
| `NetworkResource` | cafo:NetworkResource | CloudResource | owl:Class | Cloud resources providing network connectivity, routing, load distribution, and security enforcement | IETF / IEEE |
| `VPC` | cafo:VPC | VirtualNetwork | owl:Class | Virtual Private Cloud: logically isolated network partition within public cloud with customer-controlled IP ranges and routing | AWS/GCP/Azure |
| `CloudArchitecturalPattern` | cafo:CloudArchitecturalPattern | CloudDomain | owl:Class | Reusable, named solution to a recurring architectural problem in cloud environments; includes context, forces, and consequences | Fowler / CNCF |
| `MicroservicesPattern` | cafo:MicroservicesPattern | ComputePattern | owl:Class | Architectural style structuring application as small, independent, loosely coupled services deployable autonomously | Martin Fowler / CNCF |
| `ServerlessPattern` | cafo:ServerlessPattern | ComputePattern | owl:Class | Execution model delegating all infrastructure management to provider; applications composed of event-triggered functions | CNCF Serverless WG |
| `EventDrivenPattern` | cafo:EventDrivenPattern | ComputePattern | owl:Class | Architecture centered on production, detection, consumption, and reaction to events via asynchronous messaging | EDA / CNCF |
| `CircuitBreakerPattern` | cafo:CircuitBreakerPattern | ResiliencyPattern | owl:Class | Pattern preventing cascade failures by monitoring failure rates and short-circuiting requests to failing services | Netflix OSS |
| `ZeroTrustPattern` | cafo:ZeroTrustPattern | SecurityPattern | owl:Class | Security model requiring explicit verification of every request regardless of network location; never trust, always verify | NIST SP 800-207 |
| `CloudInfrastructure` | cafo:CloudInfrastructure | CloudDomain | owl:Class | Physical and virtual infrastructure components forming the foundation of cloud service delivery | NIST |
| `AvailabilityZone` | cafo:AvailabilityZone | CloudInfrastructure | owl:Class | Distinct, isolated data center location within a region with independent power, cooling, and networking | AWS/Azure/GCP |
| `CloudRegion` | cafo:CloudRegion | CloudInfrastructure | owl:Class | Geographically distinct area containing one or more availability zones; defines data residency boundary | CSP definitions |
| `LandingZone` | cafo:LandingZone | CloudGovernance | owl:Class | Pre-configured, policy-driven cloud environment providing secure, scalable foundation for workload deployment | AWS CAF / Azure CAF |
| `CloudSecurity` | cafo:CloudSecurity | CloudDomain | owl:Class | Domain encompassing all security concepts, controls, identities, and compliance frameworks applied to cloud environments | CSA CCM / ISO 27017 |
| `IdentityAccessManagement` | cafo:IdentityAccessManagement | CloudSecurity | owl:Class | Framework managing digital identities, authentication mechanisms, authorization policies, and access controls | NIST SP 800-63 |
| `ComplianceFramework` | cafo:ComplianceFramework | CloudSecurity | owl:Class | Structured set of controls, standards, and requirements an organization must adhere to for regulatory or contractual obligations | ISO 27001 / SOC2 |
| `CloudGovernance` | cafo:CloudGovernance | CloudDomain | owl:Class | Policies, processes, controls, and organizational structures ensuring cloud usage aligns with business objectives and constraints | COBIT / TOGAF |
| `CloudOperations` | cafo:CloudOperations | CloudDomain | owl:Class | Operational practices, tooling, and processes for running, monitoring, and maintaining cloud workloads reliably | SRE / ITIL |
| `Observability` | cafo:Observability | CloudOperations | owl:Class | Capability to understand system internal state from external outputs: logs, metrics, and traces | CNCF Observability SIG |
| `SLA` | cafo:SLA | SiteReliabilityEngineering | owl:Class | Service Level Agreement: contractual commitment on service behavior, availability, and performance metrics | ITIL / SRE |
| `InfrastructureAsCode` | cafo:InfrastructureAsCode | CloudAutomation | owl:Class | Practice of managing infrastructure through machine-readable definition files enabling versioned, reproducible environments | HashiCorp / AWS |
| `CloudEconomics` | cafo:CloudEconomics | CloudDomain | owl:Class | Domain covering cloud pricing models, cost optimization strategies, and financial management practices (FinOps) | FinOps Foundation |
| `FinOpsCapability` | cafo:FinOpsCapability | CloudEconomics | owl:Class | Organizational capability for managing cloud financial accountability enabling data-driven spending decisions | FinOps Foundation |
| `CloudProvider` | cafo:CloudProvider | CloudDomain | owl:Class | Legal entity offering cloud services and managing underlying infrastructure resources to consumers | NIST SP 800-145 |
| `CloudStakeholder` | cafo:CloudStakeholder | CloudDomain | owl:Class | Actor with a role, interest, or responsibility in a cloud computing ecosystem | ISO/IEC 17789 |

---

## 3. Object Properties

| Property Name | Domain Class | Range Class | Inverse Property | Cardinality | Functional | Description |
|---|---|---|---|---|---|---|
| `hasServiceModel` | CloudDomain | CloudServiceModel | `isServiceModelOf` | 1..* | No | Relates a cloud solution to its service delivery model classification |
| `hasDeploymentModel` | CloudDomain | CloudDeploymentModel | `isDeploymentModelOf` | 1..1 | Yes | Associates a cloud solution with its deployment topology model |
| `hostedIn` | CloudResource | CloudInfrastructure | `hosts` | 1..* | No | Indicates the infrastructure component where a resource is physically/virtually hosted |
| `deployedIn` | CloudResource | CloudRegion | `containsResource` | 1..* | No | Specifies the geographic region where a cloud resource is deployed |
| `residesInAZ` | CloudResource | AvailabilityZone | `containsResource` | 1..* | No | Associates a resource with a specific availability zone for fault isolation |
| `dependsOn` | CloudResource | CloudResource | `isDependencyOf` | 0..* | No | Models runtime or build-time dependency between cloud resources; used for impact analysis |
| `isProvisionedBy` | CloudResource | CloudProvider | `provisions` | 1..1 | Yes | Links a resource to the cloud service provider responsible for its underlying management |
| `implementsPattern` | CloudResource | CloudArchitecturalPattern | `isImplementedBy` | 0..* | No | Indicates that a resource implementation conforms to a specific architectural pattern |
| `hasSecurityControl` | CloudResource | SecurityControl | `appliedTo` | 0..* | No | Associates security controls enforced on or by a cloud resource |
| `encryptedWith` | CloudResource | CloudEncryption | `encryptionAppliedTo` | 0..* | No | Specifies the encryption mechanism protecting a cloud resource |
| `governedBy` | CloudResource | CloudPolicy | `governs` | 0..* | No | Associates governance policies that control the behavior or configuration of a resource |
| `managedBy` | CloudResource | CloudStakeholder | `manages` | 1..1 | Yes | Identifies the primary stakeholder responsible for managing a resource |
| `connectsTo` | NetworkResource | CloudResource | `receivesConnectionFrom` | 0..* | No | Models network connectivity between cloud resources |
| `routesTrafficTo` | LoadBalancer | CloudResource | `receivesTrafficFrom` | 1..* | No | Indicates the backend resources to which a load balancer distributes traffic |
| `replicatedAcross` | StorageResource | AvailabilityZone | `hostsReplicaOf` | 2..* | No | Specifies availability zones across which storage data is replicated for durability |
| `isPartOf` | CloudResource | CloudResource | `hasPart` | 0..1 | Yes | Whole-part composition between cloud resources (e.g., Container is part of Pod) |
| `orchestratedBy` | Container | ContainerOrchestrationPlatform | `orchestrates` | 0..1 | Yes | Links containers to their container orchestration platform manager |
| `satisfiesSLA` | CloudService | SLA | `isSatisfiedBy` | 0..* | No | Indicates the SLA agreements a cloud service is contractually committed to fulfil |
| `hasObservabilityCapability` | CloudResource | Observability | `observes` | 0..1 | No | Associates observability tooling (monitoring, logging, tracing) with a resource |
| `triggeredBy` | ServerlessFunction | CloudResource | `triggers` | 1..* | No | Models the event source or trigger mechanism that invokes a serverless function |
| `usesIAM` | CloudResource | IdentityAccessManagement | `controlsAccessTo` | 0..1 | Yes | Associates an IAM policy or role with a resource's access control mechanism |
| `conformsTo` | CloudResource | ComplianceFramework | `isAppliedTo` | 0..* | No | Specifies compliance frameworks (SOC2, HIPAA, PCI-DSS) a resource adheres to |
| `pricedWith` | CloudResource | CloudPricingModel | `pricesResource` | 0..1 | Yes | Associates a billing and pricing model with a cloud resource |
| `backedUpBy` | CloudResource | BackupStrategy | `protects` | 0..* | No | Links a resource to its data protection and backup strategy |
| `failsOverTo` | CloudResource | CloudResource | `isFailoverTargetOf` | 0..1 | Yes | Identifies the disaster recovery failover target for a cloud resource |
| `deployedUsing` | CloudResource | InfrastructureAsCode | `provisions` | 0..1 | No | Associates an IaC template or tool with resource deployment configuration |
| `belongsToOrganizationalUnit` | CloudResource | CloudOrganizationalUnit | `containsResource` | 1..1 | Yes | Organizational scoping: links resources to management groups, accounts, or resource groups |
| `accessedV