/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "caros-bold": ["FONTSPRING DEMO - Caros Bold", "sans-serif"],
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
          backgroundColor: "#ebeaea",
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
        "@media (min-width: 1024px) and (max-width: 1237px)": {
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
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
