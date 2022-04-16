import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Testimony = () => {
    // is not working
    // var splide = new Splide( '.splide' );
    // splide.mount();
    return (
        <div style={{paddingTop:'100px'}}>
            <h5 className='custom-text'>Testimony</h5>
            <h1 className="pb-3">
                Our <span style={{fontWeight:'lighter'}}>Guests Say</span>
            </h1>

            <div>
            <Splide  aria-labelledby="My Favorite Images">

                <SplideSlide style={{padding:'20px 65px'}} className='d-flex align-items-center  w-100'>
                <img style={{objectFit:'cover',borderRadius:'50%',width:'15%'}}  src="https://i.ibb.co/NmD8nvR/person-2.jpg" alt="Image 1"/>
                <div className='ps-3'>
                <p className="custom-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h4>Josh Phillip</h4>
                <p>Guest from Canada</p>
                </div>
                </SplideSlide>


                <SplideSlide style={{padding:'20px 65px'}}  className="d-flex align-items-center ">
                <img style={{objectFit:'cover',borderRadius:'50%',width:'15%'}} src="https://i.ibb.co/TmkLMcF/person-1.jpg
                " alt="Image 2"/>
                <div className='ps-3'>
                <p className="custom-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h4>Andrew Marvell </h4>
                <p>Guest from London</p>
                </div>
                </SplideSlide>


                <SplideSlide  style={{padding:'20px 65px'}} className="d-flex align-items-center ">
                <img style={{objectFit:'cover',borderRadius:'50%',width:'15%'}} src="https://i.ibb.co/wsjNGJq/person-3.jpg
                " alt="Image 2"/>
                <div className='ps-3'>
                <p className="custom-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h4>Dennis Green</h4>
                <p>Guest from Italy</p>
                </div>
                </SplideSlide>


                </Splide>
            </div>
            
        </div>
    );
};

export default Testimony;