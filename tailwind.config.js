/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
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
