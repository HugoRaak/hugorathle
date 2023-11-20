const config = require('./src/config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                dark: config.colors.darkBg,
                light: config.colors.lightBg,
                orange: config.colors.orange,
            },
            fontFamily: {
                sans: ['Josefin Sans', 'sans-serif'],
            },
            screens: {
                'tablet-lg': '590px',
                tablet: '500px',
                'tablet-xs': '430px',
                mobile: '350px',
                xs: '300px',
                '2xs': '200px',
            },
        },
    },
    plugins: [],
};
