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
        <div className="container flex flex-col items-center h-full">
            <h1 className="mb-20 text-3xl text-blue font-semibold max-w-[690px]">
                Select the category you are interested in...
            </h1>
            <div className="flex flex-wrap gap-3">
                {categories.length > 0
                    ? categories.map((cat, index) => (
                          <label
                              key={index}
                              className="bg-white flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-green-100 transition-all labels has-[:checked]:bg-green-100"
                          >
                              <p>{cat.name}</p>
                              <input
                                  type="radio"
                                  name="categories"
                                  defaultChecked={index === 0 ? true : false}
                                  className="hidden"
                              />
                          </label>
                      ))
                    : ""}
            </div>
        </div>
    );
};

export default CategorySection;
