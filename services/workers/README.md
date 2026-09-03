# TFL Command — background workers (Milestone 3)

SQS/EventBridge consumers for asynchronous work, isolated from user-facing
request latency:

- Provider sync jobs (incremental + scheduled reconciliation)
- Webhook event processing (idempotent; DLQ on repeated failure)
- Exponential backoff with jitter, provider-specific rate limiting
- AI generation jobs (summaries, report narratives)
- Correlation IDs linking request → job → provider call → DB write → audit

Scaffolding begins in Milestone 3 (weeks 5–7).
