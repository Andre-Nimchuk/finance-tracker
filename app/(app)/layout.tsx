import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <strong>Finance Tracker</strong>

        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/transactions">Transactions</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/analytics">Analytics</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
