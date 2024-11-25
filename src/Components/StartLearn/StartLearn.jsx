
import one from "../../assets/images/home/one.png"
import two from "../../assets/images/home/two.png"
import three from "../../assets/images/home/three.png"
import dwon from "../../assets/images/home/dwon.png"
import up from "../../assets/images/home/up.png"

const StartLearn = () => {
    return (
        <div className="mb-10">
            <h4 className="w-[fit-content] font-[700] text-[36px] mx-auto my-0 text-[--main-dark-color] mb-10 border-b-2 border-[--main-border-color]">ابدأ التعلم فى خطوات بسيطة</h4>
            <div className="bigBox flex gap-10 justify-center">
                <div className="box ">
                    <div className="imag bg-[#E4F7F1] w-[130px] h-[130px] flex items-center justify-center rounded-[50%] relative">
                        <img src={one} alt="" />
                        <span className="absolute flex items-center justify-center top-[-6px] left-[-6px] bg-[--main-dark-color] text-[white] rounded-[50%] w-10 h-10">01</span>
                    </div>
                    <div className="font-[700] text-[18px] my-5">سجل و احجز للدرس</div>
                </div>
                <img  src={dwon} alt="" />
                <div className="box mt-[120px]">
                    <div className="imag bg-[#E4F7F1] w-[130px] h-[130px] flex items-center justify-center rounded-[50%] relative">
                        <img src={two} alt="" />
                        <span className="absolute flex items-center justify-center top-[-6px] left-[-6px] bg-[--main-dark-color] text-[white] rounded-[50%] w-10 h-10">01</span>
                    </div>
                    <div className="font-[700] text-[18px] my-5">سجل و احجز للدرس</div>
                </div>
                <img  src={up} alt="" />
                <div className="box ">
                    <div className="imag bg-[#E4F7F1] w-[130px] h-[130px] flex items-center justify-center rounded-[50%] relative">
                        <img src={three} alt="" />
                        <span className="absolute flex items-center justify-center top-[-6px] left-[-6px] bg-[--main-dark-color] text-[white] rounded-[50%] w-10 h-10">01</span>
                    </div>
                    <div className="font-[700] text-[18px] my-5">سجل و احجز للدرس</div>
                </div>
            </div>
        </div>
    )
}


export default StartLearn