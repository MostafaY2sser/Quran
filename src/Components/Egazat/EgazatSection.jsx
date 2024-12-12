

import { useNavigate } from "react-router-dom"
import FoundEgaza from "../../assets/images/general/FoundEgaza.png"
const EgazatSection = () => {


    const navigate = useNavigate()


    return (
        <>
            <div className="flex items-center justify-between p-8 my-5 rounded-lg w-full"
                style={{
                    backgroundColor: 'var(--main-dark-color)',
                }}>

                <div className="w-1/2 text-white text-center flex flex-col items-center" >
                    <h2 className="text-3xl font-semibold mb-4">
                        أحصل على الإجازة بأعلى الأسانيد في العالم
                    </h2>
                    <button className="globalButton text-black py-2 px-3 rounded-lg font-medium shadow-md text-md w-40 mt-8 "
                        style={{
                            backgroundColor: 'var(--main-bgLight-color)',
                        }}
                        onClick={()=> navigate('/trialSession')}
                    >
                        حجز حصة تدريبية
                    </button>
                </div>
                {/* الصورة */}
                <div className="w-1/2 pr-20">
                    <img
                        src={FoundEgaza}
                        alt="youtube"
                        className="rounded-lg w-[520px]"
                    />
                </div>

            </div>
        </>
    )
}

export default EgazatSection

