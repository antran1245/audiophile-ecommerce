/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    colors: {
      'D87D4A': '#D87D4A',
      '#101010': '#101010',
      'F1F1F1': '#F1F1F1',
      'FAFAFA': '#FAFAFA',
      'FBAF85': '#FBAF85',
      'FFFFFF': '#FFFFFF',
      '000000': '#000000',
      'CD2C2C': '#CD2C2C',
      'CFCFCF': '#CFCFCF'
    },
    screens: {
      'xs': {'max': '480px'},
      'sm': {'max': '768px'},
      'md': {'max': '1024px'},
      'lg': {'max': '1200px'}
    },
    extend: {},
  },
  plugins: [],
}
