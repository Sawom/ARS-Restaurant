import React from 'react';
import useAuth from '../useAuth/useAuth';
import { Navigate, Route,Redirect, useLocation, Routes } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user } = useAuth();

    const location = useLocation();

    if(!user?.email){
        return <Navigate to='/login'  state={{from:location}} replace ></Navigate>
    }
    return children;
     
};

export default PrivateRoute;