import { getFeaturedProjects } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkCard from "@/components/landing/FeaturedWork/WorkCard";

export default function FeaturedWorkSection() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work">
      <SectionHeading label="Featured Work" title="Recent works" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
