import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const plans = [
    { name: "Startup", ram: "12GB", cpus: "6 CPUs", disk: "256GB SSD disk" },
    { name: "Business", ram: "16GB", cpus: "8 CPUs", disk: "512GB SSD disk" },
    { name: "Enterprise", ram: "32GB", cpus: "12 CPUs", disk: "1TB SSD disk" },
];

const RadioDefault = ({ questionData = [], onChange }) => {
    const [selected, setSelected] = useState(questionData.allAnswers[0]);
    return (
        <div className="w-full px-4">
            <div className="mx-auto w-full max-w-md">
                <p className="mb-2 font-bold">{questionData.question}</p>
                <RadioGroup
                    value={selected}
                    onChange={(e) => {
                        setSelected(e);
                        onChange(e);
                    }}
                    className="space-y-2"
                >
                    {questionData.allAnswers.map((answer, id) => (
                        <Radio
                            key={id}
                            value={answer}
                            className="group relative flex cursor-pointer rounded-lg bg-gray-600 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-900"
                        >
                            <div className="flex w-full items-center justify-between">
                                <div className="text-sm/6">
                                    <div className="flex gap-2 text-white/50">
                                        <div>{answer}</div>
                                    </div>
                                </div>
                                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
};

export default RadioDefault;
