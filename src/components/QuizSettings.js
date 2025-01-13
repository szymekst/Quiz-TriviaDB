"use client";
import { useState, useEffect } from "react";
import DropdownDefault from "./DropdownDefault";

import categories from "@/constants/categories";
import difficulties from "@/constants/difficulties";
import numberOfQuestions from "@/constants/numberOfQuestions";
import getSessionToken from "@/services/triviaApi";
import ButtonDefault from "./ButtonDefault";

const QuizSettings = () => {
    const [noQuestions, setNoQuestions] = useState(5);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [token, setToken] = useState("");

    const triviaAPI = `https://opentdb.com/api.php?amount=${noQuestions}&category=${category}&difficulty=${difficulty}&token=${token}`;

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getSessionToken();
            setToken(token);
        };

        fetchToken();
    }, []);

    return (
        <>
            <DropdownDefault
                heading="Select number of questions"
                dataToDisplay={numberOfQuestions}
                defaultValue={5}
                onChange={(selectedNumberOfQuestions) => {
                    setNoQuestions(selectedNumberOfQuestions.value);
                }}
            />
            <DropdownDefault
                heading="Select category"
                dataToDisplay={categories}
                onChange={(selectedCategory) => {
                    setCategory(selectedCategory.value);
                }}
            />
            <DropdownDefault
                heading="Select difficulty"
                dataToDisplay={difficulties}
                onChange={(selectedDifficulty) => {
                    setDifficulty(selectedDifficulty.value);
                }}
            />
            <ButtonDefault
                text="Start"
                passFunc={() => {
                    console.log(triviaAPI);
                }}
            />
        </>
    );
};

export default QuizSettings;
