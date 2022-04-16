import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeroText.css';
import { faCartShopping, faHouse, faLandmark, faUtensils } from '@fortawesome/free-solid-svg-icons';

const HeroText = () => {
    // icons
    const restaurant = <FontAwesomeIcon icon={faUtensils} />
    const house = <FontAwesomeIcon icon={faHouse} />
    const place = <FontAwesomeIcon icon={faLandmark} />
    const shopping = <FontAwesomeIcon icon={faCartShopping} />


    return (
        <Container style={{paddingTop:'100px'}}>
            <h2 className='hero-slogan text-white'>Explore</h2>
            <h2 className='hero-slogan mb-md-3 text-white'>Your Amazing City</h2>


            <p className='text-white my-5' style={{fontWeight:'bold'}}>Find great places to stay, eat, shop, or visit from local experts</p>


            <form  className='mb-5' style={{display:'flex',alignItems:'center'}}>
                <input className='p-3 w-25' type="text" placeholder="Ex:Food,service,hotel" />
                <select className='p-3 w-25 text-dark' name="destinations" id="destinations">
                <option value="where">Where</option>
                <option value="san fransisco">San Francisco</option>
                <option value="berlin germany">Berlin Germany</option>
                <option value="paris france">Paris France</option>
                <option value="london">London</option>
                </select>
                <Button  className='px-5 py-3' variant="outline-dark">Search</Button>
            </form>


            <p className='text-white' style={{fontWeight:'bold'}}>Or browse the highlights</p>


            <div className='home-hero-options'>

                <div className='me-5 bg-white p-3 rounded'>
                <span className='me-2'>{restaurant}</span>
                    <a className='home-hero-anchor' href="">Restaurant</a>
                </div>

                <div className='me-5 bg-white p-3 rounded'>
                <span className='me-2'>{place}</span>
                <a className='home-hero-anchor' href="">Places</a>
                </div>

                <div className='me-5 bg-white p-3 rounded'>
                <span className='me-2'>{house}</span>
                <a className='home-hero-anchor' href="">Hotel</a>
                </div>

                <div className='me-5 bg-white p-3 rounded'>
                    <span className='me-2'>{shopping}</span>
                <a className='home-hero-anchor' href="">Shopping</a>
                </div>

            </div>
            
        </Container>
    );
};

export default HeroText;