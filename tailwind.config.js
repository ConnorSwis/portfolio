/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      },
      animation: {
        fadeIn: "fadeIn .5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        }
      },  
    },
  },
  plugins: [],
}