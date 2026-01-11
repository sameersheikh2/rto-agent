import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function RTOInfo() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(true);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow={t.nav.rto}
        title={t.rto.title}
        subtitle={t.rto.intro}
      />
      <div className="mt-8 rounded-xl border border-slate-200 bg-white/80 shadow-soft dark:border-slate-700 dark:bg-slate-800/80">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-100"
        >
          <span className="flex items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-slate-900 dark:text-blue-200">
              {t.rto.headers.code}
            </span>
            <span>{t.rto.title}</span>
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-300">
            {open ? "–" : "+"}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-slate-100 px-4 pb-4 text-sm dark:divide-slate-700"
            >
              {t.rto.data.map((item, idx) => (
                <div
                  key={item.code}
                  className={`flex items-center justify-between py-2 ${
                    idx % 2 ? "bg-slate-50/60 dark:bg-slate-900/40" : ""
                  } px-2 rounded-lg`}
                >
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">
                    {item.code}
                  </span>
                  <span className="text-slate-700 dark:text-slate-200">
                    {item.city}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default RTOInfo;
