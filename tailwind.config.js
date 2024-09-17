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


//  yellow  color: #ff9000
// dark brown color: #35190b