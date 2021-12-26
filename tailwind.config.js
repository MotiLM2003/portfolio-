module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0.2rem',
        sm: '1rem',
        lg: '.5rem',
        xl: '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
};
