import React from 'react';
import google from '../../images/social/google.png';
import facebook from '../../images/social/facebook.png'; 
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth); 
    const navigate = useNavigate()
    let elementError;

    if(loading){
        return <Loading></Loading>
    }
    
    if (error) {
        elementError = <p className='text-danger'>Error: {error?.message}</p> 
      }

      if(user){
          navigate('/home')
      }
    return (
        <>
            <div className='d-flex align-items-center'>
                <div style={{ height: 2 }} className="w-50 bg-light"></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: 2 }} className="w-50 bg-light"></div>
            </div>
            {elementError}
            <div>
                <button 
                    onClick={() => signInWithGoogle()}
                className='btn btn-primary w-50 d-block text-center mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
               
                <button className='btn btn-primary w-50 d-block text-center mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button> 

            </div>
        </>
    );
};

export default SocialLogin;