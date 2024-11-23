import React from "react";
import course from "../assets/images/general/course.png";

export default function QuranCourses() {
    const courses = [
        "دورات تحفيظ القرآن الكريم",
        "كورس تفسير القرآن الكريم",
        "كورس إجازة القرآن الكريم",
        "كورس القراءات العشر",
        "كورس القرآن الكريم للأطفال",
        "كورس تجويد القرآن الكريم",
        "كورس تلاوة القرآن الكريم",
    ];

    return (
        <>
        <div className="flex flex-col justify-center items-center m-5">
         <h2 className="text-2xl font-bold text-[#006d77] text-center">دوراتنا عبر الأنترنت</h2>
         <hr className="border-t-1 border-orange-500 w-32 mt-3 " />
         </div>
         

        <div className="border rounded-xl p-8 my-5"
            style={{
                backgroundColor: 'var(--main-bgLight-color)',
                borderColor: 'var(--main-border-color)',
            }}
        >
            <h2 className="mb-6 text-2xl font-bold text-[#006d77] text-right">دروس القرآن</h2>
            <div className="flex justify-start ">
                <div className=" w-[65%] pr-14">
                    {/* Buttons Section */}
                    <div className=" grid sm:grid-cols-2 gap-y-7" >
                        {courses.map((course, index) => (
                            <button
                                key={index}
                                className=" w-72 border rounded-xl py-3 text-center text-white text-lg "
                                style={{
                                    backgroundColor: 'var(--main-dark-color)',
                                    borderColor: 'var(--main-border-color)',

                                }}
                            >
                                {course}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Image Section */}
                <div className="w-[35%]" >
                    <img
                        src={course}
                        alt="Quran Study"
                        className="rounded-lg object-cover w-[320px] h-[280px]"
                    />
                </div>
            </div>
        </div>
        </>
    );
}


