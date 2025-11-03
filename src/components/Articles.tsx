export type Article = {
  title: string;
  summary: string;
  date: string;     // ISO atau human-readable
  href: string;     // nanti bisa diarahkan ke /articles/[slug]
  tag?: string;
};

const items: Article[] = [
  {
    title: "Menghubungkan AI × IoT: Dari Sensor ke Insight",
    summary:
      "Arsitektur end-to-end yang pragmatis: dari perangkat edge, ingestion terukur, pembersihan data, sampai dashboard eksekutif.",
    date: "2025-10-12",
    href: "/articles/ai-iot-pipeline",
    tag: "AI/IoT",
  },
  {
    title: "Checklist Implementasi Dashboard Eksekutif",
    summary:
      "Langkah singkat menyepakati definisi metrik, kontrak data, dan praktik visualisasi agar keputusan tidak bias.",
    date: "2025-10-09",
    href: "/articles/executive-dashboard-checklist",
    tag: "Data",
  },
  {
    title: "Menentukan KPI yang Benar untuk Operasi Harian",
    summary:
      "Cara membedakan KPI, metric, dan diagnostic signal; termasuk target realistis dan ritme evaluasi mingguan.",
    date: "2025-09-28",
    href: "/articles/right-kpi-for-ops",
    tag: "Manajemen",
  },
  {
    title: "Edge vs Cloud untuk IoT: Kapan Memilih yang Mana?",
    summary:
      "Trade-off latency, biaya, dan reliability; pola hybrid yang umum dipakai untuk cold chain & utilitas.",
    date: "2025-09-10",
    href: "/articles/edge-vs-cloud-iot",
    tag: "IoT",
  },
  {
    title: "Quality Gate Data: Sebelum Masuk ke BI/AI",
    summary:
      "Validasi skema, deduplikasi, dan ‘reasonableness test’ sederhana agar model & dashboard tetap akurat.",
    date: "2025-08-22",
    href: "/articles/data-quality-gates",
    tag: "Data",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-12 md:py-16">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Articles</h2>
        <p className="mt-1 text-slate-400">Tulisan ringkas seputar AI, IoT, dan Data.</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <article
              key={a.href}
              className="rounded-2xl bg-white/95 text-slate-800 border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <time dateTime={a.date}>
                    {new Date(a.date).toLocaleDateString()}
                  </time>
                  {a.tag ? (
                    <span className="rounded bg-slate-100 px-2 py-0.5">{a.tag}</span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.summary}</p>
                <div className="mt-4">
                  <a
                    href={a.href}
                    className="text-sm text-sky-700 hover:text-sky-900 underline underline-offset-2"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
