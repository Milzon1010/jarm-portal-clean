// src/components/ui/News.tsx
import Link from "next/link";

export default function News({ isEN = false }: { isEN?: boolean }) {
  const t = {
    title: isEN ? "News & Updates" : "News & Updates",
    blurb: isEN
      ? "Short notes and announcements."
      : "Catatan singkat dan pengumuman."
  };

  const items = [
    {
      title: isEN ? "OSS registered — NIB active" : "OSS terdaftar — NIB aktif",
      date: "2025-07-12",
      href: "#contact",
      desc: isEN
        ? "Formalities cleared; we’re ready for compliant engagements."
        : "Administrasi beres; siap untuk engagement yang compliant."
    },
    {
      title: isEN ? "Water-meter LoRaWAN pilot" : "Pilot LoRaWAN water-meter",
      date: "2025-06-28",
      href: "#projects",
      desc: isEN
        ? "Integration with ThingsBoard for near real-time monitoring."
        : "Integrasi ThingsBoard untuk monitoring nyaris real-time."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      <p className="text-slate-400 mb-6">{t.blurb}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((n) => (
          <article key={n.title} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
            <div className="text-xs text-slate-500">{n.date}</div>
            <h3 className="mt-1 font-semibold text-slate-100">
              <Link href={n.href}>{n.title}</Link>
            </h3>
            <p className="text-sm text-slate-400 mt-2">{n.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
