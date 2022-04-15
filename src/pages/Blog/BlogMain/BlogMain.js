import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogBlogs from '../BlogBlogs/BlogBlogs';
import BlogHero from '../BlogHero/BlogHero';

const BlogMain = () => {
    return (
        <div>
            <BlogHero></BlogHero>
            <BlogBlogs></BlogBlogs>
            <Footer></Footer>
        </div>
    );
};

export default BlogMain;