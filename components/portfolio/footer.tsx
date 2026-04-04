import { socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-6 px-6 pb-10 pt-6 text-sm text-slate-400 sm:px-8 lg:px-12">
      <div className="section-line h-px w-full opacity-70" />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-white">Nishang Lingalwar</p>
          <p className="mt-1 max-w-xl">
            My portfolio for AI engineering, data systems, and modern analytical
            product work.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/25 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
