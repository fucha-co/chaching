module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "black",
      },
      fontSize: {
        'sxl': '9rem'
      },
      letterSpacing: {
        'tightest': '-.075em'
      },
    },
  },
  variants: {},
  plugins: [],
};
