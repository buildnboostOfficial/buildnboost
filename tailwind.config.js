module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A047A !important",
        },
        dark: {
          DEFAULT: "#111827",
        },
        servicebg: {
          DEFAULT: "#f8fafc",
        },

        serviceCards: {
          DEFAULT: "#E7E6F2",
        },
      },

      backgroundImage: {
        noise: "url('/assets/images/noise-transparent-bg.png')",
        card: "linear-gradient(130deg, #2A2674 , #302B84)",
        "card-border":
          "linear-gradient(130deg, #ffffffAA, #2A2674, #2A2674, #ffffffAA)",
      },

      textColor: {
        "primary-web": {
          DEFAULT: "#0A047A",
        },
        primary: {
          DEFAULT: "#111827",
        },
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
