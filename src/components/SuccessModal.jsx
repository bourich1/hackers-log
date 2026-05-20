import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HackerMascot from "./HackerMascot.jsx";

const confetti = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  delay: index * 0.045,
  icon: index % 3 === 0 ? "</>" : index % 3 === 1 ? "01" : "$_"
}));

export default function SuccessModal({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/78 px-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {confetti.map((piece) => (
            <motion.span
              key={piece.id}
              className="pointer-events-none absolute top-[-30px] font-mono text-xs text-cyber-green"
              style={{ left: piece.left }}
              initial={{ y: -30, opacity: 0, rotate: 0 }}
              animate={{ y: "105vh", opacity: [0, 1, 1, 0], rotate: 360 }}
              transition={{ duration: 3.4, delay: piece.delay, ease: "easeOut" }}
            >
              {piece.icon}
            </motion.span>
          ))}

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            className="glass-panel neon-border relative w-full max-w-lg overflow-hidden rounded-[1.75rem] p-6 text-center sm:p-8"
            initial={{ scale: 0.92, y: 22 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-cyber-green/15 to-transparent" />
            <div className="mx-auto h-32 w-36">
              <HackerMascot variant="mini" />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-cyber-green">
              Access request submitted
            </p>
            <h3 id="success-title" className="mt-4 text-2xl font-semibold leading-snug text-white">
              Thank you! We&apos;ll contact you soon about the investment payment details.
            </h3>
            <div className="mt-6 rounded-2xl border border-cyber-cyan/15 bg-black/55 p-4 text-left font-mono text-xs text-slate-300">
              <p>
                <span className="text-cyber-cyan">&gt;</span> Encrypting registration...
              </p>
              <p className="text-cyber-green">
                <span className="text-cyber-cyan">&gt;</span> Access request submitted.
              </p>
              <p>
                <span className="text-cyber-cyan">&gt;</span> Returning to homepage in 4 seconds...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
