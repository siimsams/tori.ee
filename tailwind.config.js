/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
    }
  },
  plugins: [],
}