import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import design1 from "../assets/images/general/design1.png"
import design2 from "../assets/images/general/design2.png"
import EgazatSection from '../Components/Egazat/EgazatSection';
import disLike from '../assets/images/general/disLike.png'


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
  {
    title: 'قراءة ابن عامر',
    buttons: [
      {
        name: 'رواية هشام',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية ابن ذكوان',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },

  {
    title: 'قراءة عاصم',
    buttons: [
      {
        name: 'رواية حفص',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية شعبة',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },

  {
    title: 'قراءة حمزة',
    buttons: [
      {
        name: 'رواية خلف',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية خلاد',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },

  {
    title: 'قراءة الكسائي',
    buttons: [
      {
        name: 'رواية الدوري',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية ابو الحارث',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },

  {
    title: 'قراءة يعقوب',
    buttons: [
      {
        name: "رواية رويس",
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية روح',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },

  {
    title: 'قراءة خلف',
    buttons: [
      {
        name: 'رواية اسحاق ',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية ادريس',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },

  {
    title: 'قراءة ابي جعفر',
    buttons: [
      {
        name: 'رواية ابن وردان',
        image: '/images/douri.png',
        description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
      },
      {
        name: 'رواية ابن جماز',
        image: '/images/sousi.png',
        description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
      },
    ],
  },


];


export default function EgazatPage() {

  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();

  const handleNavigate = (card, button) => {
    navigate(`/egazatpage/${card.title}/${button.name}`, {
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
      <div className="flex flex-col justify-start items-center mt-11 relative" style={{ backgroundColor: 'var(--body-bg-color)', direction: 'rtl' }}>
        <img src={design1} alt='design1' className="absolute right-0 top-0 " />
        <img src={design2} alt='design2' className="absolute left-0 bottom-[40px] w-56 " />
        <div
          className="flex items-center justify-end w-full mb-8 relative"
          style={{ direction: 'rtl' }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="اكتب اسم القراءة"
            className="p-2 rounded-md border-2 bg-[#EAF8F4] w-80 pr-10 focus:outline-none "
            style={{
              borderColor: 'var(--main-dark-color)', // تحديد لون الإطار باستخدام المتغير
            }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute text-green-700 left-72 top-1/2 transform -translate-y-1/2 scale-x-[-1]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-11 my-8 ">
          {cardsData
            .filter((card) =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((card, index) => (
              <div
                key={index}
                className="p-8 w-72 h-64 rounded-lg shadow-lg border border-green-300 relative"
                style={{
                  backgroundColor: 'var(--main-bgLight-color)',
                  borderColor: 'var(--main-dark-color)',
                }}
              >
                <h3 className="mb-11 text-lg font-bold text-black text-center">{card.title}</h3>
                <div className="flex flex-col gap-2 items-center gap-y-3">
                  {card.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className="globalButton"
                      onClick={() => handleNavigate(card, button)}
                      style={{ width: '200px', padding: '10px 0px' }}
                    >
                      {button.name}
                    </button>
                  ))}
                  <img
                    className="absolute top-4 left-5 cursor-pointer w-6"
                    src={disLike}
                    alt=""
                  />
                </div>
              </div>

            ))}
        </div>
        <EgazatSection />
      </div>

    </>
  );
}













// ----------------------------------------------------------------------


// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios'; // استيراد Axios
// import design1 from "../assets/images/general/design1.png";
// import design2 from "../assets/images/general/design2.png";
// import EgazatSection from '../Components/Egazat/EgazatSection';
// import disLike from '../assets/images/general/disLike.png';

// export default function EgazatPage() {


  
// const cardsData = [
//   {
//     title: 'قراءة نافع',
//     buttons: [
//       {
//         name: 'رواية قالون',
//         image: '/images/qalon.png',
//         description: 'رواية قالون عن نافع من أشهر الروايات القرآنية.',
//       },
//       {
//         name: 'رواية ورش',
//         image: '/images/warsh.png',
//         description: 'رواية ورش عن نافع تُستخدم على نطاق واسع.',
//       },
//     ],
//   },
//   {
//     title: 'قراءة ابن كثير',
//     buttons: [
//       {
//         name: 'رواية البزي',
//         image: '/images/bazzi.png',
//         description: 'رواية البزي عن ابن كثير تحتوي على مميزات خاصة.',
//       },
//       {
//         name: 'رواية قنبل',
//         image: '/images/qunbul.png',
//         description: 'رواية قنبل عن ابن كثير تُعتبر معروفة في بعض الدول.',
//       },
//     ],
//   },
//   {
//     title: 'قراءة أبي عمرو البصري',
//     buttons: [
//       {
//         name: 'رواية الدوري',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية السوسي',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },
//   {
//     title: 'قراءة ابن عامر',
//     buttons: [
//       {
//         name: 'رواية هشام',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية ابن ذكوان',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },

//   {
//     title: 'قراءة عاصم',
//     buttons: [
//       {
//         name: 'رواية حفص',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية شعبة',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },

//   {
//     title: 'قراءة حمزة',
//     buttons: [
//       {
//         name: 'رواية خلف',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية خلاد',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },

//   {
//     title: 'قراءة الكسائي',
//     buttons: [
//       {
//         name: 'رواية الدوري',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية ابو الحارث',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },

//   {
//     title: 'قراءة يعقوب',
//     buttons: [
//       {
//         name: "رواية رويس",
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية روح',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },

//   {
//     title: 'قراءة خلف',
//     buttons: [
//       {
//         name: 'رواية اسحاق ',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية ادريس',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },

//   {
//     title: 'قراءة ابي جعفر',
//     buttons: [
//       {
//         name: 'رواية ابن وردان',
//         image: '/images/douri.png',
//         description: 'رواية الدوري عن أبي عمرو من القراءات المتداولة.',
//       },
//       {
//         name: 'رواية ابن جماز',
//         image: '/images/sousi.png',
//         description: 'رواية السوسي عن أبي عمرو معروفة بجمال الأداء.',
//       },
//     ],
//   },


// ];


//   const [searchTerm, setSearchTerm] = useState('');
//   const [fetchedData, setFetchedData] = useState(null); // حالة لتخزين البيانات المستلمة
//   const [loading, setLoading] = useState(false); // حالة للتحميل
//   const [error, setError] = useState(null); // حالة للخطأ
//   const navigate = useNavigate();

//   const handleNavigate = async (card, button) => {
//     setLoading(true);
//     setError(null);
//     setFetchedData(null);

//     try {
//       // طلب البيانات باستخدام Axios
//       const response = await axios.get('https://quran.codecraft1.com/api/read');
//       setFetchedData(response.data); // تخزين البيانات المستلمة
//       setLoading(false);
//     } catch (err) {
//       setError('حدث خطأ أثناء جلب البيانات.');
//       setLoading(false);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-start items-center mt-11 relative" style={{ backgroundColor: 'var(--body-bg-color)', direction: 'rtl' }}>
//         <img src={design1} alt='design1' className="absolute right-0 top-0 " />
//         <img src={design2} alt='design2' className="absolute left-0 bottom-[40px] w-56 " />
//         <div className="flex items-center justify-end w-full mb-8 relative" style={{ direction: 'rtl' }}>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="اكتب اسم القراءة"
//             className="p-2 rounded-md border-2 bg-[#EAF8F4] w-80 pr-10 focus:outline-none "
//             style={{
//               borderColor: 'var(--main-dark-color)',
//             }}
//           />
//           <FontAwesomeIcon
//             icon={faSearch}
//             className="absolute text-green-700 left-72 top-1/2 transform -translate-y-1/2 scale-x-[-1]"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-11 my-8 ">
//           {cardsData
//             .filter((card) =>
//               card.title.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map((card, index) => (
//               <div
//                 key={index}
//                 className="p-8 w-72 h-64 rounded-lg shadow-lg border border-green-300 relative"
//                 style={{
//                   backgroundColor: 'var(--main-bgLight-color)',
//                   borderColor: 'var(--main-dark-color)',
//                 }}
//               >
//                 <h3 className="mb-11 text-lg font-bold text-black text-center">{card.title}</h3>
//                 <div className="flex flex-col gap-2 items-center gap-y-3">
//                   {card.buttons.map((button, idx) => (
//                     <button
//                       key={idx}
//                       className="globalButton"
//                       onClick={() => handleNavigate(card, button)}
//                       style={{ width: '200px', padding: '10px 0px' }}
//                     >
//                       {button.name}
//                     </button>
//                   ))}
//                   <img
//                     className="absolute top-4 left-5 cursor-pointer w-6"
//                     src={disLike}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             ))}
//         </div>
//         <EgazatSection />

//         {/* عرض البيانات التي تم جلبها */}
//         {loading && <p>جاري جلب البيانات...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {fetchedData && (
//           <div className="mt-8 p-4 border border-gray-300 rounded">
//             <h3 className="text-lg font-bold">البيانات:</h3>
//             <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(fetchedData, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
