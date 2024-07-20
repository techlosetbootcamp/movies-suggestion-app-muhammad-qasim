/** @type {import('tailwindcss').Config} */
const { Colors } = require("./src/constants/Colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...Colors,
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        caros: ['"Caros Bold"', "sans-serif"],
      },
      fontSize: {
        "20px": "20px",
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities }) {
      addBase({
        body: {
          backgroundColor: Colors.primary,
        },
      });

      const newUtilities = {
        "@media (min-width: 1238px) and (max-width: 1319px)": {
          ".tailer-card": {
            width: "450px !important",
          },
        },
        "@media (min-width: 1138px) and (max-width: 1237px)": {
          ".tailer-card": {
            width: "365px !important",
            height: "235px !important",
          },
        },
        "@media (min-width: 1024px) and (max-width: 1137px)": {
          ".tailer-card": {
            width: "365px !important",
            height: "235px !important",
          },
          ".shrink-div": {
            width: "90% !important",
          },
        },
        "@media (min-width: 100px) and (max-width: 330px)": {
          ".gerner-link": {
            fontSize: "14px !important",
            padding: "3px 9px",
          },
        },
        ".hide-scroll-bar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scroll-bar::-webkit-scrollbar": {
          display: "none",
        },
        ".truncate-multiline": {
          display: "-webkit-box",
          "-webkit-line-clamp": "5",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
