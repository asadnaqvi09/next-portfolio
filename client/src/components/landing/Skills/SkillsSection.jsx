import { skills } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h.01M7 12h.01M7 16h.01M11 8h6M11 12h6M11 16h6" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18H7Z" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 12h4m8 0h4M9 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0ZM6 8l-2 4 2 4M18 8l2 4-2 4" />
    </svg>
  ),
};

function TechLogo({ item }) {
  if (item.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="tech__logo" src={item.logo} alt="" loading="lazy" />
    );
  }
  return (
    <svg className="tech__svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h12M4 17h8" />
      <circle cx="18.5" cy="16.5" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <Reveal className="section-head-block">
          <span className="eyebrow">What I work with</span>
          <h2 className="section-title">Skills &amp; technologies</h2>
          <p className="section-lead">
            A full-stack toolkit spanning frontend, backend, data and cloud — grouped by where it lives in the stack.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skills.map((card, i) => (
            <Reveal
              key={card.id}
              delay={i % 3}
              className={`skill-card${card.wide ? " skill-card--wide" : ""}`}
            >
              <div className="skill-card__head">
                <span className="skill-card__ico">{ICONS[card.icon] || ICONS.code}</span>
                <div className="skill-card__title">
                  {card.title}
                  <span className="c">{card.subtitle}</span>
                </div>
              </div>
              <div className="tech-grid">
                {card.items.map((item) => (
                  <div className="tech" key={item.name}>
                    <span className="tech__badge">
                      <TechLogo item={item} />
                    </span>
                    <span className="tech__name">{item.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
