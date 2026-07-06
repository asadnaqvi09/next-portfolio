import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

const Section = forwardRef(function Section(
  { id, className, children, containerClassName, asContainer = true },
  ref
) {
  return (
    <section id={id} ref={ref} className={cn("scroll-mt-24", className)}>
      {asContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
});

export default Section;
