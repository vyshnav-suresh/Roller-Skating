/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Add your custom colors here
        customRed: '#FF0000', // Example: Define a custom color named 'customRed'
        customBlue: '#0000FF', // Example: Define a custom color named 'customBlue'
        // You can add as many custom colors as needed
        main_dark:'#004445',
        secondary_dark:'#2C7873',
        main_light:'#FFD800',
        secondary_light:'#6FB98F',
        optional_light:'#FFED00',
        white_cream:'#FBFAE1'

      },
      
    },
  },
  plugins: [],
}
