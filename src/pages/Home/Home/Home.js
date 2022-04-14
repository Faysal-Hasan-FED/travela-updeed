import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MyNavbar from '../../Shared/MyNavbar/MyNavbar';
import Blogs from '../Blogs/Blogs';
import ChooseAndTestimonials from '../ChooseAndTestimonials/ChooseAndTestimonials';
import Facts from '../Facts/Facts';
import NewsLetter from '../NewsLetter/NewsLetter';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';
import Restaurants from '../Restaurants/Restaurants';

const Home = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Packages></Packages>
            {/* <Facts></Facts>  */}
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