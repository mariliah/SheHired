/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      slate: "#36454f",
      crimson: "#3a001e",
      amber: "#f9b95e",
      cream: "#f7e7ce",
      frostyMist: "#e2e8f0",
      teal: "#324b4b",
      scarlet: "#b10101",
      grey: "#D9D9D9",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
