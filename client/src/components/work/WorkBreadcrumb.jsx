import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WorkBreadcrumb({ title }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <Link
            href="/"
            className="transition hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <Link
            href="/#work"
            className="transition hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Work
          </Link>
        </li>
        <li className="flex min-w-0 items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span
            className="truncate text-neutral-900 dark:text-neutral-100"
            aria-current="page"
          >
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
