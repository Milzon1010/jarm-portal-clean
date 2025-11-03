"use client";

type Item = { title: string; desc: string };

const cols: Item[][] = [
  [
    { title: "Website & Web App", desc: "Company sites, landing pages, blog/CMS, dashboards & portals with Next.js/React." },
    { title: "AI & Analytics", desc: "Anomaly detection, forecasting, KPI/cohort, and report automation." },
    { title: "Telco Deployment (FO / MW / RF)", desc: "Design, BoQ, routing & link budget, supervision & commissioning. Physical works by licensed partners or client’s contractor." },
  ],
  [
    { title: "Dashboards & Applications", desc: "Next.js/React/FastAPI — production-ready executive panels." },
    { title: "IoT Integration", desc: "Sensors, gateways, rule engine, alerting, and device lifecycle." },
  ],
  [
    { title: "Infrastructure & Cloud", desc: "Networking, observability, automation, OSS/BSS integrations." },
    { title: "Project & Advisory", desc: "PMBOK/PMP-oriented delivery, due diligence, and roadmap." },
    { title: "Training & Enablement", desc: "AI fundamentals, IoT deployment, data analytics basics." },
  ],
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-12 md:py-16">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
        <p className="mt-1 text-slate-400">Core services you can activate right away.</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cols.flat().map((x, i) => (
            <div key={i} className="rounded-2xl bg-white/95 text-slate-800 border border-slate-200 shadow-[0_6px_24px_rgba(2,6,23,0.08)] hover:shadow-[0_10px_30px_rgba(2,6,23,0.12)] transition">
              <div className="p-5">
                <h3 className="font-semibold">{x.title}</h3>
                <p className="mt-2 text-slate-600">{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
