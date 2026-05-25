import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const goToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <button
      aria-label="Go to top"
      className={`fixed bottom-5 right-5 z-[9000] grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-cyan-200/70 bg-gradient-to-br from-lagoon to-aqua text-white shadow-[0_16px_38px_rgba(17,138,178,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(6,214,160,0.36)] focus:outline-none focus:ring-4 focus:ring-cyan-200/70 sm:bottom-6 sm:right-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={goToTop}
      type="button"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={3} />
    </button>
  );
}
