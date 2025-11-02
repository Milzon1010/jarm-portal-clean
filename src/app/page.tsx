"use client";
import Link from "next/link";
import { URLS } from "@/lib/urls";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">JARM Portal</h1>
      <p className="max-w-xl text-center">Products • Services • Demos</p>
      <div className="flex gap-3">
        <Link href={URLS.company} className="px-4 py-2 rounded bg-black text-white">Company</Link>
        <Link href={URLS.lab} className="px-4 py-2 rounded border">Milzon AI Lab</Link>
      </div>
    </main>
  );
}
