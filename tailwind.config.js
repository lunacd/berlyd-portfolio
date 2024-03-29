module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#111921",
      white: "#fffbf3",
      pink: "#f4d4d6",
      blue: "#5f8db5",
      green: "#035157",
      mojo_accent: "#f4d047",
      hidden_season_accent: "#d8ba77",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      caslon: ["Libre Caslon Text", "serif"],
    },
    extend: {
      fontSize: {
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
      },
      width: {
        "7/20": "35%",
        "1280px": "1280px",
        "1536px": "1536px",
        7.5: "1.875rem",
      },
      height: {
        7.5: "1.875rem",
        "65vh": "65vh",
        entire: "700vh",
        128: "32rem",
        184: "46rem",
        extralarge: "58rem",
        extralarge_lg: "54rem",
        extralarge_md: "46rem",
        fullsection: "42rem",
        fullsection_lg: "36rem",
        fullsection_md: "30rem",
        mediumsection: "28rem",
        mediumsection_lg: "24rem",
        mediumsection_md: "20rem",
        shortsection: "20rem",
        shortsection_lg: "18rem",
        shortsection_md: "16rem",
      },
      margin: {
        "8vh": "8vh",
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "8p": "8%",
        "16p": "16%",
        30: "7.5rem",
        38: "9.5rem",
        46: "11.5rem",
        71: "17.75rem",
        79: "19.75rem",
        87: "21.75rem",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        22: "repeat(22, minmax(0, 1fr))",
      },
      gridAutoRows: {
        fullsection: "46rem",
        fullsection_lg: "38rem",
        fullsection_md: "32rem",
        mediumsection: "28rem",
        mediumsection_lg: "24rem",
        mediumsection_md: "20rem",
        shortsection: "20rem",
        shortsection_lg: "18rem",
        shortsection_md: "16rem",
      },
    },
  },
};
