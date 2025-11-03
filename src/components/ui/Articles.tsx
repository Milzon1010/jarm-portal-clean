export default function Articles({ isEN = false }: { isEN?: boolean }) {
  const T = {
    title: isEN ? "Articles & Notes" : "Artikel & Catatan",
    lead: isEN ? "Selected writings and quick notes." : "Tulisan terpilih dan catatan singkat.",
    more: isEN ? "Read →" : "Read →",
  };

  const posts = [
    {
      title: isEN
        ? "Designing an IoT → Data → Insight Pipeline"
        : "Merancang Pipeline IoT → Data → Insight",
      desc: isEN
        ? "From sensors to executive dashboards: patterns that actually ship."
        : "Dari sensor ke dashboard eksekutif: pola yang benar-benar jalan.",
    },
    {
      title: isEN
        ? "Choosing the Right Telemetry Stack"
        : "Memilih Tumpukan Telemetri yang Tepat",
      desc: isEN
        ? "MQTT/HTTP, stream vs batch, storage layout — what matters."
        : "MQTT/HTTP, stream vs batch, storage layout — apa yang penting.",
    },
    {
      title: isEN
        ? "AI for Infra: Practical Anomaly Detection"
        : "AI untuk Infrastruktur: Deteksi Anomali Praktis",
      desc: isEN
        ? "Keep it simple: PCA + density clustering before deep nets."
        : "Simple dulu: PCA + clustering densitas sebelum deep nets.",
    },
  ];

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold">{T.title}</h2>
      <p className="mt-1 text-slate-400">{T.lead}</p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
            <a
              href="#contact"
              className="mt-3 inline-flex text-sm text-sky-300 hover:text-sky-200"
            >
              {T.more}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
