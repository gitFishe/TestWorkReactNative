/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./App.tsx",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}"
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				pink:'#eb0057',
				gray: '#262727',
				lightGray: '#818181',
			}

		},
	},
	plugins: ['nativewind/babel'],
}