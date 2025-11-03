// src/components/ui/Tools.tsx
import Link from "next/link";

export default function Tools({ isEN = false }: { isEN?: boolean }) {
  const t = {
    title: isEN ? "Tools (Free)" : "Tools (Free)",
    blurb: isEN
      ? "Lightweight templates/scripts to speed up daily work."
      : "Template dan skrip ringan untuk mempercepat pekerjaan harian."
  };

  const items = [
    {
      title: "Data Cleaning Template (CSV)",
      desc: isEN
        ? "Typical columns template: missing values, date format, status & amount."
        : "Template kolom tipikal: missing values, format tanggal, status & jumlah.",
      file: "/downloads/Data_Cleaning_Template.csv"
    },
    {
      title: "KPI Dashboard Template (CSV)",
      desc: isEN
        ? "Simple structure: date, metric, value — good for quick BI proof-of-concept."
        : "Struktur sederhana: date, metric, value — cocok untuk POC BI.",
      file: "/downloads/KPI_Dashboard_Template.csv"
    },
    {
      title: "Script: Split CSV by Column (Python, stdlib)",
      desc: isEN
        ? "Split CSV into many files by a column value."
        : "Membagi CSV menjadi banyak file berdasarkan nilai kolom.",
      file: "/downloads/split_csv_by_column.py"
    },
    {
      title: "Script: Batch Rename Files (PowerShell)",
      desc: isEN
        ? "Mass rename with Prefix_Tanggal_##.ext pattern."
        : "Rename massal dengan pola Prefix_Tanggal_##.ext.",
      file: "/downloads/rename_files.ps1"
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      <p className="text-slate-400 mb-6">{t.blurb}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => (
          <div key={x.title} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5">
            <h3 className="font-semibold text-slate-100">{x.title}</h3>
            <p className="text-sm text-slate-400 mt-2">{x.desc}</p>
            <div className="mt-4">
              <Link
                href={x.file}
                download
                className="inline-flex items-center rounded-xl border border-slate-700 px-3 py-1.5 text-sm hover:bg-slate-800"
              >
                ⬇ Download
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Letakkan file di <code>public/downloads</code> agar URL di atas berfungsi.
      </p>
    </div>
  );
}
