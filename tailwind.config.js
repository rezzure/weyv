/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#129C96",
          dark: "#087C78",
          light: "#DDF4F1",
        },
        accent: "#78CFC8",
        ink: {
          DEFAULT: "#102B2A",
          secondary: "#173C3A",
        },
        muted: "#687776",
        soft: "#F5F8F7",
        line: "#DCE7E5",
        sand: "#C9A15E",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1320px",
      },
      boxShadow: {
        card: "0 2px 24px -8px rgba(16, 43, 42, 0.12)",
        lift: "0 20px 60px -20px rgba(16, 43, 42, 0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
