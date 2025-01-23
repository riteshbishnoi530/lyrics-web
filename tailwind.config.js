/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1025px",
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        'primary': "#DBDBF3"
      }
    },
  },
  plugins: [],
}