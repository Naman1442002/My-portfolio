/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          500: '#4169E1', // Royal Blue
          600: '#27408B', // Dark Royal Blue
        },
        royalPurple: {
          500: '#7851A9', // Royal Purple
          600: '#4B0082', // Indigo/Purple
        },
        royalGold: {
          500: '#FFD700', // Gold
          600: '#DAA520', // Goldenrod (darker gold)
        },
      },
    },
  },
  plugins: [],
};
