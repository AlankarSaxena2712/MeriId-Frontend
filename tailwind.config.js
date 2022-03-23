module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        meriBlue: "#1c658c",
        meriLightBlue: "#398ab9",
        meriCreme: "#d8d2cb",
        meriGrey: "#eeeeee",
        meriInactiveGrey: "#b0b6c0"
      },
    },
  },
  plugins: [require("daisyui")],
}
