/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#665BE3',
      'white' : '#FAFAFA',
      'gray': '#D9D9D9',
      'black': '#252628',
    },
  },
  plugins: [],
}
