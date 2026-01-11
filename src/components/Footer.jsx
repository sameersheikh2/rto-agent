import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#rto", label: t.nav.rto },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-16 border-t border-slate-100 bg-white/90 dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
            {t.brand}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t.siteTitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-700 dark:hover:text-blue-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <a
            href={`tel:${t.contact.phoneNumber.replace(/\s+/g, "")}`}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt className="text-blue-600 dark:text-blue-300" />
            {t.contact.phoneNumber}
          </a>
          <span className="hidden text-slate-300 dark:text-slate-600 md:inline">
            •
          </span>
          <a
            href={`https://wa.me/${t.contact.whatsappNumber.replace(
              /\s+|\+/g,
              ""
            )}`}
            className="flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-green-500" />
            {t.contact.whatsappNumber}
          </a>
          <span className="hidden text-slate-300 dark:text-slate-600 md:inline">
            •
          </span>
          <a
            href={`mailto:${t.contact.email}`}
            className="flex items-center gap-2"
          >
            <FaEnvelope className="text-orange-500" />
            {t.contact.email}
          </a>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-slate-50/80 py-4 text-center text-xs font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
        &copy; {new Date().getFullYear()} {t.brand}. {t.footer.rights}
      </div>
    </footer>
  );
}

export default Footer;
