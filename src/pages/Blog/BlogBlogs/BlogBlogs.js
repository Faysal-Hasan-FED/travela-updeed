import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleBlog from '../SingleBlog/SingleBlog';

const BlogBlogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <Container>
            <Row style={{padding:'100px 0px'}} xs={1} md={4} className="g-4">
            {
                blogs.map(blog => <SingleBlog
                blog={blog}
                key={blog.id}
                ></SingleBlog>)
            }
            </Row>
           
        </Container>
    );
};

export default BlogBlogs;