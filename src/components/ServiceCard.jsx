import { motion } from "framer-motion";

function ServiceCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="group rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
        <Icon className="text-xl" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
      <div className="mt-4 h-1 w-0 rounded-full bg-linear-to-r from-blue-600 to-orange-500 transition-all group-hover:w-16" />
    </motion.div>
  );
}

export default ServiceCard;
