import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#14130F",
        surface: "#1C1B17",
        surface2: "#232019",
        ink: "#F2EFE9",
        muted: "#938F82",
        faint: "#5C594E",
        line: "rgba(242, 239, 233, 0.09)",
        brass: {
          DEFAULT: "#C9A24B",
          soft: "#E4C878",
          dim: "#8C763E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "760px",
      },
    },
  },
  plugins: [],
};

export default config;
