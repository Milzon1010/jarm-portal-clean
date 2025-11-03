"use client";

import { usePathname } from "next/navigation";

type Item = { title: string; blurb: string; date: string; href: string };

export default function News() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  const items: Item[] = [
    {
      title: isEN ? "Cohort: Practical AI for Decisions" : "Kohort: AI Praktis untuk Keputusan",
      blurb: isEN
        ? "Join our cohort to learn practical AI decision-making."
        : "Bergabung untuk belajar pengambilan keputusan AI yang praktis.",
      date: "2025-09-08",
      href: isEN ? "/en/contact" : "/contact",      // ← langsung ke contact per-locale
    },
    // Tambah item lain jika perlu …
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-100">{isEN ? "News" : "Berita"}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((it, i) => (
          <li key={i} className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-slate-400 text-xs">{it.date}</div>
            <div className="text-slate-100 font-medium">{it.title}</div>
            <p className="text-slate-300 text-sm mt-1">{it.blurb}</p>
            <a className="mt-3 inline-block text-sm underline" href={it.href}>
              {isEN ? "Details" : "Detail"}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
