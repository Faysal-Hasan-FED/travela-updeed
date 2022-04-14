import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';





const Packages = () => {
    const [packages,setPackages] = useState([]);
    useEffect(()=>{
        fetch('./packages.json')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div className='bg-light' style={{padding:'100px'}}>
            <Container>
            <h5 className='custom-text'>Special Offers</h5>
            <h1 className="pb-5">
                Top <span style={{fontWeight:'lighter'}}>Tour Packages</span>
            </h1>
            <Row xs={12} md={5} className="g-4">
            {
                // could not use package because of keyword 
                packages.map(pck => <Package
                pck = {pck}
                key={pck.id}

                ></Package>)
            }
            </Row>
        </Container>
        </div>
    );
};

export default Packages;