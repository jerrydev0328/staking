/** @format */

module.exports = {
	purge: [
		"./public/index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"8xl": "6rem",
			"9xl": "7rem",
			"10xl": "10rem",
		},
		extend: {
			colors: {
				custom: {
					light: {
						primaryBackground: "#1F2C4A",
						secondaryBackground: "#CFD1D6",
						primaryText: "#FFFFFF",
						secondaryText: "#CFD1D6",
						thirdText: "#0BE2F0",
						primaryBlue: "#1D51FE",
						outline: "#00000020",
					},
					dark: {
						// primaryBackground: '#050d1f',
						primaryBackground: "#0B0B0C",
						// secondaryBackground: '#17133E',
						secondaryBackground: "#09090A",
						primaryText: "#6D6D6D",
						primaryRed: "#BD2A26",
						secondaryRed: "#BD2A2620",
						primaryBlue: "#BD2A26",
						secondaryBlue: "#BD2A2620",
						outline: "#ffffff20",
					},
				},
			},
		},
	},
	variants: {},
};
