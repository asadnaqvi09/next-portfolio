import { site } from "@/lib/content";

export default function MarqueeSection() {
  const items = site.marquee || [];
  if (!items.length) return null;

  const doubled = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={`${item.name}-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.name} />
            <span className="marquee__sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
