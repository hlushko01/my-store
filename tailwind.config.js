/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        'p16': '16px',
        'hero': '3.25rem',
        'p18': '18px',
        'p20': '20px',
        'p24': '24px',
        'p32': '32px',
        'p40': '40px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors :{
        'c3': '#333333',
        'hero': '#B88E2F',
        'c666':'#666',
        'c3A': '#3A3A3A',
        'c61': '#616161',
        'c9F': '#9F9F9F'
      },
      letterSpacing: {
        '3px': '3px',
      },
      lineHeight: {
        'hero': '125%',
        'lh133': '133.33%',
        'lh120': '120%',
      }
    },
  },
  plugins: [],
}

