import "./globals.css";

export const metadata = {
    title: "Trivia Quiz App",
    description: "Test your knowledge",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
