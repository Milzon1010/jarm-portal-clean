// src/app/en/company/page.tsx
import Link from "next/link";

export const metadata = { title: "Company — Allanray TechSight" };

export default function CompanyPageEN() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-16 pb-24">
      <section className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          From <span className="text-cyan-300">Field Sensing</span> to{" "}
          <span className="text-cyan-300">Executive Insight</span>
        </h1>
        <p className="mt-5 max-w-3xl text-slate-300/85">
          We bridge <em>sensors → gateways → cloud → analytics/AI</em> to make your operations
          more reliable, secure, and measurable.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-lg px-4 py-2 bg-slate-800 hover:bg-slate-700">Contact</Link>
          <Link href="/en/company/detail" className="rounded-lg px-4 py-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
            Detail Page
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl bg-slate-900/50 p-5 border border-white/5">
          <h3 className="font-semibold mb-2">Background</h3>
          <p className="text-sm text-slate-300/85">
            23+ years in telecom; now focusing on IoT & AI for reliability, efficiency, and governance.
          </p>
        </article>
        <article className="rounded-2xl bg-slate-900/50 p-5 border border-white/5">
          <h3 className="font-semibold mb-2">Vision</h3>
          <p className="text-sm text-slate-300/85">
            Unite technology and integrity—turn field data into executive decisions.
          </p>
        </article>
        <article className="rounded-2xl bg-slate-900/50 p-5 border border-white/5">
          <h3 className="font-semibold mb-2">Mission</h3>
          <ul className="text-sm text-slate-300/85 list-disc pl-5 space-y-1">
            <li>Reliable & secure sensing.</li>
            <li>Data pipelines → dashboards → actions.</li>
            <li>Measurable ROI & honest SLAs.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
