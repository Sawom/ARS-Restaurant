import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    // useAxiosSecure diye backend theke data load kore niye ashtechi
    const {data: stats = {} } = useQuery({
        queryKey : ['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    return (
        <div className='container mx-2'>
            <h1 className='text-2xl '> Welcome <span className='text-blue-600'> {user.displayName}</span>  to Admin Home!</h1>
        </div>
    );
};

export default AdminHome;