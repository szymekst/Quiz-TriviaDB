import { Button } from "@headlessui/react";

const ButtonDefault = ({ text = "", passFunc, className = "" }) => {
    return (
        <Button
            className={`inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white justify-center ${className}`}
            onClick={passFunc}
        >
            {text}
        </Button>
    );
};

export default ButtonDefault;
