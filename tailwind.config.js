/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}', // Ini akan memindai index.html
    './src/**/*.{html,js}', // Ini akan memindai semua file di dalam folder src
    './assets/**/*.{html,js}' // Ini akan memindai folder assets jika ada
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

