import React from 'react';
import img1 from '../../../assets/others/authentication2.png';
import { Link } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';
import { useState } from 'react';

const Register = () => {
    const [loginData , setLoginData] = useState({});
    const { user, registerUser, authError} = useAuth();

    // email , password er data collect er jonno 
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    // user register function
    const handleRegisterSubmit = e =>{
        // e.preventdefault(); eta shurutei dea lage nahole form reload mare r kaj kore na.
        e.preventdefault();
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return;
        }
        if(loginData.password.length < 6){
            alert('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(loginData.password)) {
            alert('Password Must contain 2 upper case');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name )
    }    // end user register function

    return (
        <div className='' >
            <div className="hero container  mx-auto bg-base-100 min-h-screen ">
                <div className="hero-content  shadow-2xl flex-col lg:flex-row-reverse">
                    {/* 1st div */}
                    <div className="text-center mt-10 lg:text-left">
                        <img src={img1} className="py-6" alt="" />
                    </div>
                    {/* 2nd div */}
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleRegisterSubmit} className="card-body">
                            <h1 className="text-3xl mt-8 mx-auto font-bold ">Sign Up</h1>
                            {/* name */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" onBlur={handleOnBlur}  placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            {/* email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onBlur={handleOnBlur} placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onBlur={handleOnBlur} placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            {/* retype password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Retype Password</span>
                            </label>
                            <input type="password" onBlur={handleOnBlur} name="password2" placeholder="retype password" className="input input-bordered" required />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                                <button style={{backgroundColor: '#D1A054', color:'white'}} className="btn">Register</button>
                            </div>
                            <p>Already registered? <Link to='/login'> <span className='font-bold' >Go to LogIn</span>  </Link> </p>
                        </form>
                        {/* alert */}
                        {user?.email &&  alert("User Created successfully!") }
                    {authError && alert({authError}) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;