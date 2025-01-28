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
      },
      keyframes: {
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        contentFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
      animation: {
        heroFloat: 'heroFloat 4s ease-out infinite alternate',
        contentFadeIn: 'contentFadeIn 1s ease-out forwards',
        borderFlow: 'borderFlow 3s linear infinite',
      },
      keyframes: {
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        contentFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        heroFloat: 'heroFloat 4s ease-out infinite alternate',
        contentFadeIn: 'contentFadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
