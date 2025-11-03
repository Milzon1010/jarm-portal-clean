// src/components/ui/Certs.tsx
import React from "react";

type CertStatus = "Active" | "On-going" | "Planned";
type Cert = {
  key: string;
  status: CertStatus;
  id: { title: string; issuer: string; notes: string };
  en: { title: string; issuer: string; notes: string };
};

const COMPANY_CERTS: Cert[] = [
  {
    key: "oss-nib",
    status: "Active",
    id: {
      title: "OSS (UMK) — NIB Aktif",
      issuer: "Kementerian Investasi (BKPM)",
      notes: "Terdaftar & beroperasi; dokumen siap verifikasi.",
    },
    en: {
      title: "OSS (UMK) — Active NIB",
      issuer: "Ministry of Investment (BKPM)",
      notes: "Registered & operating; documents ready for verification.",
    },
  },
  {
    key: "kbli-62090",
    status: "Active",
    id: {
      title: "KBLI 62090 — Jasa Aktivitas TI Lainnya",
      issuer: "OSS",
      notes: "Sistem, integrasi API, maintenance & layanan TI.",
    },
    en: {
      title: "KBLI 62090 — Other IT Activities",
      issuer: "OSS",
      notes: "Systems, API integration, maintenance and IT services.",
    },
  },
  {
    key: "kbli-62024",
    status: "Active",
    id: {
      title: "KBLI 62024 — Konsultasi & Desain IoT",
      issuer: "OSS",
      notes: "Arsitektur, integrasi sensor/gateway, monitoring cloud.",
    },
    en: {
      title: "KBLI 62024 — IoT Consulting & Design",
      issuer: "OSS",
      notes: "Architecture, sensor/gateway integration, cloud monitoring.",
    },
  },
  {
    key: "kbli-63112",
    status: "Planned",
    id: {
      title: "KBLI 63112 — Hosting & Data Processing (Opsional)",
      issuer: "OSS",
      notes: "Hosting/dashboard sebagai layanan (SaaS) bila dibutuhkan.",
    },
    en: {
      title: "KBLI 63112 — Hosting & Data Processing (Optional)",
      issuer: "OSS",
      notes: "Hosting/dashboard as a service (SaaS) when needed.",
    },
  },
  {
    key: "sppl",
    status: "Active",
    id: {
      title: "SPPL — Pernyataan Kesanggupan (On File)",
      issuer: "Lingkungan Hidup",
      notes: "Kepatuhan lingkungan sesuai skala usaha.",
    },
    en: {
      title: "SPPL — Environmental Statement (On File)",
      issuer: "Environmental Agency",
      notes: "Environmental compliance per business scale.",
    },
  },
];

const INDIVIDUAL_CERTS: Cert[] = [
  {
    key: "aws-ccp",
    status: "Active",
    id: {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      notes: "Dasar cloud, keamanan, billing, arsitektur kecil.",
    },
    en: {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      notes: "Cloud fundamentals, security, billing, small-scale arch.",
    },
  },
  {
    key: "aws-saa",
    status: "Active",
    id: {
      title: "AWS Solutions Architect – Associate (On-going)",
      issuer: "Amazon Web Services",
      notes: "Desain solusi terukur & andal; target Q4/Q1.",
    },
    en: {
      title: "AWS Solutions Architect – Associate (On-going)",
      issuer: "Amazon Web Services",
      notes: "Scalable & reliable solution design; target Q4/Q1.",
    },
  },
  {
    key: "tf-dev",
    status: "Active",
    id: {
      title: "TensorFlow Developer Specialization",
      issuer: "DeepLearning.AI",
      notes: "NLP/vision basics & time-series; model ringan untuk IoT.",
    },
    en: {
      title: "TensorFlow Developer Specialization",
      issuer: "DeepLearning.AI",
      notes: "NLP/vision basics & time-series; lightweight IoT models.",
    },
  },
  {
    key: "harvardx",
    status: "On-going",
    id: {
      title: "HarvardX Data Science (PH125.x) (On-going)",
      issuer: "HarvardX / edX",
      notes: "Statistika, visualisasi, inference; applied foundation.",
    },
    en: {
      title: "HarvardX Data Science (PH125.x) (On-going)",
      issuer: "HarvardX / edX",
      notes: "Statistics, visualization, inference; applied foundation.",
    },
  },
   {
    key: "BNSP",
    status: "On-going",
    id: {
      title: "Data Science (On-going)",
      issuer: "bnspsertifikasi.id (BNSP)",
      notes: "Statistika, visualisasi, inference; applied foundation.",
    },
    en: {
      title: "Data Science (On-going)",
      issuer: "bnspsertifikasi.id (BNSP)",
      notes: "Statistics, visualization, inference; applied foundation.",
    },
  },
  {
    key: "pmp",
    status: "Eligible 35hrs PDU (exam planned)",
    id: {
      title: "PMP® Exam Readiness (Planned)",
      issuer: "PMI / Training Providers",
      notes: "Standar PMBOK untuk penguatan PMO & governance.",
    },
    en: {
      title: "PMP® Exam Readiness (Planned)",
      issuer: "PMI / Training Providers",
      notes: "PMBOK standards to strengthen PMO & governance.",
    },
  },
];

function StatusBadge({ s }: { s: CertStatus }) {
  const cls =
    s === "Active"
      ? "bg-emerald-500/15 text-emerald-300"
      : s === "On-going"
      ? "bg-sky-500/15 text-sky-300"
      : "bg-amber-500/15 text-amber-300";
  return <span className={`px-2 py-0.5 rounded text-xs ${cls}`}>{s}</span>;
}

export default function Certs({ isEN = false }: { isEN?: boolean }) {
  const pick = (c: Cert) => (isEN ? c.en : c.id);

  const Block = ({
    title,
    items,
  }: {
    title: string;
    items: Cert[];
  }) => (
    <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/5">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="space-y-3">
        {items.map((c) => {
          const t = pick(c);
          return (
            <li key={c.key} className="flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">{t.title}</div>
                <div className="text-slate-400 text-sm">
                  {t.issuer} — {t.notes}
                </div>
              </div>
              <StatusBadge s={c.status} />
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        {isEN ? "Legal & Certifications" : "Legal & Sertifikasi"}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Block
          title={isEN ? "Company Compliance" : "Kepatuhan Perusahaan"}
          items={COMPANY_CERTS}
        />
        <Block
          title={isEN ? "Individual Certifications" : "Sertifikasi Individu"}
          items={INDIVIDUAL_CERTS}
        />
      </div>
    </section>
  );
}
