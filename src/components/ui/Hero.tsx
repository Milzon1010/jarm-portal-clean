export default function Hero({ isEN = false }: { isEN?: boolean }) {
  const title = "AI × IoT × Data — For Measurable Outcomes";

  const lead = isEN ? (
    <>
      <strong className="font-semibold text-slate-100">
        Delivering machine-learning models, AI workflows/tools & chatbots; reporting dashboards; iOS/Android mobile apps; and IoT sensors with dashboards.
      </strong>{" "}
      We bring <b>23+ years of experience</b> in technology & telecommunications.
      Telco Deployment (FO / MW / RF): design, BoQ, route & link budget, supervision & commissioning.
      Physical installation handled by licensed partners or the client’s contractors.
      We also design and build <b>end-to-end solutions</b> — from sensors and data pipelines to executive dashboards — with project discipline and a techno-spiritual ethos.
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

  const badges = isEN
    ? ["Registered OSS (UMK) — Active NIB", "SPPL on file"]
    : ["Terdaftar OSS (UMK) — NIB Aktif", "SPPL tersimpan"];

  const ctaSee = isEN ? "See Projects" : "Lihat Layanan";
  const ctaContact = isEN ? "Contact Team" : "Hubungi Tim";

  return (
    // Full-bleed section dengan background gambar (stretch) + overlay
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url(/background-jarm-page.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay gelap tipis untuk kontras teks */}
      <div className="absolute inset-0 bg-slate-950/55"></div>

      {/* konten tetap center dan dibatasi max-w agar rapi */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-slate-200 leading-relaxed">
            {lead}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {badges.map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-400"
            >
              {ctaSee}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
            >
              {ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
