import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialCard({ name, text, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/80"
    >
      <FaQuoteLeft className="text-xl text-orange-500" />
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{text}</p>
      <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
        {name}
      </p>
    </motion.div>
  );
}

export default TestimonialCard;
