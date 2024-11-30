/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linear_btn1: '#10b1f0',
        linear_btn2: '#6e81f8',
        dark: '#f5f7f9',
        label: '#bbb6c5',
        darker: '#e9e9e9',
        rightBg: '#f5f7f9',
        order_review: '#0d0efe',
        discount: '#83d557',
        total: '#4f5fee',
        link: '#70adfc'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

