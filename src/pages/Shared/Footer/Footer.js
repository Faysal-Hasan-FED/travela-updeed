import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';


const Footer = () => {
    // font awesome icons
    const location = <FontAwesomeIcon icon={faLocationDot} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
//    cant find facebook , twitter , instagram icons in font awesome 
    
  
    

    return (
            <div className='footer-container py-5'>
                <Container >
        <Row>
    <Col xs={12} md={3} >
        <h4 className="footer-title" >Travela</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokapa and Consonantia, there pve the bpnd texts.</p>
        {/* icons missing twitter , facebook , instagram , cant find so used normal font awesome */}
       
        <span >
        <i className="fa-brands icon  fa-facebook me-3"></i>
        <i className="fa-brands icon  fa-twitter me-3"></i>
        <i className="fa-brands icon fa-instagram"></i>
        </span>

    </Col>
    <Col xs={12} md={3}>
        <h4 className="footer-title">Information</h4>
       
                <p><a href="#" className="py-1 d-block">About</a></p>
                <p><a href="#" className="py-1 d-block">Service</a></p>
                <p><a href="#" className="py-1 d-block">Terms and Conditions</a></p>
                <p><a href="#" className="py-1 d-block">Become a partner</a></p>
                <p><a href="#" className="py-1 d-block">Best Price Guarantee</a></p>
                <p><a href="#" className="py-1 d-block">Privacy and Popcy</a></p>
              
    </Col>
    <Col xs={12} md={3}>
    <h4 className="footer-title" >Customer Support</h4>
              
                <p><a href="#" className="py-1 d-block">FAQ</a></p>
                <p><a href="#" className="py-1 d-block">Payment Option</a></p>
                <p><a href="#" className="py-1 d-block">Booking Tips</a></p>
                <p><a href="#" className="py-1 d-block">How it works</a></p>
                <p><a href="#" className="py-1 d-block">Contact Us</a></p>
              
    </Col>
    <Col xs={12} md={3}>
    <h4 className="footer-title">Have a Question?</h4>
            	<div>
	             
	                <p> {location} <span className="text ms-3">203 Fake St. Mountain View, San Francisco, Capfornia, USA</span></p>
	                <p><a href="#"> {phone}  <span className='ms-3'>+2 392 3929 210</span></a></p>
	                <p><a href="#"> {email}<span className='ms-3'>info@yourdomain.com</span></a></p>
	             
	            </div>
    </Col>
  </Row>
  <p className='text-center py-3'>
  Copyright &copy; 2022 All rights reserved | This template is made with <i className="fa-solid fa-heart "></i> by Travela
  </p>
</Container>
            </div>
       
        
    );
};

export default Footer;