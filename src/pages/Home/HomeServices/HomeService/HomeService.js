import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeService.css';

const HomeService = props => {
    const {name,description,img} = props.service;<i class="fa-brands fa-instagram"></i>
    
    return (
        <Col className='text-center'>
            <Card className='h-100 p-3 custom-card'>
                <div className='text-center'>
                <img className='mb-3' style={{width:'100px'}} src={img} alt="" />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
            </Card>
        </Col>
    );
};

export default HomeService;