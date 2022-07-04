/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myDarkGray': '#333',
        'myLightBlue': '#4aa9ee',
        'myDarkBlue': '#3272a1',
      },
      fontFamily: {
        'sans': ['Inter', 'Noto Sans TC', 'Helvetica Neue', ...defaultTheme.fontFamily.sans],
        'mono': [...defaultTheme.fontFamily.mono, 'Noto Sans TC']
      }
    },
  },
  plugins: [],
}
