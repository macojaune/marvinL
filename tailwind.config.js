module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      charcoal: '#233d4d',
      "light-charcoal": 'rgba(35, 61, 77, 0.5)',
      tart: '#fe4a49',
      'washed-white': '#e4dfda',
      'dark-cyan': '#368f8b',
      salmon: '#c1666b',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Inter', 'Oxygen', 'Ubuntu', 'Helvetica Neue'],
      mono: ['Major Mono Display'],
    },
    extend: {
      height: {
        'half-screen': '50vh',
      },
      width: {
        '66': '16.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}