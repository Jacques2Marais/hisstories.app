/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'hs-blue': {
					'95': '#1e1d2f',
					'90': '#2B2A4C',
					'75': '#403f64',
					'60': '#545379',
					'45': '#6b6991',
					'30': '#8280ab',
				},
				'hs-red': {
					'90': '#89221a',
					'80': '#9f271e',
					'70': '#a82d1f',
					'60': '#b53e2c',
					'50': '#c1543e',
					'40': '#c8745f',
					'30': '#db9985',
					'20': '#e1aa99',
				},
				'hs-cream': {
					'10': '#fbf9f9',
					'20': '#f4edeb',
					'70': '#615756',
					'90': '#3f3231'
				},
				'white': '#ffffff',
			},
		},
		fontFamily: {
			sans: 'Roboto, sans-serif',
			serif: '"Lora Variable", serif'
		},
	},
	plugins: [],
}
