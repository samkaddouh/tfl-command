# CLAUDE.md — TFL Command

## Project Overview

**TFL Command** is a secure orchestration and intelligence platform being built for **The Fantastic Labs (TFL)**. It does not replace TFL's existing business systems — it sits **above** them as a unifying layer that connects HubSpot, JobTread, QuickBooks Online, Clover, Wix, Power BI, Make/Zapier, and Microsoft 365 / Google Workspace through:

- A **normalized data model** (system-of-record for cross-platform TFL data)
- **Governed, typed APIs**
- **Event-driven background processing** (webhooks, scheduled syncs, retries)
- A **permission-aware AI assistant and reporting layer**

Source document: `TFL_Command_Platform_Architecture_Proposal.pdf` (prepared by Umar Daraz). Fixed price: **$6,000 USD**, delivery **10–12 weeks (~2.5–3 months)**, milestone-based payments.

## Tech Stack (Recommended Architecture)

| Area | Choice |
|---|---|
| Frontend | Next.js / React (SSR, tenant-aware dashboard shell, role-based navigation) |
| API layer | TypeScript service layer (Node/Nest-style, typed contracts, modular services) |
| Database | Amazon Aurora PostgreSQL (Row-Level Security, Multi-AZ, managed backups) |
| AI retrieval | PostgreSQL + pgvector (tenant-scoped embeddings; no separate vector DB initially) |
| Async work | Amazon SQS + EventBridge (durable jobs, retries, DLQs, scheduling) |
| Secrets | AWS Secrets Manager + KMS (encrypted OAuth tokens, least-privilege IAM) |
| Runtime | ECS/Fargate (containerized; APIs and workers scale independently) |
| Observability | CloudWatch + Sentry + OpenTelemetry (correlation IDs end-to-end) |
| Infra as Code | Terraform (separate dev / staging / prod environments) |

**Key design decision:** a modular monolith-style service architecture with asynchronous workers — *not* day-one microservices. Queues already isolate integration, AI, and reporting workloads so components can be extracted into separate services later if needed.

## Multi-Tenancy & Security (Core Constraints)

These are non-negotiable principles for any code written in this project:

- **Every tenant-owned record carries a `tenant_id`** — users, customers, projects, financial records, integrations, reports, AI conversations, documents, audit events.
- **Defense-in-depth isolation**: auth → org membership → backend RBAC/ABAC → PostgreSQL Row-Level Security → tenant-scoped cache keys, queue jobs, and integration credentials.
- **Authorization is always server-side** — never trusted to the browser. Short-lived access tokens with secure refresh handling.
- **Roles** (initial): Platform Admin, Tenant Admin, Manager, Operator, Read-Only/Executive. Permissions are resource/action based (e.g. `integrations.connect`, `finance.read`, `reports.export`, `users.manage`).
- **OAuth 2.0** with Authorization Code + PKCE where supported, exact redirect URI validation, state/nonce checks, minimal scopes. Tokens are received only by backend endpoints and stored encrypted (Secrets Manager/KMS) — never in browser storage.
- **Webhook security**: signature validation, replay protection, idempotency on inbound events.
- **Audit logging**: append-oriented events with user, tenant, action, object, time, IP/session, and result.
- Production secrets are never copied into non-production environments.

## Integration Connectors

Each external platform is wrapped in a **connector boundary** that owns provider auth, API calls, mapping, webhooks, throttling, retries, and reconciliation — vendor-specific logic must not leak into the rest of the app.

| Connector | Responsibility |
|---|---|
| HubSpot | CRM contacts, companies, deals, lifecycle activity (OAuth/webhooks + scheduled reconciliation) |
| JobTread | Jobs, estimates, project operations |
| QuickBooks Online | Customers, invoices, payments (OAuth + incremental sync) |
| Clover | POS transactions and retail data |
| Wix | Forms and website/business events |
| Microsoft 365 / Google Workspace | Calendar and productivity signals (minimum scopes) |
| Make / Zapier | Workflow triggers/actions via signed webhooks |
| Power BI | Executive datasets / embedded reporting |

