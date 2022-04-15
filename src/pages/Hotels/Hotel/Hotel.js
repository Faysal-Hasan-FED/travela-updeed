import { faMap, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Hotel = props => {
    const {name,description,address,img,price} = props.hotel;
    const fullStar = <FontAwesomeIcon icon={faStar} />
    const HalfStar = <FontAwesomeIcon icon={faStarHalf} />
    const mapIcon = <FontAwesomeIcon icon={faMap} />
    return (
        <Col>
    <Card>
      <Card.Img className='w-100' style={{height:'200px',objectFit:'cover'}} variant="top" src={img} />
      <Card.Body>
          
        <Card.Title className='title'>{name}</Card.Title>
        {/* added rating hard coded not dynamic */}
        <div style={{fontSize:'10px'}}>
            <span  style={{color:'orange'}}>{fullStar} {fullStar} {fullStar} {fullStar} {HalfStar} </span>
        </div>
        <h5 className="text-primary">Only {price}$ /night </h5>
        <p className='mt-2 custom-text'>{description}</p>
        <div style={{bodrerBottom:'1px solid gray'}}> <hr /></div>
        <p> {mapIcon} <span className='ms-2'>{address}</span> </p> <Button variant="success" size="sm">Book Now</Button>
       
      </Card.Body>
    </Card>
  </Col>
    );
};

export default Hotel;