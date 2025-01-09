/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "selector",
    content: [
        "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
            },
        },
    },
    plugins: [],
};

export default config;
