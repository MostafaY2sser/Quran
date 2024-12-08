

import './blogsSection.css'
import blog_1 from '../../assets/images/home/blog_1.png'
import blog_2 from '../../assets/images/home/blog_2.png'

const BlogsSection = () => {


    const data = [ 
        {
            img : blog_2 ,
            title :"الإخفا في التجويد",
            text:"لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........"
        },
        {
            img : blog_1 ,
            title :"الإخفا في التجويد",
            text:"لكي تكون التلاوة جميلة وواضحة ودقيقة, فإن التجويد ( تقنية نطق حروف القرآن بشكل صحيح ) أمر ضروري.إن امتلاك المهارة ........"
        },
    ]


    return (
        <div className='blogsSection my-[80px]'>
            <h4 className='globalMain-header mb-[40px] text-[40px]'>المدونات</h4>
            <div className="bigBox flex justify-center gap-[50px]">
                { data.map((item , index)=> (
                    <div 
                            className={`box w-[35%] bg-[--main-bgLight-color] flex items-center flex-col p-10 rounded-[15px] shadow-[5px 5px 15px 3px red] ${
                            index === 0 ? "translate-y-[60px]" : ""
                        }`}        
                        key={index}
                    >
                        <img className='w-[50%]' src={item.img} alt="" />
                        <h5 className="font-[700] text-[28px] text-[--main-dark-color] py-7">{item.title}</h5>
                        <p className="mb-10 text-[20px] text-center">{item.text}</p>
                        <button className='globalButton text-[24px] rounded-[15px]'>قراءة المزيد</button>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default BlogsSection
