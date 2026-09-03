# TFL Command — API service layer (Milestone 3)

Typed TypeScript service layer (Node/Nest-style architecture) providing:

- Centralized authentication and tenant context resolution
- RBAC/ABAC authorization guards (resource.action permissions)
- Core domain APIs over the normalized Aurora PostgreSQL model (RLS enforced)
- OAuth flows and connector endpoints for HubSpot, JobTread, QuickBooks
  Online, Clover, Wix, Microsoft 365 / Google Workspace, Make/Zapier, Power BI
- Webhook receivers with signature validation, replay protection and
  idempotency
- Job enqueueing to SQS/EventBridge (never long-running work in-request)
- Append-oriented audit logging

Scaffolding begins in Milestone 3 (weeks 5–7).
