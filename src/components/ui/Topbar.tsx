// src/components/ui/Topbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";

type Locale = "id" | "en";

// Hard links lintas-domain (tab yang sama)
const DOMAINS = {
  COMPANY_ID: "https://allanraytechsight.co.id/company",
  COMPANY_EN: "https://allanraytechsight.co.id/en/company",
  LAB_ID: "https://lab.allanraytechsight.co.id",
  LAB_EN: "https://lab.allanraytechsight.co.id/en",
  // JARM tetap internal
  JARM_ID: "/",
  JARM_EN: "/en",
};

function detectLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
}

export default function Topbar() {
  const pathname = usePathname() || "/";
  const locale = useMemo(() => detectLocale(pathname), [pathname]);
  const [open, setOpen] = useState(false);

  // Link lintas-domain (NO target="_blank" agar back bekerja)
  const companyHref = locale === "en" ? DOMAINS.COMPANY_EN : DOMAINS.COMPANY_ID;
  const labHref = locale === "en" ? DOMAINS.LAB_EN : DOMAINS.LAB_ID;

  // Link internal JARM
  const jarmHref = locale === "en" ? DOMAINS.JARM_EN : DOMAINS.JARM_ID;

  const isActive = (test: string) => pathname === test || pathname.startsWith(test + "/");

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 md:h-16 lg:h-20 max-w-screen-2xl">
        {/* Brand */}
        <Link href={jarmHref} className="font-semibold tracking-tight text-slate-200">
          Allanray TechSight
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {/* Company → domain utama (same tab) */}
          <a
            href={companyHref}
            className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
          >
            {locale === "en" ? "Company" : "Perusahaan"}
          </a>

          {/* Lab / Portfolio → domain lab (same tab) */}
          <a
            href={labHref}
            className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
          >
            {locale === "en" ? "Lab (Portfolio)" : "Lab / Portofolio"}
          </a>

          {/* JARM Portal (internal) */}
          <Link
            href={jarmHref}
            className={`rounded-lg px-3 py-2 text-sm ${
              isActive(locale === "en" ? "/en" : "/")
                ? "bg-white/10 text-white"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            JARM Portal
          </Link>

          {/* Contact (anchor internal JARM) */}
          <Link
            href={locale === "en" ? "/en#contact" : "/#contact"}
            className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
          >
            Contact
          </Link>

          <LanguageToggle />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto max-w-screen-2xl px-4 py-2 flex flex-col gap-1">
            <a
              href={companyHref}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {locale === "en" ? "Company" : "Perusahaan"}
            </a>

            <a
              href={labHref}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {locale === "en" ? "Lab (Portfolio)" : "Lab / Portofolio"}
            </a>

            <Link
              href={jarmHref}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              JARM Portal
            </Link>

            <Link
              href={locale === "en" ? "/en#contact" : "/#contact"}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-1">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
