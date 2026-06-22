import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-50">
        404
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900"
      >
        Back Home
      </Link>
    </div>
  );
}
