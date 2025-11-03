"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname() || "/";
  const isEN = pathname.startsWith("/en");
  const [open, setOpen] = useState(false);

  const link = (href: string, label: string) => (
    <Link
      href={href}
      className="block px-3 py-2 text-sm md:text-[15px] text-slate-200/90 hover:text-white"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      {/* tinggi header disesuaikan agar logo 92x92 muat di desktop */}
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 md:h-16 lg:h-24 flex items-center justify-between">
        {/* Brand */}
        <Link href={isEN ? "/en" : "/"} className="flex items-center gap-3">
          {/* Render logo 92×92 di desktop, otomatis dikecilkan di mobile */}
          <Image
            src="/logo-allanray.png"
            alt="Allanray TechSight"
            width={92}
            height={92}
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-[92px] lg:h-[92px] rounded-full"
          />
          <span className="text-slate-100 font-semibold text-sm md:text-base">
            Allanray TechSight
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {link(isEN ? "/en/company" : "/company", "Company")}
          {link(isEN ? "/en#projects" : "#projects", isEN ? "Lab / Portfolio" : "Lab / Portfolio")}
          {link(isEN ? "/en#jarm" : "#jarm", "JARM Portal")}
          {link(isEN ? "/en#contact" : "#contact", isEN ? "Contact" : "Contact")}
        </div>

        {/* Language segmented pill */}
        <div
          role="tablist"
          aria-label="Language"
          className="hidden md:inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-900/60 p-1 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)]"
        >
          <Link
            href="/"
            role="tab"
            aria-selected={!isEN}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
              !isEN ? "bg-slate-200 text-slate-900" : "text-slate-200 hover:text-white"
            }`}
          >
            ID
          </Link>
          <Link
            href="/en"
            role="tab"
            aria-selected={isEN}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
              isEN ? "bg-slate-200 text-slate-900" : "text-slate-200 hover:text-white"
            }`}
          >
            EN
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200/90 hover:bg-slate-800/60"
          aria-label="Open main menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className={open ? "hidden" : "block"}>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" className={open ? "block" : "hidden"}>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-slate-800/60 bg-slate-950/85 backdrop-blur ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300`}
      >
        <div className="px-4 pt-2 pb-3">
          {link(isEN ? "/en/company" : "/company", "Company")}
          {link(isEN ? "/en#projects" : "#projects", isEN ? "Lab / Portfolio" : "Lab / Portfolio")}
          {link(isEN ? "/en#jarm" : "#jarm", "JARM Portal")}
          {link(isEN ? "/en#contact" : "#contact", isEN ? "Contact" : "Contact")}

          <div
            role="tablist"
            aria-label="Language"
            className="mt-2 inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-900/60 p-1"
          >
            <Link
              href="/"
              role="tab"
              aria-selected={!isEN}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                !isEN ? "bg-slate-200 text-slate-900" : "text-slate-200 hover:text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              ID
            </Link>
            <Link
              href="/en"
              role="tab"
              aria-selected={isEN}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                isEN ? "bg-slate-200 text-slate-900" : "text-slate-200 hover:text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
