// Mock data standing in for the normalized Aurora PostgreSQL data model.
// Every record in the real system carries a tenant_id and source-system IDs.

export const stats = [
  { label: "Active Jobs (JobTread)", value: "24", delta: "+3 this week", dir: "up" },
  { label: "Open Deals (HubSpot)", value: "$182,400", delta: "+12.4% vs last month", dir: "up" },
  { label: "Outstanding Invoices (QBO)", value: "$46,910", delta: "8 overdue", dir: "down" },
  { label: "POS Revenue, 7d (Clover)", value: "$23,155", delta: "flat vs prior week", dir: "flat" },
];

export const syncActivity = [
  { icon: "⇄", color: "var(--accent-soft)", text: "HubSpot sync completed — 142 contacts, 12 deals updated", time: "4 min ago" },
  { icon: "$", color: "var(--green-soft)", text: "QuickBooks incremental sync — 9 invoices, 3 payments reconciled", time: "18 min ago" },
  { icon: "▦", color: "var(--accent-soft)", text: "JobTread webhook — job JT-2214 moved to In Progress", time: "41 min ago" },
  { icon: "!", color: "var(--amber-soft)", text: "Clover API rate limit reached — retrying with backoff (attempt 2)", time: "1 h ago" },
  { icon: "✦", color: "var(--accent-soft)", text: "Weekly executive summary generated and delivered", time: "3 h ago" },
  { icon: "⚠", color: "var(--red-soft)", text: "Wix webhook signature validation failed — event rejected, alert raised", time: "5 h ago" },
];

export const pipeline = [
  { stage: "Lead", value: 64, amount: "$310k" },
  { stage: "Qualified", value: 41, amount: "$248k" },
  { stage: "Proposal", value: 22, amount: "$182k" },
  { stage: "Won (30d)", value: 12, amount: "$96k" },
];

export const recentJobs = [
  { id: "JT-2214", customer: "Harbor Point HOA", title: "Clubhouse renovation", status: "In Progress", statusColor: "blue", value: "$48,200", invoiced: "QBO ✓" },
  { id: "JT-2208", customer: "Meridian Retail Group", title: "Storefront build-out", status: "In Progress", statusColor: "blue", value: "$31,750", invoiced: "QBO ✓" },
  { id: "JT-2201", customer: "Kessler Residence", title: "Kitchen remodel", status: "Stalled", statusColor: "amber", value: "$22,900", invoiced: "Partial" },
  { id: "JT-2196", customer: "Bluewater Cafe", title: "Patio expansion", status: "Complete", statusColor: "green", value: "$18,400", invoiced: "Paid ✓" },
  { id: "JT-2190", customer: "Northgate Dental", title: "Office refresh", status: "Complete", statusColor: "green", value: "$12,300", invoiced: "Overdue" },
];

export const integrations = [
  { key: "hubspot", name: "HubSpot", color: "#ff7a59", desc: "CRM contacts, companies, deals and lifecycle activity.", status: "Connected", statusColor: "green", lastSync: "4 min ago", pattern: "OAuth · Webhooks · Reconciliation" },
  { key: "jobtread", name: "JobTread", color: "#2f855a", desc: "Jobs, estimates and project operations.", status: "Connected", statusColor: "green", lastSync: "41 min ago", pattern: "API · Webhooks" },
  { key: "qbo", name: "QuickBooks Online", color: "#2ca01c", desc: "Customers, invoices, payments and financial mappings.", status: "Connected", statusColor: "green", lastSync: "18 min ago", pattern: "OAuth · Incremental sync" },
  { key: "clover", name: "Clover", color: "#43b02a", desc: "POS transactions and retail operational data.", status: "Rate limited", statusColor: "amber", lastSync: "1 h ago", pattern: "OAuth · Webhooks" },
  { key: "wix", name: "Wix", color: "#3899ec", desc: "Forms and website/business events.", status: "Attention", statusColor: "red", lastSync: "5 h ago", pattern: "Webhooks · API" },
  { key: "m365", name: "Microsoft 365", color: "#d83b01", desc: "Calendar and productivity signals (minimum scopes).", status: "Connected", statusColor: "green", lastSync: "12 min ago", pattern: "OAuth · Minimal scopes" },
  { key: "gws", name: "Google Workspace", color: "#4285f4", desc: "Calendar and email signals (if approved).", status: "Not connected", statusColor: "gray", lastSync: "—", pattern: "OAuth · Minimal scopes" },
  { key: "make", name: "Make / Zapier", color: "#7b5cff", desc: "Workflow triggers and actions via signed webhooks.", status: "Connected", statusColor: "green", lastSync: "22 min ago", pattern: "Signed webhooks" },
  { key: "powerbi", name: "Power BI", color: "#f2c811", desc: "Executive datasets and embedded reporting outputs.", status: "Connected", statusColor: "green", lastSync: "2 h ago", pattern: "Reporting dataset" },
];

export const reports = [
  { name: "Weekly Executive Summary", desc: "AI-generated overview of pipeline, jobs, cash and alerts.", cadence: "Weekly · Mondays 7:00", last: "Sep 1, 2026", badge: "AI", badgeColor: "blue" },
  { name: "Revenue by Source", desc: "QBO invoices + Clover POS, normalized by customer/account.", cadence: "Daily", last: "Today 06:00", badge: "Finance", badgeColor: "green" },
  { name: "Job Profitability", desc: "JobTread estimates vs QBO actuals per job.", cadence: "Weekly", last: "Sep 1, 2026", badge: "Ops", badgeColor: "amber" },
  { name: "Pipeline Health", desc: "HubSpot deal stages, aging and conversion trends.", cadence: "Daily", last: "Today 06:00", badge: "CRM", badgeColor: "blue" },
  { name: "Integration Sync Health", desc: "Sync lag, webhook failures, DLQ size and quota events.", cadence: "Hourly", last: "Today 14:00", badge: "Platform", badgeColor: "gray" },
];

export const auditEvents = [
  { time: "14:22", user: "s.kaddouh", action: "integrations.connect", object: "clover", result: "success" },
  { time: "13:58", user: "m.rivera", action: "reports.export", object: "job-profitability-aug", result: "success" },
  { time: "13:41", user: "system", action: "token.refresh", object: "quickbooks-online", result: "success" },
  { time: "12:19", user: "j.chen", action: "finance.read", object: "invoice INV-4482", result: "denied" },
  { time: "11:03", user: "s.kaddouh", action: "users.manage", object: "invite j.chen (Operator)", result: "success" },
];

export const teamMembers = [
  { name: "Sam Kaddouh", email: "samkaddouh@gmail.com", role: "Tenant Admin", roleColor: "blue", mfa: true },
  { name: "Maria Rivera", email: "m.rivera@fantasticlabs.com", role: "Manager", roleColor: "green", mfa: true },
  { name: "James Chen", email: "j.chen@fantasticlabs.com", role: "Operator", roleColor: "amber", mfa: false },
  { name: "Exec Board", email: "board@fantasticlabs.com", role: "Read-Only / Executive", roleColor: "gray", mfa: true },
];
