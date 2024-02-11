/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        md: '2rem',
        xl: '3rem',
        '2xl': '5rem',
      },
    },
    extend: {},
  },
  plugins: [],
}