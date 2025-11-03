"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero({ isEN = false }: { isEN?: boolean }) {
  // Teks heading bilingual (judul besar)
  const title = isEN
    ? (
        <>
          AI × IoT × Data <span className="text-slate-300">—</span>{" "}
          <span className="whitespace-pre">For Measurable Outcomes</span>
        </>
      )
    : (
        <>
          AI × IoT × Data <span className="text-slate-300">—</span>{" "}
          <span className="whitespace-pre">Menuju Dampak yang Terukur</span>
        </>
      );

  // Paragraf hero (hook + pengalaman) — bilingual
  const lead = isEN ? (
    <>
      <strong className="font-semibold text-slate-100">
        Delivering machine-learning models, AI workflows/tools & chatbots;
        reporting dashboards; iOS/Android mobile apps; and IoT sensors with dashboards.
      </strong>{" "}
      We bring <b>23+ years of experience</b> in technology & telecommunications.
      Telco Deployment (FO / MW / RF): design, BoQ, route & link budget, supervision & commissioning.
      Physical installation handled by licensed partners or the client’s contractors.
      We also design and build <b>end-to-end solutions</b> — from sensors and data pipelines to executive dashboards
      — with project discipline and a techno-spiritual ethos.
    </>
  ) : (
    <>
      <strong className="font-semibold text-slate-100">
        Menyelesaikan model machine learning, AI workflows/tools & chatbot; dashboard laporan;
        aplikasi mobile iOS/Android; serta IoT sensor dengan dashboard.
      </strong>{" "}
      Kami memiliki <b>pengalaman 23+ tahun</b> di teknologi & telekomunikasi.
      Penerapan Telco (FO / MW / RF): desain, BoQ, anggaran rute & tautan, supervisi & komisioning.
      Instalasi fisik ditangani mitra berlisensi atau kontraktor klien.
      Kami juga merancang dan membangun <b>solusi ujung-ke-ujung</b> — dari sensor dan jalur data hingga
      dasbor eksekutif — dengan disiplin proyek dan etos tekno-spiritual.
    </>
  );

  // Badge (legal/izin) bilingual
  const badge1 = isEN ? "Registered OSS (UMK) — Active NIB" : "Registered OSS (UMK) — Active NIB";
  const badge2 = isEN ? "SPPL on file" : "SPPL on file";

  // Tombol bilingual
  const primaryCta = isEN ? "See Projects" : "Lihat Layanan";
  const secondaryCta = isEN ? "Contact Team" : "Contact";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-900/40 ring-1 ring-white/10 shadow-xl">
      {/* Background image full-bleed */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/background-jarm-page.png"
          alt="Allanray TechSight – AI × IoT × Data background"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Overlay halus agar teks tetap kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/60" />
      </div>

      {/* Konten */}
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Judul */}
        <h1 className="mx-auto max-w-5xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50 text-center">
          {title}
        </h1>

        {/* Deskripsi */}
        <p className="mx-auto mt-6 sm:mt-7 lg:mt-8 max-w-3xl text-center text-base sm:text-lg text-slate-200/90">
          {lead}
        </p>

        {/* Badge bar */}
        <div className="mt-6 sm:mt-7 lg:mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,.35)]" />
            {badge1}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_2px_rgba(34,211,238,.35)]" />
            {badge2}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-7 sm:mt-8 lg:mt-9 flex items-center justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow hover:bg-sky-400 active:bg-sky-600 transition"
          >
            {primaryCta}
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300/20 bg-slate-800/60 px-4 sm:px-5 py-2.5 text-sm sm:text-base font-medium text-slate-100 hover:bg-slate-800/80 transition"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
