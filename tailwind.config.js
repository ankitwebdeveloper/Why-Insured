/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bbdffd',
          300: '#7cc4fa',
          400: '#36a7f5',
          500: '#0c8de6',
          600: '#006ec2',
          700: '#02589e',
          800: '#064b82',
          900: '#0b3f6d',
          950: '#07284a',
        },
        medical: {
          50: '#f2fdf5',
          100: '#e1fbe9',
          200: '#c5f7d5',
          300: '#97eeb4',
          400: '#5fdb8b',
          500: '#34c066',
          600: '#259e50',
          700: '#1f7d42',
          800: '#1d6337',
          900: '#19522f',
          950: '#092e18',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
