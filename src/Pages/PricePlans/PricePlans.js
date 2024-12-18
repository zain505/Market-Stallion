import React, { useEffect } from 'react';
import "./PricePlans.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { Container, Col, Row, Table } from 'reactstrap';
import Yes from "../../media/yes.png"
import No from "../../media/no.png"


function PricePlans() {

    const tableContent = [
        {
            text: "Power Only",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "200 $ (3%)",
            offerTypeTextStandard: "250 $ (4%)",
            offerTypeTextPremium: "300 $ (5%)"
        },
        {
            text: "Dry van",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "200 $ (3%)",
            offerTypeTextStandard: "250 $ (4%)",
            offerTypeTextPremium: "300 $ (5%)"
        },
        {
            text: "Reffer",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "200 $ (3%)",
            offerTypeTextStandard: "250 $ (4%)",
            offerTypeTextPremium: "300 $ (5%)"
        },
        {
            text: "Flatbed",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "200 $ (3%)",
            offerTypeTextStandard: "250 $ (4%)",
            offerTypeTextPremium: "300 $ (5%)"
        },
        {
            text: "stepdeck",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "200 $ (3%)",
            offerTypeTextStandard: "250 $ (4%)",
            offerTypeTextPremium: "300 $ (5%)"
        },
        {
            text: "Box Truck",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "250 $ (7%)",
            offerTypeTextStandard: "300 $ (8%)",
            offerTypeTextPremium: "350 $ (10%)"
        },
        {
            text: "Hot Shot",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "250 $ (7%)",
            offerTypeTextStandard: "300 $ (8%)",
            offerTypeTextPremium: "350 $ (10%)"
        },
        {
            text: "You’re the Boss!",
            basic: true,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "No Forced Dispatch",
            basic: true,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Payload & FSC = 100% Yours",
            basic: true,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "@We Negotiate Top Paying Rates",
            basic: true,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Credit Checks",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "restricted",
            offerTypeTextStandard: "restricted",
            offerTypeTextPremium: "infinite"
        },
        {
            text: "Setup Paperwork",
            basic: true,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Fax/Email Documents",
            basic: true,
            standard: true,
            premium: true,
            offerType: "text",
            offerTypeTextBasic: "restricted",
            offerTypeTextStandard: "restricted",
            offerTypeTextPremium: "infinite"
        },
        {
            text: "Personal Dispatcher",
            basic: false,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Request Quick Pay",
            basic: false,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Request Fuel Advances",
            basic: false,
            standard: true,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "24/7 Dispatch Support",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Request Insurance Certificates",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Driver Directions Assistance",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Negotiate Quick Pay Rates",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Factor Setup Assistance",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Collection Assistance",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Request Insurance Certificates",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Detention Charges Assistance",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
        {
            text: "Unused Truck Order Assistance",
            basic: false,
            standard: false,
            premium: true,
            offerType: "Boolean"
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const staticMessage = "Hi, i am intrested in purchasing plan";
    const sendWhatsAppMessage = (planType) => {
        let newText = `Hi, i am intrested in purchasing ${planType == "B" ? "Basic" : planType == "S" ? "Standard" : "Premium"} plan`
        window.open(`https://api.whatsapp.com/send?phone=12092835757&text=${newText}`, "_blank");
    }
    return (
        <>
            <Navbar />
            <div className='priceplans-wrapper'>
                <div className='price-plan-header-wrapper'>
                    <div className='header-priceplans'>
                        <span className="icon-right-down"></span>
                        <p>pricing</p>
                    </div>
                    <div className='slogan-priceplans'>
                        <p>We offer a clear and honest pricing model, with no hidden fees or surprise costs.</p>
                    </div>
                </div>
                <Container fluid>
                    <div className='pricing-table'>

                        <Table dark responsive hover size='lg'>
                            <thead>
                                <tr>
                                    <th>
                                        Pricing & Packages
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        Basic
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        Standard
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        Premium
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableContent.map(content => {
                                        return (
                                            <tr>
                                                <td >
                                                    <span className='pricing-table-text'>{content.text}</span>
                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    {
                                                        content.offerType == "Boolean" ?
                                                            <img src={content.basic ? Yes : No} alt={content.basic ? Yes : No} height={25} width={25} />
                                                            : <span className='pricing-table-text'>{content.offerTypeTextBasic}</span>
                                                    }

                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    {
                                                        content.offerType == "Boolean" ?
                                                            <img src={content.standard ? Yes : No} alt={content.basic ? Yes : No} height={25} width={25} />
                                                            : <span className='pricing-table-text'>{content.offerTypeTextStandard}</span>
                                                    }

                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    {
                                                        content.offerType == "Boolean" ?
                                                            <img src={content.premium ? Yes : No} alt={content.basic ? Yes : No} height={25} width={25} />
                                                            : <span className='pricing-table-text'>{content.offerTypeTextPremium}</span>
                                                    }

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td >
                                        <span className='pricing-table-text'></span>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <button onClick={() => sendWhatsAppMessage("B")} className='training-btn'>Buy Basic</button>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <button onClick={() => sendWhatsAppMessage("S")} className='training-btn'>Buy Standard</button>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <button onClick={() => sendWhatsAppMessage("P")} className='training-btn'>Buy Premium</button>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default PricePlans;