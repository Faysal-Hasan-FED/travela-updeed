import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='text-center newsletter-section'>
            <h2 className='pb-5'>Subscribe to our Newsletter</h2>
            <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
            <p className='pb-3'> there live the blind texts. Separated they live in</p>
            <input type="text" placeholder='Enter your email address'/>
            <input type="submit" value="Subscribe" />
        </div>
    );
};

export default NewsLetter;