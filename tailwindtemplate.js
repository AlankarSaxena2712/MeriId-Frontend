module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        meriBlue: "#1c658c",
        meriLightBlue: "#398ab9",
        meriWhite: "#d8d2cb",
        meriGrey: "#eeeeee", 
        meriInactiveGrey: "#b0b6c0"
      },
      margin: {
        "mb-100": "100px",
      },
      width: {
        "3/3": "31%",
        "2/2": "45%",
      }
    },
  },
  plugins: [require("daisyui")],
}
