/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      headline: "clamp(2.5rem, 4vw + 1rem, 3rem)",
      subheadline: "clamp(2rem, 3vw + 1rem, 2.5rem)",
      title: "clamp(1.5rem, 2.5vw + 1rem, 2rem)",
      subtitle: "clamp(1.5rem, 2.5vw + 1rem, 2rem)",
      "main-fs": "clamp(.9rem, 1.5vw + .25rem, 1.05rem)",
      caption: "clamp(0.875rem, 1.25vw + .5rem, 1rem)",
      sm: "clamp(0.775rem, 1.15vw + .25rem, .925rem)",
    },
    extend: {
      width: {
        "fluid-250": "min(250px, 100%)",
        "fluid-300": "min(300px, 100%)",
        "fluid-400": "min(400px, 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("children", "& > *");
    }),
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
