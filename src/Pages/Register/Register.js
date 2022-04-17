import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../firebase.init';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (user) {
        console.log("user", user);
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked; 
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')



    }

    const navigateLogin = (e) => {
        navigate('/login')
    }
    return (
        <div>
            <h2 className='text-center mt-3 text-primary'>Please Register</h2>
            <div className="container">
                <div className="row w-50 mx-auto">
                    <form onSubmit={handleSubmitRegister} className='register-form'>
                        <input type="text" name="name" id="" placeholder='your name' />

                        <input type="email" name="email" id="" placeholder='email address' required />

                        <input type="password" name="password" id="" placeholder='password' required />

                        <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="" />

                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept genius car term & condition</label>

                        <input

                            disabled={!agree}
                            className='bg-primary text-white mx-auto d-block w-50 mb-2'

                            type="submit" value="Register" />

                    </form>
                    <p>Already Register? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login?</Link></p>


                </div>
            </div>
        </div>
    );
};

export default Register;