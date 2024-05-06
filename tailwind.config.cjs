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
        'zap-orange': '#FF4F00', // Couleur orange
        'earth': '#201515', // Couleur brune
        'cream': '#FFF3E6', // Couleur beige clair
        'moss': '#1F3121', // Couleur foncé verte
        'lavender': '#C1B7FF', // Couleur violette
        'night': '#2B2358', // Couleur bleu foncé
        'almost White': '#FFFDF9', // Couleur blanche
      },
      fontFamily: {
        'degular': ['Degular', 'sans-serif']
      }
    }
  },
  plugins: []
}