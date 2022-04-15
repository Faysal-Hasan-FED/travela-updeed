import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutHero from '../AboutHero/AboutHero';
import AboutServices from '../AboutServices/AboutServices';
import Faq from '../Faq/Faq';

const About = () => {
    return (
        <div>
            <AboutHero></AboutHero>
            <AboutServices></AboutServices>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default About;