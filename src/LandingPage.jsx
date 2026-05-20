import React, { useState } from "react";
import { motion } from "framer-motion";
import InvestorForm from "./components/InvestorForm.jsx";
import HackerMascot from "./components/HackerMascot.jsx";

const terminalLines = [
  "Booting AI security research lab...",
  "Loading ethical hacking modules...",
  "Preparing investor registration...",
  "Secure form ready."
];

const stats = [
  ["AI supported", "Security tools"],
  ["Ethical hacking", "Authorized use"],
  ["Investor access", "Early stage"]
];

export default function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-cyber-black text-white">
      <MatrixBackdrop />
      <section id="home" className="relative min-h-screen overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-cyber-black/76 to-cyber-black" />
        <div className="absolute inset-0 bg-grid bg-[length:54px_54px] opacity-45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-[.98fr_1.02fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyber-green/25 bg-black/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-cyber-mint shadow-neon">
              <span className="h-2 w-2 rounded-full bg-cyber-green shadow-[0_0_18px_#39ff88]" />
              Ethical cybersecurity research
            </div>

            <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Mrehba bik f Cyber Investment Access
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Ila bghiti tinvesti m3ana f ttwir ethical hacking tools md3omin b AI, tsjel daba.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Project focused on authorized cybersecurity research, defensive testing, and responsible AI-assisted
              security workflows. No illegal access or unauthorized hacking.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setIsFormOpen(true)}
                className="group rounded-xl bg-cyber-green px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-neon transition hover:-translate-y-0.5 hover:bg-cyber-mint focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
              >
                Tsjel daba
                <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </button>
              <div className="glass-panel rounded-xl px-5 py-4 font-mono text-sm text-cyber-green">
                <span className="terminal-caret">status: ai_security_lab_online</span>
              </div>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">{label}</p>
                  <p className="mt-2 text-sm text-slate-300">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          >
            <div className="absolute -inset-8 rounded-[2rem] bg-cyber-cyan/10 blur-3xl" />
            <div className="glass-panel neon-border relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
              <div className="absolute inset-0 bg-grid bg-[length:34px_34px] opacity-30" />
              <div className="relative rounded-2xl border border-cyber-cyan/20 bg-black/55 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-cyber-green" />
                  <span className="ml-3 font-mono text-xs text-slate-400">ai-hacking-tools.sh</span>
                </div>
                <div className="space-y-3 font-mono text-sm text-cyber-green">
                  {terminalLines.map((line, index) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + index * 0.2 }}
                    >
                      <span className="text-cyber-cyan">$</span> {line}
                    </motion.p>
                  ))}
                </div>
              </div>
              <div className="relative mt-5 min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyber-panel via-black to-black p-5">
                <div className="absolute inset-x-6 top-6 rounded-2xl border border-cyber-green/15 bg-black/45 p-4 font-mono text-xs text-slate-300">
                  <p className="text-cyber-cyan">VIDEO FEED: cybersecurity team working / hackers coding</p>
                  <p className="mt-2 text-cyber-green">AI assisted ethical hacking tools development</p>
                </div>
                <HackerMascot variant="hero" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-cyber-green/15 bg-black/35 p-6 backdrop-blur-md sm:p-8">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyber-cyan">Ethical scope</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Built for defensive cybersecurity research and responsible validation.
          </h2>
          <p className="mt-5 max-w-4xl leading-7 text-slate-400">
            The product is positioned for authorized environments, secure analysis workflows, and investor
            onboarding. It does not promote illegal access, credential abuse, or unauthorized intrusion.
          </p>
        </div>
      </section>

      {isFormOpen && <RegistrationModal onClose={() => setIsFormOpen(false)} />}
    </main>
  );
}

function RegistrationModal({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/70 px-4 py-2 font-mono text-sm text-cyber-cyan transition hover:border-cyber-green hover:text-cyber-green"
      >
        close
      </button>
      <div className="grid w-full max-w-5xl gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div className="hidden rounded-[1.5rem] border border-cyber-cyan/20 bg-black/60 p-4 lg:block">
          <HackerMascot variant="pointing" />
        </div>
        <InvestorForm onCompleted={onClose} />
      </div>
    </motion.div>
  );
}

function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover opacity-42 saturate-125"
      autoPlay
      muted
      loop
      playsInline
      poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80"
    >
      <source
        src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
    </video>
  );
}

function MatrixBackdrop() {
  const columns = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    left: `${(index * 7) % 100}%`,
    delay: `${index * -0.7}s`,
    text: "0101 ETHICAL DEFENSE ACCESS SECURE LOG"
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {columns.map((column) => (
        <div
          key={column.id}
          className="matrix-column absolute top-0 animate-matrix font-mono text-xs text-cyber-green"
          style={{ left: column.left, animationDelay: column.delay }}
        >
          {column.text}
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(2,4,3,.92)_72%)]" />
    </div>
  );
}
