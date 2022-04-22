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
        lobster: ['"Lobster"', ...defaultTheme.fontFamily.sans],
        yeseva: ['"Yeseva One"', ...defaultTheme.fontFamily.serif],
        dancing: ['"Dancing Script"', ...defaultTheme.fontFamily.serif],
        lora: ['"Lora"', ...defaultTheme.fontFamily.serif],
        delius: ['"Delius"', ...defaultTheme.fontFamily.sans],
        alice: ['"Alice"', ...defaultTheme.fontFamily.sans],
        sacramento: ['"Sacramento"', ...defaultTheme.fontFamily.serif],
        styleScript: ['"Style Script"', ...defaultTheme.fontFamily.sans],
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
