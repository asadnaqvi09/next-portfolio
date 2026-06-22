import { notFound } from "next/navigation";
import { getOtherProjects, getProjectBySlug } from "@/lib/content";
import Container from "@/components/ui/Container";
import WorkBreadcrumb from "@/components/work/WorkBreadcrumb";
import WorkHero from "@/components/work/WorkHero";
import WorkMeta from "@/components/work/WorkMeta";
import WorkLiveLink from "@/components/work/WorkLiveLink";
import WorkContent from "@/components/work/WorkContent";
import MoreProjects from "@/components/work/MoreProjects";

export default function WorkPageContent({ slug }) {
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = getOtherProjects(slug);

  return (
    <article>
      <Container className="py-12 md:py-16">
        <WorkBreadcrumb title={project.title} />
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <WorkMeta project={project} />
        <WorkLiveLink project={project} />
        <WorkHero project={project} />
        <WorkContent summary={project.summary} sections={project.sections} />
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <MoreProjects projects={otherProjects} />
      </Container>
    </article>
  );
}
