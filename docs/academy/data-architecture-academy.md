# Data Architecture Academy

## Overview

Data Architecture is the foundation of modern systems. This comprehensive learning module covers database design, data modeling, polyglot persistence, replication strategies, and data lifecycle management.

**Difficulty:** Intermediate  
**Prerequisites:** Basic understanding of databases  
**Time to Master:** 3–6 months with hands-on practice

---

## 1. Context

### Why Data Architecture Matters

Every modern system generates, processes, and stores data. How you architect your data layer fundamentally determines:

- **Performance** — Query latency and throughput
- **Scalability** — Growth capacity and cost
- **Reliability** — Data durability and disaster recovery
- **Compliance** — GDPR, CCPA, HIPAA, SOX requirements
- **Cost** — Storage, compute, and operational expenses

### Business Drivers

- **Growing Data Volumes** — Exponential data growth (IoT, events, analytics)
- **Real-Time Requirements** — Immediate data availability and processing
- **Global Scale** — Multi-region distribution and disaster recovery
- **Diverse Use Cases** — Transactional, analytical, streaming workloads
- **Regulatory Pressure** — Data governance, privacy, compliance

### Technical Evolution

```
1980s–1990s: Relational Dominance
  └─ All data fits in tables
  
2000s: Scale Challenges
  └─ Need for horizontal scaling
  
2010s: Polyglot Persistence
  └─ Different databases for different workloads
  
2020s: Data Mesh & Semantic Layer
  └─ Domain ownership + centralized meaning
```

---

## 2. Core Concepts

### Relational Databases (RDBMS)

**What:** Structured data in tables with defined schemas  
**Examples:** PostgreSQL, Oracle, MySQL, SQL Server

**Strengths:**
- ACID guarantees (Atomicity, Consistency, Isolation, Durability)
- Flexible querying with SQL
- Data integrity through constraints
- Mature tooling and expertise

**Weaknesses:**
- Vertical scaling limits
- Schema changes require downtime
- Not ideal for unstructured data

**Best For:** Transactional systems, financial records, structured business data

### NoSQL Databases

#### Document Stores (MongoDB, Firestore, CouchDB)
- Flexible schema (schemaless)
- Horizontal scalability
- JSON-like data structures
- Aggregation pipelines

#### Key-Value Stores (Redis, Memcached, DynamoDB)
- Ultra-fast lookups
- Simple data model
- Cache layer
- Session stores

#### Column-Family (HBase, Cassandra)
- Time-series data optimization
- Wide columns
- Distributed architecture
- Analytics workloads

#### Search Engines (Elasticsearch, Solr)
- Full-text search
- Aggregations
- Fuzzy matching
- Real-time indexing

### Graph Databases (Neo4j, ArangoDB)

**Strengths:**
- Natural representation of relationships
- Fast traversal of connections
- Recursive queries
- Recommendation engines

**Use Cases:** Social networks, knowledge graphs, recommendation systems

### Time-Series Databases (InfluxDB, Prometheus, TimescaleDB)

**Optimized For:**
- Metrics and monitoring data
- Stock prices and quotes
- Sensor readings
- Application performance monitoring

**Characteristics:**
- Append-only data model
- Downsampling and aggregation
- Fast range queries
- Built-in retention policies

---

## 3. Knowledge Graph

