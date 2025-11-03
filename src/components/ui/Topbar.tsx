// src/components/ui/Topbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";

type Locale = "id" | "en";

const COMPANY = process.env.NEXT_PUBLIC_COMPANY_URL ?? "/company";
const LAB = process.env.NEXT_PUBLIC_LAB_URL ?? "/lab";
const JARM = process.env.NEXT_PUBLIC_JARM_URL ?? "/jarm";

function detectLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
}

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function Topbar() {
  const pathname = usePathname() || "/";
  const locale = useMemo(() => detectLocale(pathname), [pathname]);
  const [open, setOpen] = useState(false);

  // helper untuk item nav (highlight aktif)
  const isActive = (test: string) => pathname === test || pathname.startsWith(test + "/");

  const companyHref = COMPANY || (locale === "en" ? "/en/company" : "/company");
  const labHref = LAB || (locale === "en" ? "/en/lab" : "/lab");
  const jarmHref = JARM; // bisa eksternal / subdomain / path

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 max-w-screen-2xl">
        {/* Brand */}
        <Link href={locale === "en" ? "/en" : "/"} className="font-semibold tracking-tight text-slate-200">
          Allanray TechSight
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {/* Company */}
          {isExternal(companyHref) ? (
            <a
              href={companyHref}
              rel="noopener"
              target="_blank"
              className={`rounded-lg px-3 py-2 text-sm ${
                isActive("/company") || isActive("/en/company")
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {locale === "en" ? "Company" : "Perusahaan"}
            </a>
          ) : (
            <Link
              href={companyHref}
              className={`rounded-lg px-3 py-2 text-sm ${
                isActive("/company") || isActive("/en/company")
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {locale === "en" ? "Company" : "Perusahaan"}
            </Link>
          )}

          {/* Lab / Portfolio */}
          {isExternal(labHref) ? (
            <a
              href={labHref}
              rel="noopener"
              target="_blank"
              className={`rounded-lg px-3 py-2 text-sm ${
                isActive("/lab") || isActive("/en/lab")
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {locale === "en" ? "Lab (Portfolio)" : "Lab / Portofolio"}
            </a>
          ) : (
            <Link
              href={labHref}
              className={`rounded-lg px-3 py-2 text-sm ${
                isActive("/lab") || isActive("/en/lab")
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {locale === "en" ? "Lab (Portfolio)" : "Lab / Portofolio"}
            </Link>
          )}

          {/* JARM Portal */}
          {isExternal(jarmHref) ? (
            <a
              href={jarmHref}
              rel="noopener"
              target="_blank"
              className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
            >
              JARM Portal
            </a>
          ) : (
            <Link
              href={jarmHref}
              className={`rounded-lg px-3 py-2 text-sm ${
                isActive("/jarm") || isActive("/en/jarm")
                  ? "bg-white/10 text-white"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              JARM Portal
            </Link>
          )}

          {/* Language Toggle */}
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
            {/* Company */}
            {isExternal(companyHref) ? (
              <a
                href={companyHref}
                rel="noopener"
                target="_blank"
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {locale === "en" ? "Company" : "Perusahaan"}
              </a>
            ) : (
              <Link
                href={companyHref}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {locale === "en" ? "Company" : "Perusahaan"}
              </Link>
            )}

            {/* Lab */}
            {isExternal(labHref) ? (
              <a
                href={labHref}
                rel="noopener"
                target="_blank"
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {locale === "en" ? "Lab (Portfolio)" : "Lab / Portofolio"}
              </a>
            ) : (
              <Link
                href={labHref}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {locale === "en" ? "Lab (Portfolio)" : "Lab / Portofolio"}
              </Link>
            )}

            {/* JARM */}
            {isExternal(jarmHref) ? (
              <a
                href={jarmHref}
                rel="noopener"
                target="_blank"
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                JARM Portal
              </a>
            ) : (
              <Link
                href={jarmHref}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                JARM Portal
              </Link>
            )}

            <div className="pt-1">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
