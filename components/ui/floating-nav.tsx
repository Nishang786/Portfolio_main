"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { NavItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  items: NavItem[];
};

export function FloatingNav({ items }: FloatingNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;

      const activationLine = window.innerHeight * 0.36;
      let nextActiveId = sections[0]?.id ?? items[0]?.id ?? "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine && rect.bottom >= activationLine) {
          nextActiveId = section.id;
          break;
        }

        if (rect.top <= activationLine) {
          nextActiveId = section.id;
        }
      }

      setActiveId((currentActiveId) =>
        currentActiveId === nextActiveId ? currentActiveId : nextActiveId
      );
    };

    const handleViewportChange = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [items]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 36);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 bottom-3 z-[75] px-3 md:bottom-auto md:top-4 md:px-2"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div
        className={cn(
          "no-scrollbar mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-[24px] border p-1.5 shadow-glow backdrop-blur-2xl transition-all duration-300 md:rounded-full",
          isScrolled
            ? "border-white/12 bg-slate-950/82"
            : "border-white/8 bg-slate-950/62"
        )}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative shrink-0 rounded-[18px] px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 hover:text-white sm:text-xs md:rounded-full",
                isActive && "text-white"
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="nav-highlight"
                  className="absolute inset-0 rounded-[18px] bg-white/10 ring-1 ring-cyan-400/20 md:rounded-full"
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
