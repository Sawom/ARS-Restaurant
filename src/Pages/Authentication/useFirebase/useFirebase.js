import React,  { useState } from 'react';
import {getAuth, GoogleAuthProvider,  signInWithPopup} from "firebase/auth";
import { app } from '../Firebase/firebase';

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    // google sign in
    const signInWithgoogle = (location , history)=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                 const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setAuthError('');
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setAuthError(errorMessage);
            })
            .finally( ()=>{ setIsLoading(false) } );
    }

    return { 
        user,
        isLoading,
        authError,
        signInWithgoogle
    }
};

export default useFirebase;