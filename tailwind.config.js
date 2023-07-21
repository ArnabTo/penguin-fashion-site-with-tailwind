/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'cs': '845px',
          // => @media (min-width: 992px) { ... }
        },
      },
    },
    plugins: [],
  }