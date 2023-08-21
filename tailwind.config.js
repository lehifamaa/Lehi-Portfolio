/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/*"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["Playfair Display"],
        nunito: ["Nunito"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
