/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#4A5568',
      'secondary': '#A0AEC0',
      'important': '#2691D9',
      'error': '#F56565',
      'lines': '#E2E8F0',
      'gradient-primary': '#2E7DB8',
      'gradient-secondary': '#8847AD',
    },
    extend: {},
  },
  plugins: [],
}