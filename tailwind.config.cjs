/** @type {import('tailwindcss').Config} */

let plugin = require('tailwindcss/plugin');

module.exports = {
  prefix: 'tw-',
  content: ['./**/*.liquid', './frontend/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [],
};