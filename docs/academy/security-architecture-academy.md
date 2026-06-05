# Security Architecture Academy

## Overview

Security Architecture is about designing systems that defend against threats while enabling business objectives. This module covers threat modeling, cryptography, zero-trust design, IAM, and security controls.

**Difficulty:** Advanced  
**Prerequisites:** Basic networking, cryptography concepts  
**Time to Master:** 6–12 months

---

## 1. Context

### Why Security Architecture Matters

Security breaches cost organizations millions and destroy trust. Proper architecture:

- **Prevents** unauthorized access
- **Detects** attacks in progress
- **Responds** quickly to incidents
- **Complies** with regulations
- **Maintains** business continuity

### Business Impact of Poor Security

- **2023 Breach Cost:** $4.45M average (Ponemon Institute)
- **Regulatory Fines:** GDPR violations up to €20M or 4% revenue
- **Reputation Damage:** 73% lose customer trust after breach
- **Downtime:** Average incident response time: 277 days to detect

### Security Landscape Evolution

```
2000s: Perimeter-Based (Firewalls)
  └─ "Trust inside, distrust outside"
  
2010s: Defense in Depth
  └─ Multiple layers (firewall, IDS, WAF, encryption)
  
2020s: Zero-Trust Architecture
  └─ "Never trust, always verify"
  
2020s+: AI-Driven Security
  └─ Behavioral analysis, anomaly detection
```

---

## 2. Core Concepts

### Threat Modeling

**Process:** Identify threats, vulnerabilities, and mitigations

**STRIDE Framework**
```
S - Spoofing (impersonation)
T - Tampering (modification)
R - Repudiation (denial of action)
I - Information Disclosure (confidentiality)
D - Denial of Service (availability)
E - Elevation of Privilege (authorization)
```

**OCTAVE Framework**
- Asset-driven approach
- Identify risks and practices
- Practical for organizations

**Example Threat Model:**
```
Web Application
├── Login API
│   ├── Threat: SQL Injection
│   │   └─ Mitigation: Parameterized queries, input validation
│   └── Threat: Credential Stuffing
│       └─ Mitigation: Rate limiting, MFA
├── Payment Processing
│   ├── Threat: MITM Attack
│   │   └─ Mitigation: TLS 1.3, certificate pinning
│   └── Threat: Data Breach
│       └─ Mitigation: Encryption at rest, access logs
└── Admin Dashboard
    ├── Threat: Privilege Escalation
    │   └─ Mitigation: RBAC, audit logs
    └── Threat: Session Hijacking
        └─ Mitigation: Secure cookies, short expiry
```

### Cryptography Fundamentals

**Symmetric Encryption** (Same key)
- AES-256: Fast, widely used
- ChaCha20: Modern, resistant to timing attacks
- Use Case: Encrypt data at rest

**Asymmetric Encryption** (Public/Private key)
- RSA-2048+: Standard but slower
- ECDSA: Smaller keys, same security
- Use Case: Key exchange, digital signatures

**Hashing** (One-way)
- SHA-256: Cryptographically secure
- bcrypt: Password hashing with built-in salt
- Use Case: Password storage, integrity verification

**Authentication Protocols**
```
Basic Auth → API Keys → OAuth 2.0 → OIDC → SAML 2.0
             ↓
    Simple, stateless, but no refresh
                          ↓
                   Industry standard
```

### Zero-Trust Architecture

**Principles:**
1. Verify every user and device
2. Encrypt all data in transit
3. Enforce least privilege access
4. Segment networks
5. Monitor all traffic
6. Assume compromise

**Architecture:**
```
User → Identity Verification
       ↓
       Device Posture Check (patch level, antivirus)
       ↓
       Access Request (what resource, why)
       ↓
       Least Privilege Grant
       ↓
       Encrypt & Monitor
       ↓
       Continuous Verification
```

---

## 3. Knowledge Graph

```
┌──────────────────────────────────────────────┐
│           SECURITY ARCHITECTURE              │
└────────────┬─────────────────────────────────┘
             │
   ┌─────────┼─────────────────┬──────────────┐
   │         │                 │              │
   ▼         ▼                 ▼              ▼
[THREAT]  [CRYPTO]         [IDENTITY]    [MONITORING]
MODELING  GRAPHY           & ACCESS       & RESPONSE
   │         │                 │              │
   │         │                 │              │
   ├─────────┼─────────────────┼──────────────┤
   │         │                 │              │
   ▼         ▼                 ▼              ▼
  Risk    Encryption      Authentication  Detection
 Analysis  Strategy        & Authorization  Rules
   │         │                 │              │
   └─────────┴─────────────────┴──────────────┘
              │
         ┌────┴─────┐
         │           │
         ▼           ▼
    [CONTROLS]  [COMPLIANCE]
         │           │
    Defense,    Standards
    Detection,  (NIST, ISO)
    Response
```

---

