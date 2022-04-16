import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ContactHero from '../ContactHero/ContactHero';
import ContactMain from '../ContactMain/ContactMain';

const Contact = () => {
    return (
        <div>
            <ContactHero></ContactHero>
            <ContactMain></ContactMain>
            <Footer></Footer>
        </div>
    );
};

export default Contact;