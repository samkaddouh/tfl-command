export default function Topbar({ title }: { title: string }) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <div className="topbar-right">
        <input
          className="search"
          placeholder="Search customers, jobs, invoices…"
          readOnly
        />
        <div className="avatar">SK</div>
      </div>
    </header>
  );
}
