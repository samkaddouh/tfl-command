import Topbar from "@/components/Topbar";
import { auditEvents, teamMembers } from "@/lib/mockData";

export default function Admin() {
  return (
    <>
      <Topbar title="Administration" />
      <div className="content">
        <p className="page-sub">
          Tenant users, roles and audit trail. Permissions are resource- and
          action-based; every sensitive operation is written to the
          append-oriented audit log.
        </p>

        <div className="section-title">Team &amp; Roles</div>
        <div className="card table-card">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>MFA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((m) => (
                <tr key={m.email}>
                  <td>
                    <strong>{m.name}</strong>
                    <div style={{ color: "var(--text-dim)", fontSize: 12 }}>
                      {m.email}
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${m.roleColor}`}>{m.role}</span>
                  </td>
                  <td>
                    {m.mfa ? (
                      <span className="badge green">Enabled</span>
                    ) : (
                      <span className="badge red">Missing</span>
                    )}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button className="btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-title">Recent Audit Events</div>
        <div className="card table-card">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>User</th>
                <th>Action</th>
                <th>Object</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {auditEvents.map((e, i) => (
                <tr key={i}>
                  <td style={{ color: "var(--text-dim)" }}>{e.time}</td>
                  <td>{e.user}</td>
                  <td>
                    <code style={{ fontSize: 12 }}>{e.action}</code>
                  </td>
                  <td>{e.object}</td>
                  <td>
                    <span
                      className={`badge ${
                        e.result === "success" ? "green" : "red"
                      }`}
                    >
                      {e.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
