"use client";
import { useState } from "react";
import QuizSettings from "./QuizSettings";
import QuizStart from "./QuizStart";

const QuizApp = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [questionsData, setQuestionsData] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const runQuiz = (questionsData) => {
        setQuestionsData(questionsData);
        setIsStarted(true);
    };

    const quitQuiz = () => {
        setIsStarted(false);
    };

    const showResults = (answersData) => {
        questionsData.forEach((questionData, key) => {
            questionData.correct_answer === answersData[key].answer &&
                setCorrectAnswers(
                    (prevCorrectAnswers) => prevCorrectAnswers + 1
                );
        });

        setIsCompleted(true);
    };

    return (
        <div>
            <div className="container p-3 flex flex-col gap-4">
                {!isStarted && <QuizSettings runQuiz={runQuiz} />}
                {isStarted && (
                    <QuizStart
                        questions={questionsData}
                        showResults={showResults}
                    />
                )}
                {isCompleted && (
                    <>
                        <p className="text-center">
                            Udzieliłeś {correctAnswers} poprawnych odpowiedzi na{" "}
                            {questionsData.length}{" "}
                            {questionsData.length === 1
                                ? "możliwą odpowiedź."
                                : questionsData.length <= 4
                                ? "możliwe odpowiedzi."
                                : "możliwych odpowiedzi."}
                        </p>
                        <p className="text-center">Gratulacje!</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizApp;
