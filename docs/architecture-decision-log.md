# Architecture Decision Log

Decisions captured per the live architecture workshop process (proposal §12).

| # | Date | Decision | Status |
|---|------|----------|--------|
| 1 | 2026-09-03 | Modular service architecture with async workers, not day-one microservices | Proposed |
| 2 | 2026-09-03 | Aurora PostgreSQL + RLS as system-of-record; pgvector for embeddings (no separate vector DB) | Proposed |
| 3 | 2026-09-03 | Connector boundary per provider; no vendor logic outside connectors | Proposed |
| 4 | 2026-09-03 | AI accesses data only via permission-enforcing tools; app logic computes financial metrics | Proposed |

Open questions: provider API tiers/webhook availability (JobTread, Clover),
enterprise SSO timing, Power BI embed vs dataset-only.
