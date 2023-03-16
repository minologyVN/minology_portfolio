/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      base: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#252429",
        white: "#FFF",
        "white-opacity": "rgba(255, 255, 255, 0.2)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1920px",
      },
      zIndex: {
        tooltip: "1300",
        popover: "1200",
        backdrop: "1100",
        modal: "1000",
        "side-bar": "900",
        dropdown: "100",
        icon: "100",
        fixed: "10",
        window: "0",
        default: "0",
      },
    },
  },
  plugins: [],
};
