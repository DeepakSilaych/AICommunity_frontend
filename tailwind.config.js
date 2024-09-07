/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{ 
            sans: ['Share Tech Mono', ...defaultTheme.fontFamily.sans ],
            pressStart: ['"Press Start 2P"', 'cursive'],
            },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}




