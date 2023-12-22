/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			xl: { max: '1279px' }, // => @media (max-width: 1279px) { ... }
			lg: { max: '900px' }, // => @media (max-width: 1023px) { ... }
			md: { max: '768px' }, // => @media (max-width: 767px) { ... }
			sm: { max: '640px' }, // => @media (max-width: 639px) { ... }
			xs: { max: '440px' }, // => @media (max-width: 480px) { ... }
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')[
						'[data-theme=light]'
					],
					primary: '#2D82BE',
					'primary-focus': '#3186C3',
					'primary-content': 'white',
				},
			},
		],
	},
}
