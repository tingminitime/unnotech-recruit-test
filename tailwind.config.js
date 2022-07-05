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
        'myBlack': '#282c34',
        'myDarkGray': '#333',
        'myLightBlue': '#64C3FF',
        'myBlue': '#4aa9ee',
        'myDarkBlue': '#3190D5',
      },
      fontFamily: {
        'sans': ['Inter', 'Noto Sans TC', 'Helvetica Neue', ...defaultTheme.fontFamily.sans],
        'mono': [...defaultTheme.fontFamily.mono, 'Noto Sans TC']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
