/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("rto-lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("rto-lang", lang);
    document.documentElement.lang = lang;
    document.body.classList.toggle("font-hindi", lang === "hi");
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLanguage: () => setLang((prev) => (prev === "en" ? "hi" : "en")),
      t: translations[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
