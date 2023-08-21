import React, { useState } from 'react';
import img2 from '../../../assets/others/authentication2.png';
import { Link, useLocation, } from 'react-router-dom';
import useFirebase from '../useFirebase/useFirebase';

const Login = () => {
    const[loginData, setLoginData] = useState({});
    const {user, isLoading, authError, signInWithgoogle, loginUser} = useFirebase();
    
    // data taken from input field
    const handleInputData = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    } // end handleInputData

    // login form submit
    const handleLoginFormSubmit = (event) =>{
        loginUser(loginData.email, loginData.password);
        event.preventDefault();
    }

    // google sign in
    const handleGoogleSignIn = () =>{
        signInWithgoogle();
    }

    return (
        <div>
           <div className="hero container  mx-auto bg-base-100 min-h-screen ">
                <div className="hero-content  shadow-2xl flex-col lg:flex-row">
                    {/* 1st div */}
                    <div className="text-center mt-10 lg:text-left">
                        <img src={img2} className="py-6" alt="" />
                    </div>
                    {/* 2nd div */}
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleLoginFormSubmit} className="card-body">
                            <h1 className="text-3xl mt-8 mx-auto font-bold ">Login</h1>
                            {/* email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInputData} type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            {/* password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleInputData} type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                                <button style={{backgroundColor: '#D1A054', color:'white'}} className="btn">Login</button>
                            </div>
                            <p>New here? <Link to='/register'> <span className='font-bold' >Create a New Account</span>  </Link> </p>
                            <p className='mx-auto' >Or sign in with</p>
                            {/* google sign in button */}
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} style={{backgroundColor: '#D1A054', color:'white'}} className="btn">sign with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Login;