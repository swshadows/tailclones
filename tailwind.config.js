module.exports = {
  content: ["./docs/*.html"],
  theme: {
    fontFamily: {
      sans: ["BIZ UDPGothic", "sans-serif"],
    },
    extend: {
      colors: {
        "spotify-hover": "#18D760",
        "spotify-green": "#1ED760",
        "spotify-purple": "#2D46B9",
      },
      width: (theme) => ({
        box: "80rem",
      }),

      fontSize: (theme) => ({
        "9xl": "9rem",
      }),

      backgroundImage: (theme) => ({
        "spotify-theme": "url('../img/bursts.svg')",
      }),

      backgroundSize: (theme) => ({
        mobile: "auto 181%",
      }),
      backgroundPosition: (theme) => ({
        "banner-mobile": "center center",
      }),
    },
  },
  plugins: [],
};
