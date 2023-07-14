/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#1f271b',
        "secondary": '#e8c547',
        "thirth" : '#53B3CB'
      }
    },
  },
  plugins: [],
}

