/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "selector",
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [],
};

export default config;
