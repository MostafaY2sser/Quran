import React, { useState } from "react";
import PayPal from "../assets/images/general/PayPal.png";

const SubscriptionForm = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId === selectedCheckbox ? null : checkboxId);
  };

  const countryCodes = [
    { country: "مصر", code: "+20" },
    { country: "السعودية", code: "+966" },
    { country: "الإمارات", code: "+971" },
    { country: "الأردن", code: "+962" },
    { country: "الكويت", code: "+965" },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-center text-xl lg:text-3xl font-semibold text-[#157A67] mb-2 md:mb-6">
        للإشتراك عن طريق بطاقة الخصم أو الائتمان, يرجى ملء النموذج أدناه
      </h1>
      <hr className="w-[100px] md:w-[350px] border-t-2 border-orange-400 mb-4" />
      <form className="w-full max-w-2xl lg:max-w-[700px] p-4 lg:p-6 rounded-lg shadow-md  bg-[#CBEDD5]">
        <h1 className="text-center text-lg lg:text-xl font-bold">
          الإشتراك في الخطة الشهرية
        </h1>
        <h4 className="text-right text-sm lg:text-base font-bold text-[#157A67] mt-6 lg:mt-11 mb-4">
          اختار دورتك التعليمية
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            الدورة:
          </label>
          <select
            name="courseType"
            className="block w-full px-4 py-2 border-2 mb-4 focus:outline-none border-[#0F8A73]"
          >
            <option value="default">اختر الحزمة</option>
            <option value="basic">الحزمة الأساسية</option>
            <option value="premium">الحزمة المميزة</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-[#157A67] font-semibold">
            اختر خطتك
          </label>
          <div className="space-y-4">
            {["30min", "60min", "90min", "group"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-reverse space-x-2"
              >
                <input
                  type="checkbox"
                  name={option}
                  className="form-checkbox text-green-600"
                  onChange={() => handleCheckboxChange(option)}
                  checked={selectedCheckbox === option}
                />
                <span>
                  {option === "30min"
                    ? "درس 30 دقيقة"
                    : option === "60min"
                      ? "درس 60 دقيقة"
                      : option === "90min"
                        ? "درس 90 دقيقة"
                        : "الجروب"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {selectedCheckbox && (
          <div className="my-6">
            <h2 className="text-[#157A67] font-semibold mb-4">
              خطط ال
              {selectedCheckbox === "30min" && "درس 30 دقيقة"}
              {selectedCheckbox === "60min" && "درس 60 دقيقة"}
              {selectedCheckbox === "90min" && "درس 90 دقيقة"}
              {selectedCheckbox === "group" && "جروب"}
            </h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-reverse space-x-2">
                <input
                  type="radio"
                  name={`${selectedCheckbox}-option`}
                  className="form-radio text-green-600"
                />
                <span>الخيار الأول</span>
              </label>
              <label className="flex items-center space-x-reverse space-x-2">
                <input
                  type="radio"
                  name={`${selectedCheckbox}-option`}
                  className="form-radio text-green-600"
                />
                <span>الخيار الثاني</span>
              </label>
            </div>
          </div>
        )}

        <div className="mt-2">
          <label className="block mb-1 text-gray-700 text-sm font-bold">
            الاسم الأول
          </label>
          <input
            name="frist-name"
            type="text"
            className="w-full px-4 py-2 border-2 border-[#0F8A73]"
          />
        </div>

        <div className="mt-2">
          <label className="block mb-1 text-gray-700 text-sm font-bold">
            البريد الإلكتروني
          </label>
          <input
            name="gmail"
            type="email"
            className="w-full px-4 py-2 border-2 border-[#0F8A73]"
          />
        </div>

        <label className="block text-sm font-medium text-gray-800 mt-2">
          رقم الواتساب:
        </label>
        <div className="flex items-center mt-2 gap-x-2">
          {/* حقل رقم الواتساب */}
          <input
            type="text"
            name="whatsappNumber"
            placeholder="أدخل رقم الواتساب"
            className=" px-4 py-1 focus:outline-none w-[90%] border-2  border-[#0F8A73]"
          />
          <select
            name="countryCode"
            className="block py-[7px] focus:outline-none border-2 border-[#0F8A73]"
          >
            <option value="">اختر كود الدولة</option>
            {countryCodes.map((country, index) => (
              <option key={index} value={country.code}>
                {country.country} ({country.code})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mt-2">
            البلد:
          </label>
          <select
            name="country"
            className="block w-full px-4 py-2 border-2 focus:outline-none border-[#0F8A73]"
          >
            <option value="">اختر الحزمة</option>
            <option value="basic">الحزمة الأساسية</option>
            <option value="premium">الحزمة المميزة</option>
          </select>
        </div>

        <h2 className="text-lg lg:text-xl font-bold text-gray-800 my-4">
          طريقة الدفع:
        </h2>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="credit"
              className="form-radio text-[#0F8A73] focus:outline-none ml-2"
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <span className="ml-2 text-gray-700">
              بطاقة الائتمان / بطاقة الخصم
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="paypal"
              className="form-radio text-[#0F8A73] focus:outline-none ml-2"
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <span className="ml-2 text-gray-700">الدفع عبر PayPal</span>
          </label>
        </div>

        {selectedPayment === "credit" && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                رقم البطاقة:
              </label>
              <input
                type="text"
                name="cardNumber"
                className="w-full px-3 py-2 focus:outline-none border-2 border-[#0F8A73]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                الاسم على البطاقة:
              </label>
              <input
                type="text"
                name="cardName"
                className="w-full px-3 py-2 focus:outline-none border-2 border-[#0F8A73]"
              />
            </div>
          </div>
        )}
        {selectedPayment === "paypal" && (
          <div className="mt-4">
            <img
              src={PayPal}
              alt="PayPal Logo"
              className="w-20 h-8 cursor-pointer"
            />
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-lg font-bold text-[#157A67]">تمكين الدفع الشهري المتكرر</h3>
          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              name="recurringPayment"
              value="yes"
              className="form-checkbox ml-2"
              checked={isRecurring}
              onChange={() => setIsRecurring(!isRecurring)}
            />
            <span className="ml-2 text-gray-700">نعم</span>
          </label>
          <p className=" text-sm mt-4 leading-relaxed">
          سيتم دفع الاشتراك الشهري المتكرر مقدما ويتم تجديده تلقائيا في نفس اليوم من كل شهر. في حالة الإلغاء أو الإيقاف أو تغيير الخطة ، نقوم بإلغاء الخطة أو إيقافها مؤقتا أو تغييرها وفقا لذلك مع ضمان استرداد الأموال بالكامل لأي فئات مستحقة.
          </p>
        </div>

        <div className="mt-6 text-right flex flex-col ">
          <span className="text-[#157A67]">المجموع</span>
          <span className="text-sm">$0.00</span>
        </div>


        <div className="flex justify-center gap-[15px] md:gap-[55px] sm:mt-10 md:mt-12">
          <button
            type="button"
            className="bg-[#0F8A73] text-white py-2 px-3 md:py-3 md:px-8 border-2 rounded-xl border-[#F0AD4E]"
          >
            إجراء الدفع
          </button>
          <button
            type="button"
            className="bg-[#0F8A73] text-white py-2 px-3 md:py-3 md:px-8  border-2 rounded-xl border-[#F0AD4E]"
          >
            اضف الى السلة
          </button>
        </div>

      </form>
    </div>
  );
};

export default SubscriptionForm;


