// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'zap-orange': '#FF4F00',
        'earth': '#201515',
        'cream': '#FFF3E6',
        'moss': '#1F3121',
        'lavender': '#C1B7FF',
        'night': '#2B2358',
        'almost White': '#FFFDF9',
      },
      fontFamily: {
        'degular': ['Degular', 'sans-serif']
      }
    }
  },
  plugins: []
}