import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data=>setBlogs(data.splice(0,4)))
    },[])
    return (
        <Animated animationIn="fadeInUp" animationInDuration={3000} isVisible={true}>
            <div  style={{padding:'100px 0px'}}>
            <Container >
            <h5 className='custom-text'>Recent blogs</h5>
            <h1 className="pb-5">
                Tips <span style={{fontWeight:'lighter'}}>& Articles</span>
            </h1>
            <Row xs={1} md={4} className="g-4">
            {
                blogs.map(blog=> <Blog 
                    key={blog.id}
                    blog={blog}></Blog>)
            }
            </Row>
            
        </Container>
        </div>
        </Animated>
    );
};

export default Blogs;