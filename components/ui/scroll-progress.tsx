"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-px origin-left bg-[linear-gradient(90deg,#22d3ee_0%,#38bdf8_45%,#8b5cf6_100%)]"
      style={{ scaleX }}
    />
  );
}
