/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx}",],
  
  theme: {
    extend: {

      backgroundImage: {
        'background': "url('./assets/background.png')"
      },

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
        secondary: {
          100: "#cfd1d4",
          200: "#a0a3a9",
          300: "#70747d",
          400: "#414652",
          500: "#111827",
          600: "#0e131f",
          700: "#0a0e17",
          800: "#070a10",
          900: "#030508"
        },
      },
    },
  },
  plugins: [],
}