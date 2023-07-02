const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {},
    },
    darkMode: false, // or 'media' or 'class',
    variants: {
        extend: {},
    },
    plugins: [],
}