"use client";
import { useEffect, useState } from "react";

import RadioDefault from "./RadioDefault";

const QuizStart = ({ questions, quitQuiz, showResults }) => {
    let [questionNo, setQuestionNo] = useState(0);

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const nextQuestion = () => {
        questionNo <= questions.length - 1 &&
            setQuestionNo((prevQuestionNo) => prevQuestionNo + 1);
    };

    useEffect(() => {
        questionNo === questions.length && showResults(selectedAnswers);
    });

    return (
        <>
            {questions[questionNo] && (
                <RadioDefault
                    questionData={questions[questionNo]}
                    nextQuestion={nextQuestion}
                    submitText={
                        questionNo < questions.length - 1
                            ? "Continue"
                            : "Go to Results"
                    }
                    handleAnswer={(selectedAnswer) => {
                        setSelectedAnswers((prevSelectedAnswer) => [
                            ...prevSelectedAnswer,
                            { id: questionNo, answer: selectedAnswer },
                        ]);
                    }}
                />
            )}
        </>
    );
};

export default QuizStart;
