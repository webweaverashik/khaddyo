/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Content paths
  theme: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};