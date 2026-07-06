import { site } from "@/lib/content";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/landing/Contact/ContactForm";
import ContactSocials from "@/components/landing/Contact/ContactSocials";

export default function ContactSection() {
  return (
    <Section id="contact" className="border-t border-[var(--color-border-subtle)] py-24">
      <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-5xl lg:text-6xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 max-w-md font-[family-name:var(--font-plus-jakarta)] text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              Have a project or need help? Fill out the form, and we&apos;ll get back to you soon.
            </p>
          </div>
          <ContactSocials />
        </div>
        <div className="contact-panel rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-text-primary)] p-8 md:p-10 dark:bg-[var(--color-surface)]">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
