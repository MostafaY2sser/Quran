import './wishList.css'
import wishList from '../../assets/images/general/wishList.png'
import courseImg from '../../assets/images/general/cartImg.png'
import like from '../../assets/images/general/Vector.png'
import play from '../../assets/images/general/play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Rating } from '@mui/material'




const WishList = () => {


    // Scroll Courses :-
    const scrollCourseRef = useRef(null);  

    const handleScrollRight = () => {
        if (scrollCourseRef.current) {
            scrollCourseRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (scrollCourseRef.current) {
            scrollCourseRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };



    // Scroll Audio :-
    const scrollAudioRef = useRef(null);  

    const handleScrollAudioRight = () => {
        if (scrollAudioRef.current) {
            scrollAudioRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    
    const handleScrollAudioLeft = () => {
        if (scrollAudioRef.current) {
            scrollAudioRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };



    // Scroll Audio :-
    const scrollShahkRef = useRef(null);  

    const handleScrollShahkRight = () => {
        if (scrollShahkRef.current) {
            scrollShahkRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    
    const handleScrollShahkLeft = () => {
        if (scrollShahkRef.current) {
            scrollShahkRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };



    const courses = [
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img: courseImg ,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
    ]


    const audio= [
        {
            name: "سورة مريم",
            img : play ,
        },
        {
            name: "سورة مريم",
            img : play ,
        },
        {
            name: "سورة مريم",
            img : play ,
        },
        {
            name: "سورة مريم",
            img : play ,
        },
        {
            name: "سورة مريم",
            img : play ,
        },
        {
            name: "سورة مريم",
            img : play ,
        },
        {
            name: "سورة مريم",
            img : play ,
        },
    ]



    const shahk = [
        {
            img : play,
            name : "مصطفي ياسر" ,
            rating : 4,
            courseName : "دروس تحفيظ قران كريم",
            details: "مصطفي ياسر حمدي عبد المالك عبد  الباقي محمود حسين بدر بدير بدران علي محمد جابر البدارمي",
        },
        {
            img : play,
            name : "مصطفي ياسر" ,
            rating : 4,
            courseName : "دروس تحفيظ قران كريم",
            details: "مصطفي ياسر حمدي عبد المالك عبد  الباقي محمود حسين بدر بدير بدران علي محمد جابر البدارمي",
        },
        {
            img : play,
            name : "مصطفي ياسر" ,
            rating : 4,
            courseName : "دروس تحفيظ قران كريم",
            details: "مصطفي ياسر حمدي عبد المالك عبد  الباقي محمود حسين بدر بدير بدران علي محمد جابر البدارمي",
        },
        {
            img : play,
            name : "مصطفي ياسر" ,
            rating : 4,
            courseName : "دروس تحفيظ قران كريم",
            details: "مصطفي ياسر حمدي عبد المالك عبد  الباقي محمود حسين بدر بدير بدران علي محمد جابر البدارمي",
        },
        {
            img : play,
            name : "مصطفي ياسر" ,
            rating : 4,
            courseName : "دروس تحفيظ قران كريم",
            details: "مصطفي ياسر حمدي عبد المالك عبد  الباقي محمود حسين بدر بدير بدران علي محمد جابر البدارمي",
        },
    ]






    return (
        <div className='m-10'>


            <div className="header flex  gap-10">
                <div className="icon  flex items-center flex-col ">
                    <div className="image bg-[--main-bgLight-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                        <img className="w-[150%]" src={wishList} alt="" />
                    </div>
                    <p className="my-3 font-[600] text-[22px] text-[--main-dark-color] border-b-2 border-[--main-border-color]">المفضلة</p>
                </div>
                <p className="text-[32px] text-[--main-dark-color] mt-4">كل ما تم تحديده فى المفضلة</p>
            </div>



            <div className="courses relative  w-full">
                <h4 className="title my-10 mt-20 text-[40px] font-[700] text-[--main-dark-color]">الكورسات : </h4>
                <div 
                    className="bigBox w-[93%] mx-auto flex gap-10 justify-start overflow-x-scroll "
                    ref={scrollCourseRef}
                >
                    {courses.map((item, index) => (
                        <div 
                            className="box min-w-[25%] relative flex items-center flex-col gap-2 rounded-[15px]" 
                            key={index}
                        >
                            <img className="w-[100%]" src={item.img} alt="" />
                            <h4 className="font-[700] text-[24px]">{item.name}</h4>
                            <p className="font-[700]">{item.min}</p>
                            <p className="font-[700]">{item.price}</p>
                            <img className="absolute top-[15px] left-[15px] cursor-pointer w-[20px]" src={like} alt="" />
                        </div>
                    ))}
                </div>  
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute top-[50%] right-[0] cursor-pointer  text-[--main-dark-color] text-[30px] font-[600]"
                    onClick={handleScrollRight}
                />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute top-[50%] left-[0] cursor-pointer text-[--main-dark-color] text-[30px] font-[600]"
                    onClick={handleScrollLeft}
                />
            </div>



            <div className="audio relative  w-full ">
                <h4 className="title my-10 mt-20 text-[40px] font-[700] text-[--main-dark-color]">التلاوة الصوتية :</h4>
                <div 
                    className="bigBox w-[92%] mx-auto flex items-center gap-10 overflow-x-scroll"
                    ref={scrollAudioRef}
                >
                    {audio.map((item , index)=> (
                        <div className='box min-w-[20%] bg-[--main-bgLight-color] relative flex items-center justify-center flex-col gap-5 py-[40px] rounded-[15px]'
                            key={index}
                        >
                            <h4 className="text-[30px]">{item.name}</h4>
                            <div className="bg-[--main-dark-color] p-2 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center border-2 border-[--main-border-color]">
                                <img className="w-[80%] cursor-pointer" src={item.img} alt="" />
                            </div>
                            <img className="absolute left-[15px] top-[15px] cursor-pointer w-[20px]" src={like} alt="" />
                        </div>
                    ))}
                </div>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute top-[50%] right-[0] cursor-pointer  text-[--main-dark-color] text-[30px] font-[600]"
                    onClick={handleScrollAudioRight}
                />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute top-[50%] left-[0] cursor-pointer text-[--main-dark-color] text-[30px] font-[600]"
                    onClick={handleScrollAudioLeft}
                />
            </div>



            <div className="vedios">
                <h4 className="title my-10  mt-20 text-[40px] font-[700] text-[--main-dark-color]">التلاوة المرئية :</h4>
                <div className="bigBox">
                    <div className="box">

                    </div>
                </div>
            </div>


            <div className="shehks relative">
                <h4 className="title my-10 mt-20 text-[40px] font-[700] text-[--main-dark-color]">الشيوخ المفضلة :</h4>
                <div 
                    className="bigBox w-[93%] mx-auto flex gap-10 justify-start overflow-x-scroll "
                    ref={scrollShahkRef}
                >
                    {shahk.map((item, index) => (
                        <div 
                            className="box min-w-[28%] p-5 relative flex  flex-col gap-5 rounded-[15px] bg-[--main-bgLight-color] " 
                            key={index}
                        >
                            <div className="info w-full flex items-center justify-start gap-5">
                                <div className="image w-[80px] h-[80px] rounded-[50%] border-[1px] border-[--main-dark-color]">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="subInfo text-[22px] font-[500]">
                                    <div className="name">
                                        <span>اسم الشيخ / </span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="rating flex  justify-start  flex-col">
                                        <span>الخبرة</span>
                                        <Rating name="read-only" value={item.rating} readOnly />
                                    </div>
                                </div>
                            </div>

                            <div className="couseName mt-5">
                                <span className="text-[18px] font-[600]">الكورس : </span>
                                <span>{item.courseName}</span>
                            </div>
                            <div className="details">
                                <span className="text-[18px] font-[600]">تفاصيل عن المدرس :</span>
                                <span>{item.details}</span>
                            </div>

                        </div>
                    ))}
                </div>  
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute top-[50%] right-[0] cursor-pointer  text-[--main-dark-color] text-[30px] font-[600]"
                    onClick={handleScrollShahkRight}
                />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute top-[50%] left-[0] cursor-pointer text-[--main-dark-color] text-[30px] font-[600]"
                    onClick={handleScrollShahkLeft}
                />
            </div>



        </div>
    )
}

export default WishList
