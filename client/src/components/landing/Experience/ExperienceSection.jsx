import { experience } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="xp">
      <div className="wrap">
        <Reveal className="section-head-block">
          <span className="eyebrow">Career journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Building production web products — from early full-stack projects to shipping client MVPs and edtech platforms.
          </p>
        </Reveal>

        <div className="xp__list">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={Math.min(i, 2)} as="article" className={`xp-card${job.current ? " is-current" : ""}`}>
              <div className="xp-card__top">
                <span className="xp-card__logo">{job.initials}</span>
                <div className="xp-card__head">
                  <h3 className="xp-card__role">{job.role}</h3>
                  <div className="xp-card__co">
                    {job.company} <span className="sep">/</span> <span className="loc">{job.location}</span>
                  </div>
                </div>
                <span className="xp-card__date">{job.date}</span>
              </div>
              <ul className="xp-card__bullets">
                {job.bullets.map((b, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
