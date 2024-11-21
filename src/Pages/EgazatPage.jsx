// import { useNavigate } from 'react-router-dom';
// import React from 'react';


// const cardsData = [
//   {
//     title: 'قراءة نافع',
//     buttons: ['رواية قالون', 'رواية ورش'],
//   },
//   {
//     title: 'قراءة ابن كثير',
//     buttons: ['رواية البزي', 'رواية قنبل'],
//   },
//   {
//     title: 'قراءة أبي عمرو البصري',
//     buttons: ['رواية الدوري', 'رواية السوسي'],
//   },
//   {
//     title: 'قراءة عاصم',
//     buttons: ['رواية شعبة', 'رواية حفص'],
//   },
//   {
//     title: 'قراءة ابن عامر',
//     buttons: ['رواية هشام', 'رواية ابن ذكوان'],
//   },
//   {
//     title: 'قراءة الكسائي',
//     buttons: ['رواية الدوري', 'رواية أبي الحارث'],
//   },
//   {
//     title: 'قراءة خلف',
//     buttons: ['رواية إسحاق', 'رواية إدريس'],
//   },
//   {
//     title: 'قراءة يعقوب',
//     buttons: ['رواية روح', 'رواية إدريس'],
//   },
//   {
//     title: 'قراءة ابن مجاهد',
//     buttons: ['رواية ابن وردان', 'رواية ابن جماز'],
//   },
// ];

// export default function EgazatPage() {
//   const navigate = useNavigate();

//   const handleNavigate = (card, narration) => {
//     navigate(`/details/${card}/${narration}`);
//   };
//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h1 className="text-2xl font-bold text-center mb-6 text-green-700">
//           اختر القراءة والرواية
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cardsData.map((card, index) => (
//             <div
//               key={index}
//               className="p-4 bg-green-100 rounded-lg shadow-lg border border-green-200"
//             >
//               <h3 className="mb-4 text-lg font-bold text-green-800 text-center">
//                 {card.title}
//               </h3>
//               {card.buttons.map((button, idx) => (
//                 <button
//                   key={idx}
//                   className="globalButton"
//                   onClick={() => handleNavigate(card.title, button)}
//                 >
//                   {button}
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; // إضافة useState هنا
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cardsData = [
  {
    title: 'قراءة نافع',
    buttons: [
      {
        name: 'رواية قالون',
        image: '/images/qalon.png',
        description: 'رواية قالون عن نافع من أشهر الروايات القرآنية.',
      },
      {
        name: 'رواية ورش',
        image: '/images/warsh.png',
        description: 'رواية ورش عن نافع تُستخدم على نطاق واسع.',
      },
    ],
  },
  {
    title: 'قراءة ابن كثير',
    buttons: [
      {
        name: 'رواية البزي',
        image: '/images/bazzi.png',
        description: 'رواية البزي عن ابن كثير تحتوي على مميزات خاصة.',
      },
      {
        name: 'رواية قنبل',
        image: '/images/qunbul.png',
        description: 'رواية قنبل عن ابن كثير تُعتبر معروفة في بعض الدول.',
      },
    ],
  },
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
  {
    title: 'قراءة أبي عمرو البصري',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية السوسي',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },
  // أضف باقي البيانات للكروت...
];

export default function EgazatPage() {
  const [searchTerm, setSearchTerm] = useState(''); // تعريف المتغير searchTerm باستخدام useState
  const navigate = useNavigate();

  const handleNavigate = (card, button) => {
    navigate(`/details/${card.title}/${button.name}`, {
      state: {
        image: button.image,
        description: button.description,
      },
    });
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // تحديث قيمة searchTerm
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center p-4" style={{ backgroundColor: 'var(--body-bg-color)', direction: 'rtl' }}>
        <div
          className="flex items-center justify-end w-full mb-6 relative"
          style={{ direction: 'rtl' }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="اكتب اسم القراءة"
            className="p-2 rounded-md border border-green-300 w-80 pr-10"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute text-green-700 left-72 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-11">
          {cardsData
            .filter((card) =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((card, index) => (
              <div
                key={index}
                className="p-4 w-80 h-64 rounded-lg shadow-lg border border-green-300"
                style={{ backgroundColor: 'var(--main-bgLight-color)' }}
              >
                <h3 className="mb-11 text-lg font-bold text-black text-center">{card.title}</h3>
                <div className="flex flex-col gap-2 items-center gap-y-3">
                  {card.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className="globalButton"
                      onClick={() => handleNavigate(card, button)}
                      style={{ width:'200px', padding: '10px 0px',  }}
                    >
                      {button.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
