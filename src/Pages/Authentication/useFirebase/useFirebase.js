import React from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, }  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [ error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    // const auth = getAuth(); eta google sign in e lagbe
    const auth = getAuth();

    // google login
    const signInWithGoogle = () =>{
        // setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                        body: JSON.stringify(saveUser)
                    })
                    .then(res => res.json() )
                    .then( ()=>{
                         // sweet alert. just ektu animation dhong.
                        Swal.fire({
                            title: 'User Login Successful!',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                            // end alert
                    } )
                    setError('');
               
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(error.message);
            });
    }  // google login

    // observer if user signin or not.
    // jwt token k ekhane set kore. token store korbo local storage e
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (currentUser)=>{
                if(currentUser){
                    setUser(currentUser);
                    axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                    .then(data =>{
                        // console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
                } else{
                    setUser({});
                    localStorage.removeItem('access-token')
                }
        });
        return () => unsubscribed;
    }, [auth])  // end observer

    // logout user 
    const logoutUser = () => {
        // setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    } // end logout user

    return (
        {
            user,
            signInWithGoogle,
            logoutUser,
            loading,
        }
    );
};

export default useFirebase;