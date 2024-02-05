/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-moderate-cyan": "hsl(176, 50%, 47%)",
      "primary-dark-cyan": "hsl(176, 72%, 28%)",
      "neutral-black": "hsl(0, 0%, 0%)",
      "neutral-dark-gray": "hsl(0, 0%, 48%)",
      "neutral-white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Commissioner", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
