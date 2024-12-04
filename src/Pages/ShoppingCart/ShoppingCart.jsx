import shoppingCart from '../../assets/images/general/shoppingCart.png'
import cartImg from '../../assets/images/general/cartImg.png'
import { useContext } from 'react'
import { Store } from '../../Context/Context'
import EasySteps from '../../Components/EasySteps/EasySteps'
import { useNavigate } from 'react-router-dom'




const ShoppingCart = () => {


    const { calculateTotalPrice } = useContext(Store)


    const Navigate = useNavigate()


    const data = [
        {
            img : cartImg,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img : cartImg,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img : cartImg,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img : cartImg,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img : cartImg,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
        {
            img : cartImg,
            name :"مصحف",
            min : 5,
            price: 99.9
        },
    ]




    return (
        <div className='m-10'>

            <div className="header flex  gap-10">
                <div className="icon  flex items-center flex-col ">
                    <div className="image bg-[--main-bgLight-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                        <img className="w-[150%]" src={shoppingCart} alt="" />
                    </div>
                    <p className="my-3 font-[600] text-[22px] text-[--main-dark-color] border-b-2 border-[--main-border-color]">السلة</p>
                </div>
                <p className="text-[32px] text-[--main-dark-color] mt-4">الكورسات التي تم اختيارها </p>
            </div>

            <div className="contentItems m-10 flex flex-wrap justify-between items-end">
                {data.map((item , index)=>(
                    <div className="box w-[30%] flex items-center flex-col gap-2 mb-[40px] " key={index}>
                        <img src={item.img} alt="image course" />
                        <h4 className="font-[700] text-[24px]">{item.name}</h4>
                        <p className="font-[700]">{item.min}</p>
                        <p className="font-[700]">{item.price}</p>
                    </div>
                ))}
            </div>

            <div className="buy  m-20 flex items-center justify-between w-[50%]">
                <div className="total">
                    <h4 className="font-[700] text-[36px] text-[--main-dark-color] font-sans">المجموع</h4>
                    <h6 className="font-[700] text-[32px] ">{calculateTotalPrice(data).toFixed(2)} $</h6>
                </div>
                <button className="globalButton text-[30px]">اجراء الدفع</button>
            </div>

            <EasySteps/>


            <div className="w-[fit-content] my-10 mx-[auto]">
                <button  onClick={()=> Navigate("/pricingpage")} className='globalButton text-[22px]'>جميع خطط التسعير</button>
            </div>

        </div>
    )
}

export default ShoppingCart
