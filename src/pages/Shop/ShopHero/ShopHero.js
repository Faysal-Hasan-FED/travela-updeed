import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShopHero.css';

const ShopHero = () => {
    return (
        <div  className='shop-hero'>
            <div className='text-center'>
            <NavLink className="link" to="/home">Home</NavLink>
            <h1 className='hero-slogan text-white'>Amazing Shop</h1>
            </div>
        </div>
    );
};

export default ShopHero;