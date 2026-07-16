import { site } from "@/lib/content";
import ContactForm from "@/components/landing/Contact/ContactForm";
import ContactSocials from "@/components/landing/Contact/ContactSocials";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal className="section-head-block">
          <span className="eyebrow">Let&apos;s talk</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-lead">
            Have a project to ship, an MVP to build, or a role to fill? Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={1} className="contact__panel">
          <div className="contact__grid">
            <div className="contact__left">
              <h3 className="contact__big">
                Ready to build
                <br />
                something that <span className="accent">ships?</span>
              </h3>
              <p className="contact__text">
                Whether it&apos;s a full-stack web app, a landing page, or an AI-powered product — fill out the form and
                I&apos;ll get back to you soon.
              </p>

              <div className="contact__channels">
                <a className="channel" href={`mailto:${site.email}`}>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <span className="meta">
                    <span className="k">Email</span>
                    <span className="v">{site.email}</span>
                  </span>
                </a>
                {site.socials?.linkedin ? (
                  <a className="channel" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="ico">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3v12h-3v-12Zm5 0h2.87v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v7.32h-3v-6.49c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.6h-3v-12Z" />
                      </svg>
                    </span>
                    <span className="meta">
                      <span className="k">LinkedIn</span>
                      <span className="v">Connect</span>
                    </span>
                  </a>
                ) : null}
              </div>

              <ContactSocials />
            </div>

            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
