import type { CSSProperties } from "react";

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  size: index % 3 === 0 ? 4 : 2,
  top: `${8 + index * 6}%`,
  left: `${6 + ((index * 13) % 88)}%`,
  delay: `${(index % 7) * 0.8}s`,
  duration: `${8 + (index % 5) * 2}s`
}));

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 mask-radial" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute left-[-12%] top-[8%] h-[22rem] w-[22rem] animate-drift rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-[-8%] top-[18%] h-[20rem] w-[20rem] animate-pulse-soft rounded-full bg-violet-500/12 blur-[120px]" />
      <div className="absolute bottom-[-12%] left-[34%] h-[20rem] w-[20rem] animate-float rounded-full bg-sky-500/10 blur-[140px]" />
      {particles.map((particle) => {
        const style = {
          top: particle.top,
          left: particle.left,
          animationDelay: particle.delay,
          animationDuration: particle.duration
        } as CSSProperties;

        return (
          <span
            key={particle.id}
            style={style}
            className="absolute animate-float rounded-full bg-cyan-300/40 blur-sm"
          >
            <span
              className="block rounded-full bg-white/60"
              style={{ width: particle.size, height: particle.size }}
            />
          </span>
        );
      })}
    </div>
  );
}
