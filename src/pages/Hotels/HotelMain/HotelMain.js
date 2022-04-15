import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HotelHero from '../HotelHero/HotelHero';
import Hotels from '../Hotels/Hotels';

const HotelMain = () => {
    return (
        <div>
            <HotelHero></HotelHero>
            <Hotels></Hotels>
            <Footer></Footer>
        </div>
    );
};

export default HotelMain;