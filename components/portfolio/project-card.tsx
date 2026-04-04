"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef } from "react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import type { ProjectItem } from "@/data/portfolio";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 140, damping: 20, mass: 0.5 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 140, damping: 20, mass: 0.5 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const percentX = (event.clientX - bounds.left) / bounds.width;
    const percentY = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((percentX - 0.5) * 10);
    rotateX.set((0.5 - percentY) * 10);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="group [perspective:1200px]"
    >
      <div className="surface-ring glass-panel relative h-full overflow-hidden rounded-[32px] p-7 sm:p-8">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
        <div className="absolute inset-px rounded-[31px] bg-slate-950/78" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Featured Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-3xl font-semibold text-white">
                {project.title}
              </h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-colors duration-300 group-hover:text-cyan-200">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <p className="mt-5 text-base leading-8 text-slate-300">{project.summary}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">{project.impact}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-100"
              >
                {metric}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-900/55 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Preview</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Conceptual
              </span>
            </div>
            <div className="grid gap-3">
              {project.preview.map((line) => (
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
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href={project.repoUrl} variant="secondary" external>
              <span className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </span>
            </MagneticButton>
            <MagneticButton href={project.demoUrl !== "" ? project.demoUrl : ""} variant="ghost" external>
              Live Demo
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
