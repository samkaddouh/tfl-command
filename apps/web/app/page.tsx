import Topbar from "@/components/Topbar";
import { stats, syncActivity, pipeline, recentJobs } from "@/lib/mockData";

export default function Dashboard() {
  return (
    <>
      <Topbar title="Dashboard" />
      <div className="content">
        <p className="page-sub">
          Cross-platform view of CRM, projects, finance and POS — served from
          the normalized TFL data model, not live provider calls.
        </p>

        <div className="grid-stats">
          {stats.map((s) => (
            <div className="card" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
              <div className={`stat-delta ${s.dir}`}>{s.delta}</div>
            </div>
          ))}
        </div>

        <div className="grid-2">
          <div>
            <div className="section-title">Recent Jobs</div>
            <div className="card table-card">
              <table>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Value</th>
                    <th>Billing</th>
                  </tr>
                </thead>
                <tbody>
                  {recentJobs.map((j) => (
                    <tr key={j.id}>
                      <td>
                        <strong>{j.id}</strong>
                        <div style={{ color: "var(--text-dim)", fontSize: 12 }}>
                          {j.title}
                        </div>
                      </td>
                      <td>{j.customer}</td>
                      <td>
                        <span className={`badge ${j.statusColor}`}>
                          <span className="dot" />
                          {j.status}
                        </span>
                      </td>
                      <td>{j.value}</td>
                      <td style={{ color: "var(--text-dim)" }}>{j.invoiced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="section-title">Sales Pipeline (HubSpot)</div>
            <div className="card">
              {pipeline.map((p) => (
                <div className="bar-row" key={p.stage}>
                  <div className="bar-label">{p.stage}</div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${(p.value / 64) * 100}%` }}
                    />
                  </div>
                  <div className="bar-value">{p.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-title">Sync &amp; Platform Activity</div>
            <div className="card feed">
              {syncActivity.map((a, i) => (
                <div className="feed-item" key={i}>
                  <div className="feed-icon" style={{ background: a.color }}>
                    {a.icon}
                  </div>
                  <div className="feed-body">
                    {a.text}
                    <div className="feed-time">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
