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
      className={cn("mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-12 max-w-3xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          {eyebrow}
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
