"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Radar, Workflow } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { aboutHighlights, recruiterNote } from "@/data/portfolio";

const cards = [
  {
    title: "Academic Trajectory",
    description:
      "I am currently pursuing an MSc in Data Analytics at National College of Ireland after graduating with First Class Honors.",
    icon: GraduationCap
  },
  {
    title: "System Focus",
    description:
      "I focus on AI solutions, machine learning, NLP workflows, and RAG-powered products that bridge data and decisions.",
    icon: Radar
  },
  {
    title: "Rapid Prototyping",
    description:
      "I combine Python, SQL, FastAPI, and full-stack analytics tooling to ship precise, scalable systems with clear product value.",
    icon: Workflow
  }
];

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About Me"
      title="I focus on real-world AI utility with a technically sharp approach."
      description="I bring a strong academic base and a product-minded approach to AI, data, and software systems."
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="surface-ring glass-panel rounded-[32px] p-8"
        >
          <p className="text-lg leading-9 text-slate-200 sm:text-xl">
            I pair academic rigor with production discipline. I am currently pursuing
            an MSc in Data Analytics at the National College of Ireland and I bring a
            First Class Honors background into every build, whether that means
            designing NLP pipelines, retrieval-augmented systems, or scalable
            analytical interfaces for real users.
          </p>

          <div className="mt-8 grid gap-4 xl:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item}
                className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <div className="mt-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5">
          

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="surface-ring glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
