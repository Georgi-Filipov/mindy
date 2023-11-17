/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: "media",
  theme: {
    colors: {
      'white': '#fff',
      'dark': '#111528',
      'blue': '#1235E2',
      'blue-dark': '#1D3587',
      'blue-light': '#5775DB',
      'blue-light-2': '#8197E4',
      'blue-light-3': '#ABBAED',
      'gray-800': '#1F2337',
      'gray-700': '#373B51',
      'gray-600': '#4B4F63',
      'gray-500': '#6B6F80',
      'gray-400': '#9C9FAF',
      'gray-300': '#D1D3DB',
      'gray-200': '#E5E6EB',
      'gray-100': '#F3F3F6',
      'red': '#E02424',
      'red-dark': '#C81E1E',
      'red-light': '#F05252',
      'red-light-2': '#FDF2F2',
      'freen': '#057A55',
      'freen-dark': '#046C4E',
      'freen-light': '#0E9F6E',
      'freen-light-2': '#F3FAF7',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'button': '0 0 0 2px #8197E4 inset',
        'input': '0 0 0 1px #4B4F63 inset',
      },
      text: {
        '4xl': 'font-size: 2.5rem'//todo: overwrite it
      }
    }
  },
}