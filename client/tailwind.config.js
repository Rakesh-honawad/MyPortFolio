/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <- This is very important
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // update if needed
    ],
    theme: {
        extend: {
            // ...
        },
    },
    plugins: [],
};