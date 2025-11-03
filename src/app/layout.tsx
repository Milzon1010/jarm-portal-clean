// root layout – tidak ada logika bahasa di sini, Nav yang handle toggle
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BackBar from "@/components/ui/BackBar";

export const metadata: Metadata = {
  title: "JARM TechSight — Allanray",
  description: "AI × IoT × Data — For Measurable Outcomes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="bg-slate-950">
      <body className="min-h-dvh text-slate-100 antialiased">
        <Nav />
        {/* BackBar default fallback → https://www.allanraytechsight.co.id/company */}
        <BackBar />
        {children}
      </body>
    </html>
  );
}
