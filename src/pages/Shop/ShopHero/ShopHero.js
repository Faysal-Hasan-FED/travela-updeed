import React from 'react';
import { Animated } from 'react-animated-css';
import { NavLink } from 'react-router-dom';
import './ShopHero.css';

const ShopHero = () => {
    return (
        <div  className='shop-hero'>
             <Animated animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
             <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>Amazing Shop</h1>
            </div>
             </Animated>
        </div>
    );
};

export default ShopHero;