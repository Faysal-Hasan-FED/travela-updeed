import React, { useEffect, useState } from 'react';
import {Animated} from "react-animated-css";
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
       <Animated animationIn="fadeInUp" animationInDuration={2000} isVisible={true}>
           <div  style={{padding:'100px 0px'}}>
            <Container >
            <Row >
                <Col xs={12} md={3}>
                <Sidebar></Sidebar>
                </Col>
                <Col xs={12} md={9}>
                    <Row xs={1} md={3} >
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
       </div>
       </Animated>
    );
};

export default Hotels;