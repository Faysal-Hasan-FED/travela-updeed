import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./homeServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>
            <Row xs={1} md={4} className="g-4">
                   {
                       services.map(service => <HomeService
                       service={service}
                       key={service.id}
                       ></HomeService>)
                   } 
            </Row>
        </Container>
        </div>
    );
};

export default HomeServices;