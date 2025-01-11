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
                white: "#F4F3F6",
                black: "#060710",
                gray: {
                    100: "#EDE8E3",
                    200: "#757575",
                },
                green: {
                    100: "#31CD63",
                    200: "#45C486",
                },
                blue: "#191D63",
            },
        },
    },
    plugins: [],
};

export default config;
