/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Times New Roman", "serif"],
        body: ["Source Serif 4", "Georgia", "serif"],
        meta: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
