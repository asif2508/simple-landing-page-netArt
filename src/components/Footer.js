import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-style'>
            <div className='d-flex align-items-center'>
                <p><FontAwesomeIcon className='me-2' icon={faPhone}></FontAwesomeIcon></p>
                <p>Toll Free 1800 200 1234</p>
            </div>
            <div  className='d-flex align-items-center'>
                <p><FontAwesomeIcon className='me-2' icon={faFacebook}></FontAwesomeIcon></p>
                <p>www.facebook.com/cripumps</p>
            </div>
            
            <div className='d-flex align-items-center'>
                <p><FontAwesomeIcon className='me-2' icon={faFirefoxBrowser}></FontAwesomeIcon></p>
                <p>www.crigroups.com</p>
            </div>
        </div>
    );
};

export default Footer;