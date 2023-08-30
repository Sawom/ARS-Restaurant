import React from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile}  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
initializeFirebase();


const useFirebase = () => {
    const [user,setUser] = useState({});
    const [authError, setAuthError] = useState('');

    // const auth = getAuth(); eta google sign in , email register , login shb jaygay lage jonno ekbarei nichilam
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
                setAuthError('');
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }  // google login

    // register with email
    const registerUser = (email,password,name) =>{
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    setAuthError('');
                    const newUser = { email, displayName: name };
                    setUser(newUser);
                    // update profile: set user name
                    updateProfile(auth.currentUser, {
                        displayName: name
                        }).then(() => {
                       
                        }).catch((error) => {
                        
                        });
                        // end
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setAuthError(errorMessage);
                });
    } // registerUser

    // login with email
    const loginUser = (email, password) =>{
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    // Signed in 
                    const user = result.user;
                    setAuthError('');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setAuthError(errorMessage);
                });
    }

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
            authError,
            signInWithGoogle,
            logoutUser,
            registerUser
        }
    );
};

export default useFirebase;