import React, { useState, useRef } from 'react';
import './Navbar.css';
import { Container, Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Logo from "../../media/MARKET STALION.png"


function Navbar() {
    const navigate = useNavigate();
    const mobileView = useRef(null);
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const openMobileViewNavbar = () => {

        window.scroll(0, 0)
        setOpenMobileMenu(!openMobileMenu)
    }

    const navigatePages = (param) => {
        navigate(param);
    }
    return (
        <>
            {
                openMobileMenu && <div className='mobile-menu-outer' ref={mobileView}>
                    <div onClick={openMobileViewNavbar} className='mobile-cross'>
                        <p>x</p>
                    </div>
                    <div className='mobile-menu-section'>
                        <ul className='mobile-menu-items-list'>
                            <li onClick={() => navigatePages("/")}>Home</li>
                            <li onClick={() => navigatePages("/services")}>services</li>
                            <li onClick={() => navigatePages("/price&plans")}>prices & plans</li>
                            <li onClick={() => navigatePages("/why-we-rock")}>Why we rock!</li>
                            <li onClick={() => navigatePages("/courses")}>dispatcher courses</li>
                            <li onClick={() => navigatePages("/join-us")}>Join Us</li>
                        </ul>
                    </div>
                    <div className='mobile-menu-bottom'>
                        <div className='text-outer-bottom'>
                            <p>info@marketstalion.com</p>
                        </div>
                        <div className='text-outer-bottom'>
                            <p onClick={() => window.open("tel:+1(512)-200-2709")}>+1(512)-200-2709</p>
                        </div>
                        <div className='text-outer-bottom'>
                            <p>FAQ'S</p>
                        </div>
                    </div>
                </div>
            }
            <div className='navbar-outer'>
                <div className='navbar'>
                    <div onClick={() => navigatePages("/")} className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='menu-items'>
                        <ul className='menu-items-list'>
                            <li onClick={() => navigatePages("/")}>Home</li>
                            <li onClick={() => navigatePages("/services")}>services</li>
                            <li onClick={() => navigatePages("/price&plans")}>prices & plans</li>
                            <li onClick={() => navigatePages("/why-we-rock")}>Why we rock!</li>
                            <li onClick={() => navigatePages("/courses")}>dispatcher courses</li>
                            <li onClick={() => navigatePages("/join-us")}>Join Us</li>
                        </ul>
                    </div>
                    <div className='phone'>
                        <p onClick={() => window.open("tel:+1(512)-200-2709")}>{"+1(512)-200-2709"}</p>
                    </div>
                    <div className='burger-btn' onClick={openMobileViewNavbar}>
                        <span class="icon-menu"></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;