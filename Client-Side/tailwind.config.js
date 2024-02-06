/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-orange":"#ff6d01",
        "dark-orange":"#DC4D01",

      },
    },
  },
  plugins: [],
}

