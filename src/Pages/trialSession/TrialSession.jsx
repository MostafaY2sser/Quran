// import imgSvg1 from'../../assets/images/TrialSession/imgSvg.png';
// import imgSvg2 from'../../assets/images/TrialSession/imgSvg2.png';
import Plan from '../../Components/Plan/Plan';
import  './trialSession.css'
const TrialSession = () => {
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen p-4">
      <form className="w-full max-w-lg p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">الاسم الأول</label>
            <input
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">الاسم الأخير</label>
            <input
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mt-2">
          <label className="block mb-1 text-gray-700 text-sm font-bold">البريد الإلكتروني</label>
          <input
            type="email"
            className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1 text-gray-700 text-sm font-bold">رقم الواتس</label>
          <input
            type="tel"
            className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1 text-gray-700 text-sm font-bold">البلد</label>
          <input
            type="text"
            className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">المنطضه الزمنيه</label>
            <input
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">الدوره</label>
            <input
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">الايام المفضله</label>
            <input
              type="text"
              className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">الاوقات المفضله</label>
            <input
              type="text"
              className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
       
        <div className="mt-4">  
        </div>

        <div>
          <h3 className='mb-3'>نوع الطالب :</h3>
          <div className='flex gap-4'>
          <label className="block mb-1 text-gray-700 font-bold">
            <input type="radio" name="gender" className="mr-2" /> ذكر
          </label>
          <label className="block mb-1 text-gray-700 font-bold">
            <input type="radio" name="gender" className="mr-2" /> أنثى
          </label>
          <label className="block mb-1 text-gray-700 font-bold">
            <input type="radio" name="gender" className="mr-2" /> كلاهما
          </label>
          </div>
        </div>

        <div className="mb-4 ">
          <h3 className='mb-3'>نوع المدرس :</h3>
          <div className='flex gap-4'>
          <label className="block text-gray-700 font-bold">
            <input type="radio" name="gender" className="mr-2" /> ذكر
          </label>
          <label className="block text-gray-700 font-bold">
            <input type="radio" name="gender" className="mr-2" /> أنثى
          </label>
          <label className="block text-gray-700 font-bold">
            <input type="radio" name="gender" className="mr-2" /> كلاهما
          </label>
          </div>
        </div>
        <textarea
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="2"
          ></textarea>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="globalButton"
          >
            احصل على النسخة التجريبية المجانية
          </button>
        </div>
      </form>
    </div>
    <Plan/>
    </div>
  )
}

export default TrialSession;