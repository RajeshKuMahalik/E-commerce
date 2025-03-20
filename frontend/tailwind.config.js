/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1050':{'max':'1050px'},
        'max-750': {'max':'750px'},
    },
    },
  },
  plugins: [],
}

