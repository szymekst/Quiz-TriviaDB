"use client";
import { useState } from "react";
import QuizSettings from "./QuizSettings";

const QuizApp = () => {
    const [started, isStarted] = useState(false);

    return (
        <div>
            <div className="container p-3 flex flex-col gap-4">
                {!started && <QuizSettings />}
            </div>
        </div>
    );
};

export default QuizApp;
