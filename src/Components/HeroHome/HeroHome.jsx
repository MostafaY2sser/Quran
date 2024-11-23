import { useEffect, useState } from "react";
import sliderImg from "../../assets/images/home/heroImg.png";
// import border from "../../assets/images/home/border.png";
import stekar from "../../assets/images/home/stekar.png";

import "./heroHome.css";



const HeroHome = () => {


//  Data of Slider:-----------------------------------------
  const data = [
    {
      title: "قراءة نافع",
      subTitleOne: "1. رواية قالون عن نافع:",
      subTitleTwo: "1. رواية  قالون عن نافع:",
      one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      img: sliderImg,
      imgStekar: stekar,
    },
    {
      title: "قراءة حفص ",
      subTitleOne: "1. رواية قالون عن نافع:",
      subTitleTwo: "1. رواية  قالون عن نافع:",
      one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      img: sliderImg,
      imgStekar: stekar,
    },
    {
      title: "قراءة حفص ",
      subTitleOne: "1. رواية قالون عن نافع:",
      subTitleTwo: "1. رواية  قالون عن نافع:",
      one1: "- : قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      one4: "- : قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      img: sliderImg,
      imgStekar: stekar,
    },
    {
      title: "قراءة حفص ",
      subTitleOne: "1. رواية قالون عن نافع:",
      subTitleTwo: "1. رواية  قالون عن نافع:",
      one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      img: sliderImg,
      imgStekar: stekar,
    },
    {
      title: "قراءة ة ابن كثير",
      subTitleOne: "1. رواية قالون عن نافع:",
      subTitleTwo: "1. رواية  قالون عن نافع:",
      one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two2: "- : يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
      two5: "-المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
      three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
      img: sliderImg,
      imgStekar: stekar,
    },
  ];


  // Slider :-----------------------------------------
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); 
    }, 2000);   
    return () => clearInterval(interval); 
  }, [data.length]);




  return (
    <div className="heroHome">
      <div className="slider flex "
      style={{ transform: `translateX(${currentIndex * + 100}%)`, }}
      >
        {data.map((item, index) => (
          <div className="box" key={index}>
            <h1 className="title">{item.title}</h1>
            <img className="sliderImg" src={item.img} alt="" />
            <div className="subBox one">
              <h5>{item.subTitleOne}</h5>
              <div className="list">
                <span>{item.one1}</span>
                <span>{item.two2}</span>
                <span>{item.three3}</span>
                <button>قراءة المزيد</button>
              </div>
            </div>
            <div className="subBox  two">
              <h5>{item.subTitleTwo}</h5>
              <div className="list">
                <p>{item.one1}</p>
                <p>{item.two2}</p>
                <p>{item.three3}</p>
                <button>قراءة المزيد</button>
              </div>
            </div>
            <img className="stekar" src={item.imgStekar} alt="" />
            {/* <img className="borderImg" src={border} alt="" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroHome;
