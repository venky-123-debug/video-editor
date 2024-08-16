/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
        xls: "1366px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
