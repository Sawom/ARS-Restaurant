import React from 'react';
import img1 from '../../../assets/others/authentication2.png';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ confirmpass, setConfirmpass] = useState('');
    const [ error, setError] = useState('');
    const auth = getAuth();
    const { user} = useAuth();

    const navigate = useNavigate();
    // navigate
    if(user?.email){
        navigate('/home');
    }

    // name
    const handleName = event =>{
        setName(event.target.value);
    }

    // email
    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    // password
    const handlePassword = event =>{
        setPassword(event.target.value);
    }

    // confirm password
    const handleConfirmpass = event =>{
        setConfirmpass(event.target.value);
    }

    // verify email
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    // register new user
    const registerNewUser = (email,password) =>{
        createUserWithEmailAndPassword(auth, email , password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
            // sweet alert
            Swal.fire({
                title: 'Now you are registered. Congratulations!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
                }) // end alert
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // set user name
    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => {  
            
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    
    // create user
    const handleRegistration = event =>{
        event.preventDefault();
         if(password !== confirmpass){
            setError("Your password did not match! ");
            return;
        }
        if(password.length < 6){
            setError('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        registerNewUser(email, password);
    }
   
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
                        <form onSubmit={handleRegistration} className="card-body">
                            <h1 className="text-3xl mt-8 mx-auto font-bold ">Sign Up</h1>
                            {/* name */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" onBlur={handleName}  placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            {/* email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onBlur={handleEmail} placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onBlur={handlePassword} placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <p> <small> *Password Must be at least 6 characters long and Password Must contain 2 upper case. </small> </p>
                            </label>
                            </div>
                            {/* retype password */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Retype Password</span>
                            </label>
                            <input type="password" onBlur={handleConfirmpass} name="password2" placeholder="retype password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button style={{backgroundColor: '#D1A054', color:'white'}} className="btn">Register</button>
                            </div>
                            <p>Already registered? <Link to='/login'> <span className='font-bold text-primary' >Go to LogIn</span>  </Link> </p>
                            <br />
                            {/* error */}
                            <p className='text-red-600' > {error} </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;