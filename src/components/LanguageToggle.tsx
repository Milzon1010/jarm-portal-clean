// src/components/LanguageToggle.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useTransition } from "react";

type Locale = "id" | "en";

function withLocale(pathname: string, target: Locale) {
  // Normalisasi: hilangkan trailing slash kecuali root
  const clean =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (target === "en") {
    // Kalau sudah /en, biarkan
    if (clean === "/en" || clean.startsWith("/en/")) return clean;
    // Tambahkan prefix /en
    return clean === "/" ? "/en" : `/en${clean}`;
  } else {
    // target === "id" → lepas prefix /en kalau ada
    if (clean === "/en") return "/";
    if (clean.startsWith("/en/")) return clean.replace(/^\/en/, "") || "/";
    return clean || "/";
  }
}

export default function LanguageToggle() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLocale: Locale = useMemo(
    () => (pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id"),
    [pathname]
  );

  const qs = searchParams?.toString();
  const suffix = qs ? `?${qs}` : "";

  const go = useCallback(
    (locale: Locale) => {
      const nextPath = withLocale(pathname, locale) + suffix;
      startTransition(() => {
        router.replace(nextPath); // smooth, tidak reload penuh
      });
    },
    [pathname, suffix, router]
  );

  return (
    <div
      className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur"
      role="group"
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => go("id")}
        aria-pressed={currentLocale === "id"}
        className={[
          "px-3 py-1.5 text-sm font-medium rounded-lg transition",
          currentLocale === "id"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-200 hover:bg-white/10",
          isPending ? "opacity-70" : "",
        ].join(" ")}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => go("en")}
        aria-pressed={currentLocale === "en"}
        className={[
          "ml-1 px-3 py-1.5 text-sm font-medium rounded-lg transition",
          currentLocale === "en"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-200 hover:bg-white/10",
          isPending ? "opacity-70" : "",
        ].join(" ")}
      >
        EN
      </button>
    </div>
  );
}
