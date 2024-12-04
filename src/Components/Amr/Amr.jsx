
import './amr.css'
import lab from '../../assets/images/home/lab.png'
import arrow from '../../assets/images/general/arrow.png'
import person from '../../assets/images/home/person.png'


const Amr = () => {



    return (
        <div  className="amr  my-20  relative" >
            <div className="box flex gap-10">
                <div className="info w-1/3 text-[white] flex flex-col justify-start items-center p-5 bg-[--main-dark-color] rounded-[--md-border]  border-2 border-[#FF9D37]">
                    <img className='width-[60%]' src={person} alt="" />
                    <h4 className='name  text-[40px] font-[700] my-10'>الشيخ/ عمرو البدرى</h4>
                    <p className="text-[24px] font-[700] mb-10">درس رواية حفص عن عاصم</p>
                    <div className="groupButton  flex items-center gap-10">
                        <button className="globalButton  bg-[--main-bgLight-color] text-[black] text-[20px] font-[700]">احجز الان</button>
                        <button className="globalButton bg-[--main-bgLight-color] text-[black] text-[20px] font-[700]">شاهد الفيديو المجانى</button>
                    </div>
                </div>
                <img className='amrImg w-2/3' src={lab} alt="" />
            </div>
            <img className='arrow absolute bottom-[-50px] left-[52%] w-[200px]' src={arrow} alt="" />
        </div>
    )
}

export default Amr
