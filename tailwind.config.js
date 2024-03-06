const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
/**
 *  
 * @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Commissioner"', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'moderate-cyan': "hsl(176, 50%, 47%)",
        'dark-cyan': "hsl(176, 72%, 28%)",
        'black': "hsl(0, 0%, 0%)",
        'dark-gray': 'hsl(0, 0%, 48%)',
        'white' : colors.white,
      },
      screens: {
        "wide": "1440px"
      }
    },
    
  },
  plugins: [],
}