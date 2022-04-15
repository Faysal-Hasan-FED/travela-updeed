import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';
import Sidebar from '../Sidebar/Sidebar/Sidebar';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(()=>{
        fetch('./hotels.json')
        .then(res => res.json())
        .then(data=>setHotels(data.splice(0,6)))
    },[])
    return (
        <Container style={{padding:'100px 0px'}}>
            <Row >
                <Col xs={12} md={3}>
                <Sidebar></Sidebar>
                </Col>
                <Col xs={12} md={9}>
                <Row xs={1} md={3} className="g-4">
            {
                hotels.map(hotel => <Hotel
                    key={hotel.id}
                    hotel={hotel}
                ></Hotel>)
            }
            </Row>
                </Col>

            </Row>
            
        </Container>
    );
};

export default Hotels;