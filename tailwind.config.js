/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        white: '#FAFAFA',
        gold: '#D4AF37',
        'gray-950': '#0F0F0F',
        'gray-900': '#171717',
        'gray-800': '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Times New Roman', 'serif'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundColor: {
        light: {
          DEFAULT: '#FAFAFA',
        },
        dark: {
          DEFAULT: '#0A0A0A',
        },
      },
      textColor: {
        light: {
          DEFAULT: '#0A0A0A',
        },
        dark: {
          DEFAULT: '#FAFAFA',
        },
      },
    },
  },
  plugins: [],
};