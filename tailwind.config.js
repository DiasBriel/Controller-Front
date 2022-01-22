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
        subtitle: "#C8C8C8",
      },
    },
  },
  plugins: [],
};
