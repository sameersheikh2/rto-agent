import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function GoTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-blue-500 sm:bottom-8 sm:right-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ position: "fixed" }}
    >
      <FaArrowUp />
    </button>
  );
}

export default GoTopButton;
