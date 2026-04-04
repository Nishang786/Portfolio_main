"use client";

import { motion } from "framer-motion";

import { SectionShell } from "@/components/ui/section-shell";
import { experienceItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="My Experience"
      title="My experience is centered on scale, precision, and product-minded engineering."
      description="I want the pattern to be obvious quickly: large datasets, measurable performance gains, and systems that move from model logic into usable workflows."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(34,211,238,0.45),rgba(139,92,246,0.4),rgba(255,255,255,0.04))] lg:left-1/2 lg:block lg:-translate-x-1/2" />
        <div className="grid gap-10">
          {experienceItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                className="relative lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8"
              >
                <div className={cn("hidden lg:block", !isEven && "lg:order-3")} />

                <div className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center lg:static lg:order-2 lg:mx-auto">
                  <div className="absolute h-8 w-8 rounded-full bg-cyan-400/12 blur-md" />
                  <div className="relative h-3 w-3 rounded-full border border-cyan-300/80 bg-slate-950" />
                </div>

                <div
                  className={cn(
                    "ml-10 rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-panel backdrop-blur-xl lg:ml-0",
                    isEven ? "lg:order-1" : "lg:order-3"
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{item.summary}</p>
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
                  {item.techUsed ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
