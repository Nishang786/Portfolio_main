"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionShell } from "@/components/ui/section-shell";
import { socialLinks } from "@/data/portfolio";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github
};

export function ContactSection() {
  const emailLink =
    socialLinks.find((link) => link.icon === "mail")?.href ?? "mailto:nishang786@gmail.com";

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="If you are building an AI, data, or ML product team that values execution, I would love to talk."
      description="I am open to conversations with recruiters, founders, and engineering leaders looking for strong analytical thinking and production-minded AI delivery."
    >
      <div className="surface-ring glass-panel relative overflow-hidden rounded-[36px] p-8 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_32%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start">
          <div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emerald-200">
              Open for opportunities
            </div>
            <h3 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s talk about AI systems, intelligent products, and data-heavy
              engineering problems worth solving.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Whether the conversation is about graduate hiring, internships,
              full-time roles, or technical collaboration, the fastest path is a
              direct message through one of the channels below.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Based in Dublin",
                "Open to hybrid and remote",
                "AI, data, and ML roles"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <MagneticButton href={emailLink}>Start a Conversation</MagneticButton>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ x: 6 }}
                    className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-cyan-400/25 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                          {link.label}
                        </p>
                        <p className="mt-1 text-sm text-slate-200">{link.value}</p>
                      </div>
                    </div>
                    <Send className="h-4 w-4 text-slate-500" />
                  </motion.a>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
