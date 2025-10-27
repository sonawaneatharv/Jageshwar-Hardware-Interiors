/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A3839',
        accent: '#FFC72C',
        background: '#F8F8F8',
        text: '#333333',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
 plugins: [
    require('@tailwindcss/line-clamp'), 
  ],}
