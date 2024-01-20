/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-black": "#000000CC",
				"apple-blue": "#0066CC",
				white: "#FFFFFF",
				dark: "#1D1D1F",
			},
		},
	},
	plugins: [],
};
