import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate("/home")
    }
    let elementError;
    if (error) {
        console.log(error.message);
        elementError = <p className='text-danger'>Error: {error?.message} </p>

    }

    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    const navigateRegister = (e) => {
        navigate('/register')
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row w-50 mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className='mx-auto d-block w-50 mb-2' ariant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {elementError}
                    <p>New to genius car? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register?</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;