import { site } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="left">
        <span>
          © {year} {site.name}
        </span>
        <span style={{ color: "var(--border-strong)" }}>·</span>
      </div>
      <div className="right">
        <span className="ver">{site.location}</span>
        <span style={{ color: "var(--border-strong)" }}>·</span>
        <a href="#top">↑ top</a>
      </div>
    </footer>
  );
}
