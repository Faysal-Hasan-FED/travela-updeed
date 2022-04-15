import React from 'react';
import Blogs from '../Blogs/Blogs';
import ChooseAndTestimonials from '../ChooseAndTestimonials/ChooseAndTestimonials';
import Facts from '../Facts/Facts';
import NewsLetter from '../NewsLetter/NewsLetter';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';
import Restaurants from '../Restaurants/Restaurants';
import Footer from '../../Shared/Footer/Footer';
import Hero from '../Hero/Hero/Hero';

const Home = () => {
    return (
        <div id="home">
            <Hero></Hero>
            <Packages></Packages>
            <Facts></Facts> 
            <Offers></Offers>
            <ChooseAndTestimonials></ChooseAndTestimonials>
            <Restaurants></Restaurants>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;