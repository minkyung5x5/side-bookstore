import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6200ff',
        pink: '#c200f8'
      },
      fontFamily: {
        sans: ['var(--noto_serif_kr)'],
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
};
export default config;
