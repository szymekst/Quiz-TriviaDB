"use client";
import { useState } from "react";
import QuizSettings from "./QuizSettings";
import QuizStart from "./QuizStart";

const QuizApp = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [questionsData, setQuestionsData] = useState(null);

    const runQuiz = (questionsData) => {
        setQuestionsData(questionsData);
        setIsStarted(true);
    };

    const quitQuiz = () => {
        setIsStarted(false);
    };

    return (
        <div>
            <div className="container p-3 flex flex-col gap-4">
                {!isStarted && <QuizSettings runQuiz={runQuiz} />}
                {isStarted && (
                    <QuizStart questions={questionsData} quitQuiz={quitQuiz} />
                )}
            </div>
        </div>
    );
};

export default QuizApp;
