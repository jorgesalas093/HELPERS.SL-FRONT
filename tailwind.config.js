/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'he-primary': '#D3D6D4',
        'tw-light-gray': '#E1E8ED',
        'he-dark-gray': '#657786',
        'tw-dark': '#14171A',
        'tw-primary-accent': '#FFAD1F',
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

