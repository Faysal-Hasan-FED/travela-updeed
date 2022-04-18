import React from 'react';
import AboutHero from '../AboutHero/AboutHero';
import AboutServices from '../AboutServices/AboutServices';
import Faq from '../Faq/Faq';

const About = () => {
    return (
        <div>
            <AboutHero></AboutHero>
            <AboutServices></AboutServices>
            <Faq></Faq>
        </div>
    );
};

export default About;