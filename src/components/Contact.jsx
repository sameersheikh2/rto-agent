import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const fortImg = "/fort.jpg";

function Contact() {
  const { t } = useLanguage();
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setServerError("");
    setServerSuccess("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Form submission payload", data);
      setServerSuccess(t.contact.form.success);
      reset();
    } catch (err) {
      console.error(err);
      setServerError(t.contact.form.error);
    }
  };

  const infoItems = [
    {
      icon: <FaPhoneAlt />,
      label: t.contact.phoneLabel,
      value: t.contact.phoneNumber,
      href: `tel:${t.contact.phoneNumber.replace(/\s+/g, "")}`,
    },
    {
      icon: <FaWhatsapp />,
      label: t.contact.whatsappLabel,
      value: t.contact.whatsappNumber,
      href: `https://wa.me/${t.contact.whatsappNumber.replace(/\s+|\+/g, "")}`,
    },
    {
      icon: <FaEnvelope />,
      label: t.contact.emailLabel,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: t.contact.addressLabel,
      value: t.contact.address,
    },
  ];

  return (
    <section className="relative p-3 rounded-2xl mx-auto max-w-6xl overflow-hidden px-4">
      <img
        src={fortImg}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover opacity-20 dark:opacity-15 "
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white/70 via-white/45 to-white/70 dark:from-slate-950/85 dark:via-slate-950/50 dark:to-slate-950/85" />
      <div className="relative z-10">
        <SectionHeader
          eyebrow={t.contact.title}
          title={t.contact.title}
          align="center"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800/80"
          >
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  {...register("name", {
                    required: t.contact.form.errors.required,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  {...register("email", {
                    required: t.contact.form.errors.required,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t.contact.form.errors.email,
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  {...register("phone", {
                    required: t.contact.form.errors.required,
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: t.contact.form.errors.phone,
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t.contact.form.service}
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  {...register("service", {
                    required: t.contact.form.errors.required,
                  })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.contact.form.service}
                  </option>
                  {t.services.list.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.service.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  {...register("message", {
                    required: t.contact.form.errors.required,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {serverSuccess && (
                <p className="text-sm font-semibold text-green-500">
                  {serverSuccess}
                </p>
              )}
              {serverError && (
                <p className="text-sm font-semibold text-red-400">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-600"
              >
                {isSubmitting ? "Sending..." : t.contact.form.submit}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="space-y-4 rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800/80"
          >
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {t.contact.title}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We respond within hours. For urgent cases, call or WhatsApp and we
              will prioritize your request.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    <span className="text-blue-600 dark:text-blue-300">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-sm text-blue-700 underline underline-offset-4 dark:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
