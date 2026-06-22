import Container from "@/components/ui/Container";
import Skeleton from "@/components/ui/Skeleton";

export default function WorkPageSkeleton() {
  return (
    <Container className="py-12 md:py-16">
      <Skeleton className="mb-6 h-5 w-56" />
      <Skeleton className="mb-4 h-12 w-2/3 md:h-16" />
      <Skeleton className="mb-8 h-5 w-48" />
      <Skeleton className="mb-10 h-10 w-32 rounded-full" />
      <Skeleton className="mb-14 aspect-[21/9] w-full rounded-2xl" />
      <div className="max-w-3xl space-y-6">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="mt-12 h-8 w-64" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
      </div>
    </Container>
  );
}
