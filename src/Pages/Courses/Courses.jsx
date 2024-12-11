
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
import Container from '../../assets/images/courses/Container.png'
import Container_1 from '../../assets/images/courses/Container_1 .png'
import Container_2 from '../../assets/images/courses/Container_2 .png'
import Container_3 from '../../assets/images/courses/Container_3.png'
import Container_4 from '../../assets/images/courses/Container_4.png'
import pepole from '../../assets/images/general/people.png'
import sheikh from '../../assets/images/courses/sheikh.jpg'




const Courses = () => {



    const fiveBox = [
        { title: "الخطة", textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ", textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة", textThree: "لاحتياجاتهم ووتيرتها.", img: one },
        { title: "الإتقان", textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ", textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة", textThree: "لاحتياجاتهم ووتيرتها.", img: two },
        { title: "المراجعة والإتقان", textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ", textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة", textThree: "لاحتياجاتهم ووتيرتها.", img: three },
        { title: "إتقان التجويد", textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ", textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة", textThree: "لاحتياجاتهم ووتيرتها.", img: four },
        { title: "التقدم الشخصي", textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ", textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة", textThree: "لاحتياجاتهم ووتيرتها.", img: five },
    ]


    const dataLevels = [
        { img: level_1, title: "مستوى المبتدئين", text: " بالنسبة للطلاب الجدد في اللغة العربية القرآنية والتجويد ، يركز هذا المستوى على القراءة التأسيسية والسور القصيرة الحفظ مثل جزء عم. " },
        { img: level_2, title: "مستوى المتوسط", text: "سيعمل الطلاب الذين يتمتعون بمهارات القراءة والتجويد الأساسية على سور حفظ أطول مع إتقان تلاوتهم وتقنيات الحفظ." },
        { img: level_3, title: "مستوى المتقدم", text: "في هذا المستوى ، يركز الطلاب على حفظ القرآن بأكمله أو أقسام أكبر ، وتطبيق استراتيجيات حفظ المتقدمة ، والمراجعة بانتظام." },
    ]

    const cardsData = [
        {
            id: 1,
            bgColor: "#96C5BD",
            imgSrc: Container,
            title: "مصحف حافظ كامل",
            text: "سيبدأ الطلاب بنجاح في حفظ القرآن الكريم بالكامل أو اختيار أجزاء بناء على أهدافهم الشخصية ومناهجهم الدراسية.",

        },
        {
            id: 2,
            bgColor: "#AFDBDC",
            imgSrc: Container_1,
            title: "إتقان التجويد في حافظ",
            text: "سيقوم كل طالب بحفظ وتلاوة القرآن بدقة والطلاقة من خلال تعلم قواعد التجويد المناسبة.",

        },
        {
            id: 3,
            bgColor: "#F8D8B1",
            imgSrc: Container_2,
            title: "خطط القرآن",
            text: "تطوير تقنيات مراجعة قوية للحفاظ على المدى الطويل الاحتفاظ بأجزاء القرآن.",

        },
        {
            id: 4,
            bgColor: "#D6EBE1",
            imgSrc: Container_3,
            title: "االتعلم الذاتي",
            text: "مع خطط الدروس المخصصة التي تتكيف مع قدراتهم و الجداول الزمنية ، سيحقق الطلاب الأهداف الخاصة بهم بأنفسهم وتيرة.",

        },
        {
            id: 5,
            bgColor: "#78C1C1CF",
            imgSrc: Container_4,
            title: "المسائلة الشخصية",
            text: "سيكتسب الطلاب الثقة في تقدمهم مع الانتظام التقييمات والتعليقات الشخصية للحفاظ عليها المسار.",

        },
    ];

    const cardsData2 = [
        {
            id: 1,
            bgColor: "#CBEDD5",
            imgSrc: Container,
            title: "مدرسون معتمدون من حافظ من الأزهر",
            text: "جميع مدرسينا مؤهلون تأهيلا عاليا ، بعد أن حصلوا على إجازة وشهادات إسلامية من جامعة الأزهر ، مما يضمن أعلى مستوى من التدريس.",

        },
        {
            id: 2,
            bgColor: "#CBEDD5",
            imgSrc: Container,
            title: "بوابة بدء التعلم",
            text: "يمكن للطلاب الوصول إلى المحاضرات المسجلة من خلال البوابة ، مما يمكنهم من مراجعة الدروس بسهولة لتحسين الحفظ.",

        },
        {
            id: 3,
            bgColor: "#CBEDD5",
            imgSrc: Container,
            title: "تسجيلات الفيديو للتعلم",
            text: "تتيح بوابتنا الإلكترونية سهلة الاستخدام للطلاب تتبع تقدمهم والاتصال بسهولة بمعلمهم ، مما يضمن تحقيقهم للعلم بكفاءة.",

        },
        {
            id: 4,
            bgColor: "#CBEDD5",
            imgSrc: Container,
            title: "ملاحظات شاملة",
            text: "يتم تقديم ملاحظات شخصية بعد كل جلسة ، مما يساعد الطلاب على فهم نقاط قوتهم ومجالات التحسين.",

        },
        {
            id: 5,
            bgColor: "#CBEDD5",
            imgSrc: Container,
            title: "إشراف أكاديمي",
            text: "نحن نقدم خيارات جدولة مرنة ، مما يسمح للطلاب بإعادة جدولة الفصول الدراسية حسب الحاجة لتناسب حياتهم المزدحمة.",

        },
        {
            id: 6,
            bgColor: "#CBEDD5",
            imgSrc: Container,
            title: "أساليب تعليمية فعّالة",
            text: "يتم تدريب مدرسينا لتعليم الطلاب من خلفيات ثقافية متنوعة ، مما يجعل تجربة التعلم شاملة ومحترمة.",

        },
    ];


    const dataWhy = [
        { text: "أفضل طرق التدريس", pargraph: "مصطفي ياسر حمدي" },
        { text: "شهادات إتمام الدورة", pargraph: "مصطفي ياسر حمدي" },
        { text: "المسابقات والاختبارات", pargraph: "مصطفي ياسر حمدي" },
        { text: "خطط رسوم ميسورة التكلفة", pargraph: "مصطفي ياسر حمدي" },
        { text: "24/7 التوفر", pargraph: "مصطفي ياسر حمدي" },
        { text: "فصول تجريبية مجانية", pargraph: "مصطفي ياسر حمدي" },
    ]


    const dataQuestion = [
        { question: "ما الذي يميز معلمي القرآن الخاصين عن غيرهم؟", ansswer: "مصطفي سار حمدي" },
        { question: "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟", ansswer: "مصطفي سار حمدي" },
        { question: "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟", ansswer: "مصطفي سار حمدي" },
        { question: "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟", ansswer: "مصطفي سار حمدي" },
        { question: "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟", ansswer: "مصطفي سار حمدي" },
    ]


    const dataSlider = [
        {
            img: pepole,
            name: "مصطفي ياسر",
            ex: 4,
            rate: 2,
            course: "القرآن واللغة العربية والدراسات الإسلامية",
            des: "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار"
        },
        {
            img: pepole,
            name: "عبد الرحمن",
            ex: 4,
            rate: 2,
            course: "القرآن واللغة العربية والدراسات الإسلامية",
            des: "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار"
        },
        {
            img: pepole,
            name: "احمد",
            ex: 4,
            rate: 2,
            course: "القرآن واللغة العربية والدراسات الإسلامية",
            des: "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار"
        },
        {
            img: pepole,
            name: "عمر",
            ex: 4,
            rate: 2,
            course: "القرآن واللغة العربية والدراسات الإسلامية",
            des: "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار"
        },
        {
            img: pepole,
            name: "جمال",
            ex: 4,
            rate: 2,
            course: "القرآن واللغة العربية والدراسات الإسلامية",
            des: "مدرسون ذوو خبرة في القرآن واللغة العربية والدراسات الإسلامية ، معظمهم من   خريجو الأزهر مع الإجازات ، متخصصون في التجويد والقرآن استذكار"
        },
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
                {fiveBox.map((item, index) => (
                    <div className="box rounded-[16px] w-[32%] my-3 mx-1 h-[200px] text-[white] flex items-center justify-center flex-col bg-[--main-green-color] relative" key={index}>
                        <h4 className="text-[26px] font-[700] mb-5">{item.title}</h4>
                        <p>{item.textOne}</p>
                        <p>{item.textTwo}</p>
                        <p>{item.textThree}</p>
                        <img className="absolute top-3 right-3" src={item.img} alt="" />
                    </div>
                ))}
            </div>


            <div className="manhag my-20 mb-24 flex justify-center items-center gap-10  flex-col ">

                <div className="top flex items-center justify-between  w-[60%]">
                    <div className="rounded-lg overflow-hidden cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                    <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم القراءة باللغة العربية</summary>
                            <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيعمل الطلاب المتقدمون على حفظ القرآن الكريم بالكامل من خلال التسجيل في دورة حفظ مكثفة , باتباع خطة منظمة وشخصية لتحقيق هذا الهدف النبيل.</p>
                        </details>
                    </div>
                </div>

                <div className="center flex items-center justify-between w-[80%]">
                    <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                    <img className="w-[150px]" src={center} alt="" />
                    <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                </div>

                <div className="bottom w-[60%] flex items-center justify-between ">
                    <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                    <div className="rounded-lg overflow-hidden cursor-pointer shadow-lg">
                        <details className='w-[300px] rounded-lg'>
                            <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">تعلم قواعد التجويد</summary>
                            <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا وجميلا ويلتزم بالنطق الصحيح لكل حرف.</p>
                        </details>
                    </div>
                </div>
            </div>



            <div className="levels bg-[--main-bgLight-color] p-20">
                <h4 className="globalMain-header text-[36px]">مستويات تعلم الدروس عبر الانترنت </h4>
                <div className="bigBox flex items-center justify-between gap-5 mt-10">
                    {dataLevels.map((item, index) => (
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


            <CoursesPage />

            <div className='mb-4' >
                <h4 className="globalMain-header sm:text-sm md:text-[30px] mb-8 text-center">
                    ما هي الميزات التي تجعل الدورة الخاصة بنا مميزة
                </h4>
                <div className=" flex flex-wrap lg:flex-nowrap items-end justify-center gap-16 md:gap-[130px] ">

                    <div className="space-y-4 w-full lg:w-1/2 flex flex-col justify-center">
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className="flex items-center p-4 rounded-lg shadow"
                                style={{ backgroundColor: card.bgColor }}
                            >
                                <img
                                    src={card.imgSrc}
                                    alt="Icon"
                                    className="w-12 h-12 mx-2"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-[#157A67]">
                                        {card.title}
                                    </h3>
                                    <p className=" md:font-semibold">{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className=" ">
                        <img
                            src={sheikh}
                            alt="Special Feature"
                            className=" h-[300px] md:h-[450px] rounded-lg shadow object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ///////////////////// */}

            <div className="p-5 md:p-10">
                <h4 className="globalMain-header sm:text-sm md:text-[30px] mb-12 text-center">
                    ما هي الميزات التي تجعل دورتنا التعليمية مميزة
                </h4>
                <div className="flex flex-wrap -mx-4">
                    {cardsData2.map((card) => (
                        <div
                            key={card.id}
                            className="w-full sm:w-1/2 px-4 mb-6 flex"
                        >
                            <div
                                className={`flex items-center p-4 rounded-lg shadow w-full`}
                                style={{ backgroundColor: card.bgColor }}
                            >
                                <img
                                    src={card.imgSrc}
                                    alt="Icon"
                                    className=" w-10 md:w-12 h-10 md:h-12 mx-2"
                                />
                                <div>
                                    <h3 className="sm:text-md md:text-lg font-semibold text-[#157A67]">
                                        {card.title}
                                    </h3>
                                    <p className="lg:text-lg">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* //////////// */}



            <div className="flex flex-wrap md:flex-nowrap justify-between items-center bg-[#D6EBE1] p-6 md:p-16 rounded-lg shadow-lg">
                {/* القسم الأيمن: النصوص والزر */}
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-4 text-center md:text-start">
                    <h3 className="text-xl font-bold text-[#157A67]">
                        شهادة إتمام الدورة التعليمية
                    </h3>
                    <p className="leading-relaxed  text-lg sm:font-semibold md:font-bold">
                        عند الانتهاء من الدورة، سيحصل الطلاب على شهادة إنجاز وسيتم تكريمهم
                        باحتفال بتقدمهم في تعلم الدروس القرآنية الرئيسية. يمثل هذا الإنجاز خطوة
                        مهمة في رحلتهم لفهم وحفظ القرآن.
                    </p>
                    <button className="globalButton"> إحجز نسخة تجريبية الآن </button>
                </div>

                {/* القسم الأيسر: صورة الشهادة */}
                <div className="flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="bg-white rounded-lg shadow-md p-12 w-full max-w-sm">
                        <p className="text-center text-[#157A67] font-semibold">صورة الشهادة</p>
                    </div>
                </div>
            </div>




            <div className="whyChose mt-20">
                <h4 className="text-[--main-green-color] text-[30px] font-[700] text-center pb-5">لماذا تختار موقع ......</h4>
                <hr className='border-0 h-[2px] bg-[--main-border-color] w-[20%] ml-[auto] mr-[auto] ' />

                <div className="content flex  justify-around mt-10">
                    <div className="text">
                        {dataWhy.map((item, index) => (
                            <details key={index}>
                                <summary className="w-[300px] p-2 mb-3 rounded-md text-[18px] font-[600] shadow-lg cursor-pointer bg-[--main-bgLight-color] text-[--main-green-color] border-[1px] border-[--main-border-color] border-r-[7px] border-r-[--main-border-color]">
                                    {item.text}
                                </summary>
                                <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">{item.pargraph}</p>
                            </details>
                        ))}
                    </div>
                    <div className="image bg-[#333] w-[30%] h-[350px] rounded-md overflow-hidden">
                        <img className="w-full h-full" src={pepole} alt="" />
                    </div>
                </div>

            </div>


            <div className="repeatQuestion flex items-center justify-around mt-20">
                <h4 className="text-[32px] font-[700] text-[--main-green-color] border-b-2 border-[--main-border-color] ">أهم الأسئلة الشائعة؟</h4>
                <div className="question rounded-md ">
                    {dataQuestion.map((item, index) => (
                        <details key={index}>
                            <summary className="w-[400px] p-4   text-[16px] font-[400] shadow-lg cursor-pointer bg-[--main-bgLight-color]  border-b-[1px] border-b-[--main-green-color]">{item.question}</summary>
                            <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">{item.ansswer}</p>
                        </details>
                    ))}
                </div>
            </div>


            {/* <div className="teachers mt-20">
                <h4 className="globalMain-header">المعلمون المصريون المعتمدون</h4>
                <div className="slider">
                    {dataSlider.map((item , index)=> (
                        <div className="box" key></div>
                    ))}
                </div>
            </div> */}




        </div>
    )
}

export default Courses