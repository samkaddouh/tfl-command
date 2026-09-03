import Topbar from "@/components/Topbar";

export default function Assistant() {
  return (
    <>
      <Topbar title="AI Assistant" />
      <div className="content">
        <p className="page-sub">
          Permission-aware assistant. Every tool call independently enforces
          your tenant and role permissions — the model never has direct
          database access. Answers cite their sources for auditability.
        </p>

        <div className="chat">
          <div className="msg user">
            Which jobs are at risk of slipping this month, and do any of them
            have overdue invoices?
          </div>

          <div className="msg ai">
            <p>
              Two jobs look at risk this month, and one of them also has a
              billing issue:
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>1. JT-2201 — Kessler Residence (Kitchen remodel)</strong>
              <br />
              No activity in JobTread for 9 days and the schedule shows the
              drywall milestone 6 days behind. Only a partial invoice has been
              issued in QuickBooks ($9,200 of $22,900).
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>2. JT-2190 — Northgate Dental (Office refresh)</strong>
              <br />
              The job is marked complete, but invoice INV-4471 ($6,150) is now
              21 days overdue in QuickBooks. Recommend a follow-up — the
              HubSpot contact (Dr. Patel) last replied on Aug 19.
            </p>
            <div className="sources">
              <span className="badge blue">jobtread.jobs.read</span>
              <span className="badge green">qbo.invoices.read</span>
              <span className="badge amber">hubspot.contacts.read</span>
              <span className="badge gray">tenant: fantastic-labs</span>
            </div>
          </div>

          <div className="msg user">
            Draft a follow-up summary for the Monday exec meeting.
          </div>

          <div className="msg ai">
            <p>
              Here&apos;s a draft for Monday. Figures come from the reporting
              layer, not model estimation:
            </p>
            <p style={{ marginTop: 10, color: "var(--text-dim)" }}>
              <em>
                &ldquo;Pipeline grew 12.4% to $182.4k open value. 24 active
                jobs, 2 flagged at-risk (Kessler, Northgate follow-up).
                Outstanding AR is $46.9k with 8 overdue invoices — collections
                focus recommended on INV-4471. POS revenue flat week-over-week
                at $23.2k.&rdquo;
              </em>
            </p>
            <div className="sources">
              <span className="badge blue">reports.weekly_summary</span>
              <span className="badge gray">trace: 01J9F3…8QK</span>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input placeholder="Ask about CRM, jobs, finance or POS data…" readOnly />
          <button className="btn primary">Send</button>
        </div>
      </div>
    </>
  );
}
