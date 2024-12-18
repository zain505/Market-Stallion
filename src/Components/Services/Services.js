import React from 'react';
import './Services.css';
import { Container, Col, Row } from 'reactstrap';


function Services() {
    return (
        <Container style={{marginBottom:150}}>
            <div className='services-outer'>
                <div className='service-heading-section'>
                    <div className='service-heading'>
                        <span className="icon-right-down"></span>
                        <p>Services</p>

                    </div>
                    <div className='service-slogan'>
                        <p>We Simplify Your Routes with Our Truck Dispatching Solutions</p>
                    </div>
                </div>
                <Row>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>Load Searching</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    Find the right loads for your trucks effortlessly.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>Planning</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    Planning is the key to success in the trucking business. Our clients choose Resolute freight dispatch services to feel confident about the future.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>extra mile</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    Our dedicated trucking dispatch team provides unique support and is always ready to walk the extra mile for your company to thrive.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>Rate Negotiation</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    Get the best rates with our expert negotiation skills.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>iou</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    Streamline your billing with our user-friendly invoicing system.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>Support 24/7</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    Our dispatch service is always available, and just a phone call away solves any problem you may face.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>Long-Haul Problem Solving</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                    We’re your partner in overcoming any on-the-road challenges.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="1" lg="3" className="col-style">
                        <div className='service-outer'>
                            <div className='service-inner-heading-text'>
                                <p>IFTA</p>
                            </div>
                            <div className='service-inner-description-text'>
                                <p>
                                Full transparency for you and your customers. Straightforward route to IFTA Fuel Report Compliance
                                </p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </Container>
    )
}
 
export default Services;