

import { useNavigate } from 'react-router-dom';
import imgcourse from '../../assets/images/general/course.png'
import EasySteps from './../../Components/EasySteps/EasySteps';
import './coursesPage.css'



const CoursesPage = () => {


    const navigate = useNavigate()


    const quranCourses = [
        { text : "دورات تحفيظ القرآن الكريم" },
        {text : " كورس تفسير القرآن الكريم"},
        {text : "كورس إجازة القرآن الكريم"},
        {text : "كورس القراءات العشر"},
        {text : "كورس القرآن الكريم للأطفال"},
        {text : "كورس تجويد القرآن الكريم"},
        {text : "كورس تلاوة القرآن الكريم"},
    ]


    const languageCourses = [
        {text : "كورس اللغة العربية للكبار" },
        {text : "كورس اللغة العربية للأطفال"},
        {text : "كورس القاعدة النورانية"},
        {text : "كورس المحادثة باللغة العربية"},
        {text : "كورس اللغة العربية لقراءة القرآن"},
    ]


    const eslamCourses = [
        {text : "كورس الحديث" },
        {text : "كورس الفقة"},
        {text : "كورس العقيدة"},
        {text : "كورس المسلمين الجدد"},
        {text : "كورس تعليم الشهادة للمسلمين الجدد"},
    ]


    return (
        <div className="coursesPage  my-20">
            <h4 className='globalMain-header  mainTitle text-[40px] mb-10'>دوراتنا عبر الانترنت</h4>

        <div className="quranCoursse p-10 pt-20 rounded-lg shadow-lg mb-10 flex items-center justify-evenly bg-[--main-bgLight-color] border-[1px] border-[--main-border-color] relative">
            <h4 className="subTitle text-[--main-green-color] text-[34px] font-[700] absolute top-5 right-10">دروس القرآن</h4>
            <div className="buttons flex flex-wrap gap-10">
                {quranCourses.map((item , index) => (
                    <button key={index} onClick={()=> navigate('/qurancourse')} className="globalButton w-[45%]">{item.text}</button>
                ))}
            </div>
            <div className="image w-[40%]">
                <img className='imgCourse' src={imgcourse} alt="" />
            </div>
        </div>




        <div className="quranCoursse p-10 pt-20  rounded-lg shadow-lg mb-10 flex items-center justify-evenly bg-[--main-bgLight-color] border-[1px] border-[--main-border-color] relative">
            <h4 className="subTitle text-[--main-green-color] text-[34px] font-[700] absolute top-5 right-10">دروس اللغة العربية</h4>
            <div className="buttons flex flex-wrap gap-10 flex-1">
                {languageCourses.map((item , index) => (
                    <button key={index} onClick={()=> navigate('/qurancourse')} className="globalButton w-[45%]">{item.text}</button>
                ))}
            </div>
            <div className="image w-[40%]">
                <img className='imgCourse' src={imgcourse} alt="" />
            </div>
        </div>



        <div className="quranCoursse p-10 pt-20  rounded-lg shadow-lg mb-10 flex items-center justify-evenly bg-[--main-bgLight-color] border-[1px] border-[--main-border-color] relative">
            <h4 className="subTitle text-[--main-green-color] text-[34px] font-[700] absolute top-5 right-10">دروس  إسلامية</h4>
            <div className="buttons flex flex-wrap gap-10">
                {eslamCourses.map((item , index) => (
                    <button key={index} onClick={()=> navigate('/qurancourse')}   className="globalButton w-[45%]">{item.text}</button>
                ))}
            </div>
            <div className="image w-[40%]">
                <img className='imgCourse' src={imgcourse} alt="" />
            </div>
        </div>


        <EasySteps/>

        <div className="text-center my-10">
            <button className="globalButton">جميع خطط التسعير</button>
        </div>



        </div>  
    )
}

export default CoursesPage
