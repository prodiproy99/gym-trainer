import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'; 
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    if (loading || sending) {
        return <Loading></Loading>
    }
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate("/home")
    }

    if (user) {
        navigate(from, { replace: true });
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
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast("Please enter your email address")
        }
    }
    return (
        <div>
            <div className="container mt-5"> 
                <div className="row w-50 mx-auto login-form">
                <h2 className='login-title'>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                         
                        <Button className='mx-auto d-block mb-2 loginBtn' ariant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {elementError}
                    <p>New to gym trainer center? <Link to='/register' className='text-decoration-none orange' onClick={navigateRegister}>Please Register?</Link></p>

                    <p>Forget Password? <button className='btn btn-link text-decoration-none orange' onClick={resetPassword}>Reset Password</button></p>
                    <ToastContainer /> 
                </div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;