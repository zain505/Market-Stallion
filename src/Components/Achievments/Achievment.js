import React from 'react';
import './Achievment.css';
import { Container, Col, Row } from 'reactstrap';


function Achievment() {
    return (
        <div className='achievment-wrapper'>
            <Container style={{ paddingTop: 10 }}>  
                <div className='achievment-outer'>
                    <div className='achievment-heading'>
                        <div className='yellow-line'></div>
                        <div className='achievment-heading-text'>
                            <p>numbers tell the Story!</p>
                        </div>
                    </div>
                    <div className='achiev-numbers'>
                        <Row>
                            <Col md="1" lg="4" className="col-style">
                                <div className='achiev-sec-outer'>
                                    <p className='number'><span style={{ color: "#ffeb3b" }}>+</span>700k</p>
                                    <p className='achiev-type'>Loads booked</p>
                                </div>
                            </Col>
                            <Col md="1" lg="4" className="col-style">
                                <div className='achiev-sec-outer'>
                                    <p className='number'><span style={{ color: "#ffeb3b" }}>+</span>500k</p>
                                    <p className='achiev-type'>Happy Clients</p>
                                </div>
                            </Col>
                            <Col md="1" lg="4" className="col-style">
                                <div className='achiev-sec-outer'>
                                    <p className='number'><span style={{ color: "#ffeb3b" }}>+</span>58</p>
                                    <p className='achiev-type'>Mln Lbs Dispatched</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Achievment;