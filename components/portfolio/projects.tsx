"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/portfolio/project-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionShell } from "@/components/ui/section-shell";
import { projectItems } from "@/data/portfolio";

export function ProjectsSection() {
  const regularProjects = projectItems.filter((project) => !project.embedUrl);
  const streamlitProject = projectItems.find((project) => project.embedUrl);

  return (
    <SectionShell
      id="projects"
      eyebrow="My Work"
      title="Projects that show my technical depth and product instinct."
      description="I frame each project around tangible outcomes: better decision speed, stronger model quality, and systems that map directly to production work."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {regularProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {streamlitProject ? (
        <div className="mt-6 surface-ring glass-panel relative overflow-hidden rounded-[32px] p-4 sm:p-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${streamlitProject.accent} opacity-70`} />
          <div className="absolute inset-px rounded-[31px] bg-slate-950/78" />

          <div className="relative flex flex-col gap-6 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Featured Embed
                </p>
                <h3 className="mt-3 font-heading text-3xl font-semibold text-white">
                  {streamlitProject.title}
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-colors duration-300 group-hover:text-cyan-200">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>

            <p className="max-w-3xl text-base leading-8 text-slate-300">
              {streamlitProject.summary}
            </p>
            <p className="max-w-3xl text-sm leading-7 text-slate-400">
              {streamlitProject.impact}
            </p>

            <div className="mt-1 flex flex-wrap gap-2">
              {streamlitProject.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-100"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <MagneticButton href={streamlitProject.repoUrl} variant="secondary" external>
                Source
              </MagneticButton>
              <MagneticButton href={streamlitProject.embedUrl ?? ""} variant="ghost" external>
                Open Dashboard
              </MagneticButton>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Live Embed</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Streamlit
                </span>
              </div>
                <div className="px-5 py-5 md:hidden">
                  <p className="text-sm leading-7 text-slate-300">
                    The live dashboard opens best on larger screens. On mobile, use the
                    button below to open it directly.
                  </p>
                </div>
                <div className="relative hidden aspect-[21/9] w-full md:block">
                  <iframe
                    src={streamlitProject.embedUrl}
                    title={streamlitProject.title}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    allow="clipboard-read; clipboard-write; fullscreen; web-share"
                    sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
                  />
                </div>
            </div>
          </div>
        </div>
      ) : null}
    </SectionShell>
  );
}
