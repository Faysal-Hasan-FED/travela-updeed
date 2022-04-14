import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Blog.css';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Blog = props => {
    const {category,title,img,postTime,postedBy,comment} = props.blog;
    const messageIcon = <FontAwesomeIcon icon={faMessage} />
    return (
    <Col>
    <Card>
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

export default Blog;