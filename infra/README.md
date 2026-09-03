# TFL Command — infrastructure (Terraform)

AWS environments (dev / staging / prod, fully isolated) defined as code:

- Aurora PostgreSQL (Multi-AZ, PITR, RLS) + pgvector
- ECS/Fargate services for API and worker pools
- SQS queues + DLQs, EventBridge schedules
- Secrets Manager + KMS for tenant integration credentials
- CloudWatch alarms, WAF/rate limiting, S3 versioned storage

Targets: RPO ≤ 15 min, RTO ≤ 4 h. Provisioning begins in Milestone 3.
