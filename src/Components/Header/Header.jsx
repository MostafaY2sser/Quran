
import facebook from "../../assets/images/iconHeader/facebook.png"
import whatsap from "../../assets/images/iconHeader/whatsap.png"
import youtube from "../../assets/images/iconHeader/youtube.png"
import logo from "../../assets/images/iconHeader/logo.png"


import './header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="headers">

            <div className="topHeader  flex items-center  gap-5 justify-end my-3">
                <div className="icons  flex items-center  gap-3">
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="facebook" />
                    <img src={whatsap} alt="whatsap" />
                </div>
                <button className="globalButton">حجز حصة تجريبية</button>
            </div>

            <div className="bottomHeader">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <NavLink to='/'>الرئيسية</NavLink>
                    <NavLink to='/'>الإجازات</NavLink>
                    <NavLink to='/'>الكورسات</NavLink>
                    <NavLink to='/'>الأسعار</NavLink>
                    <NavLink to='/'>المكتبة</NavLink>
                    <NavLink to='/'>الشيوخ</NavLink>
                    <NavLink to='/'>المدونات</NavLink>
                    <NavLink to='/'>الأسئلة الشائعة</NavLink>
                    <NavLink to='/'>المزيد</NavLink>
                    <NavLink to='/'>تواصل معنا</NavLink>
                </div>
                <div className="left">
                    
                </div>
            </div>

        </div>  
    )
}

export default Header
