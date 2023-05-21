/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./src/**/*.tsx", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["DM Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brown": {
          400: "#92857A",
          900: "#382314",
        },
        "card": {
          100: "#FFFBF6"
        },
        "cream": "#F8E9DD",
        "cyan": "#76B5BC",
        "red": {
          200: "#EC755D",
        }
      }
    },
  },
  plugins: [],
}

