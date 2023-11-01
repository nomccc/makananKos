/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/img/banner.jpg')",
      }
      
    },
  },
  daisyui: {
    themes: ["light"],
 },
  plugins: [
    require("daisyui")
  ],
}

