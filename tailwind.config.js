/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      blue: '#08319C',
      'blue-light': '#C8D3F0',
      yellow: '#EEAE09',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
