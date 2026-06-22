import { getFeaturedProjects } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/landing/FeaturedProducts/ProductCard";

export default function FeaturedSection() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work">
      <SectionHeading label="Featured Products" title="Recent works" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProductCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
