/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      dMagenta: "#502050",
      sPink: "#ee68a4",
      dGrayMagenta: "#937b92",
      lGrayMagenta: "#f7f2f7",
      White: "#ffffff",
    },
    extend: {
      screens: {
        xs: "375px",
        // => @media (min-width: 375px) { ... }
      },
    },
  },
  plugins: [],
};
