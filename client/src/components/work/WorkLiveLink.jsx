import { ExternalLink } from "lucide-react";

export default function WorkLiveLink({ project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 md:mb-10"
    >
      {project.liveLabel || "Live Link"}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}
