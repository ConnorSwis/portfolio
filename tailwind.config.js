/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffdacc",
          200: "#ffb699",
          300: "#ff9166",
          400: "#ff6d33",
          500: "#ff4800",
          600: "#cc3a00",
          700: "#992b00",
          800: "#661d00",
          900: "#330e00"
        },
      }
    },
  },
  plugins: [],
}