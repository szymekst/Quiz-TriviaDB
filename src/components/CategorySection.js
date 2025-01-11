"use client";
import getSessionToken from "@/services/triviaApi";
import { useEffect, useState } from "react";

const CategorySection = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getSessionToken();
            setToken(token);
        };

        fetchToken();
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            {token ? <p>Token: {token}</p> : <p>Loading token...</p>}
        </div>
    );
};

export default CategorySection;
