import React from 'react';
import './Truck.css';
import { Container, Col, Row } from 'reactstrap';
import DryVan from "../../media/dryvan.jfif"
import StepDuck from "../../media/Step-Deck-Trailer.webp"
import PowerOnly from "../../media/poweronly.jpg"
import HotShot from "../../media/HotShot1.jpg"


function Truck() {
    return (
        <Container>
            <div className='truck-types-wrapper'>
                <div className='truck-heading-section'>
                    <div className='truck-header'>
                        <span className="icon-right-down"></span>
                        <p>Expertise</p>
                    </div>
                    <div className='truck-slogan'>
                        <p>Equipment We have Expertise in. Let's get these rolling!</p>
                    </div>
                </div>
                <div className='truck-types-section'>
                    <Row>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='img-outer'>
                                    <img src={DryVan} alt='' />
                                </div>

                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='truck-name'>
                                    <p>Dry Van</p>
                                </div>
                                <div className='truck-description'>
                                    <p>Secure. Reliable. Every Load, Every Mile. We take pride in the dispatching services we offer via the most adaptable, dry van shipping!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='truck-name'>
                                    <p>Step Deck</p>
                                </div>
                                <div className='truck-description'>
                                    <p>Elevating Transport, One Load at a Time. Our flatbed Step Deck truck dispatchers fulfill particular demands with step decks, drop decks, and flatbed partials.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='img-outer'>
                                    <img src={StepDuck} alt='' />
                                </div>

                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='img-outer'>
                                    <img src={PowerOnly} alt='' />
                                </div>

                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='truck-name'>
                                    <p>Power Only</p>
                                </div>
                                <div className='truck-description'>
                                    <p>Haul with Confidence, We Bring the Muscle. Our power-only truck dispatching solutions fill in gaps to avoid costly delays when needing extra capacity.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='truck-name'>
                                    <p>Hot Shot</p>
                                </div>
                                <div className='truck-description'>
                                    <p>Fast. Flexible. Delivered on Time, Every Time. Perhaps you need a hot shot truck dispatcher for multiple modes of transportation in a supply chain of various equipment.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="1" lg="6" className="col-style">
                            <div className='truck-type-border'>
                                <div className='img-outer'>
                                    <img src={HotShot} alt='' />
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default Truck;