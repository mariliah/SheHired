/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
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
        grey: '#D9D9D9',
        white: '#FFFFFF',
        black: '#000000',
      },
      backgroundImage: {
        'hero': "url('./images/login.jpg')",
      },
      backdropBrightness: {
        90: ".9",
      },
    },
  },
  plugins: [],
};
