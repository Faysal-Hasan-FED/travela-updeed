import React from 'react';
import Blogs from '../Blogs/Blogs';
import ChooseAndTestimonials from '../ChooseAndTestimonials/ChooseAndTestimonials';
import Facts from '../Facts/Facts';
import NewsLetter from '../NewsLetter/NewsLetter';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';
import Restaurants from '../Restaurants/Restaurants';
import Hero from '../Hero/Hero/Hero';
import HomeServices from '../HomeServices/HomeServices/HomeServices';

const Home = () => {
    return (
        <div id="home">
            <Hero></Hero>
            <HomeServices></HomeServices>
            <Packages></Packages>
            <Facts></Facts> 
            <Offers></Offers>
            <ChooseAndTestimonials></ChooseAndTestimonials>
            <Restaurants></Restaurants>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;