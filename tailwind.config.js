module.exports = {
    purge: {
        enabled: true,
        content: [
            './pages/**/*.js',
            './components/**/*.js'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
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
