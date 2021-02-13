const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.js", "./components/**/*.js"],
	darkMode: "media", // or 'media' or 'class',
	colors: {
		gray: colors.gray,
	},
	theme: {
		extend: {
			colors: {
				primary: "#7b795d",
				secondary: "#eca679",
				colDark: "#44453f",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},
			backgroundImage: {
				hero: "url('/img/dormitorio-1280.jpg')",
				servicios: "url('/img/living-room-1280.jpg')",
				about: "url('/img/escritorio-1280.jpg')",
			},
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
			borderWidth: ["hover", "focus"],
			gridTemplateColumns: ["hover", "focus"],
			transitionProperty: ["hover", "focus"],
		},
	},
	plugins: [],
};
