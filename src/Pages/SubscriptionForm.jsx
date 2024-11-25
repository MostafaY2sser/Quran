// import React, { useState } from "react";

// const SubscriptionForm = () => {
//   const [selectedCheckbox, setSelectedCheckbox] = useState("");

//   const handleCheckboxChange = (value) => {
//     setSelectedCheckbox(value === selectedCheckbox ? "" : value);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center">
//       <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-8">
//         <h1 className="text-center text-lg font-semibold text-green-700 mb-6">
//           للاشتراك عن طريق بطاقة التعليم أو الاعتماد، يرجى ملء النموذج أدناه
//         </h1>

//         <form className="space-y-6">
//           {/* اختيار الحزمة */}
//           <div>
//             <label className="block text-sm font-medium text-gray-800 mb-2">
//               اختر حزمة الاشتراك
//             </label>
//             <select
//               className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//             >
//               <option value="">اختر الحزمة</option>
//               <option value="basic">الحزمة الأساسية</option>
//               <option value="premium">الحزمة المميزة</option>
//             </select>
//           </div>

//           {/* تحديد البطاقة */}
//           <div>
//             <label className="block text-sm font-medium text-gray-800 mb-2">
//               حدد نوع البطاقة
//             </label>
//             <div className="space-y-4">
//               {/* Checkbox 1 */}
//               <div>
//                 <label className="flex items-center text-gray-800">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                     checked={selectedCheckbox === "educationCard"}
//                     onChange={() => handleCheckboxChange("educationCard")}
//                   />
//                   <span className="ml-2">بطاقة التعليم</span>
//                 </label>

//                 {/* خيارات radio عند اختيار "بطاقة التعليم" */}
//                 {selectedCheckbox === "educationCard" && (
//                   <div className="pl-6 mt-2 space-y-2">
//                     <label className="flex items-center text-gray-600">
//                       <input
//                         type="radio"
//                         name="educationCardOptions"
//                         className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                       />
//                       <span className="ml-2">خيار 1</span>
//                     </label>
//                     <label className="flex items-center text-gray-600">
//                       <input
//                         type="radio"
//                         name="educationCardOptions"
//                         className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                       />
//                       <span className="ml-2">خيار 2</span>
//                     </label>
//                   </div>
//                 )}
//               </div>

//               {/* Checkbox 2 */}
//               <div>
//                 <label className="flex items-center text-gray-800">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                     checked={selectedCheckbox === "creditCard"}
//                     onChange={() => handleCheckboxChange("creditCard")}
//                   />
//                   <span className="ml-2">بطاقة الاعتماد</span>
//                 </label>

//                 {/* خيارات radio عند اختيار "بطاقة الاعتماد" */}
//                 {selectedCheckbox === "creditCard" && (
//                   <div className="pl-6 mt-2 space-y-2">
//                     <label className="flex items-center text-gray-600">
//                       <input
//                         type="radio"
//                         name="creditCardOptions"
//                         className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                       />
//                       <span className="ml-2">خيار 1</span>
//                     </label>
//                     <label className="flex items-center text-gray-600">
//                       <input
//                         type="radio"
//                         name="creditCardOptions"
//                         className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                       />
//                       <span className="ml-2">خيار 2</span>
//                     </label>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* الحقول النصية */}
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="الاسم"
//               className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//             />
//             <input
//               type="text"
//               placeholder="البريد الإلكتروني"
//               className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//             />
//             <input
//               type="text"
//               placeholder="الهاتف"
//               className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//             />
//           </div>

//           {/* زر الدفع */}
//           <div className="flex space-x-4 space-x-reverse">
//             <button
//               type="button"
//               className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600"
//             >
//               إدفع الآن
//             </button>
//             <button
//               type="button"
//               className="w-1/2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gray-300"
//             >
//               العودة إلى السنة
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionForm;


import React, { useState } from "react";

const SubscriptionForm = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId === selectedCheckbox ? null : checkboxId);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100 p-4">
      <form className="bg-green-50 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-6">
        <h1 className="text-center text-lg font-bold text-green-900">
          الإشتراك في الخطة الشهرية
        </h1>

        {/* اختيار الخطة */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            اختر خطتك:
          </label>

          {/* Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-center space-x-reverse space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-green-600"
                onChange={() => handleCheckboxChange("30min")}
                checked={selectedCheckbox === "30min"}
              />
              <span>درس 30 دقيقة</span>
            </label>
            <label className="flex items-center space-x-reverse space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-green-600"
                onChange={() => handleCheckboxChange("60min")}
                checked={selectedCheckbox === "60min"}
              />
              <span>درس 60 دقيقة</span>
            </label>
            <label className="flex items-center space-x-reverse space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-green-600"
                onChange={() => handleCheckboxChange("90min")}
                checked={selectedCheckbox === "90min"}
              />
              <span>درس 90 دقيقة</span>
            </label>
            <label className="flex items-center space-x-reverse space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-green-600"
                onChange={() => handleCheckboxChange("120min")}
                checked={selectedCheckbox === "120min"}
              />
              <span>درس 120 دقيقة</span>
            </label>
          </div>
        </div>

        {/* Radio buttons for the selected checkbox */}
        {selectedCheckbox && (
          <div className="mt-6 p-4 border border-green-300 rounded bg-green-50">
            <h2 className="text-green-900 font-semibold mb-4">
              الخيارات لـ {selectedCheckbox === "30min" && "درس 30 دقيقة"}
              {selectedCheckbox === "60min" && "درس 60 دقيقة"}
              {selectedCheckbox === "90min" && "درس 90 دقيقة"}
              {selectedCheckbox === "120min" && "درس 120 دقيقة"}
            </h2>

            <div className="space-y-2">
              <label className="flex items-center space-x-reverse space-x-2">
                <input
                  type="radio"
                  name={selectedCheckbox}
                  className="form-radio text-green-600"
                />
                <span>الخيار الأول</span>
              </label>
              <label className="flex items-center space-x-reverse space-x-2">
                <input
                  type="radio"
                  name={selectedCheckbox}
                  className="form-radio text-green-600"
                />
                <span>الخيار الثاني</span>
              </label>
            </div>
          </div>
        )}

        {/* زر الإرسال */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            إجراء الدفع
          </button>
          <button
            type="button"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            الحذف من السلة
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;

