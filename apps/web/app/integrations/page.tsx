import Topbar from "@/components/Topbar";
import { integrations } from "@/lib/mockData";

export default function Integrations() {
  return (
    <>
      <Topbar title="Integrations" />
      <div className="content">
        <p className="page-sub">
          Each provider is implemented behind a connector boundary owning
          OAuth, webhooks, throttling, retries and reconciliation. Credentials
          are tenant-scoped and encrypted (Secrets Manager + KMS).
        </p>

        <div className="grid-integrations">
          {integrations.map((it) => (
            <div className="card integration-card" key={it.key}>
              <div className="integration-head">
                <div
                  className="integration-logo"
                  style={{ background: it.color }}
                >
                  {it.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="integration-name">{it.name}</div>
                  <span className={`badge ${it.statusColor}`}>
                    <span className="dot" />
                    {it.status}
                  </span>
                </div>
              </div>
              <div className="integration-desc">{it.desc}</div>
              <div className="integration-meta">
                <span>{it.pattern}</span>
                <span>Last sync: {it.lastSync}</span>
              </div>
              <div>
                {it.status === "Not connected" ? (
                  <button className="btn primary">Connect</button>
                ) : (
                  <button className="btn">Manage</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
