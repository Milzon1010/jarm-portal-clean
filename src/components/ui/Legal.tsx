// src/components/ui/Legal.tsx
type KbliItem = {
  code: string;
  title: string;
  desc: string;
  status: "registered" | "optional";
};

const items: KbliItem[] = [
  {
    code: "62090",
    title: "IT Activities & Other Computer Services",
    desc:
      "Systems development, API integration, maintenance, and end-to-end analytics.",
    status: "registered",
  },
  {
    code: "62024",
    title: "IoT Consulting & Design",
    desc:
      "Architecture, sensor/gateway integration, and cloud-based monitoring platforms.",
    status: "registered",
  },
  {
    code: "63112",
    title: "Hosting & Data Processing",
    desc:
      "Cloud, storage, compute, and dashboards as a service (SaaS).",
    status: "optional",
  },
  // Tambahan agar lebih lengkap (boleh ubah sesuai NIB-mu):
  {
    code: "62015",
    title: "Web Applications & Portals",
    desc:
      "Design & development of web portals, dashboards, and internal tools.",
    status: "optional",
  },
  {
    code: "62010",
    title: "Computer Programming",
    desc:
      "Custom software, data pipelines, and microservices to support operations.",
    status: "optional",
  },
];

export default function Legal({ isEN = false }: { isEN?: boolean }) {
  return (
    <section id="legal" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
        {isEN ? "Legal & Business Scope (KBLI)" : "Legal & Business Scope (KBLI)"}
      </h2>

      <p className="mt-2 text-slate-300 max-w-3xl">
        {isEN
          ? "Registered entity focused on IT, IoT, and data analytics."
          : "Registered entity focused on IT, IoT, and data analytics."}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.code}
            className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-5 hover:bg-slate-900/75 transition-colors"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-mono text-slate-300">KBLI {it.code}</span>
              <span
                className={
                  it.status === "registered"
                    ? "rounded-full bg-emerald-600/20 px-2 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20"
                    : "rounded-full bg-amber-600/20 px-2 py-0.5 text-[11px] font-medium text-amber-300 ring-1 ring-amber-400/20"
                }
              >
                {it.status === "registered" ? "Registered" : "Optional"}
              </span>
            </div>
            <h3 className="text-slate-100 font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
