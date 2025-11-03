type KBLIItem = {
  code: string;
  titleID: string;
  titleEN: string;
  descID: string;
  descEN: string;
  status: "registered" | "optional";
};

const KBLI_DATA: KBLIItem[] = [
  {
    code: "62090",
    titleID: "IT Activities & Other Computer Services",
    titleEN: "IT Activities & Other Computer Services",
    descID:
      "Pengembangan sistem, integrasi API, pemeliharaan, dan analitik end-to-end.",
    descEN:
      "Systems development, API integration, maintenance, and end-to-end analytics.",
    status: "registered",
  },
  {
    code: "62024",
    titleID: "IoT Consulting & Design",
    titleEN: "IoT Consulting & Design",
    descID:
      "Arsitektur, integrasi sensor/gateway, dan platform monitoring berbasis cloud.",
    descEN:
      "Architecture, sensor/gateway integration, and cloud-based monitoring platforms.",
    status: "registered",
  },
  {
    code: "63112",
    titleID: "Hosting & Data Processing",
    titleEN: "Hosting & Data Processing",
    descID:
      "Compute, storage, dan dashboard sebagai layanan (SaaS).",
    descEN:
      "Cloud, storage, compute, and dashboards as a service (SaaS).",
    status: "optional",
  },
  {
    code: "62022",
    titleID: "Pengembangan Aplikasi",
    titleEN: "Application Development",
    descID:
      "Aplikasi web & dashboard untuk otomasi operasi dan insight eksekutif.",
    descEN:
      "Web apps & dashboards for operations automation and executive insights.",
    status: "optional",
  },
  {
    code: "62019",
    titleID: "Konsultansi TI",
    titleEN: "IT Consultancy",
    descID:
      "Roadmap, keamanan, dan optimalisasi biaya untuk solusi TI skala bisnis.",
    descEN:
      "Roadmaps, security, and cost optimization for business-scale IT solutions.",
    status: "optional",
  },
];

function Badge({ status }: { status: KBLIItem["status"] }) {
  const isReg = status === "registered";
  return (
    <span
      className={`ml-2 rounded-full px-2 py-0.5 text-[11px] ${
        isReg
          ? "bg-emerald-600/20 text-emerald-300 ring-1 ring-emerald-400/20"
          : "bg-amber-600/20 text-amber-300 ring-1 ring-amber-400/20"
      }`}
    >
      {isReg ? "Registered" : "Optional"}
    </span>
  );
}

export default function KBLI({ isEN = false }: { isEN?: boolean }) {
  return (
    <section id="legal" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
        {isEN ? "Legal & Business Scope (KBLI)" : "Legal & Business Scope (KBLI)"}
      </h2>

      <p className="text-slate-300 mb-6">
        {isEN
          ? "Registered entity focused on IT, IoT, and data analytics."
          : "Registered entity focused on IT, IoT, and data analytics."}
      </p>

      <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2">
        {KBLI_DATA.map((k) => (
          <div
            key={k.code}
            className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10"
          >
            <div className="mb-1 text-sm text-slate-400">KBLI {k.code} <Badge status={k.status} /></div>
            <div className="text-slate-100 font-semibold">
              {isEN ? k.titleEN : k.titleID}
            </div>
            <p className="mt-2 text-slate-300 text-sm">
              {isEN ? k.descEN : k.descID}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
