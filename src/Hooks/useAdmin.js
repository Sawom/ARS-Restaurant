import React from 'react';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        // enabled: !loading, eta na dile axios network error ashe.
        // 1ta din lagche eita solve korte!
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;