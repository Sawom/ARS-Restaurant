import React, { useState } from 'react';
import img2 from '../../../assets/others/authentication2.png';
import { Link, useNavigate  } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // google sign in
    const {user, signInWithGoogle } = useAuth();
    const auth = getAuth();

    const navigate = useNavigate();
    // navigate
    if(user?.email){
        navigate('/ourshop');
    }

    // email
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    // password
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    // handle login with email
    const handleLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                // sweet alert
                Swal.fire({
                    title: 'Login Successful!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }) // end alert
            })
            .catch((error) => {
               setError(error.message);
            });
    }

    // user login 
    const handleUserLogin = event =>{
        event.preventDefault();
        handleLogin(email, password);
    }

    // reset password
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(auth, email)
            .then(result =>{
                 // sweet alert
                Swal.fire({
                    title: 'Email sent. Check your email.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
           .catch((error) => {
               setError(error.message);
            });
        }
        else{
            Swal.fire({
                title: 'Please enter your email address',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }

    // google login 
    const handleGoogleSignIn = () => {
        signInWithGoogle();
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
                        <form onSubmit={handleUserLogin} className="card-body">
                            <h1 className="text-3xl mt-8 mx-auto font-bold ">Login</h1>
                            {/* email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" onBlur={handleEmail}  name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type="password" onBlur={handlePassword}  name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button style={{backgroundColor: '#D1A054', color:'white'}} className="btn">Login</button>
                            </div>
                            {/* error */}
                            <p className='text-red-600' > {error} </p>
                            <p>New here? <Link to='/register'> <span className='font-bold text-primary' >Create a New Account</span>  </Link> </p>
                            <p className='mx-auto' >Or sign in with</p>
                           {/* google login button */}
                           <button onClick={handleGoogleSignIn} style={{backgroundColor: '#D1A054', color:'white'}} className="btn">Sign in With Google</button>
                           {/* reset password */}
                            <p >Forgot password? <button onClick={resetPassword} className='btn btn-link font-bold text-primary ' style={{textDecoration: 'none'}} > Reset Password </button>  </p>
                        </form>
                        
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Login;