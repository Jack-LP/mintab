/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
      colors: {
        sky: '#e2e8f0',
        mint: '#0fb7a0',
        glass: '#e2e8f0',
      },
    },
  },
  plugins: [],
};
