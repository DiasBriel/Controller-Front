module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "2.625rem",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        primary: "#54B080",
        black: "#1F1F1F",
        secondary: "#C8C8C8",
        accent: "#B05E54",
      },
      height: {
        "90vh": "90vh",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
