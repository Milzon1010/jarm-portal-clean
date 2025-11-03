// src/components/ui/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>© {new Date().getFullYear()} Allanray TechSight. All rights reserved.</div>
          <div className="opacity-70">AI × IoT × Data — For Measurable Outcomes</div>
        </div>
      </div>
    </footer>
  );
}