## 4. Ontologies

### Security Controls Framework

```
CONTROLS
├── Preventive (stop attacks before they happen)
│   ├── Firewall
│   ├── Intrusion Prevention (IPS)
│   ├── Data Loss Prevention (DLP)
│   └── Access Control
│
├── Detective (identify attacks in progress)
│   ├── SIEM
│   ├── Intrusion Detection (IDS)
│   ├── Log Monitoring
│   └── Threat Intelligence
│
├── Corrective (fix vulnerabilities)
│   ├── Patching
│   ├── Incident Response
│   └── System Restoration
│
└── Compliance (meet regulatory requirements)
    ├── Audit Logs
    ├── Documentation
    └── Reporting
```

### Authentication Methods

| Method | Security | Ease | Cost | Use Case |
|---|---|---|---|---|
| **Password** | Low | High | Free | Internal only |
| **MFA** | High | Medium | Low | All users |
| **OAuth 2.0** | High | High | Free | Social login |
| **SAML 2.0** | High | Medium | Medium | Enterprise SSO |
| **mTLS** | Very High | Low | High | Service-to-service |

---

## 5. Relationships to Other Domains

### Network Architecture
- **Connection:** Network segmentation and firewalls
- **Dependency:** Zero-trust microsegmentation
- **Pattern:** SD-WAN with encrypted tunnels

### Compliance Architecture
- **Connection:** Security controls map to regulatory requirements
- **Dependency:** Audit logs and evidence collection
- **Pattern:** Control matrices (NIST → implementation)

### DevSecOps Architecture
- **Connection:** Shift-left security (scanning in CI/CD)
- **Dependency:** Secure deployment pipelines
- **Pattern:** SBOM generation, vulnerability scanning

### Cloud Architecture
- **Connection:** Cloud-native security (IAM, KMS, WAF)
- **Dependency:** Shared responsibility model
- **Pattern:** Least privilege cloud roles

---

## 6. Best Practices

### Design Principles

1. **Least Privilege**
   - Give minimum permissions needed
   - Review and revoke regularly
   - Time-bound access when possible

2. **Separation of Duties**
   - No single person can compromise system
   - Approval workflows for sensitive actions
   - Regular audit of access

3. **Defense in Depth**
   - Multiple layers, not one perfect layer
   - If one layer fails, others protect
   - Different technologies in different layers

4. **Secure by Default**
   - Deny by default, allow explicitly
   - Encryption on by default
   - Disable unused services

### Key Controls

**Authentication**
```
Single Factor (weak)
├─ Password only
└─ Vulnerable to brute force

Multi-Factor (strong)
├─ Password + TOTP (app)
├─ Password + SMS (good)
└─ Passwordless + biometric (best)
```

**Encryption**
```
Data in Transit
├─ TLS 1.3 (required)
├─ Certificate pinning (for mobile)
└─ Perfect Forward Secrecy (PFS)

Data at Rest
├─ AES-256 with key rotation
├─ Separate key per database
└─ Hardware security modules (HSM)
```

**Access Control**
```
RBAC (Role-Based)
├─ Roles: Admin, Editor, Viewer
├─ Simple and manageable
└─ Good for traditional orgs

ABAC (Attribute-Based)
├─ Attributes: user.department, resource.classification
├─ Fine-grained control
└─ Better for modern orgs

PBAC (Policy-Based)
├─ Policies written in code
├─ Version controlled
└─ Infrastructure as Code approach
```

---

## 7. Implementation Checklists

### Design Phase

- [ ] Perform threat modeling (STRIDE or OCTAVE)
- [ ] Define security requirements and compliance needs
- [ ] Design authentication mechanism (MFA required?)
- [ ] Plan encryption strategy (data in transit, at rest, in use)
- [ ] Define access control model (RBAC, ABAC, PBAC)
- [ ] Design secrets management system
- [ ] Plan key rotation procedures
- [ ] Design audit logging and monitoring
- [ ] Plan incident response procedures
- [ ] Compliance mapping (NIST, ISO, GDPR, etc.)

### Implementation Phase

- [ ] Set up centralized secret management (Vault, AWS Secrets Manager)
- [ ] Implement MFA for all user access
- [ ] Enable TLS 1.3 for all traffic
- [ ] Enable encryption at rest for databases
- [ ] Set up centralized logging (SIEM)
- [ ] Configure intrusion detection
- [ ] Set up DLP (Data Loss Prevention)
- [ ] Implement WAF (Web Application Firewall)
- [ ] Test incident response procedures
- [ ] Security training for developers

### Operational Phase

- [ ] Monthly access review and cleanup
- [ ] Quarterly security training
- [ ] Annual penetration testing
- [ ] Weekly vulnerability scanning
- [ ] Daily log analysis
- [ ] Monthly security patches
- [ ] Incident response drills
- [ ] Key rotation schedule
- [ ] Compliance audit preparation

---

## 8. References

