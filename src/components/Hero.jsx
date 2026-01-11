import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 px-4 pb-12 pt-6 md:flex-row md:items-center md:gap-12">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-orange-50 opacity-80 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
      <div className="flex-1 space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 dark:bg-slate-800 dark:text-blue-200"
        >
          RTO • Rajasthan • Compliance
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl font-black leading-tight text-slate-900 md:text-5xl dark:text-slate-50"
        >
          {t.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-600 md:text-xl dark:text-slate-300"
        >
          {t.hero.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t.hero.primaryCta}
            <FaArrowRight />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            {t.hero.secondaryCta}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-soft md:max-w-xl dark:border-slate-700 dark:bg-slate-800/70">
            {t.hero.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/60"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative flex-1"
      >
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-orange-100 blur-2xl" />
        <div className="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-blue-100 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-800">
          <div
            className="aspect-4/3 bg-cover bg-center opacity-90 transition-opacity duration-500"
            style={{ backgroundImage: "url('/fort.jpg')" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
              {t.hero.trustBadge}
            </p>
            <p className="text-2xl font-semibold leading-snug">
              {t.hero.trustText}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
