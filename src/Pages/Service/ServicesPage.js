import React, { useEffect } from 'react';
import "./ServicesPage.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { Container, Col, Row } from 'reactstrap';


function ServicesPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navbar />
            <div className='service-page-wrapper'>
                <div className='service-page-intro'>
                    <div className='service-overlay'>
                        <div className='text-content'>
                            <div className='text-header'>
                                <p>Our Services</p>
                            </div>
                            <div className='text-description'>
                                <p>We Simplify Your Routes with Our Truck Dispatching Solutions
                                    market stallion is a Professional truck dispatching Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of truck dispatching, with a focus on dependability and services 5000 words. We're working to turn our passion for truck dispatching into a booming online website. We hope you enjoy our truck dispatching as much as we enjoy offering them to you. I will keep posting more important posts on my Website for all of you. Please give your support and love.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='services-section-wrapper'>
                    <Container fluid>
                        <div className='service-detail-title'>
                            <p>you can count on us</p>
                        </div>
                        <Row>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='rate-negotiate'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>Rate Negotiation</p>

                                                    <p className='text2'>Get the best rates with our expert negotiation skills.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>Rate Negotiation</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='loading-search'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>Load Searching</p>

                                                    <p className='text2'>Find the right loads for your trucks effortlessly.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>Load Searching</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='planning'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>Planning</p>

                                                    <p className='text2'>Planning is the key to success in the trucking business. Our clients choose Resolute freight dispatch services to feel confident about the future.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>Planning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='extra-mile'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>extra mile</p>

                                                    <p className='text2'>Our dedicated trucking dispatch team provides unique support and is always ready to walk the extra mile for your company to thrive.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>extra mile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='iou'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>iou</p>

                                                    <p className='text2'>Streamline your billing with our user-friendly invoicing system.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>iou</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='support'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>Support 24/7</p>

                                                    <p className='text2'>Our dispatch service is always available, and just a phone call away solves any problem you may face.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>Support 24/7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='problem-solving'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>Long-Haul Problem Solving</p>

                                                    <p className='text2'>We’re your partner in overcoming any on-the-road challenges.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>Long-Haul Problem Solving</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className='service-detail-outer'>
                                    <div className='ifta'>
                                        <div className='hover-overlay-content'>
                                            <div className='overlay-content-left'>
                                                <div className='overlay-content-left-text'>

                                                    <p className='text1'>IFTA</p>

                                                    <p className='text2'>Full transparency for you and your customers. Straightforward route to IFTA Fuel Report Compliance.</p>

                                                </div>
                                            </div>
                                            <div className='overlay-content-right'></div>
                                        </div>
                                        <div className='service-detail-overlay'>
                                            <div className='detail-main-text'>
                                                <p>IFTA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ServicesPage;