/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{ts,js,tsx,jsx}'
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        fontDarkColor :'#969ba0',
        btnColor : '#303134'
      },
      backgroundColor:{
        activeColor : '#F8F9FA',
        darkColor : '#202124',
        btnColor : '#303134'
      }
    },
  },
  plugins: [],
}

