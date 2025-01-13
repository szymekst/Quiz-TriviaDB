"use client";
import { getCategories } from "@/services/triviaApi";
import { useEffect, useState } from "react";

import categories from "@/constants/categories";
import DropdownMenu from "./DropdownMenu";

const QuizApp = () => {
    const [category, setCategory] = useState(0);

    const link = category;
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
                <DropdownMenu
                    heading="Select category"
                    dataToDisplay={categories}
                    onChange={(selectedCategory) => {
                        setCategory(selectedCategory.id);
                    }}
                />
            </div>
        </div>
    );
};

export default QuizApp;
