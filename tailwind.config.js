/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru': '#233ba0',
        'pink': '#784EB7'
      },
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(rgba(36, 60, 160, 0) 0%, rgba(36, 60, 160, 1) 65%)',
        'custom-gradient2': 'linear-gradient(to bottom, #784EB7 15%, #233BA0 39%)',
        'custom-gradient3': 'linear-gradient(135deg, #9F00B9 0%, #620DA5 55%, #185ABC 100%)',
        'custom-gradient4': 'linear-gradient(90deg, #275BB1 24%, #610FA6 65%, #8E04B4 100%)',
      }
    },
  },
  plugins: [],
}

