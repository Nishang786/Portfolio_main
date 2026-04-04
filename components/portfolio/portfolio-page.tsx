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
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <HackathonsSection />
        <SectionDivider />
        <AchievementsSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <ContactSection />
        <Footer />
      </main>

      <BackToTop />
    </>
  );
}
