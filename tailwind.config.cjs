/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      base: ["Poppins", "sans-serif"],
      title: ["Quicksand", "sans-serif"],
      heading: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      xxl: "3.25rem",
      xl: "2.25rem",
      h1: "1.75rem",
      h2: "1.5rem",
      h3: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem",
      xxs: "0.625rem",
    },
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#252429",
        blue: "#0f33ff",
        white: "#FFF",
        "white-opacity": "rgba(255, 255, 255, 0.1)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1920px",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extraBold: "800",
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
        below: "-1",
      },
    },
  },
  plugins: [],
};
