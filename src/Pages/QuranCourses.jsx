import React from "react";
import { useNavigate } from "react-router-dom";
import course from "../assets/images/general/course.png";
// قائمة البيانات للأقسام والأزرار
const sections = [
    {
        title: "دروس القرآن",
        image: course,
        buttons: [
            {
                id: "tahfez",
                title: "دورات تحفيظ القرآن الكريم",
                description: "تعلم قواعد التجويد بطريقة سهلة ومنهجية.",
            },
            {
                id: "tafseer",
                title: "كورس تفسير القرآن الكريم",
                description: "فهم معاني آيات القرآن الكريم وتفسيرها.",
            },
            {
                id: "egaza",
                title: "كورس إجازة القرآن الكريم",
                description: "حفظ القرآن الكريم مع المتابعة اليومية.",
            },
            {
                id: "Reads",
                title: "كورس القراءات العشر",
                description: "الحصول على إجازة معتمدة في قراءة القرآن.",
            },
            {
                id: "quran-kids",
                title: "كورس القرآن الكريم للأطفال",
                description: "تعليم الأطفال القرآن بطريقة ممتعة.",
            },
            {
                id: "Tagweed",
                title: "كورس تجويد القرآن الكريم",
                description: "تعليم الأطفال القرآن بطريقة ممتعة.",
            },
            {
                id: "Tlawa",
                title: "كورس تلاوة القرآن الكريم",
                description: "تعليم الأطفال القرآن بطريقة ممتعة.",
            },
        ],
    },
    {
        title: "دروس اللغة العربية",
        image: course,
        buttons: [
            {
                id: "arabic-adults",
                title: "كورس اللغة العربية للكبار",
                description: "تعلم أساسيات اللغة العربية للأطفال بسهولة.",
            },
            {
                id: "arabic-kids",
                title: "كورس اللغة العربية للأطفال",
                description: "تعلم أساسيات اللغة العربية للأطفال بسهولة.",
            },
            {
                id: "nawranyarule",
                title: "كورس القاعدة النورانية",
                description: "تعلم قواعد النحو والصرف لتقوية لغتك.",
            },
            {
                id: "speakingarabic",
                title: "كورس المحادثة باللغة العربية",
                description: "تعلم أساسيات الصرف وأوزان الكلمات.",
            },
            {
                id: "readingquran",
                title: "كورس اللغة العربية لقراءة القران ",
                description: "تقوية مهارات اللغة العربية للكبار.",
            },
        ],
    },
    {
        title: "دروس إسلامية",
        image: course,
        buttons: [
            {
                id: "hadith",
                title: "كورس الحديث",
                description: "تعرف على سيرة النبي صلى الله عليه وسلم.",
            },
            {
                id: "fiqh",
                title: "كورس الفقه",
                description: "تعلم أحاديث نبوية صحيحة ومفيدة.",
            },
            {
                id: "aqeedah",
                title: "كورس العقيدة",
                description: "تعلم أصول العقيدة الإسلامية الصحيحة.",
            },
            {
                id: "modern-islamic",
                title: "كورس المسلمين الجدد",
                description: "مناقشة القضايا الإسلامية في العصر الحديث.",
            },
            {
                id: "shahada",
                title: "كورس تعليم الشهادة للمسليمن الجدد",
                description: "فهم الأحكام الشرعية بطريقة مبسطة.",
            },
        ],
    },
];

const QuranCourses = () => {
    const navigate = useNavigate();

    const handleButtonClick = (section, button) => {
        navigate(`/details/${button.id}`, {
            state: {
                image: section.image,
                description: button.description,
                title: button.title,
            },
        });
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-5">
                <h2 className="text-2xl font-bold text-[#006d77] text-center">دوراتنا عبر الأنترنت</h2>
                <hr className="border-t-1 border-orange-500 w-32 mt-3" />
            </div>
            <div className="min-h-screen py-8">
                <div className="container space-y-8">
                    {/* الأقسام */}
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="border shadow-md rounded-xl p-4 my-5"
                            style={{
                                backgroundColor: "var(--main-bgLight-color)",
                                borderColor: "var(--main-border-color)",
                            }}
                        >
                            <h2 className="mb-6 text-2xl font-bold text-[#006d77] text-right">
                                {section.title}
                            </h2>
                            <div className="flex justify-start gap-8"> {/* gap-8 بين الأزرار والصورة */}
                                {/* النصوص */}
                                <div className="w-[70%] pr-14">
                                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
                                        {/* زيّنت المسافة بين الأزرار */}
                                        {section.buttons.map((button) => (
                                            <button
                                                key={button.id}
                                                className="text-white px-4 py-3 rounded-lg w-80 border"
                                                style={{
                                                    backgroundColor: "var(--main-dark-color)",
                                                    borderColor: "var(--main-border-color)",
                                                }}
                                                onClick={() => handleButtonClick(section, button)}
                                            >
                                                {button.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* قسم الصورة */}
                                <div className="w-[30%]">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-52 h-54 rounded-lg border border-green-300"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    );
    
};

export default QuranCourses;



