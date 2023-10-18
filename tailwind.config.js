module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
        'box': 'hsl(217, 19%, 24%)',
      },
      width: {
        'custom': '40rem',
      },
      height: {
        'custom': '23rem', // You can adjust this value as needed
      },
    },
  },
  variants: {},
  plugins: [],
};
