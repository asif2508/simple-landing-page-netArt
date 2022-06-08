import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import trophy from '../asserts/1.png';
import logo from '../asserts/logo.png';
import prize from '../asserts/2.png';
import machines from '../asserts/3.png';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='mb-5'>
                <Container>
                    <div className='banner'>
                        <Row className='gy-2'>
                            <Col xs={12} md={4} lg={4}>
                                <Image className='img-style' src={trophy} ></Image>
                            </Col>
                            <Col xs={12} md={8} lg={8}>
                                <div className='d-flex flex-column justify-content-start align-items-start'>
                                    <div>
                                        <Image src={logo} height={100} width={300}></Image>
                                    </div>
                                    <div className='text-start'>
                                        <p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                                        <ul>
                                            <li><small>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</small></li>
                                            <li><small>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</small> </li>
                                        </ul>
                                    </div>
                                    <div className='pt-2 pb-2 ps-3 pe-3'>
                                        <Image src={prize} fluid></Image>
                                    </div>
                                    <div className='text-start'>
                                        <p><small>Government of India has awarded the <span className='fw-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</small></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
            <div className='details-section'>
                <Container fluid>
                    <div className=''>
                        <p className='details-heading'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                    </div>
                </Container>
                <Container>
                    <div className='ps-3 p-3'>
                        <Image src={machines} fluid></Image>
                    </div>
                    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </Container>
                <Container fluid>
                    <div className='hr-style'></div>
                </Container>
                <Container>
                    <div className='mt-3 mb-3'>
                    <p className='fw-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                    <p><small>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</small></p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;