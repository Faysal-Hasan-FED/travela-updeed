import React from 'react';
import { Col } from 'react-bootstrap';

const HomeService = props => {
    const {name,description,img} = props.service;<i class="fa-brands fa-instagram"></i>
    
    return (
        <Col className='text-center'>
            <div className='h-100 p-3 custom-card shadow rounded'>
                <div className='text-center'>
                <img className='mb-3' style={{width:'100px'}} src={img} alt="" />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default HomeService;