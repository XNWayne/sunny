module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        attribution: "hsl(228, 45%, 44%)",
        softRed: "hsl(7, 99%, 70%)",
        yello: "hsl(51, 100%, 49%)",
        darkDesaturatedCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
        veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
        footer: "#9fdccd",
        header: "hsl(200, 81%, 68%)",
      },
      fontFamily: {
        body: ["Barlow", "sans-serif"],
        head: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
