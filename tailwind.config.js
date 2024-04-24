module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'custom': {'min': '512px', 'max': '558px'},
      },
    },
  },
  plugins: [],
}
