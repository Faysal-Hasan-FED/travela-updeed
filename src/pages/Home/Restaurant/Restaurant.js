import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import './Restaurant.css';

const Restaurant = props => {
    const {name,rating,description,img,address} = props.restaurant;
    const fullStar = <FontAwesomeIcon icon={faStar} />
    const HalfStar = <FontAwesomeIcon icon={faStarHalf} />
    const mapIcon = <FontAwesomeIcon icon={faMap} />
    return (
        <Col>
    <div className='shadow-sm rounded'>
      <Card.Img style={{height:'200px',objectFit:'cover'}} variant="top" src={img} />
      <Card.Body>
          
        <Card.Title className='title'>{name}</Card.Title>
        {/* added rating hard coded not dynamic */}
        <div style={{fontSize:'10px'}}>
            <span  style={{color:'orange'}}>{fullStar} {fullStar} {fullStar} {fullStar} {HalfStar} </span>
        </div>
        <p className='mt-2 custom-text'>{description}</p>
        <div style={{bodrerBottom:'1px solid gray'}}> <hr /></div>
        <p> {mapIcon} <span className='ms-2'>{address}</span> </p> <Button variant="outline-success" size="sm">See More</Button>
        
        
       
      </Card.Body>
    </div>
  </Col>
    );
};

export default Restaurant;