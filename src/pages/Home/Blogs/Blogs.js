import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data=>setBlogs(data.splice(0,4)))
    },[])
    return (
        <Container style={{padding:'100px 0px'}} >
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
    );
};

export default Blogs;