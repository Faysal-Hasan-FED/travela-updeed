import React from 'react';
import { Animated } from 'react-animated-css';
import { NavLink } from 'react-router-dom';
import './ContactHero.css';

const ContactHero = () => {
    return (
        <div  className='contact-hero'>
        <Animated animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
        <div className='text-center'>
        <NavLink className="link" to="/home">Home</NavLink>
        <h1 className='hero-slogan text-white'>Contact Us</h1>
        </div>
        </Animated>
    </div>
    );
};

export default ContactHero;