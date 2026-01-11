import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const { t } = useLanguage();

  const scrolledClasses = scrolled
    ? "backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 shadow-soft"
    : "bg-transparent";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    document.addEventListener("touchstart", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#rto", label: t.nav.rto },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolledClasses}`}
    >
      <div
        ref={navRef}
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 transition dark:text-slate-100"
      >
        <a
          href="#home"
          className="text-lg md:text-xl font-extrabold text-blue-700 tracking-tight dark:text-blue-300"
        >
          {t.brand}
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex dark:text-slate-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`tel:${t.contact.phoneNumber.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <FaPhoneAlt className="text-blue-600" />
              {t.nav.call}
            </a>
            <a
              href={`https://wa.me/${t.contact.whatsappNumber.replace(
                /\s+|\+/g,
                ""
              )}`}
              className="flex items-center gap-2 rounded-full bg-green-500 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              {t.nav.whatsapp}
            </a>
          </div>
          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="glass mx-4 mb-3 rounded-2xl border border-slate-100 p-4 shadow-soft dark:border-slate-700">
              <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700 dark:text-slate-100">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={`tel:${t.contact.phoneNumber.replace(/\s+/g, "")}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <FaPhoneAlt className="text-blue-600" />
                  {t.nav.call}
                </a>
                <a
                  href={`https://wa.me/${t.contact.whatsappNumber.replace(
                    /\s+|\+/g,
                    ""
                  )}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 px-3 py-2 text-xs font-semibold text-white shadow-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                  {t.nav.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
