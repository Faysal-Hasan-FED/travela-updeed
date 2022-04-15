import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [offers,setOffers] = useState([]);
    // here offers = hotels 
    useEffect(()=>{
        fetch('/hotels.json')
        .then(res => res.json())
        .then(data => setOffers(data.splice(0,4)))
    },[])
    return (
        <Container style={{paddingTop:'100px'}}>
            <h5 className='custom-text'>Special Offers</h5>
            <h1 className="pb-5">
                Popular <span style={{fontWeight:'lighter'}}>Hotels & Rooms</span>
            </h1>
            <Row xs={1} md={4} className="g-4">
            {
                offers.map(offer => <Offer offer={offer} key={offer.id}></Offer>)
            }
            </Row>
           
        </Container>
    );
};

export default Offers;