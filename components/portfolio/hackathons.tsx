"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { hackathonItems } from "@/data/portfolio";

export function HackathonsSection() {
  return (
    <SectionShell
      id="hackathons"
      eyebrow="My Hackathons"
      title="I built these competitive projects with company mentorship and real-world constraints."
      description="I developed these projects in hackathon settings where the brief, the timeline, and the stakeholders were all external. The logo header keeps the host visible at a glance."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {hackathonItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="surface-ring glass-panel group relative overflow-hidden rounded-[32px] p-7 sm:p-8"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`} />
            <div className="absolute inset-px rounded-[31px] bg-slate-950/78" />

            <div className="relative flex h-full flex-col">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/50">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.6)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_48%)]" />
                </div>

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
                  <div className="max-w-[70%]">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-200/80">
                      Hackathon Host
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white drop-shadow-sm sm:text-3xl">
                      {item.host}
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/15 bg-slate-950/45 p-3 text-slate-100 backdrop-blur-sm transition-colors duration-300 group-hover:text-cyan-200">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-200/85 backdrop-blur-sm">
                    {item.title}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-300">{item.summary}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.impact}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-2 text-sm text-emerald-100"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-900/55 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Preview</p>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Hackathon Build
                  </span>
                </div>
                <div className="grid gap-3">
                  {item.preview.map((line) => (
                    <div
                      key={line}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}