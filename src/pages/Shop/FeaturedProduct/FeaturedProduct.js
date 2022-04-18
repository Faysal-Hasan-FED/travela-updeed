import React from 'react';
import { Button, Col } from 'react-bootstrap';

const FeaturedProduct = props => {
    const {name,price1,price2,img} = props.pd;
    return (
        <Col>
        <div className='p-3 shadow-sm rounded'>
        <div className="text-center my-2">
            <img style={{height:'200px',width:'200px',objectFit:'cover',borderRadius:'50%'}} src={img} alt="" />
            </div>
            <div className="ps-3">
            <h3>{name}</h3>
            <h5>Only at <span className='line-through text-danger'>{price1}$</span>  <span className="text-success">{price2}$</span> </h5>
           <Button className='me-2' variant="outline-success">See Details</Button>
            <Button variant="outline-dark">Buy Now</Button>
            </div>
        </div>
        </Col>
    );
};

export default FeaturedProduct;