module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      sans: ["'BIZ UDPGothic'", "sans-serif"],
      facebook: ["SFProDisplay-Regular", "sans-serif"],
    },
    extend: {
      colors: {
        "spotify-hover": "#18D760",
        "spotify-green": "#1ED760",
        "spotify-purple": "#2D46B9",
        "facebook-gray": "#f0f2f5",
        "facebook-blue": "#166fe5",
        "facebook-green": "#36a420",
        "facebook-links": "#8a8d91",
      },

      borderWidth: {
        "1px": "1px",
      },

      width: (theme) => ({
        box: "80rem",
        "facebook-footer": "980px",
      }),

      fontSize: (theme) => ({
        "9xl": "9rem",
      }),

      backgroundImage: (theme) => ({
        "spotify-theme": "url('../img/spotify/bursts.svg')",
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
