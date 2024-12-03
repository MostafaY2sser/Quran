
// import React from 'react'
import pepole from '../../assets/images/general/people.png'
import design1 from '../../assets/images/general/design1.png'
import disLike from '../../assets/images/general/disLike.png'
// import design3 from '../../assets/images/general/design3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const AlShehk = () => {


     // State For Search input
     const [searchText, setSearchText] = useState('');


    // navigate to Profile Teacher Page
    const navigate = useNavigate()


    const data = [
        {
            img : pepole,
            name : "مصطفي ياسر",
            ex : 4 ,
            rate : 2 ,
            course : "القرآن واللغة العربية والدراسات الإسلامية",
            des : "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار" 
        },
        {
            img : pepole,
            name : "عبد الرحمن",
            ex : 4 ,
            rate : 2 ,
            course : "القرآن واللغة العربية والدراسات الإسلامية",
            des : "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار" 
        },
        {
            img : pepole,
            name : "احمد",
            ex : 4 ,
            rate : 2 ,
            course : "القرآن واللغة العربية والدراسات الإسلامية",
            des : "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار" 
        },
        {
            img : pepole,
            name : "عمر",
            ex : 4 ,
            rate : 2 ,
            course : "القرآن واللغة العربية والدراسات الإسلامية",
            des : "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار" 
        },
        {
            img : pepole,
            name : "جمال",
            ex : 4 ,
            rate : 2 ,
            course : "القرآن واللغة العربية والدراسات الإسلامية",
            des : "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار" 
        },
    ]


    const dataWhy = [ 
        {text : "مدربين تدريبا جيدا" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "استخدام أدوات التدريس المتقدمة" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "طرق التدريس المتقدمة" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "إجازة معتمدة" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "حملة الدبلوم" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "عملية توظيف مدرس صارم" , pargraph : "مصطفي ياسر حمدي"} ,
    ]


    const dataQuestion = [
        { question : "ما الذي يميز معلمي القرآن الخاصين عن غيرهم؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
    ]


    // Function To Search Teacher
    const filteredData = data.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchText.toLowerCase())
    );



    return (
        <div className='p-8'>

            <div className="hero  bg-[--main-bgLight-color] mt-4 mb-10 flex  justify-between py-20 px-[100px] relative rounded-md">
                <div className="text  ">
                    <h4 className="text-[30px] text-[--main-dark-color] w-[80%]">موقع ( .......... ) لدروس القرآن واللغة العربية والإسلامية عبر الانترنت</h4>
                    <div className='my-10'>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]"> عربي مصري أصلي</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">إجازة معتمدة</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">تخرج جامعة الأزهر</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">مؤهلون وذوي خبرة</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">الإنجليزية بطلاقة</span>
                        </div>
                    </div>
                </div>
                <img className="w-[30%]" src={pepole} alt="" />
                <button className='globalButton absolute bottom-20  left-[50%] text-[24px]'>ابدأ تجربة مجانية</button>
                <img className="absolute top-[-30px] left-[-50px]" src={design1} alt="" />
            </div>


            <div className="text flex items-center flex-col px-40 text-center gap-3 mb-20">
                <h3  className='text-[40px] text-[--main-dark-color] font-[500]'>معلمو القرآن المصريون المؤهلون</h3>
                <p className="text-[18px]">لدينا معلمين ومعلمات القرآن يتم تدريبهم جيدا بما يكفي لتعليم جميع الأعمار والمستويات من الطلاب و مساعدة غير الناطقين بها على القراءةوحفظ القرآن بشكل صحيح مع قواعد التجويد، لذلك يقدمون دعمهم الكامل في مساعدة الطلاب بطريقة بسيطة وسهلة.
                    جميع مدرسينا لديهم شهادات فى تلاوة القرآن الكريم وحفظ اللغة العربية, والدراسات الإسلامية. المعلمون هم القدوة للطلاب لمساعدتهم على التعلم.
                    لذلك ، نفضل اختيار المعلمين المعتمدين والمؤهلين وذوي الخبرة في التدريس عبر الإنترنت.
                </p>
            </div>


            <div className="w-[30%] border-2 border-[--main-dark-color] rounded-[10px] overflow-hidden mr-auto my-10 py-2 px-3 flex items-center gap-3">
                <FontAwesomeIcon  className="text-[--main-dark-color]" icon={faSearch} />
                <input 
                    className="w-[90%] bg-[transparent] border-[none] outline-[0]" 
                    type="text" placeholder="اكتب اسم المعلم"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} 
                />
            </div>


            <div className="teachers flex flex-col items-center gap-10 relative">
                <h4 className="text-[30px] text-[--main-dark-color] font-[500]">اختر مدرس القرآن المصري عبر الإنترنت</h4>
                <div className="teachersBox ">
                    {filteredData.map((item , index) => (
                        <div className="box bg-[--main-bgLight-color] flex items-center p-10 rounded-lg mb-10 shadow-lg relative" key={index}>
                            <img className="w-[120px] h-[120px] rounded-[50%] mx-5 object-cover border-4 border-[--main-dark-color]" src={item.img} alt="" />
                            <div className="info flex-1 flex flex-col gap-2">
                                <h6 className="text-[26px] font-[500]">الشيخ / {item.name}</h6>
                                <p className="text-[20px] text-[#62B6B7]">{item.ex} سنين من الخبرة</p>
                                <Rating name="read-only" value={item.rate} readOnly />
                                <p className="my-4 text-[20px]" >{item.course}</p>
                                <p className="text-[18px] w-[50%]">{item.des}</p>
                            </div>
                            <button 
                                className='globalButton rounded-md flex-2'
                                onClick={() => navigate(`/ProfileTeacher/${item.name}`, { state: item })}    
                            >
                                    عرض ملف المعلم</button>
                            <img className="absolute top-4 left-5 cursor-pointer" src={disLike} alt="" />
                        </div>
                    ))}
                </div>
                {/* <img className="absolute right-[-100px] top-[-100px] "  src={design3} alt="" /> */}
            </div>


            <div className="whyChose">
                <h4 className="text-[--main-green-color] text-[30px] font-[700] text-center pb-5">لماذا تختار مدرسي القرآن في موقع .... ؟</h4>
                <hr  className='border-0 h-[2px] bg-[--main-border-color] w-[20%] ml-[auto] mr-[auto] '/>

                <div className="content flex  justify-around mt-10">
                    <div className="text">
                        { dataWhy.map((item , index) => (
                            <details key={index}>
                                <summary className="w-[300px] p-2 mb-3 rounded-md text-[18px] font-[600] shadow-lg cursor-pointer bg-[--main-bgLight-color] text-[--main-green-color] border-[1px] border-[--main-border-color] border-r-[7px] border-r-[--main-border-color]">
                                    {item.text}
                                </summary>
                                <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">{item.pargraph}</p>
                            </details>
                        )) }
                    </div>
                    <div className="image bg-[#333] w-[30%] h-[350px] rounded-md overflow-hidden">
                        <img className="w-full h-full" src={pepole} alt="" />
                    </div>
                </div>

            </div>


            <div className="repeatQuestion flex items-center justify-around mt-20">
                <h4 className="text-[32px] font-[700] text-[--main-green-color] border-b-2 border-[--main-border-color] "> الأسئلة المتكررة؟</h4>
                <div className="question rounded-md ">
                    { dataQuestion.map((item , index) =>(
                        <details key={index}>
                            <summary className="w-[400px] p-4   text-[16px] font-[400] shadow-lg cursor-pointer bg-[--main-bgLight-color]  border-b-[1px] border-b-[--main-green-color]">{item.question}</summary>
                            <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">{item.ansswer}</p>
                        </details>
                    )) }
                </div>
            </div>


        </div>
    )
}

export default AlShehk
