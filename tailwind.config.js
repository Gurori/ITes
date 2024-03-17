/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#665BE3',
      'yellow' : '#EFDE68',
      'white' : '#FAFAFA',
      'gray': '#D9D9D9',
      'black': '#252628',
      'reallywhite' : '#FFFFFFCC',
      'true-black' : '#1E1F21',
      'pink' : '#EC6C6C',
      'violet' : '#3C1F63',
      'violaceous' : '#B74C85',
      'xanthous' : '#CBB43B',
      'reallygray' : '#747474',
      'dark-gray' : '#646464',
      },
    },
  },

  plugins: [],
}
