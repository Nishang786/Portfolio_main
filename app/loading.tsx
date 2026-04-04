export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="space-y-6 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Initializing My Portfolio
        </div>
        <div className="space-y-3">
          <p className="font-heading text-3xl font-semibold text-white">
            Nishang Lingalwar
          </p>
          <div className="mx-auto h-px w-48 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.9),rgba(168,85,247,0.9),transparent)] bg-[length:200%_100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
