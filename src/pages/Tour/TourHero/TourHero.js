import React from 'react';
import {NavLink} from 'react-router-dom';
import './TourHero.css';

const TourHero = () => {
    return (
        <div  className='tour-hero'>
            <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>Destinations</h1>
            </div>
        </div>
    );
};

export default TourHero;