import React from 'react';
import { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5 mb-5'>My <span>Blogs</span></h2>
            <div className="container">
                <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
                </div>
            </div>
        </div>
    );
};

export default Blogs;