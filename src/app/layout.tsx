import "@/assets/styles/globals.css";

export const metadata = {
    title: "Trivia Quiz App",
    description:
        "Test your knowledge with quizzes based on a database of questions from Trivia DB.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-gray-100">{children}</body>
        </html>
    );
}
