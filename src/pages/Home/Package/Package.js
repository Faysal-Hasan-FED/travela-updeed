import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';


const Package = props => {
    const {name,address,description,img,price} = props.pck;
    const fullStar = <FontAwesomeIcon icon={faStar} />
    const HalfStar = <FontAwesomeIcon icon={faStarHalf} />
    const mapIcon = <FontAwesomeIcon icon={faMap} />

    return (
        <Col>
       
        
    <div className='shadow-sm rounded'>
    
    <Card.Img style={{height:'200px',objectFit:'cover'}} variant="top" src={img} />
    
    
      <Card.Body>

          <div className='d-flex justify-content-between'>
              <h5 style={{fontWeight:'lighter'}} className="title">{name}</h5>
              <span style={{fontWeight:'bold'}} className='text-info'>{price}$</span>
          </div>
        {/* added rating hard coded not dynamic */}
        <div style={{fontSize:'10px'}}>
            <span  style={{color:'red'}}>{fullStar} {fullStar} {fullStar} {fullStar} {HalfStar} </span>
        </div>
        <p className='mt-2 custom-text'>{description}</p>
        <div style={{bodrerBottom:'1px solid gray'}}> <hr /></div>
        <p className='custom-text'>2 days 3 nights</p>
        <p> {mapIcon} <span className='ms-2'>{address}</span> </p> <Button variant="outline-success" size="sm">Explore</Button>
        
        
       
      </Card.Body>
    </div>
    
      </Col>
    );
};

export default Package;