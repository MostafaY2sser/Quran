

// import heroImg_1 from "../../assets/images/home/heroImg_1.png"
// import img from "../../assets/images/home/heroImg.png";
// import './heroHome.css'



// const HeroHome = () => {



//     const data = [
//         {
//             title:"قراءة نافع",
//             subTitleOne:"1. رواية قالون عن نافع:",
//             subTitleTwo:"1. رواية مصطفي  ياسر:",
//             one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//             two2:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//             three3:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//             one4: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//             two5:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//             three6:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//             img: img,
//         },
//         {
//             title:"قراءة نافع",
//             subTitleOne:"1. رواية قالون عن نافع:",
//             subTitleTwo:"1. رواية مصطفي  ياسر:",
//             one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//             two2:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//             three3:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//             one4: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//             two5:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//             three6:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//             img: img,
//         },
//         {
//             title:"قراءة نافع",
//             subTitleOne:"1. رواية قالون عن نافع:",
//             subTitleTwo:"1. رواية مصطفي  ياسر:",
//             one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//             two2:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//             three3:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//             one4: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//             two5:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//             three6:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//             img: img,
//         },
//     ]



//     return (
//         <div className="heroHome  my-5">
//                 <div className="slider  flex gap-2">
//                     { data.map((item , index) =>(
//                     <div className="box" key={index}>
//                         <h1>{item.title}</h1>
//                         <img src={item.img} alt="" />
//                         <div className="boxOne">
//                             <h5>{item.subTitleOne}</h5>
//                             <ul>
//                                 <li>{item.one1}</li>
//                                 <li>{item.two2}</li>
//                                 <li>{item.three3}</li>
//                             </ul>
//                         </div>
//                         <div className="boxTwo">
//                             <h5>{item.subTitleTwo}</h5>
//                             <ul>
//                                 <li>{item.one4}</li>
//                                 <li>{item.two5}</li>
//                                 <li>{item.three6}</li>
//                             </ul>
//                         </div>
//                     </div>
//             ))}
//                     </div>
//         </div>
//     )
// }

// export default HeroHome





// import img from "../../assets/images/home/heroImg.png";
// import './heroHome.css';

// const HeroHome = () => {
//     const data = [
//                 {
//                     title:"قراءة نافع",
//                     subTitleOne:"1. رواية قالون عن نافع:",
//                     subTitleTwo:"1. رواية مصطفي  ياسر:",
//                     one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//                     two2:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//                     three3:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//                     one4: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//                     two5:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//                     three6:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//                     img: img,
//                 },
//                 {
//                     title:"قراءة نافع",
//                     subTitleOne:"1. رواية قالون عن نافع:",
//                     subTitleTwo:"1. رواية مصطفي  ياسر:",
//                     one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//                     two2:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//                     three3:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//                     one4: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//                     two5:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//                     three6:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//                     img: heroImg_1,
//                 },
//                 {
//                     title:"قراءة نافع",
//                     subTitleOne:"1. رواية قالون عن نافع:",
//                     subTitleTwo:"1. رواية مصطفي  ياسر:",
//                     one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//                     two2:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//                     three3:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//                     one4: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//                     two5:"المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//                     three6:"الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//                     img: img,
//                 },
//             ]

//   const handleNext = () => {
//     const slider = document.querySelector('.slider');
//     slider.scrollLeft += slider.offsetWidth; // تحريك بمقدار عرض العنصر
//   };

//   const handlePrev = () => {
//     const slider = document.querySelector('.slider');
//     slider.scrollLeft -= slider.offsetWidth; // تحريك بمقدار عرض العنصر
//   };

//   return (
//     <div className="heroHome">
//       <button className="prev" onClick={handlePrev}>←</button>
//       <div className="slider">
//         {data.map((item, index) => (
//           <div className="box" key={index}>
//             <h1>{item.title}</h1>
//             <img src={item.img} alt="" />
//             <div className="boxOne">
//               <h5>{item.subTitleOne}</h5>
//               <ul>
//                 <li>{item.one1}</li>
//                 <li>{item.two2}</li>
//                 <li>{item.three3}</li>
//               </ul>
//             </div>
//             <div className="boxTwo">
//               <h5>{item.subTitleTwo}</h5>
//               <ul>
//                 <li>{item.one4}</li>
//                 <li>{item.two5}</li>
//                 <li>{item.three6}</li>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="next" onClick={handleNext}>→</button>
//     </div>
//   );
// };

// export default HeroHome;




import img from "../../assets/images/home/heroImg.png";
import './heroHome.css';

const HeroHome = () => {
  const data = [
    {
      title: "قراءة نافع",
      subTitleOne: "1. رواية قالون عن نافع:",
      subTitleTwo: "1. رواية مصطفي ياسر:",
      one1: "الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two2: "المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three3: "الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      img: img,
    },
    {
      title: "قراءة ورش",
      subTitleOne: "1. رواية ورش عن نافع:",
      subTitleTwo: "1. رواية أخرى:",
      one1: "الإمالة: ورش يستخدم الإمالة بشكل أكثر اتساعًا في روايته.",
      two2: "المد: يتبع في روايته أحكام المد اللازم والمد المتصل.",
      three3: "الإظهار والإدغام: ورش يراعي الإدغام الكلي في أغلب المواضع.",
      img: img,
    },
    {
      title: "قراءة أخرى",
      subTitleOne: "1. رواية أخرى:",
      subTitleTwo: "1. تفاصيل إضافية:",
      one1: "الإمالة: استخدام بسيط جدًا للإمالة.",
      two2: "المد: يتبع القواعد الأساسية.",
      three3: "الإظهار والإدغام: يختلف حسب المواضع.",
      img: img,
    },
  ];

  const handleNext = () => {
    const slider = document.querySelector('.slider');
    slider.scrollLeft += slider.offsetWidth; // تمرير بمقدار عرض العنصر
  };

  const handlePrev = () => {
    const slider = document.querySelector('.slider');
    slider.scrollLeft -= slider.offsetWidth; // تمرير بمقدار عرض العنصر
  };

  return (
    <div className="heroHome">
      <button className="prev" onClick={handlePrev}>←</button>
      <div className="slider">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <h1>{item.title}</h1>
            <img src={item.img} alt="" />
            <div className="boxOne">
              <h5>{item.subTitleOne}</h5>
              <ul>
                <li>{item.one1}</li>
                <li>{item.two2}</li>
                <li>{item.three3}</li>
              </ul>
            </div>
            <div className="boxTwo">
              <h5>{item.subTitleTwo}</h5>
              <ul>
                <li>{item.one1}</li>
                <li>{item.two2}</li>
                <li>{item.three3}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button className="next" onClick={handleNext}>→</button>
    </div>
  );
};

export default HeroHome;
