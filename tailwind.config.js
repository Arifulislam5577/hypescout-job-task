/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primaryDark: "#17181B",
        secondaryDark: "#000000",
        primaryLight: "#637381",
        secondaryLight: "#95B3CD",
        primaryBlue: "#564FB1",
        lightBgOne: "#F7F7F7",
        lightBgTwo: "#F7F7F8",
        lightBgThree: "#202124",
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
  plugins: [],
};
