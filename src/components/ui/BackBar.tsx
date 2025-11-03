"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCallback } from "react";

// Default langsung ke /company di domain utama (tanpa bergantung ke urls.ts)
const DEFAULT_COMPANY_PAGE = "https://www.allanraytechsight.co.id/company";

export default function BackBar({
  fallback = DEFAULT_COMPANY_PAGE,
  label = "Back",
}: { fallback?: string; label?: string }) {
  const router = useRouter();

  const goBack = useCallback(() => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      window.location.href = fallback;
    }
  }, [router, fallback]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl flex items-center gap-3 p-3">
        <button
          onClick={goBack}
          className="rounded-xl px-3 py-1 text-sm border"
          aria-label="Go back"
        >
          ← {label}
        </button>
        <Link href={fallback} className="text-sm underline">
          Company
        </Link>
      </div>
    </div>
  );
}
