"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20 lg:px-12 lg:py-24",
        className
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-end lg:gap-10">
        <div className="max-w-4xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        {description ? (
          <div className="lg:pb-2">
            <div className="section-line mb-4 h-px w-full max-w-xs opacity-70" />
            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {description}
            </p>
          </div>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
