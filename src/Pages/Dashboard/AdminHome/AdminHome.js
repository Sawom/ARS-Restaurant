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
        <div className='container '>
            <h1 className='text-2xl mx-5'> Welcome <span className='text-blue-600'> {user.displayName}</span>  to Admin Home!</h1>
            {/* stats */}
            <div className="stats shadow ">
                {/* revenue */}
                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value"> ${stats.revenue} </div>
                </div>

                {/* users */}
                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary"> {stats.users} person</div>
                </div>

                {/* menu items */}
                <div className="stat place-items-center">
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value"> {stats.products} </div>
                </div>
                
                {/* orders */}
                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value"> {stats.orders} </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default AdminHome;