// import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
// import { faPhone } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
  // <div className="footer p-5" style={{backgroundColor : "#7CB98E"}}>
  //   <div className="footerComponent flex items-center">
  //       <img className='logo ml-10 w-16 xs:w-48 sm:w-32' src={logo} alt="logo" />
  //       <h3>هو موقع لتعلم القراءات العشرة والحصول علو شهادات وإجازات معتمدة من معلمين خبراء فى العلوم القرآنية</h3>
  //   </div>
  // </div>
  <footer className="bg-green-200 py-10">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
    {/* القسم الأول: وسائل التواصل */}
    <div>
      <h3 className="text-lg font-bold mb-4">دورات مهمة</h3>
      <ul className="space-y-2">
        <li>قراءة نافع</li>
        <li>قراءة ابن كثير</li>
        <li>قراءة ابي عمرو البصري</li>
        <li>قراءة ابن عامر</li>
        <li>قراءة عاصم</li>
      </ul>
    </div>

    {/* القسم الثاني: روابط مرجعية */}
    <div>
      <h3 className="text-lg font-bold mb-4">روابط سريعه</h3>
      <ul className="space-y-2">
        <li>الرئيسية</li>
        <li>الإجازات</li>
        <li>الكورسات</li>
        <li>الأسعار</li>
        <li>المكتبة</li>
      </ul>
    </div>

    {/* القسم الثالث: دورات مهمة */}
    <div>
      <h3 className="text-lg font-bold mb-4">اتصل بنا</h3>
      <ul className="space-y-3">
        <li className="flex items-center justify-center md:justify-start gap-2">
          <i className="fas fa-phone-alt">
          {/* <FontAwesomeIcon className='socia-icone' icon={faPhone} />  */}
          </i> 
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <i className="fab fa-whatsapp text-green-500">
          <FontAwesomeIcon className='socia-icone' icon={faWhatsapp} />   
          </i> 
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <i className="fas fa-envelope"></i> البريد
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <i className="fas fa-map-marker-alt"></i> الموقع
        </li>
      </ul>
    </div>
  </div>

  {/* أيقونات السوشيال ميديا */}
  <div className="mt-8 flex justify-center gap-4">
    <a href="#" className="text-green-500 text-2xl">
      <i className="fab fa-whatsapp"></i>
    </a>
    <a href="#" className="text-blue-500 text-2xl">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="#" className="text-red-500 text-2xl">
      <i className="fab fa-youtube"></i>
    </a>
  </div>
</footer>
  )
};

export default Footer;
