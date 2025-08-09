/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Karla', 'sans-serif'],
      },
      colors: {
        'soft-terracotta': '#E6A88F',
        'peach': '#F8C4B4',
        'sage-green': '#B8C4A4',
        'dusty-blue': '#A4B8C4',
      }
    },
  },
  plugins: [],
}

