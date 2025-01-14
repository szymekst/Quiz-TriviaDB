"use client";
import { useEffect, useState } from "react";

import RadioDefault from "./RadioDefault";

const QuizStart = ({ questions, showResults }) => {
    let [questionNo, setQuestionNo] = useState(0);

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const nextQuestion = () => {
        questionNo <= questions.length - 1 &&
            setQuestionNo((prevQuestionNo) => prevQuestionNo + 1);
    };

    useEffect(() => {
        if (questionNo === questions.length) {
            showResults(selectedAnswers);
        }
    }, [questionNo, questions.length, selectedAnswers, showResults]);

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
