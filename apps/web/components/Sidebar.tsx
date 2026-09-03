"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    section: "Operate",
    links: [
      { href: "/", label: "Dashboard", icon: "▦" },
      { href: "/integrations", label: "Integrations", icon: "⇄" },
      { href: "/reports", label: "Reports", icon: "▤" },
      { href: "/assistant", label: "AI Assistant", icon: "✦" },
    ],
  },
  {
    section: "Manage",
    links: [{ href: "/admin", label: "Administration", icon: "⚙" }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">TFL</div>
        <div className="brand-name">
          TFL <span>Command</span>
        </div>
      </div>

      {nav.map((group) => (
        <div key={group.section}>
          <div className="nav-section">{group.section}</div>
          {group.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " active" : ""}`}
            >
              <span className="icon">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      ))}

      <div className="sidebar-footer">
        <div className="tenant-pill">
          <span className="dot" />
          The Fantastic Labs
        </div>
        <div>Signed in as Tenant Admin</div>
        <div>samkaddouh@gmail.com</div>
      </div>
    </aside>
  );
}
