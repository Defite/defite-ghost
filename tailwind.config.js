module.exports = {
    content: ["./*.hbs", "./partials/*.hbs"],
    theme: {
        extend: {
            ringWidth: {
                3: "3px",
            },
            fontFamily: {
                serif: ["Merriweather", "serif"],
                sans: ["Raleway", "sans-serif"]
            },
            fontSize: {
                'intro': '5.5rem'
            },
            screens: {
                'xsm': { min: '425px'},
            },
        },
    },
    plugins: [],
};
