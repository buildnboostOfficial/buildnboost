module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A047A",
        },
      },
      backgroundImage: {
        card: "linear-gradient(130deg, #2A2674 , #302B84)",
        "card-border":
          "linear-gradient(130deg, #ffffffAA, #2A2674, #2A2674, #ffffffAA)",
      },

      
      fontFamily: {
        body: "DM Sans, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
