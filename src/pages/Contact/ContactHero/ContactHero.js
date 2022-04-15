import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContactHero.css';

const ContactHero = () => {
    return (
        <div  className='contact-hero'>
        <div className='text-center'>
        <NavLink className="link" to="/home">Home</NavLink>
        <h1 className='hero-slogan text-white'>Contact Us</h1>
        </div>
    </div>
    );
};

export default ContactHero;