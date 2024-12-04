
// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import sliderImg from '../../assets/images/home/blog_2.png'
import like from '../../assets/images/general/wishList.png'
import { useState } from 'react';


const Blogs = () => {


    // State For Search input
    const [searchText, setSearchText] = useState('');


    const sliderDate = [
        {
            img: sliderImg,
            name: "الإخفا في التجويد",
            text: "لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........",
        },
        {
            img: sliderImg,
            name: "الإخفا في التجويد",
            text: "لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........",
        },
        {
            img: sliderImg,
            name: "الإخفا في التجويد",
            text: "لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........",
        },
        {
            img: sliderImg,
            name: "الإخفا في التجويد",
            text: "لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........",
        },
        {
            img: sliderImg,
            name: "الإخفا في التجويد",
            text: "لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........",
        },
        {
            img: sliderImg,
            name: "الإخفا في التجويد",
            text: "لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........",
        },
    ]

    // Function To Search Teacher
    const filteredData = sliderDate.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchText.toLowerCase())
    );



    return (
        <div className='w-full'>


            <div className="head flex items-center justify-between mb-10 mx-20 mt-20">
                <div className="text-[30px] font-[700] text-[--main-dark-color] border-b-2 border-b-[--main-border-color]">مقالات مميزة</div>
                <div className="w-[30%] border-2 border-[--main-dark-color] rounded-[10px] overflow-hidden py-2 px-3 flex items-center gap-3">
                    <FontAwesomeIcon  className="text-[--main-dark-color]" icon={faSearch} />
                    <input 
                        className="w-[90%] bg-[transparent] border-[none] outline-[0]" 
                        type="text" placeholder="اكتب اسم القراءة" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                </div>
            </div>

            <div className="slider w-[100%] p-10 bg-[--main-bgLight-color] overflow-x-scroll flex gap-5 scroll-smooth flex-row-reverse "
                style={{scrollbarWidth: "none",msOverflowStyle: "none" ,}}
            >
                {filteredData.map((item , index)=>(
                    <div className="box  min-w-[28%] p-10 bg-[--main-dark-color] flex flex-col items-center gap-3 rounded-[15px] relative" key={index}>
                        <img className="" src={item.img} alt="" />
                        <h4 className="text-[30px] text-[white]">{item.name}</h4>
                        <p className="text-[white]">{item.text}</p>
                        <button className='globalButton bg-[--body-bg-color] text-[--main-dark-color] text-[22px]'>قراءة المزيد</button>
                        <img className="absolute top-[10px] left-[10px] w-[40px] cursor-pointer" src={like} alt="" />
                    </div>
                ))}
            </div>



            <div className="my-20 w-[100%] flex gap-5 flex-wrap justify-between">
                {sliderDate.map((item , index)=>(
                    <div className="box w-[32%] p-10 mb-5 bg-[--main-bgLight-color] flex flex-col items-center gap-3 rounded-[15px] shadow-lg relative" key={index}>
                        <img className="" src={item.img} alt="" />
                        <h4 className="text-[30px] ">{item.name}</h4>
                        <p className="">{item.text}</p>
                        <button className='globalButton text-[22px]'>قراءة المزيد</button>
                        <img className="absolute top-[10px] left-[10px] w-[40px] cursor-pointer" src={like} alt="" />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Blogs
