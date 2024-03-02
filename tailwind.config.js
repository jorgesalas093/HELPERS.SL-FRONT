/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'he-primary': '#56DEDE',
        'he-light-gray': '#E1E8ED',
        'he-dark-gray': '#657786',
        'he-dark': '#14171A',
        'he-primary-accent': '#FFAD1F',
        'he-background': '#eee'
      },
      maxWidth: {
        'container': '980px'
      },
      minHeight: {
        "body": "calc(100vh - 70px)"
      }
    },

  },
  plugins: [],
}

