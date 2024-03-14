/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        primary: "#FFFFFF",
        secondary: "#0F0F0F",
        cta: "#E6E6E6",
      },
      dark: {
        primary: "#0F0F0F",
        secondary: "#FFFFFF",
        cta: "#3E3E3E",
      },
    }),
  ],
};
