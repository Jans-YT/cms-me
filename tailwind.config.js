/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("daisyui"),
    require("tw-elements-react/dist/plugin.cjs")
  ],
}
