import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';

const Restaurants = () => {
    const [restaurants,setRestaurants] = useState([]);
    useEffect(()=>{
        fetch('./restaurants.json')
        .then(res=>res.json())
        .then(data => setRestaurants(data))
    },[])
    return (
        <Container style={{paddingTop:'100px'}}>
            <h5 className='custom-text'>Special Offers</h5>
            <h1 className='pb-5'>
                Popular <span style={{fontWeight:'lighter'}}>Restaurants</span>
            </h1>
            <Row xs={1} md={4} className="g-4">
            {
                restaurants.map(restaurant => <Restaurant 
                    key={restaurant.id}
                    restaurant={restaurant}></Restaurant>)
            }
        </Row>
        </Container>
    );
};

export default Restaurants;