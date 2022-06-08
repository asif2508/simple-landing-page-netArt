import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import trophy from '../asserts/1.png';
import logo from '../asserts/logo.png';
import prize from '../asserts/2.png';
import './Home.css';
const Home = () => {
    return (
        <div>
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
                                <div  className='text-start'>
                                    <p><small>Government of India has awarded the <span className='fw-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</small></p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Home;