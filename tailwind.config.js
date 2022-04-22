const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '10xl': '10rem',
      },
      colors: {
        primary: '#EB5757',
        secondary: '#F2994A',
      },
    },
  },
  plugins: [],
}
