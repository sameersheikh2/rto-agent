import { motion } from "framer-motion";
import {
  FaBolt,
  FaClipboardCheck,
  FaHome,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const icons = [FaUserTie, FaShieldAlt, FaBolt, FaHome, FaClipboardCheck];

function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4">
      <SectionHeader eyebrow={t.nav.why} title={t.why.title} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {t.why.items.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-900/40 dark:text-orange-200">
                  <Icon />
                </span>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                We ensure transparent communication, faster approvals, and
                precise documentation aligned to RTO norms.
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;
