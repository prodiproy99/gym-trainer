import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css'

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div>
            
            <Card className="blog" style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Title>
                       <h4> {question}</h4>
                        </Card.Title> 
                    <Card.Text>
                         <p>{answer}</p>
                    </Card.Text> 
                </Card.Body>
            </Card>
            </div>
        
    );
};

export default Blog;