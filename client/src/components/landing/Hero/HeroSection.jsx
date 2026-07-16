"use client";

import { site } from "@/lib/content";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";

export default function HeroSection() {
  const lenis = useLenis();
  const portrait = site.portrait || "/assets/Hero-Image.jpg";
  const floats = site.hero?.floats || ["Clean MVPs", "Full-stack ready"];
  const stats = site.stats || [];
  const roles = site.hero?.roles || [];

  const scrollTo = (id) => {
    if (!lenis) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      lenis.scrollTo(`#${id}`, { offset: SCROLL_OFFSET });
    }
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__intro">
            <span className="hero__badge">
              <span className="live" />
              {site.hero?.badge || "Available for freelance & full-time roles"}
            </span>

            <h1 className="hero__title">
              {(site.hero?.headline || site.name).split(" ").map((part, i, arr) => (
                <span key={`${part}-${i}`}>
                  {part}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))}
              <span className="accent">.</span>
            </h1>

            <div className="hero__roles">
              {roles.map((role, i) => (
                <span key={role}>
                  {role}
                  {i < roles.length - 1 ? <span className="sep"> · </span> : null}
                </span>
              ))}
            </div>

            <p
              className="hero__sub"
              dangerouslySetInnerHTML={{
                __html:
                  site.hero?.subtext ||
                  "I build modern, scalable web products — clean architecture and intentional design.",
              }}
            />

            <div className="hero__cta">
              <a href={site.resumePath} download className="btn btn--primary">
                Download Resume
                <svg className="dl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                </svg>
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => scrollTo("contact")}>
                Get in touch
                <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </button>
            </div>

            <div className="hero__stats">
              {stats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <div className="n">
                    {stat.value}
                    {stat.suffix ? <span className="s">{stat.suffix}</span> : null}
                  </div>
                  <div className="l">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__photo">
            {floats[0] ? (
              <div className="hero__float hero__float--1">
                <span className="k">▸</span> {floats[0]}
              </div>
            ) : null}
            {floats[1] ? (
              <div className="hero__float hero__float--2">
                <span className="k">▸</span> {floats[1]}
              </div>
            ) : null}
            <div className="hero__photo-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait} alt={site.name} loading="eager" />
              <div className="hero__photo-tag">
                <span>// {site.location}</span>
                <span className="ok">open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="hero__scroll" aria-label="Scroll to about" onClick={() => scrollTo("about")}>
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </button>
    </section>
  );
}
