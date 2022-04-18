import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div>
            
            <Card style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Title>{question}</Card.Title> 
                    <Card.Text>
                         {answer}
                    </Card.Text> 
                </Card.Body>
            </Card>
            </div>
        
    );
};

export default Blog;