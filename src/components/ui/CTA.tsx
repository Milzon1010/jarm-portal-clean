export default function CTA({ isEN = false }: { isEN?: boolean }) {
  const T = {
    title: isEN
      ? "Ready to turn field data into executive decisions?"
      : "Siap bawa data lapangan jadi keputusan eksekutif?",
    body: isEN
      ? "From sensors → gateway → cloud → dashboards. Simple, measurable, and safe."
      : "Mulai dari sensor → gateway → cloud → dashboard. Ringkas, terukur, dan aman.",
    contact: isEN ? "Contact Us" : "Hubungi Kami",
    portal: isEN ? "Open JARM Portal" : "Lihat JARM Portal",
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-indigo-950/50 p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-semibold">{T.title}</h3>
      <p className="mt-2 text-slate-300">{T.body}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
        >
          {T.contact}
        </a>
        <a
          href="/jarm"
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
        >
          {T.portal}
        </a>
      </div>
    </div>
  );
}
