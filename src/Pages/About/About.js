import React, { useEffect, useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"
import "./About.css"
import { Container, Col, Row } from 'reactstrap';



function Home() {
    const startingYear = 2020;
    const perYearMiles = 1000;
    const [countServiceYear, setCountServiceYear] = useState(0);
    const [countServiceMiles, setCountServiceMiles] = useState(0);

    useEffect(() => {
        const tillYear = new Date().getFullYear();
        const Serviceyears = Math.ceil(tillYear - startingYear);
        setCountServiceYear(Serviceyears)
        setCountServiceMiles(Serviceyears * perYearMiles)
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navbar />
            <div className='about-us-wrapper'>
                <div className='we-are-rocking'>
                    <p> we are rocking since 2020!</p>
                </div>
                <div className='movable-text'>
                    <div className='movable-sec'>
                        <span className="icon-high-quality"></span>
                        <p>Quality Services</p>
                    </div>
                    <div className='movable-sec'>
                        <span className="icon-location"></span>
                        <p>+{countServiceMiles}K miles</p>
                    </div>
                    <div className='movable-sec'>
                        <span className="icon-excellence"></span>
                        <p>{countServiceYear} years of excellence</p>
                    </div>
                    <div className='movable-sec'>
                        <span className="icon-leader"></span>
                        <p>Market Leader</p>
                    </div>
                </div>
                <div className='about-market-stallion'>
                    <Container>
                    <div className='about-heading'>
                        <span className="icon-right-down"></span>
                        <p>About Market stallion</p>
                    </div>
                    <div className='about-description'>
                        <p>market stallion is a Professional truck dispatching Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of truck dispatching, with a focus on dependability and services 5000 words. We're working to turn our passion for truck dispatching into a booming online website. We hope you enjoy our truck dispatching as much as we enjoy offering them to you. I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                    </div>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;