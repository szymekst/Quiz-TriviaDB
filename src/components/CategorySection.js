"use client";
import { getCategories } from "@/services/triviaApi";
import { useEffect, useState } from "react";

const CategorySection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
        };

        fetchCategories();
    }, []);

    return (
        <div className="flex flex-col w-full items-center h-full">
            <h1 className="mb-20 text-3xl text-blue font-semibold max-w-[690px]">
                Select the category you are interested in...
            </h1>
            <select
                disabled={categories.length > 0 ? false : true}
                className="w-[510px] text-center"
            >
                {categories.length > 0 ? (
                    categories.map((cat, index) => (
                        <option key={index}>{cat.name}</option>
                    ))
                ) : (
                    <option>Loading...</option>
                )}
            </select>
        </div>
    );
};

export default CategorySection;
