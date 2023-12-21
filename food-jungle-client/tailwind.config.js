/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue": "#53B1FD",
        "orange": "#dd6e42",
        "secondary": "#555",
        "primaryBG": "#FCFCFC"
      }
    },
    
  },
  daisyui: {
    themes: ["cupcake", "cmyk"],
    base:false
 },
  plugins: [require("daisyui")],
 }

