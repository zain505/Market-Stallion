import React, { useEffect } from 'react';
import "./Courses.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import DispatchBanner from "../../media/dispatch_banner.jpg";
import { Container, Col, Row } from 'reactstrap';
import Check from "../../media/CHECK_MARK.gif"


function Home() {
    const staticMessage = "Hello i wanna make $$$. please help me to start my business"
    const sendWhatsAppMessage = () => {
        window.open(`https://api.whatsapp.com/send?phone=12092835757&text=${staticMessage}`, "_blank");
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navbar />
            <div className='courses-dispatch-wrapper'>
                <div className='courses-outer'>
                    <div className='courses-inner-wrap'>
                        <div className='trainig-title-section'>
                            <p>training</p>
                        </div>
                        <div className='trainig-desc-section'>
                            <p className='wanna-make-dollars'>wanna make $$$</p>
                            <div className='course-explain'>
                                <p className='our-course'>Welcome to our training section. our comprehensive course / Training by market experts will ultimately lead you to start your own business within months. our training session will cover everything from principles of management to loads and cargo driver's psychology. </p>
                            </div>
                            <button onClick={sendWhatsAppMessage} className='training-btn'>Enroll Now</button>
                        </div>
                    </div>
                    <Container >
                        <div className='course-detailed-section'>
                            <div className='course-detailed-section-title'>
                                <div className='course-wrapper'>
                                    <span className="icon-right-down"></span>
                                    <p>course outlines</p>
                                </div>
                            </div>
                            <Row>
                                <Col md="12" lg="12" className="col-style">
                                    <div className='course-outer'>
                                        <Row style={{ height: "100%" }}>
                                            <Col md="12" lg="4" className="col-style">
                                                <div className='check-section'>
                                                    <div className='check-wrapper'>
                                                        <img height={"100%"} width={"100%"} src={Check} alt='Check' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="12" lg="8" className="col-style">
                                                <div className='course-detail-outer'>
                                                    <div className='course-headlines-outer'>
                                                        <p>Trainig by market experts</p>
                                                    </div>
                                                    <div className='course-description-outer'>
                                                        <p>market stalion is market leader in truck dispatch service company with multiple offices on
                                                            the globe having vast experience on truck dispatching. our mission is to provide truck dispatch
                                                            services more safely and digitally. our top order experts will guide you thoroughly and pick you from zero to hero.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="12" lg="12" className="col-style">
                                    <div className='course-outer'>
                                        <Row style={{ height: "100%" }}>
                                            <Col md="12" lg="4" className="col-style">
                                                <div className='check-section'>
                                                    <div className='check-wrapper'>
                                                        <img height={"100%"} width={"100%"} src={Check} alt='Check' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="12" lg="8" className="col-style">
                                                <div className='course-detail-outer'>
                                                    <div className='course-headlines-outer'>
                                                        <p>Real-World Applications</p>
                                                    </div>
                                                    <div className='course-description-outer'>
                                                        <p>action speaks louder than words. unlike academic learning, experts-lead trainig focus on real world scenarios,
                                                            case studies, and best practise. Participants can learn how to apply market strategies in real-time, overcoming common challenges.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="12" lg="12" className="col-style">
                                    <div className='course-outer'>
                                        <Row style={{ height: "100%" }}>
                                            <Col md="12" lg="4" className="col-style">
                                                <div className='check-section'>
                                                    <div className='check-wrapper'>
                                                        <img height={"100%"} width={"100%"} src={Check} alt='Check' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="12" lg="8" className="col-style">
                                                <div className='course-detail-outer'>
                                                    <div className='course-headlines-outer'>
                                                        <p>Industry-Specific Knowledge</p>
                                                    </div>
                                                    <div className='course-description-outer'>
                                                        <p>Market experts bring deep insights into specific industries, such as finance, marketing, technology, or real estate. They provide practical, hands-on knowledge that is difficult to obtain from textbooks or theoretical learning.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="12" lg="12" className="col-style">
                                    <div className='course-outer'>
                                        <Row style={{ height: "100%" }}>
                                            <Col md="12" lg="4" className="col-style">
                                                <div className='check-section'>
                                                    <div className='check-wrapper'>
                                                        <img height={"100%"} width={"100%"} src={Check} alt='Check' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="12" lg="8" className="col-style">
                                                <div className='course-detail-outer'>
                                                    <div className='course-headlines-outer'>
                                                        <p>Training on real cargo</p>
                                                    </div>
                                                    <div className='course-description-outer'>
                                                        <p>
                                                            our online truck dispatcher training program offers a unique opportunity to gain hands-on experience in communicating with brokers and drivers. We're committed to developing true professionals in the field, and our program is designed to teach you how to secure great loads and efficiently manage your drivers' routes.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="12" lg="12" className="col-style">
                                    <div className='course-outer'>
                                        <Row style={{ height: "100%" }}>
                                            <Col md="12" lg="4" className="col-style">
                                                <div className='check-section'>
                                                    <div className='check-wrapper'>
                                                        <img height={"100%"} width={"100%"} src={Check} alt='Check' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="12" lg="8" className="col-style">
                                                <div className='course-detail-outer'>
                                                    <div className='course-headlines-outer'>
                                                        <p>Risk Management and Strategy</p>
                                                    </div>
                                                    <div className='course-description-outer'>
                                                        <p>
                                                            Market experts teach risk management techniques, helping participants identify potential market risks and develop strategies to mitigate them. This is especially important in volatile sectors like financial markets or tech startups.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;