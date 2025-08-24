/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#112D4E',
        secondary: '#DBE2EF',
        primary_bg: '#F9F7F7',
        color_blue: '#3F72AF'
      }
    },
  },
  darkMode: 'class',
  mode:'jit',
  plugins: [],
}

