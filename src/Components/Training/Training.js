import React from 'react';
import './Training.css';
import { Container, Col, Row } from 'reactstrap';
import truck from "../../media/3dtruck.jpg"
import { useNavigate } from 'react-router-dom';


function Training() {
    const navigate = useNavigate();
    return (

        <Container>
            <div className='training-wrapper'>
                <Row>
                    <Col md="1" lg="6" className="col-style">
                        <div className='training-text'>
                            <div className='heading-training'>
                                <p>Become a dispatcher & Start Earning $$</p>

                            </div>
                            <div className='description-training'>
                                <p>our Truck dispatching course will provide a comprehensive overview and in depth knowledge of all of key areas of truck dispatching.</p>
                            </div>
                            <div>
                                <button onClick={()=>navigate("/courses")} className='training-btn'>
                                    <p>Dispatch Training</p>
                                </button>
                            </div>


                        </div>
                    </Col>
                    <Col md="1" lg="6" className="col-style">
                        <div className='training-truck-img'>

                            <img src={truck} alt="truck" height={"100%"} width={"100%"} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default Training;