/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        darkTheme: '#2B2B2B',
        orange: '#D67300',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      screens: {
        'tablet-lg': '590px',
        'tablet': '500px',
        'tablet-xs': '430px',
        'mobile': '350px',
        'xs': '300px',
        '2xs': '200px',
      },
    },
  },
  plugins: [],
}
