/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      lineClamp: {
        7: "7",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "818px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
