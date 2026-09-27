import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Finance Tracker</h1>

      <p>Understand where your money goes.</p>

      <Link href="/dashboard">Open dashboard</Link>
    </main>
  );
}
