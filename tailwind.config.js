/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#0ea5e9',
        black: '#0c4a6e',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
