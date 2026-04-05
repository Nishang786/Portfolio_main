import { AboutSection } from "@/components/portfolio/about";
import { AchievementsSection } from "@/components/portfolio/achievements";
import { ContactSection } from "@/components/portfolio/contact";
import { EducationSection } from "@/components/portfolio/education";
import { ExperienceSection } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { HeroSection } from "@/components/portfolio/hero";
import { HackathonsSection } from "@/components/portfolio/hackathons";
import { ProjectsSection } from "@/components/portfolio/projects";
import { SkillsSection } from "@/components/portfolio/skills";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { BackToTop } from "@/components/ui/back-to-top";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionDivider } from "@/components/ui/section-divider";
import { navItems } from "@/data/portfolio";

export function PortfolioPage() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <AmbientBackground />
      <FloatingNav items={navItems} />

      <main id="content" className="relative isolate overflow-hidden">
        <HeroSection />
        <SectionDivider label="Foundation" />
        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-12 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
          <AboutSection />
          <SkillsSection />
        </section>
        <SectionDivider label="Execution" />
        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_40%)]" />
          <ExperienceSection />
          <ProjectsSection />
        </section>
        <SectionDivider label="Momentum" />
        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-8 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_42%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_46%)]" />
          <HackathonsSection />
          <AchievementsSection />
          <EducationSection />
        </section>
        <SectionDivider label="Connect" />
        <ContactSection />
        <Footer />
      </main>

      <BackToTop />
    </>
  );
}
