"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, DatabaseZap, Sparkles, ShieldCheck } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { skillGroups } from "@/data/portfolio";

const iconMap = {
  brain: BrainCircuit,
  database: DatabaseZap,
  code: Code2,
  shield: ShieldCheck,
  sparkles: Sparkles
};

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="My Stack"
      title="I use a stack built for modern AI delivery, not just experimentation."
      description="My technical mix spans modeling, data engineering, APIs, and disciplined development practices required to ship reliable intelligent systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group surface-ring glass-panel relative overflow-hidden rounded-[30px] p-7"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-70`} />
              <div className="absolute inset-px rounded-[29px] bg-slate-950/70" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
