/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Simply Rounded', 'sans-serif'],
        text: ['Garet', 'sans-serif']
      },
      boxShadow: {
        button: 'inset 1px 1px 10px rgba(0, 0, 0, 0.5)',
        'button-primary': '0rem 0.3rem 0.5rem 0rem rgba(0, 0, 0,, 0.2);'
      },
      colors: {
        'sea-green': '#1FB1A2',
        'dark-gray': '#5D5360',
        'dark-blue': '#2C344B',
        'pkng-orange': '#FC9E41'
      }
    }
  },
  plugins: []
};
