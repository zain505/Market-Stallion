import React from 'react';
import './Footer.css';
import { Container, Col, Row, InputGroup, Input, Button } from 'reactstrap';
import GooglePlayApple from "../../media/share_google_play_logo.png"
import Apple from "../../media/apple.png"

function Footer() {

    const goScrollUp = () =>{
        window.scrollTo(0,0)
    }
    return (
        <div className='footer-wrapper'>
            <button className='scroll-top-btn' onClick={goScrollUp}>
                <div className='top-face-arrow'>
                    <div style={{ transform: "rotate(270deg)" }}>
                        <span class="icon-right-arrow"></span>
                    </div>
                </div>
            </button>
            <div className='footer-content'>
                <Container style={{ height: "100%", width: "100%" }}>
                    <Row style={{ height: "100%", width: "100%" }}>
                        <Col sm="1" lg="3" className="col-style">
                            <div className='footer-intro'>
                                <div className='footer-intro-heading'>
                                    <p>Market Stalion</p>
                                </div>
                                <div className='social-media-area-in-footer'>
                                    <div className='social-icon-footer'><span className="icon-instagram"></span></div>
                                    <div className='social-icon-footer'><span className="icon-twitter"></span></div>
                                    <div className='social-icon-footer'><span className="icon-youtube"></span></div>
                                    <div className='social-icon-footer'><span className="icon-facebook-logo-in-circular-shape"></span></div>
                                </div>
                            </div>
                        </Col>
                        <Col sm="1" lg="3" className="col-style">
                            <div className='footer-middle'>
                                <div className='FAQs'>
                                    <p>FAQs</p>
                                </div>
                                <div className='FAQs'>
                                    <p>Fraud Protection</p>
                                </div>
                                <div className='FAQs'>
                                    <p>Safety Certificate</p>
                                </div>
                                <div className='FAQs'>
                                    <p>Guides</p>
                                </div>
                                <div className='FAQs'>
                                    <p>Refund Policy</p>
                                </div>
                                <div className='FAQs'>
                                    <p>Privacy Policy</p>
                                </div>
                                <div className='FAQs'>
                                    <p>Terms of use</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="1" lg="3" className="col-style">
                            <div className='footer-middle'>
                                <div className='subscribe-news'>
                                    <p>Subscribe to Our Newsletter</p>
                                </div>
                                <InputGroup>
                                    <Input placeholder='Email' />
                                    <Button>
                                        Subscribe
                                    </Button>
                                </InputGroup>
                            </div>

                        </Col>
                        <Col sm="1" lg="3" className="col-style">
                            <div className='footer-future'>
                                <div className='luanching'>
                                    <p>Support and downloads</p>
                                </div>
                                <div onClick={()=>window.open("https://play.google.com/store/games?hl=en","_blank")} className='google-play'>
                                    <img src={GooglePlayApple} alt='GooglePlayApple' />
                                </div>
                                <div onClick={()=>window.open("https://www.apple.com/app-store/","_blank")} className='google-play'>
                                    <img src={Apple} alt='GooglePlayApple' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='copy-rights'>
                <p>market stalion Agency. All Rights Reserved.</p>
                <p>Copyrights 2024 - 2030</p>
            </div>
        </div>
    )

}

export default Footer;