/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'project_side_bar':"#1E3E62",
        'project_comp' : "#F5F5F7"
      }
    },
  },
  plugins: [],
}