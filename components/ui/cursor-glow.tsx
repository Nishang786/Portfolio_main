"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -320, y: -320 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({
        x: event.clientX - 160,
        y: event.clientY - 160
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px] lg:block motion-reduce:hidden"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.4 }}
    />
  );
}
