import React, { useState } from 'react';
import './Hero.css';
import PlayBack from "../../media/slider.mp4"

import truck_motion_icon from "../../media/truck_motion_icon.gif";
import Navbar from "../Navbar/Navbar"


function Hero() {

    return (
        <>
           
<Navbar/>
            <div className='hero-section'>

                <div className='overlay'>
                    <div className='hero-middle'>
                        <div className='hero-middle-content'>
                            <p className='hero-heading'>
                                Truck Dispatch Services
                            </p>
                            <div className='bussiness-slogan'>
                                <p className='bussiness-slogan-text'>
                                    We provide high-quality freight dispatch service for interstate carriers and fleet owners in the USA and Canada.
                                </p>
                            </div>
                            <button className='dispatch-button'>
                                <div className='dispatch-section'>
                                    <p>
                                        start trucking dispatch
                                    </p>
                                </div>
                                <div className='dispatch-section-button-overlay'>
                                    <p>
                                        start trucking dispatch
                                    </p>

                                    <img src={truck_motion_icon} width={50} height={50} />

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='hero-footer'>
                        <div className='social-and-line'>
                            <div className='social-media-area'>
                                <div className='social-icon'><span className="icon-instagram"></span></div>
                                <div className='social-icon'><span className="icon-twitter"></span></div>
                                <div className='social-icon'><span className="icon-youtube"></span></div>
                                <div className='social-icon'><span className="icon-facebook-logo-in-circular-shape"></span></div>
                            </div>
                            <div className='line'></div>
                        </div>
                    </div>
                </div>
                <video id="video" style={{ objectFit: "cover", width: "100%" }} loop autoPlay muted>
                    <source src={PlayBack} type="video/mp4" />
                </video>
            </div>
        </>
    );
}

export default Hero;