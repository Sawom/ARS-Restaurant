import React,  { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from '../Firebase/firebase';

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); // later use
    const [authError, setAuthError] = useState('');

    // register user
    const registerUser = (name,email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                        displayName: name
                        }).then(() => {
                        }).catch((error) => {
                        
                });
                // 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally( ()=>{ } )
    }  // end register user

    // login user
    const loginUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => { });

    }

    // google sign in
    const signInWithgoogle = (location , history)=>{
        const googleProvider = new GoogleAuthProvider();
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
                setAuthError(errorMessage);
            })
            .finally( ()=>{  } );
    }  // end google sign in

    // logout
    const logout = ()=> {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        }) 
        .finally( ()=>{  } );
    } // end logout

    return { 
        user,
        isLoading,
        authError,
        signInWithgoogle,
        logout,
        registerUser,
        loginUser
    }
};

export default useFirebase;