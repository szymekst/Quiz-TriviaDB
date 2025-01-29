import { Button } from "@headlessui/react";

interface ButtonDefaultProps {
    text: string;
    className: string;
    disabled: boolean;
    passFunc: () => void;
}

const ButtonDefault = ({
    text = "",
    passFunc,
    className = "",
    disabled = false,
}: ButtonDefaultProps) => {
    return (
        <Button
            className={`inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white justify-center ${className}`}
            onClick={passFunc}
            disabled={disabled}
        >
            {text}
        </Button>
    );
};

export default ButtonDefault;
