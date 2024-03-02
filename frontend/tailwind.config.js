/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Montserrat", "sans-serif"],
      },
      colors: {
        slate: "#36454f",
        crimson: "#3a001e",
        amber: "#f9b95e",
        cream: "#f7e7ce",
        frostyMist: "#e2e8f0",
        teal: "#324b4b",
        scarlet: "#b10101",
      },
      backgroundImage: {
        "brand-logo":
          "url('/src/images/joel-muniz-HvZDCuRnSaY-unsplash 1.png')",
      },
    },
  },
  plugins: [],
};
