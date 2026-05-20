import React, { useState } from "react";
import { motion } from "framer-motion";
import SuccessModal from "./SuccessModal.jsx";
import HackerMascot from "./HackerMascot.jsx";

const initialValues = {
  fullName: "",
  email: "",
  accountUrl: "",
  amount: "1000 DH"
};

const terminalSteps = [
  "Initializing secure investor access...",
  "Encrypting registration...",
  "Access request submitted."
];

export default function InvestorForm({ onCompleted }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const updateValue = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setShowSuccess(true);
    setValues(initialValues);

    window.setTimeout(() => {
      setShowSuccess(false);
      onCompleted?.();
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }, 4000);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65 }}
        className="glass-panel neon-border relative rounded-[1.75rem] p-5 sm:p-7"
      >
        <div className="mb-7 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-green">Investor registration</p>
            <h3 className="mt-2 text-2xl font-semibold">Tsjel m3ana</h3>
          </div>
          <div className="lg:hidden">
            <HackerMascot variant="mini" />
          </div>
        </div>

        <div className="grid gap-5">
          <Field
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={updateValue}
            error={errors.fullName}
            required
            placeholder="Ada Lovelace"
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={updateValue}
            error={errors.email}
            required
            placeholder="ada@securelab.dev"
          />
          <Field
            label="Account URL"
            name="accountUrl"
            type="url"
            value={values.accountUrl}
            onChange={updateValue}
            placeholder="https://linkedin.com/in/..."
          />

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">
              Investment amount <span className="text-cyber-green">*</span>
            </span>
            <select
              name="amount"
              value={values.amount}
              onChange={updateValue}
              className="w-full rounded-xl border border-cyber-green/20 bg-black/60 px-4 py-4 text-white outline-none transition focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/30"
            >
              <option>1000 DH</option>
              <option>1100 DH</option>
              <option>1300 DH</option>
            </select>
          </label>
        </div>

        <div className="mt-6 rounded-2xl border border-cyber-cyan/15 bg-black/50 p-4 font-mono text-xs text-slate-300">
          {terminalSteps.map((step, index) => (
            <p key={step} className={index === 2 ? "text-cyber-green" : ""}>
              <span className="text-cyber-cyan">&gt;</span> {step}
            </p>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyber-green to-cyber-cyan px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-cyan transition hover:-translate-y-0.5 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-cyber-green"
        >
          Kmel registration
        </button>
      </motion.form>

      <SuccessModal isOpen={showSuccess} />
    </>
  );
}

function Field({ label, name, value, onChange, error, required = false, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required && <span className="text-cyber-green">*</span>}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cyber-green/20 bg-black/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/30"
      />
      {error && (
        <span id={`${name}-error`} className="mt-2 block font-mono text-xs text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}
