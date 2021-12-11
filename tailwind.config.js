module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        'white': '#FFFFFF',
        'blue': '#90D8F9',
        'yellow': '#FFE07D',
        'pink': '#DF75A5',
        'green': '#b3e59f',
        'gray-dark': '#365E7D'
      },
    },
  },
  plugins: [],
}
