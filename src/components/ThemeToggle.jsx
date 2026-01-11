import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95, rotate: isDark ? -5 : 5 }}
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-blue-500"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <BsSun className="text-amber-400" />
      ) : (
        <BsMoon className="text-blue-700" />
      )}
      <span className="tracking-wide">{isDark ? "Light" : "Dark"}</span>
    </motion.button>
  );
}

export default ThemeToggle;
