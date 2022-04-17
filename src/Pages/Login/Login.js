import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row w-50 mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail"> 
                            <Form.Control type="email" placeholder="Enter email" /> 
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword"> 
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className='mx-auto d-block w-50 mb-2'ariant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;