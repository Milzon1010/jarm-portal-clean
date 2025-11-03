export default function ContactSignature({ isEN = false }: { isEN?: boolean }) {
  const T = {
    title: isEN ? "Contact & Company Signature" : "Kontak & Tanda Tangan Perusahaan",
    line1: isEN
      ? "Allanray TechSight — AI × IoT × Data"
      : "Allanray TechSight — AI × IoT × Data",
    line2: isEN
      ? "Registered OSS (UMK) — Active NIB — SPPL on file"
      : "Terdaftar OSS (UMK) — NIB Aktif — SPPL on file",
    email: "hello.info@allanraytechsight.co.id",
    contact: isEN ? "Email Us" : "Kirim Email",
    meet: isEN ? "Book a Call" : "Atur Panggilan",
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7">
      <h2 className="text-xl sm:text-2xl font-semibold">{T.title}</h2>

      <div className="mt-3 space-y-1 text-slate-300">
        <div>{T.line1}</div>
        <div className="text-slate-400">{T.line2}</div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`mailto:${T.email}`}
          className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
        >
          {T.contact}
        </a>
        <a
          href="#"
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
        >
          {T.meet}
        </a>
        <span className="inline-flex items-center rounded-xl border border-slate-700 px-3 text-xs text-slate-400">
          {T.email}
        </span>
      </div>
    </div>
  );
}
