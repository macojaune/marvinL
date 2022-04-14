module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      charcoal: '#233d4d',
      tart: '#fe4a49',
      'washed-white': '#e4dfda',
      'dark-cyan': '#368f8b',
      salmon: '#c1666b',
    },
    fontFamily: {
      sans: ['Inter', 'Oxygen', 'Ubuntu', 'Helvetica Neue'],
      mono: ['Major Mono Display'],
    },
    extend: {
      height: {
        'half-screen': '50vh',
      },
    },
  },
  plugins: [],
}
