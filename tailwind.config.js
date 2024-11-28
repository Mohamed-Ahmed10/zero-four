/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        bg: '#f9fcff',
        linear_btn1: '#10b1f0',
        linear_btn2: '#6e81f8',
        darker: '#f5f7f9',
        order_review: '#0d0efe',
        discount: '#83d557',
        total: '#4f5fee'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

