"use client";
import { useState, useEffect } from "react";
import DropdownDefault from "./DropdownDefault";
import ButtonDefault from "./ButtonDefault";

import fetchApi from "@/services/fetchApi";
import getSessionToken from "@/services/triviaApi";

import categories from "@/constants/categories";
import difficulties from "@/constants/difficulties";
import numberOfQuestions from "@/constants/numberOfQuestions";

import shuffle from "@/utils/shuffle";

const QuizSettings = ({ runQuiz }) => {
    const [noQuestions, setNoQuestions] = useState(5);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getSessionToken();
            setToken(token);
        };

        fetchToken();
    }, []);

    const triviaAPI = `https://opentdb.com/api.php?amount=${noQuestions}&category=${category}&difficulty=${difficulty}&token=${token}`;

    const fetchData = async () => {
        const data = await fetchApi(triviaAPI);

        data.results.map((res) => {
            res.allAnswers = shuffle([
                res.correct_answer,
                ...res.incorrect_answers,
            ]);
        });

        runQuiz(data.results);
    };

    return (
        <>
            <DropdownDefault
                heading="Select number of questions"
                dataToDisplay={numberOfQuestions}
                defaultValue={5}
                onChange={(noQuestions) => {
                    setNoQuestions(noQuestions.value);
                }}
            />
            <DropdownDefault
                heading="Select category"
                dataToDisplay={categories}
                onChange={(category) => {
                    setCategory(category.value);
                }}
            />
            <DropdownDefault
                heading="Select difficulty"
                dataToDisplay={difficulties}
                onChange={(difficulty) => {
                    setDifficulty(difficulty.value);
                }}
            />
            <ButtonDefault text="Start" passFunc={fetchData} />
        </>
    );
};

export default QuizSettings;
