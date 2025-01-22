/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'soft-red': 'hsl(7, 99%, 70%)',
					'custom-yellow': 'hsl(51, 100%, 49%)',
					'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
					'dark-blue': 'hsl(198, 62%, 26%)',
					'dark-moderate-cyan': 'hsl(168, 34%, 41%)'
				},
				neutral: {
					'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
					'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
					'dark-grayish-blue': 'hsl(232, 10%, 55%)',
					'grayish-blue': 'hsl(210, 4%, 67%)'
				}
			},
			fontFamily: {
				'headings': 'Fraunces',
				'body': 'Barlow'
			},
			backgroundImage: {
				'hero-desktop': 'url("/assets/desktop/image-header.jpg")',
				'hero-mobile': 'url("/assets/mobile/image-header.jpg")',
				'photography-desktop': 'url("/assets/desktop/image-photography.jpg")',
				'photography-mobile': 'url("/assets/mobile/image-photography.jpg")',
				'graphic-design-desktop': 'url("/assets/desktop/image-graphic-design.jpg")',
				'graphic-design-mobile': 'url("/assets/mobile/image-graphic-design.jpg")',
			}
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		darkTheme: 'light'
	}
}
