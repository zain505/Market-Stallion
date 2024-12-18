import React from 'react';
import './JoinTeam.css';
import { Container, Col, Row } from 'reactstrap';
import Operator from "../../media/operator.jpeg"
import { useNavigate } from 'react-router-dom';

function MakeLifeEasier() {
    const navigate = useNavigate();
    return (
        <Container>
            <div className='join-our-team-wrapper'>
                <Row>
                    <Col xs="12" md="1" lg="6" className="col-style">
                        <div className='join-team-text'>
                            <div className='join-team-heading'>
                                <p>towards success</p>
                            </div>
                            <div className='join-team-description'>
                                <p>Join our family and become part of a supportive, welcoming community where everyone works together towards success. Whether you're a customer, team member, or partner, you’ll feel right at home with us. We believe in creating strong, lasting relationships, built on trust, collaboration, and shared values. Together, we can achieve great things while supporting each other every step of the way.</p>
                            </div>
                            <div className='join-team-btn'>
                                <button onClick={()=>navigate("/join-us")} className='team-join-btn'>
                                    <p>Join Us</p>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md="1" lg="6" className="col-style">
                        <div className='join-team-pic'>
                            <div className='operator-img'>
                                <img src={Operator} alt='Operator' height={"100%"} width={"100%"} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )

}

export default MakeLifeEasier;