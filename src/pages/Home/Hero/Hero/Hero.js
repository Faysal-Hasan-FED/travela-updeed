import React from 'react';
import { Animated } from 'react-animated-css';
import HeroText from '../HeroText/HeroText';
import './Hero.css';

const Hero = () => {
    return (
        <Animated animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
            <div className='home-hero'>
        <HeroText></HeroText>
        </div>
        </Animated>
        
    );
};

export default Hero;