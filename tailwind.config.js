/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6200ff',
        pink: '#c200f8'
      },
      fontFamily: {
        sans: ['var(--noto_sans_kr)'],
        // happySans: ['var(--single_day)'], 
      },
      fontSize: {
      },
    },
  },
  plugins: [],
  
  corePlugins: {
    preflight: false
  }
}