```
┌─────────────────────────────────────────────────────────┐
│                  DATA ARCHITECTURE                      │
└──────────────────┬──────────────────────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
    [DESIGN]   [SCALABILITY] [OPERATIONS]
        │          │          │
        │          │          │
    ┌───┴────┐   ┌──┴───┐   ┌──┴────┐
    │         │   │      │   │       │
    ▼         ▼   ▼      ▼   ▼       ▼
  Data      Schema Sharding Replication Backup
  Modeling  Design Strategy   Model      Policy
    │         │       │        │         │
    └─────────┴───────┴────────┴─────────┘
              │
    ┌─────────┴──────────┐
    │                    │
    ▼                    ▼
[CONSISTENCY]      [AVAILABILITY]
    │                    │
    ├─ACID              ├─Eventual
    ├─Strong Consistency ├─Weak Consistency
    ├─Transactions      ├─BASE Model
    └─Locks             └─CRDTs


DATABASE SELECTION MATRIX:
─────────────────────────

                    Consistency  Availability  Partition Tolerance
RDBMS (ACID)           ✓✓            -              -
Cassandra (NoSQL)       -            ✓✓             ✓✓
DynamoDB               ✓             ✓              ✓
MongoDB                ✓             ✓              ✓
```

---

## 4. Ontologies & Classifications

### Database Taxonomy

```
DATABASES
├── Relational (RDBMS)
│   ├── Strict Schema
│   ├── ACID Transactions
│   └── Examples: PostgreSQL, Oracle
│
├── NoSQL
│   ├── Document
│   │   ├── Flexible Schema
│   │   └── Examples: MongoDB, Firestore
│   ├── Key-Value
│   │   ├── O(1) Lookups
│   │   └── Examples: Redis, DynamoDB
│   ├── Column-Family
│   │   ├── Columnar Storage
│   │   └── Examples: Cassandra, HBase
│   └── Search
│       ├── Inverted Indexes
│       └── Examples: Elasticsearch
│
├── Graph
│   ├── Relationship-First
│   └── Examples: Neo4j
│
└── Specialized
    ├── Time-Series (InfluxDB, Prometheus)
    ├── Vector/Embedding (Pinecone, Weaviate)
    └── Spatial (PostGIS, MongoDB Geospatial)
```

### Consistency Models

| Model | Guarantees | Latency | Use Cases |
|---|---|---|---|
| **Strong** | All reads see latest write | High | Financial systems, inventory |
| **Eventual** | Reads converge to latest | Low | Social media, caching |
| **Causal** | Order preserved for related ops | Medium | Messaging, versioning |
| **Session** | Per-client consistency | Low | Web sessions, user preferences |

---

## 5. Relationships to Other Domains

### Integration Architecture
- **Connection:** APIs and ETL pipelines move data between databases
- **Dependency:** API contracts define data formats
- **Pattern:** CDC (Change Data Capture) feeds event streams

### AI/ML Architecture
- **Connection:** Training data comes from data warehouses
- **Dependency:** Feature stores integrate with databases
- **Pattern:** Data pipelines → Feature Engineering → Model Training

### Analytics Architecture
- **Connection:** OLAP systems read from data warehouses
- **Dependency:** Fact and dimension tables design
- **Pattern:** Data marts → BI dashboards → Insights

### Observability Architecture
- **Connection:** Time-series databases store metrics
- **Dependency:** Metric schema design
- **Pattern:** Collector → TSDB → Grafana visualizations

### Security Architecture
- **Connection:** Encryption at rest and in transit
- **Dependency:** Key management integration
- **Pattern:** Transparent Data Encryption (TDE)

---

## 6. Best Practices

### Design Principles

1. **Know Your Access Patterns First**
   - RDBMS for relational queries
   - NoSQL for simple lookups
   - Graph for traversals

2. **Normalize for RDBMS, Denormalize for NoSQL**
   - Relational: Third Normal Form (3NF)
   - Document: Embedding related data

3. **Plan for Scale from Day One**
   - Sharding strategy
   - Replication factor
   - Backup retention

4. **Separate Transactional from Analytical**
   - OLTP: PostgreSQL, MySQL (real-time operations)
   - OLAP: Data warehouse, data lake (analytical queries)
   - Sync with CDC, ETL

### Scaling Strategies

#### Vertical Scaling
- Upgrade hardware (CPU, RAM, storage)
- Easier but has limits
- Good for growth phase

#### Horizontal Scaling

**Read Replicas**
- Copy data to read-only instances
- Distribute read load
- Potential consistency lag

