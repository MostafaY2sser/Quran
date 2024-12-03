

// import React from 'react'
import { Rating } from '@mui/material'
import person from '../../assets/images/home/person.png'

const Opinions = () => {

    const data = [ 
        {
            img :person ,
            name : "ياسر",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
        {
            img :person ,
            name : "مصطفي ",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
        {
            img :person ,
            name : "حمدي",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
        {
            img :person ,
            name : "عمر",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
    ]



    return (
        <div className='mt-20 mb-10'>
            <h4 className='globalMain-header text-[40px]'>آراء أولياء الامور والطلاب </h4>
            <div className="bigBox flex flex-col gap-5 mt-10 ">
                { data.map((item , index)=> (
                    <div className="box p-10  shadow-lg  rounded-[10px] bg-[--main-bgLight-color] flex items-center w-[100%]" key={index}>
                        <img className='w-[150px] h-[150px] rounded-[50%] ml-10' src={item.img} alt="" />
                        <div>
                            <h6 className='font-[700] text-[34px]'>{item.name}</h6>
                            <p className=' text-[24px]'>{item.comment}</p>
                        </div>
                        <div className="rating  flex flex-1 gap-10 flex-col items-end  ">
                            <Rating name="read-only" value={item.rating} readOnly />
                            <div className="date flex items-center gap-7 ">
                                <div>
                                    <span  className='text-[20px]'>التاريخ/ </span>
                                    <span>{item.date}</span>
                                </div>
                                <div>
                                    <span className='text-[20px]'>اليوم/ </span>
                                    <span>{item.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Opinions;
