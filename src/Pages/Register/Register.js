import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked; 
        await createUserWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate('/home')
    }

    const navigateLogin = (e) => {
        navigate('/login')
    }
    return (
        <div>
            <div className="container">
                <div className="row w-50 mx-auto register-form-container">
                    <h2 className='register-title'>Please Register</h2>
                    <form onSubmit={handleSubmitRegister} className='register-form'>
                        <input type="text" name="name" id="" placeholder='your name' />

                        <input type="email" name="email" id="" placeholder='email address' required />

                        <input type="password" name="password" id="" placeholder='password' required />

                        <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="" />

                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept genius car term & condition</label>

                        <input

                            disabled={!agree}
                            className='registerBtn text-white mx-auto d-block mb-2'

                            type="submit" value="Register" />

                    </form>
                    <p>Already Register? <Link to='/login' className='orange text-decoration-none' onClick={navigateLogin}>Please Login?</Link></p>


                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;