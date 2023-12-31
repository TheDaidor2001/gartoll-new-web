/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit-config.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#1f271b',
        "secondary": '#e8c547',
        "thirth" : '#53B3CB',
        "four": '#F26419'
      },
      backgroundImage: {
        "hero-section": "url('/bg-hero.svg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

