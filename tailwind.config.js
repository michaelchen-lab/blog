const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./components/**/*.js', './pages/*.js', './pages/**/*.js', './pages/**/**/*.js', './utils/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        preflight: true,
    },
    plugins: [],
}
