/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*html"],
  theme: {
    extend: {
      colors: {
        newcolor:"#f74c3c"
      },
      fontFamily: {
        titre: ['titre'],
        texte: ['texte'],
      },

    },
  },
  plugins: [],
}

