import React from 'react';
import BlogBlogs from '../BlogBlogs/BlogBlogs';
import BlogHero from '../BlogHero/BlogHero';

const BlogMain = () => {
    return (
        <div>
            <BlogHero></BlogHero>
            <BlogBlogs></BlogBlogs>
        </div>
    );
};

export default BlogMain;