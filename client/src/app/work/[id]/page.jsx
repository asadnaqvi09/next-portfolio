import { Suspense } from "react";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";
import WorkPageContent from "@/components/work/WorkPageContent";
import WorkPageSkeleton from "@/components/work/WorkPageSkeleton";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectBySlug(id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Asad Abbas`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }) {
  const { id } = await params;
  return (
    <Suspense fallback={<WorkPageSkeleton />}>
      <WorkPageContent slug={id} />
    </Suspense>
  );
}
