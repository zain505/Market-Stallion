import React, { useEffect, useState } from 'react';
import './Experience.css';
import { Container, Col, Row } from 'reactstrap';
import pic1 from "../../media/truck_driver1.png"
import pic2 from "../../media/truck_driver2.png"
import pic3 from "../../media/truck_driver3.jpg"
import pic4 from "../../media/truck_driver4.jpg"

const expericeList = [
    {
        text: "I cannot recommend Truck Dispatch enough! As a small business owner, I rely heavily on transportation services to deliver my goods to market. That's where Market Stallion comes in - their affordable prices and efficient dispatch system have been a game changer for my business. I no longer have to worry about expensive shipping costs cutting into my profits. The team at Truck Dispatch is always professional, reliable, and goes above and beyond to ensure my shipments are delivered on time. I am so grateful for their services and would highly recommend them to anyone in need of reliable and affordable transportation solutions. Thank you, Truck Dispatch, for being a crucial part of my business's success",
        image: pic1,
        designation: "Business Owner",
        Name: "Patrick"
    },
    {
        text: "I have been using Truck Dispatch's services for my business, Market Stallion, and I have been thoroughly impressed with their level of service. From the moment I contacted them, they have been nothing but professional and efficient. Their team is always available to answer any questions or concerns I may have, and they go above and beyond to ensure that my deliveries are made on time. Their attention to detail and dedication to customer satisfaction is truly commendable. I highly recommend Truck Dispatch to anyone in need of reliable and trustworthy trucking services. Thank you for all that you do, Truck Dispatch! You have definitely earned a loyal customer in Market Stallion.",
        image: pic2,
        designation: "Driver",
        Name: "Nick"
    },
    {
        text: "Market Stallion, and I must say, I am thoroughly impressed. Their way of handling tasks is simply exceptional. From the moment I contacted them, they have been nothing but professional and efficient. They understand the importance of timely deliveries and have never failed to meet my expectations. Their team is always available to answer any questions or concerns I may have, making the entire process smooth and stress-free. I highly recommend Truck Dispatch to anyone in need of reliable and top-notch dispatch services. Thank you, Truck Dispatch, for your outstanding work!",
        image: pic3,
        designation: "Driver",
        Name: "Nila"
    },
    {
        text: "market stallion provides exceptional services that exceed our expectations every time. We love working with them and highly recommend their expertise.",
        image: pic4,
        designation: "Business Owner",
        Name: "Singh Paaji & Co"
    },
]


function MakeLifeEasier() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [ImageReturn, setImageReturn] = useState(expericeList[0]);

    const renderImage = (param) => {
        if (param == "+") {
            if (currentIndex == (expericeList.length - 1)) {
                return;
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        } else if (param == "-") {
            if (currentIndex == 0) {
                return;
            } else {
                setCurrentIndex(currentIndex - 1);
            }
        }
    }

    useEffect(() => {
        setImageReturn(expericeList[currentIndex])
    }, [currentIndex])

    return (
        <>
            <div className='experience-section'>
                <Container >
                    <div className='exp-heading-section'>
                        <div className='exp-heading'>
                            <span className="icon-right-down"></span>
                            <p>satisfied clients share their experience</p>

                        </div>
                        <div className='exp-slogan'>
                            <p>hear from our customers</p>
                        </div>
                    </div>
                    <div className='exp-heading-section-mob'>
                        <div className='exp-heading'>
                            <span className="icon-right-down"></span>
                            <p>satisfied clients</p>

                        </div>
                    </div>
                    <div className='experience-inner'>
                        <div className={currentIndex == 0 ? "hide-arrow" : 'left-arrow'} >
                            <span onClick={() => renderImage("-")} className="icon-left-arrow"></span>
                        </div>
                        <div className='content'>
                            <div className='content-left'>
                                <img src={ImageReturn.image} alt={ImageReturn.image}
                                    height={"100%"}
                                    width={"100%"}
                                />
                            </div>
                            <div className='content-right'>
                                <div className='quote'>
                                    <span class="icon-quotation"></span>
                                </div>
                                <div className='text'>
                                    <p>{ImageReturn.text}</p>
                                </div>
                                <div className='who'>
                                    <p>{ImageReturn.Name}-<span>{ImageReturn.designation}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={currentIndex == (expericeList.length - 1) ? "hide-arrow" : 'right-arrow'}>
                            <span onClick={() => renderImage("+")} className="icon-right-arrow1"></span>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    )

}

export default MakeLifeEasier;