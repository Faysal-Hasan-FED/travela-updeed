import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBlog = props => {
    const {category,title,img,postTime,postedBy,comment} = props.blog;
    const messageIcon = <FontAwesomeIcon icon={faMessage} />
    return (
    <Col>
    <Card className='h-100'>
      <Card.Img style={{height:'300px',objectFit:'cover'}} variant="top" src={img} />
      <Card.Body>
          <p style={{fontWeight:'lighter'}}>{category}</p>
        <Card.Title className='title'>{title}</Card.Title>
        <p style={{fontWeight:'lighter'}} >{postTime} <span>{postedBy}</span></p> 
        {messageIcon}<span className='ms-3'>{comment}</span>
       
      </Card.Body>
    </Card>
  </Col>
    );
};

export default SingleBlog;<h2>Single Blog</h2>