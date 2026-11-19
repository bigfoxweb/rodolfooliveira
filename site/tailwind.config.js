/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Libre Baskerville'", 'serif'],
        sans: ["'Montserrat'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
