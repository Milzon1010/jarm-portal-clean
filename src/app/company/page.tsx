// src/app/company/page.tsx
import Link from "next/link";

export const metadata = { title: "Company — Allanray TechSight" };

export default function CompanyPageID() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-16 pb-24">
      <section className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          From <span className="text-cyan-300">Field Sensing</span> to{" "}
          <span className="text-cyan-300">Executive Insight</span>
        </h1>
        <p className="mt-5 max-w-3xl text-slate-300/85">
          Kami menjembatani <em>sensor → gateway → cloud → analytics/AI</em>
          agar operasi Anda lebih andal, aman, dan terukur.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-lg px-4 py-2 bg-slate-800 hover:bg-slate-700">Contact</Link>
          <Link href="/company/detail" className="rounded-lg px-4 py-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
            Detail Page
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl bg-slate-900/50 p-5 border border-white/5">
          <h3 className="font-semibold mb-2">Background</h3>
          <p className="text-sm text-slate-300/85">
            20+ tahun di telko (RAN/transport/microwave/fiber); kini fokus IoT & AI
            untuk reliability, efficiency, dan governance.
          </p>
        </article>
        <article className="rounded-2xl bg-slate-900/50 p-5 border border-white/5">
          <h3 className="font-semibold mb-2">Vision</h3>
          <p className="text-sm text-slate-300/85">
            Menyatukan teknologi & integritas—mengubah data lapangan menjadi keputusan eksekutif.
          </p>
        </article>
        <article className="rounded-2xl bg-slate-900/50 p-5 border border-white/5">
          <h3 className="font-semibold mb-2">Mission</h3>
          <ul className="text-sm text-slate-300/85 list-disc pl-5 space-y-1">
            <li>Sensing andal & aman.</li>
            <li>Pipeline data → dashboard → actions.</li>
            <li>ROI terukur & SLA yang jujur.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
