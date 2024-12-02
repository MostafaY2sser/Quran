
import facebook from "../../assets/images/iconHeader/facebook.png"
import whatsap from "../../assets/images/iconHeader/whatsap.png"
import youtube from "../../assets/images/iconHeader/youtube.png"
import logo from "../../assets/images/iconHeader/logo.png"
import eng from "../../assets/images/iconHeader/eng.png"
import wish from "../../assets/images/iconHeader/wish.png"
import cart from "../../assets/images/iconHeader/cart.png"
import './header.css'
import { Link, NavLink } from "react-router-dom"

const Header = () => {

    return (
        <div className="headers">

            <div className="topHeader  flex items-center  gap-5  justify-end mt-4">
                <div className="icons  flex items-center  gap-3">
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="facebook" />
                    <img src={whatsap} alt="whatsap" />
                </div>
                <Link to="/TrialSession">
                <button className="globalButton">حجز حصة تجريبية</button>
                </Link>
            </div>

            <div className="bottomHeader  flex items-center justify-between ">
                <Link to="/" className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="links flex items-center justify  gap-6 ">
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/">الرئيسية</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/egazatpage">الإجازات</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/qurancourse">الكورسات</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/pricingpage">الأسعار</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/ItsLibrary">المكتبة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/sheikhs">الشيوخ</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/blogs">المدونات</NavLink>
<<<<<<< HEAD
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/commonQuestions">الأسئلة الشائعة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/more">المزيد</NavLink>
=======
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/faq">الأسئلة الشائعة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/about">المزيد</NavLink>
>>>>>>> 22eae4eb33cce4e4dabf49d7f32a6c0d8d31024a
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/contact">تواصل معنا</NavLink>
                </div>
                <div className="left flex items-center gap-5">
                    <img src={wish} alt="wish" />
                    <img src={cart} alt="shopping cart" />
                    <div className="flex  items-center gap-2">
                        <img src={eng} alt="english" />
                        <span>Englash</span>
                    </div>
                </div>
            </div>

        </div>  
    )
}

export default Header
