import React from 'react'

const Courses = () => {
    return (
        <>
            <div className="bg-gray-50 py-10 px-12 ">
                <div className="max-w-6xl flex flex-col md:flex-row items-center  gap-x-44">
                  

                    {/* Right Section: Text and Counters */}
                    <div className="flex flex-col gap-6 w-1/2">
                        {/* Text Content */}
                        <p className="text-lg leading-relaxed">
                            يقدم موقع (...) دورة حفظ عبر الإنترنت لجميع الأعمار الذين يرغبون في القيام بذلك. حفظ القرآن كليًا أو جزئيًا، يضمن مدرسو الحفظ المعتمدون لدينا
                            بتعليم كل طالب القرآن بشكل مستقل. خصصنا الشخصية الفردية، توقيت مرن، حسب الطلب المناهج الدراسية وأفضل طرق الحفظ التي تساعد الطالب على إكمال برنامج
                            الحفظ بسهولة.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-8">
                            <div className="text-center">
                                <p className="text-lg font-bold">0+</p>
                                <p>الدورات المنظمة</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold">0+</p>
                                <p>المدرسين</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold">0+</p>
                                <p>الطلاب الراضيين</p>
                            </div>
                        </div>
                    </div>
                      {/* Left Section: Image */}
                      <div className=" h-40 bg-gray-300 rounded-lg w-72"></div>
                </div>
            </div>
        </>
    )
}

export default Courses