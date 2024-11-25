import React, { useState } from "react";
import SVG from "../assets/images/prices/SVG.png"
import image1 from "../assets/images/prices/image1.png"
import image2 from "../assets/images/prices/image2.png"
// import design1 from "../assets/images/general/design1.png"
import PayPal from "../assets/images/prices/PayPal.png"
import MasterCard from "../assets/images/prices/MasterCard.png"
import Plan from "../Components/Plan/Plan"

const PricingPage = () => {
    const [activeTab, setActiveTab] = useState("30 دقيقة");

    // بيانات البطاقات
    const plans = [
        { id: 1, days: "1 يوم / أسبوع", price: "100$", oldPrice: "120$", details: "4 دروس / شهر " },
        { id: 2, days: "2 يوم / أسبوع", price: "85$", oldPrice: "100$", details: "4 دروس / شهر " },
        { id: 3, days: "3 يوم / أسبوع", price: "70$", oldPrice: "80$", details: "4 دروس / شهر " },
        { id: 4, days: "4 يوم / أسبوع", price: "50$", oldPrice: "60$", details: "4 دروس / شهر " },
        { id: 5, days: "5 يوم / أسبوع", price: "35$", oldPrice: "40$", details: "4 دروس / شهر " },
        { id: 6, days: "6 يوم / أسبوع", price: "20$", oldPrice: "40$", details: "4 دروس / شهر " },
    ];
    return (
        <>
            <div className="flex items-between justify-start p-11 rounded-md my-4"
                style={{
                    backgroundColor: 'var(--secound-bg-color )',
                }}
            >
                {/* القسم الأيمن */}
                <div className="flex flex-col items-center pr-11">
                    <img
                        src={SVG}
                        alt="التسعير"
                        className="w-24 h-24 mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2"
                        style={{
                            color: 'var(--main-dark-color)',
                        }}
                    >التسعير</h3>
                    <hr className="w-12 border-t-2 border-orange-400" />
                </div>

                {/* القسم الأيسر */}
                <div className="text-right space-y-4 pr-28">
                    <div className="flex items-start">
                        <span className="text-black text-xl font-bold">•</span>
                        <p className="ml-3 text-gray-800">
                            يتم فرض الرسوم الشهرية على أساس شهري بالدولار الأمريكي.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl font-bold">•</span>
                        <p className="ml-3 text-gray-800">
                            الرسوم المفروضة مقدما مع ضمان استرداد الأموال بالكامل.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl font-bold">•</span>
                        <p className="ml-3 text-gray-800">
                            إذا كنت تريد خطة مخصصة، فسنقوم بترتيبها إن شاء الله.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl font-bold">•</span>
                        <p className="ml-3 text-gray-800">
                            المدفوعات عن طريق الحساب المصرفي، أو PayPal أو بطاقة الخصم أو
                            الائتمان.
                        </p>
                    </div>
                </div>
            </div>
            {/* ////////////////////////////// */}
            <Plan/>
            {/* //////////////////////// */}
            <div
                className="text-center py-16 "
                style={{
                    backgroundColor: "var( --body-bg-color)",
                }}
            >
                <h2
                    className="text-2xl font-bold mb-4"
                    style={{
                        color: "var(--main-dark-color)",
                    }}
                >
                    تحويل العملات
                </h2>
                <hr className="w-16 mx-auto border-t-2 border-orange-400 mb-6" />
                <p className="text-gray-700 mb-8">
                    إذا كنت لا تدفع بالدولار الأمريكي، فيمكنك استخدام محول العملات التالي
                    لحساب قيمة التسعير مقابل عملتك.
                </p>
                <div className="flex justify-center items-center space-x-8 gap-36">
                    <img
                        src={image1}
                        alt="محول العملات"
                        className="w-72 h-64 rounded-md "
                    />
                    <img
                        src={image2}
                        alt="وسائل الدفع"
                        className="w-48 h-72 rounded-md "
                    />
                </div>
            </div>
            <div className="p-8 ">
                {/* عنوان الصفحة */}
                <h2 className="text-center text-2xl font-bold mb-4 text-green-800">فئات خطط التسعير</h2>
                <hr className="w-16 mx-auto border-t-2 border-orange-400 mb-8" />

                {/* الألسنة (Tabs) */}
                <div className="flex justify-center mb-8 border "
                    style={{
                        borderColor: 'var(--main-dark-color)',
                    }}
                >
                    {["30 دقيقة", "45 دقيقة", "60 دقيقة", "الجروب"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                backgroundColor: activeTab === tab ? 'var(--secound-bg-color )' : "var( --main-dark-color)",
                                color: activeTab === tab ? "var(--main-dark-color)" : "white",
                            }}
                            className="px-20 py-2 text-white font-semibold w-1/4"
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* البطاقات */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 py-16 border rounded-2xl  "
                    style={{
                        backgroundColor: 'var(--secound-bg-color )',

                    }}

                >
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="relative bg-white shadow-lg  text-center border rounded-md  "
                            style={{
                                borderColor: 'var(--main-bg-color )',

                            }}

                        >
                            {/* الرقم داخل الدائرة */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-14 rounded-full flex items-center justify-center text-white font-bold border-4 "
                                style={{
                                    color: 'var(--secound-bg-color )',
                                    backgroundColor: 'var( --main-dark-color)',
                                    borderColor: 'var(--main-border-color )',
                                }}
                            >

                                {plan.id}
                            </div>

                            {/* تفاصيل الخطة */}
                            <p className="text-green-800 font-bold text-lg pt-11 pb-2 rounded-t-lg "
                                style={{
                                    backgroundColor: 'var( --main-dark-color)',
                                    color: 'var(  --main-bgLight-color)',
                                }}
                            >{plan.days}</p>
                            <div className="my-3 text-4xl font-bold"
                                style={{
                                    color: "var( --main-dark-color)",
                                }}
                            >
                                {plan.price}{" "}
                                <span className="text-gray-500 line-through text-sm">{plan.oldPrice}</span>
                                <p className="text-gray-600 text-sm mt-1">شهريا</p>
                            </div>
                            <p className="text-gray-600 text-xs m-2">{plan.details}</p>
                            <div className="border-t border-dashed border-gray-500 w-1/2 mx-auto"></div>
                            <p className="text-gray-600 text-xs m-2">{plan.details}</p>


                            {/* الأزرار */}
                            <div className="flex flex-col mt-4">
                                <button className=" w-full py-4"
                                    style={{
                                        backgroundColor: 'var( --main-dark-color)',
                                        color: 'var(  --main-bgLight-color)',
                                    }}
                                >اشتراك</button>
                                <button className=" px-4 py-4 text-white rounded-b-lg bg-[#3AA28ED1]"
                                >
                                    درس تجريبي
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* ////////////////// */}

                <div className="flex justify-start items-center space-x-4 pt-2">
                    {/* الصورة الأولى */}
                    <img
                        src={PayPal}
                        alt="Image 1"
                        className=" h-auto"
                    />

                    {/* الصورة الثانية */}
                    <img
                        src={MasterCard}
                        alt="Image 2"
                        className=" h-auto"
                    />
                </div>


            </div>
        </>
    );
};

export default PricingPage;