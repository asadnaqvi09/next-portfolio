import { services } from "@/lib/content";
import Section from "@/components/ui/Section";
import ServiceRow from "@/components/landing/Services/ServiceRow";

export default function ServicesSection() {
  return (
    <Section id="services">
      <h2 className="mb-10 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:mb-14 md:text-5xl">
        Services
      </h2>
      <div>
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
