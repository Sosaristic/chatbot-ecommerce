/*eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          def: '#b88e31',
          900: '#855f44',
          800: '#af8751',
          700: '#ba9d89',
          600: '#cbb599',
          500: '#d1c1b5',
        },
        grey: {
          def: '#696968',
          900: '#95938c',
          800: '#eeece9',
          700: '#e9e5e0',
          600: '#e4dfda',
        },
        black: {
          def: '#1b1b1b',
        },
        white: {
          def: '#fff',
        },
        background: {
          def: '#f1f1f1',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
