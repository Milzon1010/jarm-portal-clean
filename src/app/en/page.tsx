// src/app/en/page.tsx
import Hero from "@/components/ui/Hero";
import KBLI from "@/components/ui/KBLI";
import Capabilities from "@/components/ui/Capabilities";
import Certs from "@/components/ui/Certs";
import Tools from "@/components/ui/Tools";
import News from "@/components/ui/News";
import Articles from "@/components/ui/Articles";
import CTA from "@/components/ui/CTA";
import ContactSignature from "@/components/ui/Contact";

export default function HomeEN() {
  const isEN = true;

  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <Hero isEN={isEN} />

      {/* LEGAL / KBLI */}
      <section id="legal" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <KBLI isEN={isEN} />
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <Capabilities isEN={isEN} />
      </section>

      {/* CERTS */}
      <section id="certs" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <Certs isEN={isEN} />
      </section>

      {/* TOOLS */}
      <section id="tools" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <Tools isEN={isEN} />
      </section>

      {/* NEWS */}
      <section id="news" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <News isEN={isEN} />
      </section>

      {/* ARTICLES */}
      <section id="articles" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <Articles isEN={isEN} />
      </section>

      {/* CTA */}
      <section id="cta" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-16">
        <CTA isEN={isEN} />
      </section>

      {/* CONTACT / SIGNATURE */}
      <section id="contact" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 lg:mt-20 mb-24">
        <ContactSignature isEN={isEN} />
      </section>
    </main>
  );
}
