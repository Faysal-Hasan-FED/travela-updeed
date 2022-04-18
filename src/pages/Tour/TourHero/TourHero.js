import React from 'react';
import { Animated } from 'react-animated-css';
import {NavLink} from 'react-router-dom';
import './TourHero.css';

const TourHero = () => {
    return (
        <div  className='tour-hero'>
            <Animated animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
            <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>Destinations</h1>
            </div>
            </Animated>
        </div>
    );
};

export default TourHero;