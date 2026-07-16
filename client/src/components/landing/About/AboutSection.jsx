import { site } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3v12h-3v-12Zm5 0h2.87v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v7.32h-3v-6.49c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.6h-3v-12Z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function IconEdu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  );
}

function linkedInHandle(url) {
  try {
    const path = new URL(url).pathname.replace(/\/$/, "");
    return path.replace(/^\//, "") || "LinkedIn";
  } catch {
    return "LinkedIn";
  }
}

function githubHandle(url) {
  try {
    return new URL(url).pathname.replace(/\//g, "") || "GitHub";
  } catch {
    return "GitHub";
  }
}

export default function AboutSection() {
  const paragraphs = site.aboutExtended || [site.about];
  const rows = [
    { key: "location", label: "Location", value: site.location, href: null, Icon: IconLocation },
    { key: "email", label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: IconEmail },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: linkedInHandle(site.socials.linkedin),
      href: site.socials.linkedin,
      Icon: IconLinkedIn,
    },
    {
      key: "github",
      label: "GitHub",
      value: githubHandle(site.socials.github),
      href: site.socials.github,
      Icon: IconGitHub,
    },
    { key: "education", label: "Education", value: site.education, href: null, Icon: IconEdu },
  ];

  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="about__grid">
          <div className="about__copy">
            <Reveal>
              <span className="eyebrow">Who I am</span>
              <h2 className="section-title">About me</h2>
            </Reveal>
            {paragraphs.map((html, i) => (
              <Reveal
                key={i}
                delay={Math.min(i + 1, 3)}
                as="p"
                className={i === paragraphs.length - 1 ? "muted" : undefined}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>

          <Reveal delay={2} className="about__info">
            {rows.map(({ key, label, value, href, Icon }) => (
              <div className="info-row" key={key}>
                <span className="ico">
                  <Icon />
                </span>
                <div className="meta">
                  <span className="k">{label}</span>
                  {href ? (
                    <a className="v" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {value}
                    </a>
                  ) : (
                    <span className="v">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
