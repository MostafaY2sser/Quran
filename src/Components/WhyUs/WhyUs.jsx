
import img_1 from '../../assets/images/home/img_1.png'
import img_2 from '../../assets/images/home/img_2.png'
import img_3 from '../../assets/images/home/img_3.png'
import img_4 from '../../assets/images/home/img_4.png'
import img_5 from '../../assets/images/home/img_5.png'
import img_6 from '../../assets/images/home/img_6.png'


const WhyUs = () => {



    const data =[
        {
            img : img_1,
            title: "معترف بها فى جميع أنحاء العالم",
            text : "موثوق به من قبل آلاف العائلات فى اكثر من دولة حول العالم",
        },
        {
            img : img_2,
            title: "معترف بها فى جميع أنحاء العالم",
            text : "موثوق به من قبل آلاف العائلات فى اكثر من دولة حول العالم",
        },
        {
            img : img_3,
            title: "معترف بها فى جميع أنحاء العالم",
            text : "موثوق به من قبل آلاف العائلات فى اكثر من دولة حول العالم",
        },
        {
            img : img_4,
            title: "معترف بها فى جميع أنحاء العالم",
            text : "موثوق به من قبل آلاف العائلات فى اكثر من دولة حول العالم",
        },
        {
            img : img_5,
            title: "معترف بها فى جميع أنحاء العالم",
            text : "موثوق به من قبل آلاف العائلات فى اكثر من دولة حول العالم",
        },
        {
            img : img_6,
            title: "معترف بها فى جميع أنحاء العالم",
            text : "موثوق به من قبل آلاف العائلات فى اكثر من دولة حول العالم",
        },
    ]


    return ( 
        <div className='w-[100%]  my-20 bg-[--main-bgLight-color] py-10 '>
            <h2 className='w-[fit-content] font-[700] text-[40px] mx-auto my-0 text-[--main-dark-color] mb-10 border-b-2 border-[--main-border-color]'>من نحن</h2>
            <div className="box flex flex-wrap justify-between">
                { data.map((item , index)=> (
                    <div className="w-[33%] flex items-center flex-col mb-10"  key={index}>
                        <img src={item.img} alt="" />
                        <h6 className='font-[800] text-[--main-dark-color] text-[20px] my-3 '>{item.title}</h6>
                        <p className="font-[700] text-[18px] w-[60%] text-center text-[#54595F]">{item.text}</p>
                    </div>
                )) }
            </div>
            
        </div>
    )
}

export default WhyUs
