/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    colors: {
      'D87D4A': '#D87D4A',
      '101010': '#101010',
      'F1F1F1': '#F1F1F1',
      'FAFAFA': '#FAFAFA',
      'FBAF85': '#FBAF85',
      'FFFFFF': '#FFFFFF',
      '000000': '#000000',
      'CD2C2C': '#CD2C2C',
      'CFCFCF': '#CFCFCF'
    },
    screens: {
      'xl': {'max': '1400px'},
      'lg': {'max': '1200px'},
      'md': {'max': '1024px'},
      'sm': {'max': '768px'},
      'xs': {'max': '480px'},
    },
    extend: {},
  },
  plugins: [],
}
