
module.exports = {
  content: ["./src/*.html", "./src/js/*.js"],
  theme: {
    screens: {
      'xl': { 'max': '1920px' },
      'lg': { 'max': '1199px' },
      'md': { 'max': '991px' },
      'sm': { 'max': '767px' },
      'xs': { 'max': '575px' },
    },
    fontFamily: {
      poppins: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'main': '#ec644b',
        'btn-bg': '#25333c',
        'gray-light': '#3a3a3a',
        'gray-dark': '#2e2e2e',
      },
    },
  },
  plugins: [
    { tailwindcss: {} },
    { autoprefixer: {} },
  ],
}

