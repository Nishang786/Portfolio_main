"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Star, Trophy } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { achievementItems } from "@/data/portfolio";

const iconMap = {
  patent: BadgeCheck,
  trophy: Trophy,
  award: Award,
  star: Star
};

export function AchievementsSection() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="My Wins"
      title="My proof points beyond coursework and code repositories."
      description="I back my portfolio with credible wins across product invention, robotics competition, and engineering performance."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {achievementItems.map((achievement, index) => {
          const Icon = iconMap[achievement.icon];

          return (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="surface-ring glass-panel relative overflow-hidden rounded-[30px] p-7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.16),transparent_32%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                  {achievement.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {achievement.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
