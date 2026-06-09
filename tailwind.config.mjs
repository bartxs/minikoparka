/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111111',
        smoke: '#1E1E1E',
        concrete: '#F4F1EC',
        amber: {
          DEFAULT: '#E8820C',
          dark: '#C26909',
          light: '#FAA93D',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
