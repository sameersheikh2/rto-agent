import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function RTOInfo() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow={t.nav.rto}
        title={t.rto.title}
        subtitle={t.rto.intro}
      />
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-soft dark:border-slate-700 dark:bg-slate-800/80">
        <motion.table
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="min-w-full divide-y divide-slate-100 text-sm dark:divide-slate-700"
        >
          <thead className="bg-blue-50 text-blue-900 dark:bg-slate-900 dark:text-blue-200">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">
                {t.rto.headers.code}
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                {t.rto.headers.city}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-700 dark:bg-slate-800">
            {t.rto.data.map((item, idx) => (
              <tr
                key={item.code}
                className={idx % 2 ? "bg-slate-50/60 dark:bg-slate-900/40" : ""}
              >
                <td className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                  {item.code}
                </td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                  {item.city}
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </section>
  );
}

export default RTOInfo;
