/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"]
      },
      colors: {
        cyber: {
          black: "#020403",
          panel: "#07100e",
          green: "#39ff88",
          cyan: "#35e4ff",
          mint: "#b9ffe0"
        }
      },
      boxShadow: {
        neon: "0 0 32px rgba(57, 255, 136, 0.22)",
        cyan: "0 0 34px rgba(53, 228, 255, 0.18)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(53, 228, 255, .08) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 136, .08) 1px, transparent 1px)"
      },
      animation: {
        scan: "scan 6s linear infinite",
        float: "float 5s ease-in-out infinite",
        matrix: "matrix 18s linear infinite"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        matrix: {
          "0%": { transform: "translateY(-45%)" },
          "100%": { transform: "translateY(5%)" }
        }
      }
    }
  },
  plugins: []
};
