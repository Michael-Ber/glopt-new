
module.exports = {
  content: ["./src/*.html", "./src/js/*.js"],
  theme: {
    screens: {
      'xl': { 'max': '1920px' },
      'swiper-cont': { 'max': '1579px' },
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
        'blue-light': '#f3f3f3',
        'pink-light': '#e9e9e9'
      },
      gridTemplateColumns: {
        'work': 'repeat(3, 360px)',
        'delivery-xs': '300px',
        'form-input': 'repeat(3, 270px)',
        'form-input-md': '400px',
        'form-input-xs': '280px',
        'schema': 'repeat(auto-fill, 255px)'
      },
      backgroundImage: {
        'agent-section': 'url("./assets/img/bg/bg_agent.jpg")',

      },
      backgroundColor: {
        'white-700': 'rgba(255, 255, 255, .7)',

      },
      borderColor: {
        'black-200': 'rgba(0, 0, 0, .2)',
        'white-300': 'rgba(255, 255, 255, .3)'
      }
    },

  },
  plugins: [
    { tailwindcss: {} },
    { autoprefixer: {} },
  ],
}

