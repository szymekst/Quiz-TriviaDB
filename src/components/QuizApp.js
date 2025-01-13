"use client";
import { getCategories } from "@/services/triviaApi";
import { useEffect, useState } from "react";

import categories from "@/constants/categories";
import DropdownMenu from "./DropdownMenu";

const QuizApp = () => {
    // const [categories, setCategories] = useState([]);

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
                />
            </div>
        </div>
    );
};

export default QuizApp;
