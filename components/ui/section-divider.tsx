type SectionDividerProps = {
  label?: string;
};

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center gap-4 py-2 sm:gap-6"
    >
      <div className="section-line h-px flex-1 opacity-75" />
      {label ? (
        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-slate-400 sm:px-4">
          {label}
        </span>
      ) : null}
      <div className="section-line h-px flex-1 opacity-75" />
    </div>
  );
}
