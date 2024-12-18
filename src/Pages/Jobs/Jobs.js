import React, { useEffect, useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"
import "./Jobs.css"
import { Container, Col, Row } from 'reactstrap';
import USA_Canda_Map from "../../media/usa_map.jpg"



function Jobs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <div className='jobs-us-wrapper'>
                <div className='jobs-parallax'>
                    <div className='jobs-parallax-inner'>
                        <Container>
                            <div className='jobs-parallax-text'>
                                <p>Be a part  of something <span style={{ backgroundColor: "black", opacity: 0.7 }}>great</span></p>
                            </div>
                            <div className='jobs-parallax-text'>
                                <p>something <span style={{ backgroundColor: "black", opacity: 0.7 }}>Different</span></p>
                            </div>
                        </Container>
                    </div>
                </div>
                <Container>
                    <div className='jobs'>
                        <div className='point-section'>
                            <div className='point-heading'>
                                <p>We Provide Truck Dispatch Service to Truckers Across All States in USA and canada</p>
                            </div>
                            <div className='point-description'>
                                <img src={USA_Canda_Map} alt='USA_Canda_Map' height={"100%"} width={"100%"} />
                            </div>
                        </div>
                        <div className='point-section'>
                            <div className='point-heading'>
                                <p>Leading Truck Dispatch Service Company of Choice for Many Owner Operators in USA</p>
                            </div>
                            <div className='point-description'>
                                <Row>
                                    <Col md="1" lg="3" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span className="icon-hand"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>Negotiate Best Loads for Our Clients</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="1" lg="3" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span className="icon-setup"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>Superb Back Office Support</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="1" lg="3" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span className="icon-7"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>dedicated support team 24/7</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="1" lg="3" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span class="icon-delivery"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>Safety and assurance</p>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <hr style={{color:"#ffeb3b",marginBottom:"150px"}}/>
                        <div className='point-section'>
                            <div className='point-heading'>
                                <p>Grow your business with our professional team</p>
                            </div>
                            <div className='point-description'>
                                <Row>
                                    <Col md="1" lg="4" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span className="icon-mail-recipient"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>Email Us</p>
                                                <p className='communication-text'>info@marketstalion.com</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="1" lg="4" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span className="icon-whatsapp"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>WhatsApp</p>
                                                <p className='communication-text'>+1(209)-283-5757</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="1" lg="4" className="col-style">
                                        <div className='choice-outer'>
                                            <div className='choice-icon-sec'>
                                                <span className="icon-mail-recipient"></span>
                                            </div>
                                            <div className='choice-text-sec'>
                                                <p className='choice-text'>Dispatch manager</p>
                                                <p className='communication-text'>brian.rrls001@gmail.com</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
            <Footer />
        </>
    );
}

export default Jobs;