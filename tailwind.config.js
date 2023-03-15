/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#34B3F1',
        'main-dark': '#111828',
        'main-light-dark': '#202938',
      },
      gridTemplateColumns:
        {
          '5/95': '5% 95%',
          'fixed': '40px 260px',
          '60/40/60': '60% 40% 60%',
          '40/60/40': '40% 60% 40%',
        },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
