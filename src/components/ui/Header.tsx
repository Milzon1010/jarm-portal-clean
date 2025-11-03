// src/components/ui/Header.tsx
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <nav className="flex items-center gap-6">
        <Link href="/" className="font-semibold">Allanray Tech Semesta</Link>
        <Link href="/company">Company</Link>
        <Link href="/lab">Lab</Link>
        <Link
          href="https://jarm.allanraytechsight.co.id"
          target="_blank"
          rel="noopener"
        >
          JARM Portal
        </Link>
      </nav>
      <LanguageToggle />
    </header>
  );
}
