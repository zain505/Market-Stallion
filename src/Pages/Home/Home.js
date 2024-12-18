import React, { useEffect } from 'react';
import Hero from "../../Components/HeroSection/Hero";
import Services from "../../Components/Services/Services";
import Achievment from "../../Components/Achievments/Achievment";
import Truck from "../../Components/Trucks/Truck";
import MakeLifeEasier from "../../Components/MakeLifeEasier/MakeLifeEasier";
import JoinTeam from "../../Components/JoinTeam/JoinTeam";
import Experience from "../../Components/ClientsExperince/Experience";
import Training from "../../Components/Training/Training";
import Footer from "../../Components/Footer/Footer";



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Hero />
            <Services />
            <Truck />
            <Achievment />
            <MakeLifeEasier/>
            <JoinTeam/>
            <Experience/>
            <Training/>
            <Footer/>
        </>
    );
}

export default Home;