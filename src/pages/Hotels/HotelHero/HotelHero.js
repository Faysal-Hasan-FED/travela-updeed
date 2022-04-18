import React from 'react';
import { Animated } from 'react-animated-css';
import {NavLink} from 'react-router-dom';
import './HotelHero.css';

const HotelHero = () => {
    return (
        <div  className='hotel-hero'>
             <Animated animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
             <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>Hotels</h1>
            </div>
             </Animated>
        </div>
    );
};

export default HotelHero;