export default function WorkMeta({ project }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 md:mb-8">
      <span>{project.category}</span>
      <span>·</span>
      <span>Year, {project.year}</span>
    </div>
  );
}
