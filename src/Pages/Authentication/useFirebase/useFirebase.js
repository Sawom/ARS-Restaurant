import React from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, }  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    
    // const auth = getAuth(); eta google sign in e lagbe
    const auth = getAuth();

    // google login
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                // sweet alert
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
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }  // google login

    // observer if user signin or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user)=>{
                if(user){
                    setUser(user);
                } else{
                    setUser({})
                }
        });
        return () => unsubscribed;
    }, [auth])  // end observer

    // logout user 
    const logoutUser = () => {
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
        }
    );
};

export default useFirebase;