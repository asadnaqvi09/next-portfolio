import { getFeaturedProjects } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

function padNum(n) {
  return String(n).padStart(2, "0");
}

export default function WorkSection() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="work">
      <div className="wrap">
        <Reveal className="section-head-block">
          <span className="eyebrow">What I&apos;ve built</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-lead">
            Production and in-progress systems — ecommerce storefronts, clinic sites, digital marketplaces, and edtech platforms.
          </p>
        </Reveal>

        <div className="work__list">
          {projects.map((project, i) => {
            const href = project.liveUrl || project.githubUrl;
            const status = project.status || [];
            const metrics = project.metrics || [
              { label: "Category", value: project.category },
              { label: "Year", value: project.year },
              { label: "Type", value: project.filters?.[0] || "Web" },
            ];

            return (
              <Reveal key={project.id} as="article" className="proj" delay={Math.min(i % 3, 2)}>
                <div className="proj__num">{`{ ${padNum(i + 1)} }`}</div>
                <div className="proj__main">
                  <div className="proj__head">
                    <h3 className="proj__title">
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {project.title}
                          <svg className="ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    {status.map((tag) => (
                      <span key={tag} className={`proj__tag${tag === "live" ? " live" : ""}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="proj__desc">{project.description}</p>
                  <div className="proj__stack">
                    {(project.tags || []).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="proj__metrics">
                  {metrics.map((m) => (
                    <div className="proj__metric" key={m.label}>
                      <span className="label">{m.label}</span>
                      <span className="value">
                        <span className="accent">{m.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
