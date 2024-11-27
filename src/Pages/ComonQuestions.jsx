import React, { useState } from "react";
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


const CommonQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "ما هي فوائد تعلم القرآن الكريم واللغة العربية والإسلامية عبر الإنترنت؟",
            answer:
                "يوفر التعلم عبر الإنترنت العديد من المزايا مقارنة بالتعلم التقليدي في الفصول الدراسية، بما في ذلك المرونة وسهولة الوصول، والتوفر على مدار الساعة. يمكن للطلاب التعلم بسهولة من منازلهم المريحة، ولديمهم الوصول إلى مجموعة واسعة من المعلمين المؤهلين من جميع أنحاء العالم.",
        },
        {
            question: "ما هي الأنواع المختلفة لبرامج تعلم القرآن واللغة العربية عبر الإنترنت؟",
            answer: "تفاصيل الإجابة هنا.",
        },
        {
            question:
                "كيف تختار برنامج تعلم القرآن واللغة العربية والإسلام المناسب لك عبر الإنترنت؟",
            answer: "تفاصيل الإجابة هنا.",
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="flex items-center justify-between max-w-4xl mx-auto p-4  ">
                {/* القسم الخاص بالأيقونة والعنوان */}
                <div className="flex flex-col items-center ">
                    {/* أيقونة علامة الاستفهام */}
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="text-[#CBEDD5] bg-[#0F8A73] rounded-full text-6xl transform scale-x-[-1]" 
                    />
                    {/* العنوان */}
                    <h2 className="text-lg font-bold mt-2">الأسئلة الشائعة</h2>
                    {/* خط تحت العنوان */}
                    <hr className="w-16 border-[#F0AD4E] mt-1" />
                </div>

                {/* النص الجانبي */}
                <div className="text-right text-[#0F8A73] font-bold text-2xl flex-1 mr-4 mb-[20px]">
                    <p>
                        فيما يلي بعض الأسئلة الشائعة حول القرآن الكريم والدراسات العربية والإسلامية عبر الإنترنت.
                    </p>
                </div>
            </div>
            {/* ///////// */}
            <div className="max-w-4xl mx-auto p-4 bg-gray-50">
                <h1 className="text-xl font-bold text-right mb-4 text-[#0F8A73] ">أسئلة عامة</h1>
                <div className="border border-[#0F8A73] rounded-2xl overflow-hidden ">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden "
                        >
                            <button
                                onClick={() => handleToggle(index)}
                                className="flex justify-between items-center w-full p-4 bg-[#CBEDD5]  text-right text-xl "
                            >
                                <span className="bg-[#CBEDD5]">{item.question}</span>
                                <span>
                                    {activeIndex === index ? (
                                        <FontAwesomeIcon icon={faCaretUp} /> 
                                    ) : (
                                        <FontAwesomeIcon icon={faCaretDown} /> 
                                    )}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-[#0F8A73] text-right text-[#FFFFFF] text-xl">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CommonQuestions;