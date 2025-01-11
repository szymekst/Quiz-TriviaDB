import React from "react";

const ButtonDefault = ({ text = "" }) => {
    return (
        <button className="py-5 px-16 bg-gray-200 rounded-lg uppercase font-semibold text-white hover:bg-green-100 transition-all">
            {text}
        </button>
    );
};

export default ButtonDefault;
