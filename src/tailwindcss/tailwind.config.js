const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './_draft/*.md',
        './*.html',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Nunito', '"Noto Sans Bengali"', '"Siyam Rupali"', 'Kalpurush', 'SolaimanLipi', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
            serif: ['Arvo', '"Noto Sans Bengali"', '"Siyam Rupali"', 'Kalpurush', 'SolaimanLipi', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
            mono: ['"JetBrains Mono"', '"Noto Sans Bengali"', '"Siyam Rupali"', 'Kalpurush', 'SolaimanLipi', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            red: colors.rose,
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
