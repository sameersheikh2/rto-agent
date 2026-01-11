import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import RTOInfo from "./components/RTOInfo";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";
import GoTopButton from "./components/GoTopButton";

function App() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.siteTitle;
  }, [t.siteTitle]);

  return (
    <>
      {/* Main layout */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
        <Navbar />

        <main className="flex flex-col gap-16 md:gap-24">
          <section id="home" className="pt-24 md:pt-28">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="why">
            <WhyChooseUs />
          </section>

          <section id="rto">
            <RTOInfo />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>

      {/* ⬅️ FIXED BUTTON — outside transformed layout */}
      <GoTopButton />
    </>
  );
}

export default App;
