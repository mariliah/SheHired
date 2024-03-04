/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      borderRadius: {
        10: '10px',
      },
      colors: {
        slate: '#36454f',
        crimson: '#3a001e',
        amber: '#f9b95e',
        cream: '#FDFAF5',
        frostyMist: '#e2e8f0',
        teal: '#324b4b',
        scarlet: '#b10101',
        'input-border': '#D9D9D9',
      },
      backgroundImage: {
        'brand-logo':
          "url('/src/images/joel-muniz-HvZDCuRnSaY-unsplash 1.png')",
      },
    },
  },
  plugins: [],
};
