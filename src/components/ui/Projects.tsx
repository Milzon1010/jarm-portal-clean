type Item = {
  img: string;
  title: string;
  desc: string;
};

export default function Projects({ isEN = false }: { isEN?: boolean }) {
  const items: Item[] = [
    {
      img: "/p1.jpg",
      title: isEN ? "Network Intrusion Dashboard" : "Network Intrusion Dashboard",
      desc: isEN
        ? "ML-based dashboard for network anomaly detection with PCA & DBSCAN."
        : "Dashboard berbasis ML untuk deteksi anomali jaringan (PCA & DBSCAN).",
    },
    {
      img: "/p2.jpg",
      title: isEN ? "IoT Water Meter Integration" : "IoT Water Meter Integration",
      desc: isEN
        ? "LoRaWAN gateway with ThingsBoard for real-time consumption monitoring."
        : "Gateway LoRaWAN + ThingsBoard untuk monitoring konsumsi real-time.",
    },
    {
      img: "/p3.jpg",
      title: isEN ? "Fiber OTDR Analyzer" : "Fiber OTDR Analyzer",
      desc: isEN
        ? "AI-assisted OTDR trace analyzer to detect cuts and fiber degradation."
        : "Analyzer OTDR bertenaga AI untuk deteksi putus & degradasi fiber.",
    },
    {
      img: "/p4.jpg",
      title: isEN ? "Microwave Link Planner" : "Microwave Link Planner",
      desc: isEN
        ? "QGIS-assisted link planning toolkit with geospatial dashboards."
        : "Tool perencanaan link berbasis QGIS + dashboard geospasial.",
    },
    {
      img: "/p5.jpg",
      title: isEN ? "Smart Infra Dashboard" : "Smart Infra Dashboard",
      desc: isEN
        ? "Comprehensive monitoring for infrastructure KPIs and energy sites."
        : "Monitoring komprehensif untuk KPI infrastruktur & site energi.",
    },
    {
      img: "/p6.jpg",
      title: isEN ? "AI Training Portal" : "AI Training Portal",
      desc: isEN
        ? "Internal training platform for AI, certifications, and simulations."
        : "Platform internal pelatihan AI, sertifikasi, dan simulasi.",
    },
  ];

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold">
        {isEN ? "Project Footprint" : "Project Footprint"}
      </h2>
      <p className="mt-1 text-slate-400">
        {isEN
          ? "A snapshot of our work across IoT, AI, and data visualization."
          : "Cuplikan karya kami pada integrasi IoT, AI, dan visualisasi data."}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
          >
            <img
              src={it.img}
              alt={it.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
