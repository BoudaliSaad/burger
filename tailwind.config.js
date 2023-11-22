/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'sans-serif']
      },
     colors:{
      darkcolor:'#0000',
     },
     backgroundColor:{
      bgdark:'#000000'
     }
    },
  },
  plugins: [],
}