**Sharding**
- Partition data by key (customer ID, region)
- Each shard manages subset
- Must handle cross-shard queries carefully

**Partitioning**
- Table partitioning within single database
- Time-based partitioning common (monthly tables)
- Improves query performance on large tables

### Replication Patterns

**Master-Slave (Leader-Follower)**
- One primary, multiple replicas
- Reads from replicas, writes to primary
- Simple but single point of failure

**Master-Master (Multi-Leader)**
- Multiple primaries, bidirectional sync
- High availability and write capacity
- Complex conflict resolution

**Ring Topology (Cassandra, DynamoDB)**
- Distributed hash ring
- No single leader
- Automatic failover

### Data Lifecycle Management

```
Birth → Growth → Maturity → Archive → Delete

1. Hot Data (0–30 days)
   └─ SSD storage, full replicas, immediate access
   
2. Warm Data (30 days–1 year)
   └─ Standard storage, fewer replicas, slower access
   
3. Cold Data (1–7 years)
   └─ Archival storage (S3 Glacier), rare access
   
4. Deletion
   └─ GDPR/CCPA right to be forgotten
```

---

## 7. Implementation Checklists

### Design Phase

- [ ] Identify access patterns (reads, writes, queries)
- [ ] Estimate data volume and growth rate
- [ ] Determine consistency requirements (ACID vs. eventual)
- [ ] Define retention and compliance needs
- [ ] Choose primary database type
- [ ] Plan for replication and failover
- [ ] Design sharding strategy (if needed)
- [ ] Plan backup and recovery RPO/RTO
- [ ] Estimate cost (storage, compute, egress)
- [ ] Security and encryption strategy

### Implementation Phase

- [ ] Set up database infrastructure
- [ ] Configure replication and failover
- [ ] Implement backup procedures
- [ ] Set up monitoring and alerting
- [ ] Load test with expected data volume
- [ ] Test failover procedures
- [ ] Document schema and constraints
- [ ] Set up database user roles and permissions
- [ ] Create runbooks for common operations
- [ ] Train team on operational procedures

### Operational Phase

- [ ] Monitor query performance (slow logs)
- [ ] Track replication lag
- [ ] Validate backups regularly
- [ ] Schedule index maintenance
- [ ] Review and optimize expensive queries
- [ ] Monitor disk usage and growth
- [ ] Test disaster recovery regularly
- [ ] Update documentation with learnings

---

## 8. References

### Standards & Frameworks
- **ACID** — Atomicity, Consistency, Isolation, Durability (ISO/IEC 10020)
- **BASE** — Basically Available, Soft state, Eventually consistent
- **CAP Theorem** — Consistency, Availability, Partition tolerance
- **DAMA-DMBOK** — Data management framework

### Key Papers
- "A Critique of ANSI SQL Isolation Levels" (Adya et al., 1995)
- "Designing Geo-Distributed Databases" (Google Cloud)
- "Consistent Hashing and Random Trees" (Karger et al., 1997)

### Standards Documents
- **SQL:2016** — Standard SQL language
- **ACID Transactions** — ISO/IEC standards
- **Data Governance** — ISO 8000 (data quality)

### Certifications
- AWS Database Services (DAS-C01)
- Azure Database Engineer (DP-165)
- Google Cloud Certified Data Engineer

### Tools & Technologies

**Relational:** PostgreSQL, MySQL, Oracle, SQL Server  
**NoSQL:** MongoDB, Cassandra, Redis, DynamoDB  
**Data Warehouse:** Snowflake, BigQuery, Redshift  
**Analytics:** Apache Spark, Presto, Drill  
**Change Data Capture:** Debezium, AWS DMS  
**Feature Store:** Feast, Tecton, Hopsworks  

---

## 9. Code Examples

### PostgreSQL: Basic Schema

```sql
-- Users table with constraints
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT valid_email CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Transactions table
CREATE TABLE transactions (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(19,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_created_at ON transactions(created_at);
```

