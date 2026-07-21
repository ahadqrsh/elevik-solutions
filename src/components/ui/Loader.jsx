import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.jsx";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => setDone(true), 500);
          return 100;
        }
        return next;
      });
    }, 180);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Logo className="scale-150" />
          </motion.div>
          <div className="mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-light-line dark:bg-dark-line">
            <div
              className="h-full bg-brand-gradient transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-display text-sm text-light-muted dark:text-dark-muted">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
