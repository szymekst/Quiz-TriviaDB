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
        <div>
            <h1>Categories</h1>
            {categories.length > 0
                ? categories.map((cat, index) => <p key={index}>{cat.name}</p>)
                : "Loading..."}
        </div>
    );
};

export default CategorySection;
