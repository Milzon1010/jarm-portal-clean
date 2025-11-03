"use client";
import type { ReactNode, ElementType } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType; // ⬅ pengganti keyof JSX.IntrinsicElements
};

export default function Card({ children, className = "", as: As = "div" }: CardProps) {
  return (
    <As
      className={[
        "rounded-2xl border border-white/12",
        "bg-white/[0.06] backdrop-blur-sm",
        "shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_10px_30px_-15px_rgba(0,0,0,0.5)]",
        "p-5 sm:p-6",
        "transition-all hover:bg-white/[0.10] hover:border-white/20",
        "hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_16px_40px_-18px_rgba(0,0,0,0.65)]",
        "focus-within:ring-1 focus-within:ring-cyan-400/40",
        className,
      ].join(" ")}
    >
      {children}
    </As>
  );
}
