import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionShell } from "@/components/ui/section-shell";
import { projectItems } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="My Work"
      title="Projects that show my technical depth and product instinct."
      description="I frame each project around tangible outcomes: better decision speed, stronger model quality, and systems that map directly to production work."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {projectItems.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
