
import './amr.css'
import lab from '../../assets/images/home/lab.png'
// import arrow from '../../assets/images/home/arrow.png'
import person from '../../assets/images/home/person.png'


const Amr = () => {



    return (
        <div  className="amr  my-20">
            <div className="box flex gap-10">
                <div className="info w-1/3 flex flex-col justify-start items-center p-5">
                    <img src={person} alt="" />
                    <h4 className='name'>الشيخ/ عمرو البدرى</h4>
                    <p>درس رواية حفص عن عاصم</p>
                    <div className="groupButton">
                        <button>شاهد الفيديو المجانى</button>
                        <button>احجز الان</button>
                    </div>
                </div>
                <img className='w-2/3' src={lab} alt="" />
            </div>
        </div>
    )
}

export default Amr
