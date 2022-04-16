import React from 'react';
import {NavLink} from 'react-router-dom';
import './HotelHero.css';

const HotelHero = () => {
    return (
        <div  className='hotel-hero'>
            <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>Hotels</h1>
            </div>
        </div>
    );
};

export default HotelHero;