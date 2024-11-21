import logo from '../../assets/images/iconHeader/logo.png'
import "./Footer.css";
import face from "../../assets/images/iconHeader/facebook.png";
import whats from "../../assets/images/iconHeader/whatsap.png";
import yout from "../../assets/images/iconHeader/youtube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons/faEnvelopeOpen";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="footer p-5" style={{ backgroundColor: "#7CB98E" }}>
        <div className="footerComponent flex items-center">
          <img
            className="logo ml-10 w-16 xs:w-48 sm:w-32"
            src={logo}
            alt="logo"
          />
          <h3>
            هو موقع لتعلم القراءات العشرة والحصول علو شهادات وإجازات معتمدة من
            معلمين خبراء فى العلوم القرآنية
          </h3>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 text-start md:text-right">
        {/* القسم الأول: وسائل التواصل */}
        <div>
          <h3 className="text-lg font-bold mb-4">دورات مهمة</h3>
          <ul className="space-y-1">
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة نافع
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة ابن كثير
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة ابي عمرو البصري
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة ابن عامر
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة عاصم
            </li>
          </ul>
        </div>

        {/* القسم الثاني: روابط مرجعية */}
        <div>
          <h3 className="text-lg font-bold mb-4">روابط سريعه</h3>
          <ul className="space-y-1">
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الرئيسية
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الإجازات
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الكورسات
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الأسعار
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              المكتبة
            </li>
          </ul>
        </div>

        {/* القسم الثالث: دورات مهمة */}
        <div>
          <h3 className="text-lg font-bold mb-4">اتصل بنا</h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-start md:justify-start gap-2">
              <i className="fas fa-phone-alt">
                <FontAwesomeIcon className="socia-icone" icon={faPhone} />
              </i>
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <i className="fab fa-whatsapp text-green-500">
                <FontAwesomeIcon className="socia-icone" icon={faWhatsapp} />
              </i>
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <i className="fas fa-envelope">
                <FontAwesomeIcon
                  className="socia-icone"
                  icon={faEnvelopeOpen}
                />
              </i>
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <i className="fas fa-map-marker-alt">
                <FontAwesomeIcon className="socia-icone" icon={faLocationDot} />
              </i>
            </li>
          </ul>
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="mt-8 flex items-end justify-start gap-4">
          <a href="#" className="text-green-500 text-2xl">
            <i className="fab fa-whatsapp">
              <img src={whats} alt="whats" />
            </i>
          </a>
          <a href="#" className="text-blue-500 text-2xl">
            <i className="fab fa-facebook">
              <img src={face} alt="face" />
            </i>
          </a>
          <a href="#" className="text-red-500 text-2xl">
            <i className="fab fa-youtube">
              <img src={yout} alt="yout" />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
