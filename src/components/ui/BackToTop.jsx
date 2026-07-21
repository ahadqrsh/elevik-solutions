import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="magnetic fixed bottom-6 right-6 z-[70] grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)]"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