### Standards & Frameworks

- **NIST Cybersecurity Framework** (CSF 2.0) — Industry standard
- **NIST SP 800-53** — Security controls catalog
- **ISO 27001** — Information security management
- **OWASP Top 10** — Application security risks
- **CIS Controls** — Prioritized security actions
- **PCI DSS** — Payment card security

### Key Technologies

**Secret Management:**
- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- Kubernetes Secrets (with external backend)

**Identity & Access:**
- Okta, Auth0
- AWS IAM
- Azure AD
- Keycloak (open source)

**Encryption:**
- Let's Encrypt (TLS certificates)
- HashiCorp Consul (encryption)
- AWS KMS (key management)
- Hardware Security Modules (Thales, YubiHSM)

**Monitoring & Detection:**
- SIEM: Splunk, ELK, Datadog
- WAF: Cloudflare, AWS WAF
- IDS/IPS: Suricata, Snort
- Threat Intelligence: Splunk, Shodan

---

## 9. Code Examples

### TLS Configuration (NGINX)

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;
  
  # Certificate and key
  ssl_certificate /etc/ssl/certs/example.com.crt;
  ssl_certificate_key /etc/ssl/private/example.com.key;
  
  # Modern TLS configuration
  ssl_protocols TLSv1.3 TLSv1.2;
  ssl_ciphers HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;
  
  # HSTS (Strict-Transport-Security)
  add_header Strict-Transport-Security "max-age=31536000" always;
  
  # OCSP stapling
  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /etc/ssl/certs/chain.crt;
}
```

### Password Hashing (Python with bcrypt)

```python
import bcrypt

# Hash password
password = "user_password"
salt = bcrypt.gensalt(rounds=12)
hashed = bcrypt.hashpw(password.encode(), salt)

# Verify password
is_correct = bcrypt.checkpw(password.encode(), hashed)
print(is_correct)  # True
```

### OAuth 2.0 Flow (JavaScript)

```javascript
// Authorization Code Flow
const auth_url = new URL("https://auth.example.com/oauth/authorize");
auth_url.searchParams.set("client_id", CLIENT_ID);
auth_url.searchParams.set("redirect_uri", REDIRECT_URI);
auth_url.searchParams.set("response_type", "code");
auth_url.searchParams.set("scope", "openid profile email");
auth_url.searchParams.set("state", STATE_VALUE);

// Redirect user to authorization server
window.location.href = auth_url.toString();

// After user logs in, exchange code for token
const response = await fetch("https://auth.example.com/oauth/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "authorization_code",
    code: AUTH_CODE,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI
  })
});

const data = await response.json();
const access_token = data.access_token;
```

### Zero-Trust Policy (Terraform + OPA)

```hcl
# Terraform for access control
resource "aws_iam_role_policy" "least_privilege" {
  role = aws_iam_role.developer.id
  
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = "s3:GetObject"
        Resource = "arn:aws:s3:::project-data/*"
        Condition = {
          StringLike = {
            "aws:userid" = "*:${aws:username}"
          }
        }
      }
    ]
  })
}

# OPA Policy (Open Policy Agent) for runtime checks
package authz

allow[action] {
  user := input.user
  action := input.action
  resource := input.resource
  
  # Only allow if verified
  user.mfa_verified == true
  
  # Only allow from trusted networks
  user.network_trusted == true
  
  # Check time-based access
  time.now_ns() < user.access_expires
  
  # Check least privilege
  user_permissions[action][resource]
}
```

---

## Learning Path

### Month 1: Fundamentals
- [ ] Read: Threat modeling (STRIDE)
- [ ] Read: Cryptography basics
- [ ] Practice: Design threat model for web app

### Month 2: Implementation
- [ ] Read: OAuth 2.0 and OpenID Connect
- [ ] Practice: Implement MFA in application
- [ ] Read: TLS and certificate management

### Month 3: Operations
- [ ] Read: SIEM and log analysis
- [ ] Read: Incident response procedures
- [ ] Practice: Design monitoring strategy

### Months 4–12: Mastery
- [ ] Lead: Security design reviews
- [ ] Contribute: Penetration testing
- [ ] Share: Security training with team

---

## Common Vulnerabilities & Fixes

| Vulnerability | Fix |
|---|---|
| SQL Injection | Parameterized queries, input validation |
| XSS (Cross-Site Scripting) | Output encoding, Content Security Policy |
| CSRF (Cross-Site Request Forgery) | CSRF tokens, SameSite cookies |
| Weak Authentication | MFA, passwordless, biometrics |
| Data Breach | Encryption, access control, monitoring |
| Unpatched Systems | Automated patching, inventory management |

---

**Module Version:** 1.0  
**Last Updated:** 2026-06-05  
**Difficulty:** Advanced  
**Prerequisites:** Networking, cryptography basics  
**Next Module:** [API Architecture Academy](api-architecture-academy.md)
