/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1360px',
      '2xl': '1400px',
    },
    extend: {
      fontFamily: {
        primary: ['Open Sans', 'sans-serif']
      },
      colors: {
        'f1': '#F1F1F1',
        'e8': '#E8E8E8',
        'customBlack': '#222222',
        'darkGrey': '#666666',
        'lightGrey': '#F8F8F8'
      },
    },
  },
  plugins: [],
}
