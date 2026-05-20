import React from "react";
import { motion } from "framer-motion";

const labels = {
  hero: [
    { text: "Encrypted form", className: "right-2 top-12" },
    { text: "Ethical use", className: "left-2 bottom-16" }
  ],
  pointing: [
    { text: "Start here: full name", className: "right-0 top-8" },
    { text: "Then secure email", className: "right-4 top-24" },
    { text: "Pick amount", className: "right-8 top-40" }
  ],
  mini: [{ text: "Secure", className: "right-0 top-0" }]
};

export default function HackerMascot({ variant = "hero" }) {
  const isMini = variant === "mini";

  return (
    <div className={`relative ${isMini ? "h-24 w-28" : "min-h-[310px] w-full"}`} aria-label="Hacker mascot illustration">
      {(labels[variant] || labels.hero).map((label) => (
        <motion.div
          key={label.text}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`absolute z-20 rounded-full border border-cyber-cyan/30 bg-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-cyan shadow-cyan ${label.className}`}
        >
          {label.text}
        </motion.div>
      ))}

      {!isMini && (
        <>
          <div className="absolute right-24 top-16 h-px w-28 rotate-[-12deg] bg-cyber-cyan/70" />
          <div className="absolute right-24 top-32 h-px w-24 rotate-[8deg] bg-cyber-green/70" />
          <div className="absolute right-28 top-48 h-px w-20 rotate-[22deg] bg-cyber-cyan/60" />
        </>
      )}

      <motion.div
        className={`absolute ${isMini ? "bottom-0 left-1 h-24 w-24" : "bottom-0 left-1/2 h-[310px] w-[310px] -translate-x-1/2 sm:h-[360px] sm:w-[360px]"}`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-x-[27%] top-[8%] h-[26%] rounded-t-[48%] bg-slate-950 shadow-[0_0_38px_rgba(57,255,136,.2)]" />
        <div className="absolute left-[22%] top-[18%] h-[42%] w-[56%] rounded-[38%_38%_46%_46%] border border-cyber-green/20 bg-gradient-to-b from-slate-950 to-black" />
        <div className="absolute left-[30%] top-[31%] h-[15%] w-[40%] rounded-full border border-cyber-cyan/55 bg-cyber-cyan/10 shadow-cyan">
          <div className="absolute left-[18%] top-[40%] h-1 w-[22%] rounded-full bg-cyber-green shadow-[0_0_12px_#39ff88]" />
          <div className="absolute right-[18%] top-[40%] h-1 w-[22%] rounded-full bg-cyber-green shadow-[0_0_12px_#39ff88]" />
        </div>
        <div className="absolute left-[38%] top-[49%] h-[3%] w-[24%] rounded-full bg-cyber-cyan/50" />

        <div className="absolute left-[26%] top-[56%] h-[34%] w-[48%] rounded-[28%_28%_18%_18%] border border-cyber-green/20 bg-gradient-to-br from-[#07100e] to-black" />
        <div className="absolute left-[32%] top-[65%] h-[15%] w-[36%] rounded-xl border border-cyber-cyan/25 bg-black/80">
          <div className="mx-auto mt-[10%] h-px w-[64%] bg-cyber-green/80" />
          <div className="mx-auto mt-[8%] h-px w-[46%] bg-cyber-cyan/70" />
        </div>

        <div className="absolute left-[9%] top-[56%] h-[9%] w-[24%] origin-right rotate-[28deg] rounded-full bg-slate-950" />
        <div className="absolute right-[8%] top-[54%] h-[9%] w-[30%] origin-left rotate-[-24deg] rounded-full bg-slate-950" />
        <div className="absolute right-[4%] top-[48%] h-[8%] w-[18%] rotate-[-30deg] rounded-full border border-cyber-green/25 bg-black shadow-neon" />
        <div className="absolute right-[1%] top-[45%] h-0 w-0 border-y-[8px] border-l-[18px] border-y-transparent border-l-cyber-green" />

        <div className="absolute left-[21%] bottom-[2%] h-[12%] w-[18%] rounded-b-full bg-slate-950" />
        <div className="absolute right-[21%] bottom-[2%] h-[12%] w-[18%] rounded-b-full bg-slate-950" />

        <div className="absolute left-[18%] top-[20%] h-[11%] w-[64%] rounded-full bg-cyber-green/10 blur-xl" />
      </motion.div>
    </div>
  );
}
