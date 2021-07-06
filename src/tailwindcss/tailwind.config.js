const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            serif: ['Arvo', 'serif'],
            mono: ['JetBrains Mono', 'monospace'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
        },
        container: {
            center: true,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
