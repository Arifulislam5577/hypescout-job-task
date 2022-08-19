/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primaryDark: "#17181B",
        secondaryDark: "#000000",
        tertiaryDark: "#202124",
        primaryLight: "#637381",
        secondaryLight: "#95B3CD",
        primaryBlue: "#564FB1",
        lightBgOne: "#F7F7F7",
        lightBgTwo: "#F7F7F8",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
