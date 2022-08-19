/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				meriBlue: "#1c658c",
				meriLightBlue: "#398ab9",
				meriCreme: "#feefec",
				meriGrey: "#eeeeee", 
				meriInactiveGrey: "#b0b6c0",
				meriPurple: "#dc9cfd",
				meriGreen: "#9de47c",
				meriRed: "#dc6a4d",
			},
			margin: {
				"mb-100": "100px",
			},
			width: {
				"3/3": "31%",
				"2/2": "45%",
			},
		},
	},
	plugins: [require("daisyui")],
};
