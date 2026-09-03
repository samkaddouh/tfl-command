# TFL Command

Secure orchestration and intelligence layer for The Fantastic Labs. See
`CLAUDE.md` for the full architecture summary and
`TFL_Command_Platform_Architecture_Proposal.pdf` for the source proposal.

## Repository layout

```
apps/
  web/          Next.js / React frontend (tenant-aware dashboard shell)
  api/          TypeScript API service layer (Node/Nest-style) — Milestone 3
services/
  workers/      SQS/EventBridge background workers (sync, AI, reports) — Milestone 3
infra/          Terraform for AWS (Aurora, ECS/Fargate, SQS, Secrets Manager) — Milestone 3
docs/           Architecture decision log, runbooks, data ownership map
```

## Running the frontend

```bash
cd apps/web
npm install
npm run dev
```

Then open http://localhost:3000. The UI currently uses mock data from
`apps/web/lib/mockData.ts`; it will be wired to the API layer in Milestone 3.

## Milestones

1. Architecture setup & UI/UX design (weeks 1–2)
2. Frontend development (weeks 3–4) ← current
3. Backend development with API integration (weeks 5–7)
4. AI development & integration (weeks 8–9)
5. Testing & launch (weeks 10–12)
