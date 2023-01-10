/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        navbar: {
          700: '#0d6efd',
          400: '#5fa1fe',
          200: '#0d6efd8a',
          0: '#B0D4FE'
        },
        navbarGray: {
          500: '#B0D4FE'
        }
      },
      boxShadow: {
        '1x' : 'inset 0px 15px 0px -14px rgb(12 10 10 / 20%)',
        '0.5x' : '0 .5rem 1rem rgba(0,0,0,.20)!important',
      },
      spacing: {
        'sidebar': '83vh',
        'navbar' : '8vh',
      }
    },
  },
  plugins: [],
}
