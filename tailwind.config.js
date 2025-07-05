/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
        nav: '#940812',
      },
      backgroundImage: {
        'home': "url('/assets/img/.svg')",
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

