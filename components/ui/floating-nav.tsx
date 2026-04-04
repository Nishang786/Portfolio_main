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

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.32;
      let candidateId = items[0]?.id ?? "home";

      for (const item of items) {
        const element = document.getElementById(item.id);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= activationLine) {
          candidateId = item.id;
        }
      }

      setActiveId(candidateId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  return (
    <nav className="fixed left-1/2 top-4 z-[75] w-full max-w-[calc(100vw-1rem)] -translate-x-1/2 px-2">
      <div className="no-scrollbar mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-slate-950/70 p-1 shadow-glow backdrop-blur-2xl">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-xs font-medium tracking-wide text-slate-300 transition-colors duration-300 hover:text-white",
                isActive && "text-white"
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="nav-highlight"
                  className="absolute inset-0 rounded-full bg-white/10"
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
