import React from 'react';
import { Navigate, Route,Redirect, useLocation, Routes } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    
    if(!user?.email ){
        return <Navigate to='/login'  state={{from:location}} replace ></Navigate>
    }
    return children;
     
};

export default PrivateRoute;