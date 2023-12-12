/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        base: '450px',
      },
      screens: {
        xs: '400px',
      },
      height: {
        150: '150px',
      },
      colors: {
        brand: {
          red: '#DB0000',
          porp: '#DADADA',
          overlay: '#0a0d1580',
          gray: {
            100: '#EFEFEF',
            200: '#838383',
          },
        },
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      fontSize: {
        xxs: '10px',
      },
      borderRadius: {
        18: '18px',
      },
      backgroundImage: {
        'block-1': "url('/assets/images/background/common-1.png')",
        'block-2': "url('/assets/images/background/common-2.png')",
        'block-3': "url('/assets/images/background/common-3.png')",
      },
    },
  },
  plugins: [],
};
