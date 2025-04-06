/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a1526',  // Dark navy blue for primary elements
        'white': '#ffffff'     // White for contrasting elements
      },
    },
  },
  plugins: [],
}