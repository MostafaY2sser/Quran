import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
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

;
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
      <div className="mt-11 px-4 lg:px-20 relative" style={{ backgroundColor: 'var(--body-bg-color)' }}>
        {/* Background Images */}
        <img src={design1} alt="design1" className="absolute right-0 top-0 w-20 sm:w-28 lg:w-auto" />
        <img src={design2} alt="design2" className="absolute left-0 bottom-[40px] w-28 sm:w-40 lg:w-56" />
  
    {/* Search Bar */}
    <div className="flex justify-end my-6 lg:my-10">
      <div className=" sm:w-[20%] md:w-[50%] lg:w-[30%] border-2 border-[--main-dark-color] rounded-[10px] overflow-hidden py-2 px-3 sm:py-1 sm:px-2 flex items-center gap-3">
        <FontAwesomeIcon className="text-[--main-dark-color]" icon={faSearch} />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="اكتب اسم القراءة"
          className="w-full bg-transparent border-none outline-none text-sm sm:text-base"
        />
      </div>
    </div>

  
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8" style={{ direction: 'rtl' }}>
          {cardsData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-lg shadow-lg border border-green-300 relative"
                style={{
                  backgroundColor: 'var(--main-bgLight-color)',
                  borderColor: 'var(--main-dark-color)',
                }}
              >
                <h3 className="mb-4 text-lg font-bold text-black text-center lg:mb-8">{card.title}</h3>
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
                  <img className="absolute top-4 left-5 cursor-pointer w-6" src={disLike} alt="" />
                </div>
              </div>
            ))}
        </div>
  
        {/* Additional Section */}
        <EgazatSection />
      </div>
    </>
  );
  






}








// ----------------------------------------------------------------------

