import React from 'react';
import Hotels from '../../Hotels/Hotels/Hotels';
import Footer from '../../Shared/Footer/Footer';
import TourHero from '../TourHero/TourHero';

const Tour = () => {
    return (
        <div>
            <TourHero></TourHero>
            <Hotels></Hotels>
            <Footer></Footer>
        </div>
    );
};

export default Tour;