
import courseImg from '../../assets/images/general/course.png'
import one from '../../assets/images/courses/one.png'
import two from '../../assets/images/courses/two.png'
import three from '../../assets/images/courses/three.png'
import four from '../../assets/images/courses/four.png'
import five from '../../assets/images/courses/five.png'
import level_1 from '../../assets/images/courses/level_1.png'
import level_2 from '../../assets/images/courses/level_2.png'
import level_3 from '../../assets/images/courses/level_3.png'
import center from '../../assets/images/courses/center.png'
import CoursesPage from '../CoursesPage/CoursesPage'




const Courses = () => {



    const fiveBox = [
        { title : "الخطة" , textOne : "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن " , textTwo : "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة" , textThree :"لاحتياجاتهم ووتيرتها." , img : one},
        { title : "الإتقان" , textOne : "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن " , textTwo : "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة" , textThree :"لاحتياجاتهم ووتيرتها." , img : two},
        { title : "المراجعة والإتقان" , textOne : "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن " , textTwo : "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة" , textThree :"لاحتياجاتهم ووتيرتها." , img : three},
        { title : "إتقان التجويد" , textOne : "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن " , textTwo : "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة" , textThree :"لاحتياجاتهم ووتيرتها." , img : four},
        { title : "التقدم الشخصي" , textOne : "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن " , textTwo : "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة" , textThree :"لاحتياجاتهم ووتيرتها." , img : five},
    ]


    const dataLevels = [
        { img :  level_1 , title : "مستوى المبتدئين" , text : " بالنسبة للطلاب الجدد في اللغة العربية القرآنية والتجويد ، يركز هذا المستوى على القراءة التأسيسية والسور القصيرة الحفظ مثل جزء عم. "},
        { img :  level_2 , title : "مستوى المتوسط" , text : "سيعمل الطلاب الذين يتمتعون بمهارات القراءة والتجويد الأساسية على سور حفظ أطول مع إتقان تلاوتهم وتقنيات الحفظ."},
        { img :  level_3 , title : "مستوى المتقدم" , text : "في هذا المستوى ، يركز الطلاب على حفظ القرآن بأكمله أو أقسام أكبر ، وتطبيق استراتيجيات حفظ المتقدمة ، والمراجعة بانتظام."},
    ]



    return (
        <div className='my-10 '>

            <div className="hero flex justify-around relative">

                <div className="text ">
                    <p className="text-[20px] font-[700]">يقدم موقع (....) دورة حفظ عبر الإنترنت لجميع الأعمار الذين يرغبون في القيام بذلك
                        <br />
                        حفظ القرآن كليا أو جزئيا. يضمن مدرسو الحفظ المصريون المعتمدون لدينا
                        يتعلم كل طالب القرآن بشكل مستقل .
                        <br />
                        فصولنا الشخصية الفردية ، توقيت مرن ، حسب الطلب
                        <br />
                        المناهج الدراسية وأفضل طرق الحفظ تساعد الطلاب على إكمال
                        <br />
                        برنامج الحفظ بسلاسة.
                    </p>
                    <div className="number flex items-center gap-5 mt-10">
                        <div className="flex flex-col items-center">
                            <span className="text-[18px] font-[600]">الدورات المنظمة</span>
                            <span className="text-[20px] font-[700] text-[--main-green-color]">0+</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[18px] font-[600]">المدرسين</span>
                            <span className="text-[20px] font-[700] text-[--main-green-color]">0+</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[18px] font-[600]">الطلاب الراضيين</span>
                            <span className="text-[20px] font-[700] text-[--main-green-color]">0+</span>
                        </div>
                    </div>
                </div>

                <div className="image w-[30%]">
                    <img className="w-full h-[300px]" src={courseImg} alt="" />
                </div>

                <button className='globalButton absolute bottom-0 left-[50%]'>ابدأ تجربة مجانية</button>

            </div>


            <div className="whatLearn  text-center my-20  flex items-center justify-center flex-col ">
                <h4 className="text-[30px] font-[700] text-[--main-green-color]">ماذا ستتعلم في دروس التجويد عبر الإنترنت؟</h4>
                <p className="w-[70%] text-center text-[20px] font-[600] ">لقد صممنا دروس التجويد هذه لتعليم الأطفال والأخوات والكبار تعلم القواعد الأساسية لتلاوة القرآن بشكل صحيح. يضمن نهجنا التدريجي والبيئة الجذابة للطلاب من جميع المستويات تعلم القراءة مع دورة التجويد لتطوير مهارات التلاوة الدقيقة.</p>
            </div>


            <div className="fiveBox bg-[--main-bgLight-color] p-10 flex flex-wrap items-center justify-center">
                { fiveBox.map((item , index) => (
                    <div className="box rounded-[16px] w-[32%] my-3 mx-1 h-[200px] text-[white] flex items-center justify-center flex-col bg-[--main-green-color] relative" key={index}>
                        <h4 className="text-[26px] font-[700] mb-5">{item.title}</h4>
                        <p>{item.textOne}</p>
                        <p>{item.textTwo}</p>
                        <p>{item.textThree}</p>
                        <img className="absolute top-3 right-3" src={item.img} alt="" />
                    </div>
                )) }
            </div>


            <div className="manhag my-20 mb-24 flex justify-center items-center gap-10  flex-col ">

                <div className="top flex items-center justify-between  w-[60%]">
                    <div className="rounded-lg overflow-hidden cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p  className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                    <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم القراءة باللغة العربية</summary>
                            <p  className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيعمل الطلاب المتقدمون على حفظ القرآن الكريم بالكامل من خلال التسجيل في دورة حفظ مكثفة , باتباع خطة منظمة وشخصية لتحقيق هذا الهدف النبيل.</p>
                        </details>
                    </div>
                </div>

                <div className="center flex items-center justify-between w-[80%]">
                <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p  className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                    <img className="w-[150px]" src={center} alt="" />
                    <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p  className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                </div>

                <div className="bottom w-[60%] flex items-center justify-between ">
                <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p  className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                    <div className="rounded-lg overflow-hidden cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p  className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                </div>
            </div>



            <div className="levels bg-[--main-bgLight-color] p-20">
                <h4 className="globalMain-header text-[36px]">مستويات تعلم الدروس عبر الانترنت </h4>
                <div className="bigBox flex items-center justify-between gap-5 mt-10">
                    {dataLevels.map((item , index) => (
                        <div className="box flex items-center flex-col   " key={index}>
                            <img className="w-[170px] mb-[-50px]" src={item.img} alt="" />
                            <div className="text text-[white] text-center bg-[--main-green-color] p-5 rounded-lg shadow-lg">
                                <h4 className="text-[28px] font-[700] pt-7 pb-3">{item.title}</h4>
                                <p className="text-[16px] font-[700]">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <CoursesPage/>


            





        </div>
    )
}

export default Courses