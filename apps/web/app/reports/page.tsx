import Topbar from "@/components/Topbar";
import { reports } from "@/lib/mockData";

export default function Reports() {
  return (
    <>
      <Topbar title="Reports" />
      <div className="content">
        <p className="page-sub">
          Structured metrics are computed by reporting logic against the
          normalized data model; the AI layer explains and summarizes — it is
          never the authoritative calculator for financial totals.
        </p>

        <div className="card table-card">
          <table>
            <thead>
              <tr>
                <th>Report</th>
                <th>Type</th>
                <th>Cadence</th>
                <th>Last run</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.name}>
                  <td>
                    <strong>{r.name}</strong>
                    <div style={{ color: "var(--text-dim)", fontSize: 12 }}>
                      {r.desc}
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${r.badgeColor}`}>{r.badge}</span>
                  </td>
                  <td style={{ color: "var(--text-dim)" }}>{r.cadence}</td>
                  <td style={{ color: "var(--text-dim)" }}>{r.last}</td>
                  <td style={{ textAlign: "right" }}>
                    <button className="btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-title">Executive Snapshot</div>
        <div className="grid-2">
          <div className="card">
            <div className="stat-label">Revenue vs target — Q3 2026</div>
            <div className="bar-row">
              <div className="bar-label">July</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: "88%" }} />
              </div>
              <div className="bar-value">$142k</div>
            </div>
            <div className="bar-row">
              <div className="bar-label">August</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: "97%" }} />
              </div>
              <div className="bar-value">$156k</div>
            </div>
            <div className="bar-row">
              <div className="bar-label">September</div>
              <div
                className="bar-track"
                title="Month in progress"
              >
                <div
                  className="bar-fill"
                  style={{ width: "12%", background: "var(--amber)" }}
                />
              </div>
              <div className="bar-value">$19k</div>
            </div>
          </div>
          <div className="card">
            <div className="stat-label">Power BI</div>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.6 }}>
              Executive datasets are published to Power BI on a controlled
              schedule. Embedded reports will appear here once the reporting
              dataset connection is finalized in Milestone 3.
            </p>
            <div style={{ marginTop: 14 }}>
              <button className="btn">Open Power BI workspace</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
