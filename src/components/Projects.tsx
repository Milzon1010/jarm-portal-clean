// src/components/Projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Network Intrusion Dashboard",
    desc: "Dashboard berbasis ML untuk deteksi anomali jaringan dengan PCA & DBSCAN.",
    img: "/p1.jpg",
  },
  {
    title: "IoT Water Meter Integration",
    desc: "Integrasi gateway LoRaWAN dengan ThingsBoard untuk monitoring konsumsi air real-time.",
    img: "/p2.jpg",
  },
  {
    title: "Fiber OTDR Analyzer",
    desc: "AI-driven OTDR trace analyzer untuk deteksi putus dan degradasi fiber optic.",
    img: "/p3.jpg",
  },
  {
    title: "Microwave Link Planner",
    desc: "Perangkat bantu perencanaan link microwave berbasis QGIS & dashboard geospasial.",
    img: "/p4.jpg",
  },
  {
    title: "Smart Infra Dashboard",
    desc: "Dashboard komprehensif untuk pemantauan infrastruktur site & energi.",
    img: "/p5.jpg",
  },
  {
    title: "AI Training Portal",
    desc: "Platform internal pelatihan AI, sertifikasi, dan simulasi berbasis cloud.",
    img: "/p6.jpg",
  },
];

// shimmer SVG untuk blur placeholder
const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#0b1220" offset="20%" />
        <stop stop-color="#16223a" offset="50%" />
        <stop stop-color="#0b1220" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#0b1220" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"  />
  </svg>`;
const toBase64 =
  typeof window === "undefined"
    ? (str: string) => Buffer.from(str).toString("base64")
    : (str: string) => window.btoa(str);

function ProjectCard({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  // fallback kalau gambar lokal gagal (pakai picsum yang SUDAH di-allow di next.config.ts)
  const [src, setSrc] = useState(img);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="card overflow-hidden cursor-pointer"
    >
      <div className="relative w-full h-44 overflow-hidden rounded-xl bg-slate-950">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover opacity-90 transition hover:opacity-100"
          // ⬇️ HAPUS grayscale, biar fallback tetap berwarna
          onError={() => setSrc("https://picsum.photos/800/600")}
          priority={false}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
        />
        {/* overlay lembut biar teks lebih kebaca kalau nanti ditaruh di atas gambar */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_60%,rgba(0,0,0,0.28),rgba(0,0,0,0))]" />
      </div>
      <h4 className="mt-3 text-lg font-semibold text-slate-100">{title}</h4>
      <p className="text-sm text-slate-300 mt-1">{desc}</p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-slate-100 mb-2">Project Footprint</h3>
        <p className="text-slate-400 text-sm mb-8">
          Cuplikan karya (tanpa detail sensitif) yang menggambarkan fokus kami pada integrasi IoT,
          AI, dan visualisasi data untuk dampak nyata.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
