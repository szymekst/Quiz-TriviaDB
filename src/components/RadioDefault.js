import { useState } from "react";

import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import ButtonDefault from "./ButtonDefault";

import decodeHTML from "@/utils/decodeHTML";

const RadioDefault = ({
    questionData = [],
    handleAnswer,
    nextQuestion = "",
    submitText = "",
}) => {
    const [selected, setSelected] = useState(null);
    return (
        <div className="w-full px-4">
            <div className="mx-auto w-full max-w-md">
                <p className="mb-2 font-bold">
                    {decodeHTML(questionData.question)}
                </p>
                <RadioGroup
                    value={selected}
                    onChange={setSelected}
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
                                        <div>{decodeHTML(answer)}</div>
                                    </div>
                                </div>
                                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
                <ButtonDefault
                    text={submitText}
                    className="w-full mt-5"
                    passFunc={() => {
                        handleAnswer(selected);
                        nextQuestion();
                        setSelected(null);
                    }}
                    disabled={!selected ? true : false}
                />
            </div>
        </div>
    );
};

export default RadioDefault;
