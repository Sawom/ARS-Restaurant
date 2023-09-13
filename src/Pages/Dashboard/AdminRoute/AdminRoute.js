import React from 'react';
import { Navigate, Route,Redirect, useLocation, Routes } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import useAuth from '../../Authentication/useAuth/useAuth';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading]  = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className='progress w-56' ></progress>
    }

    if(!user?.email && isAdmin){
        return <Navigate to='/login'  state={{from:location}} replace ></Navigate>
    }
    return children;
     
};

export default AdminRoute;