import { useState } from "react";

import RadioDefault from "./RadioDefault";

const QuizStart = ({ questions, quitQuiz }) => {
    const [questionNo, setQuestionNo] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    return (
        <>
            {questions[questionNo] && (
                <RadioDefault
                    questionData={questions[questionNo]}
                    onChange={(selectedAnswer) => {
                        setSelectedAnswer(selectedAnswer);
                        console.log(selectedAnswer);
                    }}
                />
            )}

            <button onClick={quitQuiz}>End quiz</button>
        </>
    );
};

export default QuizStart;
