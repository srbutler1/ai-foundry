/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foundry-red': '#E31837',
        'foundry-dark': '#800000',
      }
    },
  },
  plugins: [],
}