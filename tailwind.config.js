module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      body: 'Roboto',
    },
    container: {
      padding: {
        DEFAULT: '0rem',
        lg: '0rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        footer: '#203340',
        btn_imlively: {
          DEFAULT: '#148a81',
          hover: '#18a196'
        },
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
