import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
      aria-label="Toggle language"
    >
      <FaGlobe className="text-blue-600" />
      <span className="tracking-wide">{lang === "en" ? "EN" : "हिं"}</span>
    </button>
  );
}

export default LanguageSwitcher;
