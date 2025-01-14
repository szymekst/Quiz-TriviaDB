"use client";
import { useState } from "react";

import QuizSettings from "./QuizSettings";
import QuizStart from "./QuizStart";
import QuizResults from "./QuizResults";

const QuizApp = () => {
    const [forceRender, setForceRender] = useState(0);

    const [isStarted, setIsStarted] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const [questionsData, setQuestionsData] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const runQuiz = async (questionsData) => {
        setQuestionsData(questionsData);

        setIsStarted(true);
    };

    const quitQuiz = () => {
        setCorrectAnswers(0);

        setIsCompleted(false);
        setIsStarted(false);
    };

    const replayQuiz = () => {
        setForceRender((prevForceRender) => (prevForceRender === 0 ? 1 : 0));
        setCorrectAnswers(0);
        setIsStarted(true);
        setIsCompleted(false);
    };

    const showResults = (answersData) => {
        let correct = 0;
        questionsData.forEach((questionData, key) => {
            if (questionData.correct_answer === answersData[key].answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);

        setIsCompleted(true);
    };

    return (
        <div>
            <div className="container p-3 flex flex-col gap-4">
                {!isStarted && <QuizSettings runQuiz={runQuiz} />}
                {isStarted && (
                    <QuizStart
                        key={forceRender}
                        questions={questionsData}
                        showResults={showResults}
                    />
                )}
                {isCompleted && (
                    <QuizResults
                        correctAnswers={correctAnswers}
                        questionsData={questionsData}
                        replayQuiz={replayQuiz}
                        quitQuiz={quitQuiz}
                    />
                )}
            </div>
        </div>
    );
};

export default QuizApp;
