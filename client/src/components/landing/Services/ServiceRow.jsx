export default function ServiceRow({ service }) {
  return (
    <div className="flex flex-col gap-3 border-b border-neutral-200 py-8 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between md:py-10">
      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-50 md:text-xl">
        {service.title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 sm:text-right md:text-base">
        {service.tags.join(" • ")}
      </p>
    </div>
  );
}
