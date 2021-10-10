module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
      height: {
        screen90: "90vh",
        screen80: "80vh",
        screen70: "70vh",
        screen60: "60vh",
      },
      colors: {
        primary: "#FF7F50",
        secondary: "#ff9a75",
      },
      backdropBlur: {
        xs: "2px",
      },
      dropShadow: {
        color: "0 1rem 2.5rem rgba(29, 78, 216, 0.3)",
        main: "0 1rem 2.5rem rgba(0, 0, 0, 0.3)",
      },
      scale: {
        165: "1.65",
        170: "1.70",
        175: "1.75",
        200: "2",
      },
      fontSize: {
        "12xl": "12rem",
        "15xl": "15rem",
        "20xl": "20rem",
      },
      inset: {
        "5/100": "5%",
        "7/100": "7%",
        "1/10": "10%",
        "12/100": "12%",
        "14/100": "14%",
        "1/6": "16.666667%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/6": "83.333333%",
        "85/100": "85%",
        "87/100": "87%",
        "11/12": "91.666667%",
      },
      spacing: {
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translate(-3rem, 1rem) scale(125%)" },
          "50%": { transform: "translate(-3rem, 0rem) scale(125%)" },
        },
        upDownRes: {
          "0%, 100%": { transform: "translate(0, 0.5rem)" },
          "50%": { transform: "translate(0, -0.5rem)" },
        },
        bgUp: {
          "0%, 100%": { transform: "translate(0, 0rem)" },
          "50%": { transform: "translate(0, 1rem)" },
        },
        up: {
          "0%": { transform: "translate(0, 2rem)", opacity: "0" },
          "100%": { transform: "translate(0, 0rem)", opacity: "1" },
        },
        down: {
          "0%": { transform: "translate(0, -2em)", opacity: "0" },
          "100%": { transform: "translate(0, 0rem)", opacity: "1" },
        },
        left: {
          "0%": { transform: "translate(2rem, 0)", opacity: "0" },
          "100%": { transform: "translate(0, 0rem)", opacity: "1" },
        },
        right: {
          "0%": { transform: "translate(-2em, 0)", opacity: "0" },
          "100%": { transform: "translate(0, 0rem)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(.7,.7)", opacity: "0" },
          "100%": { transform: "scale(1,1)", opacity: "1" },
        },
        out: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-110vw, 0)" },
        },
      },
      animation: {
        upDown: "upDown 5s ease-in-out infinite",
        upDownRes: "upDownRes 4s ease-in-out infinite",
        itemUp: "up 0.5s ease-in-out",
        itemDown: "down 0.5s ease-in-out",
        itemLeft: "left 0.5s ease-in-out",
        itemRight: "right 0.5s ease-in-out",
        scale: "scaleUp 0.5s ease-in-out",
        out: "out .3s ease-out",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      backdropBlur: ["hover", "focus"],
      opacity: ["dark"],
    },
  },
  plugins: [],
};
