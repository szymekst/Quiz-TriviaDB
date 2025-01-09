import "@/_assets/styles/globals.css";

export const metadata = {
    title: "Trivia Quiz App",
    description:
        "Test your knowledge with quizzes based on a database of questions from Trivia DB.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
