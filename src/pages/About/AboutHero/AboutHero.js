import React from 'react';
import {NavLink} from 'react-router-dom'
import './AboutHero.css';

const AboutHero = () => {
    return (
        <div  className='about-hero'>
            <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>About Us</h1>
            </div>
        </div>
    );
};

export default AboutHero;