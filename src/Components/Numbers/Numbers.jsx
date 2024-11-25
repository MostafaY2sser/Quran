
// import React from 'react'
import city from '../../assets/images/home/city.png'
import shehk from '../../assets/images/home/shehk.png'
import student from '../../assets/images/home/student.png'
import family from '../../assets/images/home/family.png'

const Numbers = () => {
    return (
        <div  className='flex px-40 justify-between my-20'>
            <div className="box flex flex-col gap-3 items-center " >
                <div className="image border-2 border-[--main-dark-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                    <img src={student} alt="" />
                </div>
                <h4 className="font-[600] text-[42px] text-[--main-light-color]">+0</h4>
                <p className="font-[700] text-[20px]">عدد الطلاب</p>
            </div>
            <div className="box flex flex-col gap-3 items-center " >
                <div className="image border-2 border-[--main-dark-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                    <img src={family} alt="" />
                </div>
                <h4 className="font-[600] text-[42px] text-[--main-light-color]">+0</h4>
                <p className="font-[700] text-[20px]">عدد العائلات</p>
            </div>
            <div className="box flex flex-col gap-3 items-center " >
                <div className="image border-2 border-[--main-dark-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                    <img src={shehk} alt="" />
                </div>
                <h4 className="font-[600] text-[42px] text-[--main-light-color]">+0</h4>
                <p className="font-[700] text-[20px]">البلدان</p>
            </div>
            <div className="box flex flex-col gap-3 items-center " >
                <div className="image border-2 border-[--main-dark-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                    <img src={city} alt="" />
                </div>
                <h4 className="font-[600] text-[42px] text-[--main-light-color]">+0</h4>
                <p className="font-[700] text-[20px]">الشيوخ</p>
            </div>
            
        </div>
    )
}

export default Numbers
