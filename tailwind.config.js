/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/**/**/*.js'],
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%',
      '200': '200px',
      '300': '300px',
    }
  },
  plugins: [
  ],
}
