export default function Tools() {
  const tools = [
    {
      title: "Data Cleaning Template (CSV)",
      desc: "Template kolom tipikal untuk cleaning: missing values, format tanggal, status & jumlah.",
      file: "/downloads/Data_Cleaning_Template.csv",
    },
    {
      title: "KPI Dashboard Template (CSV)",
      desc: "Struktur data sederhana: date, metric, value — cocok untuk proof-of-concept BI.",
      file: "/downloads/KPI_Dashboard_Template.csv",
    },
    {
      title: "Script: Split CSV by Column (Python, stdlib)",
      desc: "Memecah satu CSV menjadi banyak file berdasarkan nilai kolom tertentu.",
      file: "/downloads/split_csv_by_column.py",
    },
    {
      title: "Script: Batch Rename Files (PowerShell)",
      desc: "Rename file massal dengan pola Prefix_Tanggal_###.ext.",
      file: "/downloads/rename_files.ps1",
    },
  ];

  return (
    <section id="tools" className="py-12 md:py-16">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Tools (Free)</h2>
        <p className="mt-1 text-slate-400">Template dan skrip ringan untuk mempercepat pekerjaan harian.</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white/95 text-slate-800 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{t.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={t.file}
                    download
                    className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800"
                  >
                    ⬇ Download
                  </a>
                  <a
                    href={t.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg ring-1 ring-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    👁️ View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Letakkan file di <code>public/downloads</code> agar URL di atas berfungsi. Perlu format lain? Ping kami.
        </p>
      </div>
    </section>
  );
}
