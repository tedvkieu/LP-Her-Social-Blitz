module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nycd: ['var(--font-nycd)', 'cursive'],
                inter: ['var(--font-inter)', 'sans-serif'],
                'playfair-display': ['var(--font-playfair-display)', 'serif'],
                lavish: ['"Lavishly Yours"', 'cursive'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