**Identity mapping chain:** HubSpot contact/company → normalized TFL customer/account → JobTread projects → QuickBooks invoices/payments → Clover transactions → reporting/AI insights. Source-system IDs and timestamps are always retained for traceability.

## Background Job Rules

- Long-running sync/report/AI work is **enqueued**, never done inline with a user request.
- Jobs must be **idempotent** — repeated delivery must not duplicate financial or operational records.
- Retries use **exponential backoff with jitter** and respect provider rate limits.
- Repeated failures go to a **dead-letter queue** with alerts and operator-visible reason codes.
- **Scheduled reconciliation** repairs missed webhooks and eventual-consistency drift.
- A **correlation ID** links request → job → provider call → DB write → audit/monitoring events.

## AI Assistant Principles

- The LLM never gets unrestricted database access. An **AI orchestrator** selects approved tools/retrieval paths, each of which independently enforces tenant and user permissions.
- Structured metrics (especially financial totals) are computed by application/reporting logic; the LLM is for **explanation, summarization, and natural-language interaction** — not authoritative calculation.
- Tenant-isolated semantic retrieval: no cross-tenant embedding queries or shared conversation history.
- Tool calls and source metadata are logged so answers are auditable.
- Model/provider abstraction (OpenAI, Anthropic, etc.) so the core domain doesn't depend on one vendor.
- Features: weekly executive summaries, NL questions across authorized CRM/project/financial data, proactive alerts (missed follow-ups, stalled jobs, unusual trends, integration issues).

## Testing & Quality Gates

- **Tenant-isolation tests are a mandatory release gate** (attempted cross-tenant read/write/export/AI retrieval must fail).
- Unit tests every build; API/integration tests in CI + staging; per-connector contract tests; E2E flows (login → connect provider → sync → dashboard → AI); security scans (deps, secrets, OWASP); performance tests before launch; scheduled backup **restore tests**.
- CI/CD: PR → lint/static checks → unit tests → integration/security tests → container build → staging → smoke/UAT → controlled production promotion, with versioned DB migrations, health checks, rollback procedures, and feature flags for risky work.

## Reliability Targets

- **RPO ≤ 15 minutes** for critical database data; **RTO ≤ 4 hours** for major incidents (engineering targets, not contractual SLA).
- Aurora point-in-time recovery, Multi-AZ failover, S3 versioning, Terraform rebuild, documented and rehearsed restore runbooks.

## Delivery Plan (10–12 Weeks, $6,000 Fixed)

| Milestone | Weeks | Focus | Cost |
|---|---|---|---|
| 1 | 1–2 | Architecture workshop, UI/UX design, design system, dev/staging foundation | $1,000 |
| 2 | 3–4 | Frontend: Next.js auth screens, tenant-aware dashboard, role-based nav | $1,200 |
| 3 | 5–7 | Backend: multi-tenant Postgres/RLS, RBAC, APIs, OAuth, connectors, queues, audit | $1,800 |
| 4 | 8–9 | AI orchestration, tenant-scoped retrieval, executive summaries, guardrails | $1,200 |
| 5 | 10–12 | E2E/security/perf/isolation testing, DR validation, UAT, launch, docs | $800 |

The engagement begins with a **live architecture workshop** producing a client-approved architecture baseline, decision log, tenant model, data ownership map, and implementation backlog.

## Scope Notes

- Third-party costs (AWS, LLM usage, SaaS/API plan tiers, licensing) are the client's responsibility — excluded from the fixed price.
- New modules, mobile apps, custom BI report packs, large historical data-cleaning, or additional providers require a change request.
- Client UAT feedback expected within 1–2 business days during milestone reviews.
- SOC 2 / formal pen tests are out of scope, but the platform should be built to support later compliance efforts.
