import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4">
      <SectionHeader title={t.about.title} subtitle={t.about.text} />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-8 grid gap-6 rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-soft md:grid-cols-3 dark:border-slate-700 dark:bg-slate-800/80"
      >
        {[
          {
            label: t.why.items[0],
            detail: "ISO-compliant processes and documentation.",
          },
          {
            label: t.why.items[2],
            detail: "Dedicated trackers and proactive follow-ups.",
          },
          {
            label: t.why.items[1],
            detail: "Upfront estimates, no hidden charges.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900/60"
          >
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
