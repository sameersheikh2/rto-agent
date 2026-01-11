import { useMemo } from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { useLanguage } from "../context/LanguageContext";

function Testimonials() {
  const { t } = useLanguage();
  const items = useMemo(() => t.testimonials.list, [t]);
  const marqueeItems = useMemo(() => [...items, ...items], [items]);
  const durationSeconds = Math.max(18, items.length * 4);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow={t.nav.testimonials}
        title={t.testimonials.title}
        align="center"
      />
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-white via-white/50 to-transparent dark:from-slate-950 dark:via-slate-950/12" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-linear-to-l from-white via-white/50 to-transparent dark:from-slate-950 dark:via-slate-950/12" />
        <div
          className="marquee-track gap-4 pr-4"
          style={{ "--marquee-duration": `${durationSeconds}s` }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="w-72 shrink-0">
              <TestimonialCard name={item.name} text={item.text} delay={0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