### MongoDB: Document Design

```javascript
// Users collection with flexible schema
db.users.insertOne({
  _id: ObjectId("..."),
  email: "user@example.com",
  name: "John Doe",
  profile: {
    avatar: "https://...",
    bio: "Engineer",
    preferences: {
      notifications: true,
      theme: "dark"
    }
  },
  transactions: [
    {
      id: "tx-123",
      amount: 100.00,
      timestamp: new Date(),
      status: "completed"
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
});

// Aggregation pipeline
db.users.aggregate([
  { $match: { "profile.preferences.notifications": true } },
  { $unwind: "$transactions" },
  { $group: {
      _id: "$_id",
      totalTransactions: { $sum: "$transactions.amount" },
      avgTransaction: { $avg: "$transactions.amount" }
    }
  },
  { $sort: { totalTransactions: -1 } }
]);
```

### Cassandra: Distributed Schema

```sql
-- Distributed time-series data
CREATE KEYSPACE events WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'us-east': 3,
  'eu-west': 3
};

CREATE TABLE events.user_events (
  user_id UUID,
  event_time TIMESTAMP,
  event_type TEXT,
  event_data MAP<TEXT, TEXT>,
  PRIMARY KEY ((user_id), event_time)
) WITH CLUSTERING ORDER BY (event_time DESC)
  AND compaction = {'class': 'TimeWindowCompactionStrategy'};
```

### Terraform: Database as Code

```hcl
# AWS RDS PostgreSQL
resource "aws_db_instance" "production" {
  allocated_storage = 100
  engine            = "postgres"
  engine_version    = "14.7"
  instance_class    = "db.r6i.xlarge"
  db_name           = "production"
  
  # High availability
  multi_az           = true
  publicly_accessible = false
  
  # Performance
  storage_type      = "gp3"
  iops              = 3000
  
  # Backup
  backup_retention_period = 30
  backup_window          = "03:00-04:00"
  
  # Encryption
  storage_encrypted  = true
  kms_key_id         = aws_kms_key.db.arn
  
  tags = {
    Environment = "production"
    Team        = "data"
  }
}
```

---

## Learning Path

### Week 1–2: Fundamentals
- [ ] Read: Relational vs. NoSQL comparison
- [ ] Practice: Design schema for simple application
- [ ] Watch: CAP theorem explained

### Week 3–4: Scaling
- [ ] Read: Sharding strategies
- [ ] Practice: Plan sharding key for user dataset
- [ ] Watch: Replication patterns

### Week 5–6: Operations
- [ ] Read: Backup strategies and PITR
- [ ] Practice: Design disaster recovery plan
- [ ] Watch: Monitoring and troubleshooting

### Months 2–6: Deep Dive
- [ ] Contribute: Optimize slow queries in production
- [ ] Design: Complete data architecture for new product
- [ ] Share: Teach team on your learnings

---

## Common Challenges & Solutions

| Challenge | Solution |
|---|---|
| Slow queries | Index analysis, query optimization, data partitioning |
| Replication lag | Increase network bandwidth, optimize transaction size |
| Disk space explosion | Archival strategy, compression, data cleanup |
| Backup complexity | Automated backups, CDC, versioning |
| Schema changes | Blue-green deployments, zero-downtime techniques |

---

## Next Steps

1. **Choose Your Database** — Start with relational if unsure, expand to specialized types
2. **Design Your Schema** — Think access patterns first
3. **Plan for Scale** — Even if small now, think growth
4. **Automate Operations** — Backups, monitoring, failover
5. **Monitor & Optimize** — Never stop improving

---

**Module Version:** 1.0  
**Last Updated:** 2026-06-05  
**Difficulty:** Intermediate  
**Time to Complete:** 6–12 weeks with hands-on practice  
**Next Module:** [Integration Architecture Academy](integration-architecture-academy.md)

