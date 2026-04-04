"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { educationItems } from "@/data/portfolio";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="An academic base that reinforces applied engineering work."
      description="The academic trajectory is not ornamental here. It directly supports Nishang’s depth in AI, analytics, and production-focused systems design."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="surface-ring glass-panel rounded-[30px] p-7"
          >
            <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.institution}</p>
                {item.location ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">
                    {item.location}
                  </p>
                ) : null}
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                {item.period}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">{item.details}</p>
            {item.highlights ? (
              <div className="mt-6 grid gap-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm leading-7 text-slate-300"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
