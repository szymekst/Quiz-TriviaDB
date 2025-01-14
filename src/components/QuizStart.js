"use client";
import { useState } from "react";

import RadioDefault from "./RadioDefault";

const QuizStart = ({ questions, quitQuiz }) => {
    let [questionNo, setQuestionNo] = useState(0);

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const nextQuestion = () => {
        questionNo < questions.length
            ? setQuestionNo((prevQuestionNo) => prevQuestionNo + 1)
            : quitQuiz;
    };

    return (
        <>
            {questions[questionNo] && (
                <RadioDefault
                    questionData={questions[questionNo]}
                    onChange={(selectedAnswers) => {
                        setSelectedAnswers([selectedAnswers]);
                        console.log(selectedAnswers);
                    }}
                    nextQuestion={nextQuestion}
                    submitText={
                        questionNo < questions.length - 1
                            ? "Continue"
                            : "Go to Results"
                    }
                />
            )}

            <button onClick={quitQuiz}>End quiz</button>
        </>
    );
};

export default QuizStart;
