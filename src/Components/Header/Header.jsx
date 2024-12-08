


import { useState, useRef } from "react";
import facebook from "../../assets/images/iconHeader/facebook.png";
import whatsap from "../../assets/images/iconHeader/whatsap.png";
import youtube from "../../assets/images/iconHeader/youtube.png";
import logo from "../../assets/images/iconHeader/logo.png";
import eng from "../../assets/images/iconHeader/eng.png";
import wish from "../../assets/images/iconHeader/wish.png";
import cart from "../../assets/images/iconHeader/cart.png";
import './header.css';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';




const Header = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linksRef = useRef(null); // Reference to the links container

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };


    return (
        <div className="headers">
            <div className="topHeader flex items-center gap-2 md:gap-5 justify-end mt-2 md:mt-4">
                <div className="icons flex items-center gap-1 md:gap-3">
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="facebook" />
                    <img src={whatsap} alt="whatsap" />
                </div>
                <Link to="/TrialSession">
                    <button className="globalButton px-[10px] py-[8px]">حجز حصة تجريبية</button>
                </Link>
            </div>

            <div className="bottomHeader flex items-center justify-between">
                <Link to="/" className="logo">
                    <img className="w-[70px] md:w-[100px] lg:w-[150px]" src={logo} alt="" />
                </Link>
                <div ref={linksRef} className={`links flex items-center justify gap-6 ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/">الرئيسية</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/egazatpage">الإجازات</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/coursesPage">الكورسات</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/pricingpage">الأسعار</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/ItsLibrary">المكتبة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/elsheikhs">الشيوخ</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/blogs">المدونات</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/commonQuestions">الأسئلة الشائعة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/about">المزيد</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/contact">تواصل معنا</NavLink>
                </div>
                <div className="left flex items-center gap-2 md:gap-5">
                    <Link to='/wishList'>
                        <img src={wish} alt="wish" />
                    </Link>
                    <Link to="/shoppingCart">
                        <img src={cart} alt="shopping-cart" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <img src={eng} alt="english" />
                        <span  className="hidden md:block">Englash</span>
                    </div>
                    {!isMenuOpen && (
                            <FontAwesomeIcon
                                className="showBar"
                                icon={faBars}
                                onClick={toggleMenu}
                            />
                        )}                    
                    {isMenuOpen && (
                            <FontAwesomeIcon
                                className="close"
                                icon={faTimes}
                                onClick={toggleMenu}
                            />
                        )}                
                </div>
            </div>
        </div>
    );
};

export default Header;










