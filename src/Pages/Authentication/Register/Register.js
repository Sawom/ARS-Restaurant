import React from 'react';
import img1 from '../../../assets/others/authentication2.png';
import { Link } from 'react-router-dom';

const Register = () => {
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
                        <div className="card-body">
                            <h1 className="text-3xl mt-8 mx-auto font-bold ">Sign Up</h1>
                            {/* name */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            {/* email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            {/* password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            {/* retype password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Retype Password</span>
                            </label>
                            <input type="password" name="password2" placeholder="retype password" className="input input-bordered" />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                                <button style={{backgroundColor: '#D1A054', color:'white'}} className="btn">Login</button>
                            </div>
                            <p>Already registered? <Link to='/login'> <span className='font-bold' >Go to LogIn</span>  </Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;