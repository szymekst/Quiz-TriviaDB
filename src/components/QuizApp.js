"use client";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

import categories from "@/constants/categories";
import difficulties from "@/constants/difficulties";

const QuizApp = () => {
    const [started, isStarted] = useState(false);
    const [category, setCategory] = useState(0);
    const [difficulty, setDifficulty] = useState("");

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const categories = await getCategories();
    //         setCategories(categories);
    //     };

    //     fetchCategories();
    // }, []);

    return (
        <div>
            <div className="container">
                {!started && (
                    <>
                        <DropdownMenu
                            heading="Select category"
                            dataToDisplay={categories}
                            onChange={(selectedCategory) => {
                                setCategory(selectedCategory.value);
                            }}
                        />
                        <DropdownMenu
                            heading="Select difficulty"
                            dataToDisplay={difficulties}
                            onChange={(selectedDifficulty) => {
                                setCategory(selectedDifficulty.value);
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizApp;
