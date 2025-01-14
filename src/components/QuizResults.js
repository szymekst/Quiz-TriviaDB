import React from "react";
import ButtonDefault from "./ButtonDefault";

const QuizResults = ({
    correctAnswers,
    questionsData,
    replayQuiz,
    quitQuiz,
}) => {
    return (
        <>
            <p className="text-center">
                You gave {correctAnswers} correct answers out of a possible{" "}
                {questionsData.length} questions!
            </p>
            <p className="text-center">Congratulations</p>
            <div className="flex gap-2">
                <ButtonDefault
                    text="Replay Quiz!"
                    className="flex-1"
                    passFunc={replayQuiz}
                />
                <ButtonDefault
                    text="Start new Quiz!"
                    className="flex-1"
                    passFunc={quitQuiz}
                />
            </div>
        </>
    );
};

export default QuizResults;
