/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-onest)", "system-ui", "sans-serif"],
      },
      colors: {
        page: "#222222",
        surface: "rgba(169, 169, 169, 0.2)",
        "surface-dark": "rgba(17, 25, 40, 0.37)",
        brand: {
          start: "#4776e6",
          end: "#8e54e9",
        },
        muted: "rgba(255, 255, 255, 0.55)",
        "muted-light": "rgba(255, 255, 255, 0.35)",
        border: "rgba(255, 255, 255, 0.12)",
        "border-strong": "rgba(255, 255, 255, 0.22)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(to right, #4776e6, #8e54e9)",
        "radial-brand": "radial-gradient(circle, #4776e6, #8e54e9)",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};
