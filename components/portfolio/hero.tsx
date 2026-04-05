"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { heroMetrics } from "@/data/portfolio";

const spotlightLinks = [
  {
    label: "Projects",
    href: "#projects",
    description: "Product-ready AI and analytics builds with measurable outcomes."
  },
  {
    label: "Experience",
    href: "#experience",
    description: "Large-scale delivery work across ML pipelines, APIs, and RAG."
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Open to AI, data, and machine learning opportunities."
  }
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 xl:min-h-[calc(100vh-8rem)] xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] xl:items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Hi, I&apos;m Nishang
            </motion.div>
            <motion.h1
              className="mt-8 max-w-4xl font-heading text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              I build
              <span className="text-gradient"> practical AI systems </span>
              and data products that move from idea to impact.
            </motion.h1>
            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              I&apos;m a Data Analytics master&apos;s student based in Ireland, focused on
              LLM applications, retrieval pipelines, and scalable machine learning
              systems. I like turning technically complex work into software that
              feels clear, fast, and useful on the other side.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
            >
              {[
                "Based in Dublin, Ireland",
                "MSc Data Analytics at NCI",
                "Open to AI, data, and ML roles"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
            >
              <MagneticButton href="#projects">View Projects</MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Contact Me
              </MagneticButton>
            </motion.div>
            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             
            </motion.div>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="surface-ring glass-panel relative overflow-hidden rounded-[36px] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.16),transparent_28%)]" />
              <div className="absolute inset-0 bg-grid opacity-[0.14]" />
              <div className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/45 sm:min-h-[620px]">
                <Image
                  src="/me.jpeg"
                  alt="Nishang Lingalwar portrait"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.4)_100%)]" />
             
                
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="max-w-md rounded-[24px] border border-white/10 bg-slate-950/50 px-4 py-4 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Spiti Valley, Himachal Pradesh, India                   
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Decoding the peaks:
                      finding clarity in the cold, hard data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
        >
          {heroMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="surface-ring glass-panel rounded-[24px] px-5 py-4"
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-slate-500">
                Impact {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-heading text-3xl font-semibold text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
