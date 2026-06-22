import { site } from "@/lib/content";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/landing/Contact/ContactForm";
import ContactSocials from "@/components/landing/Contact/ContactSocials";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl lg:text-6xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
              Have a project or need help? Fill out the form, and we&apos;ll get back to you soon.
            </p>
          </div>
          <ContactSocials />
        </div>
        <div className="rounded-3xl bg-neutral-950 p-8 md:p-10 dark:border dark:border-neutral-800 dark:bg-neutral-900">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
