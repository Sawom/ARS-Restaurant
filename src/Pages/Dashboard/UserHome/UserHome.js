import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';

const UserHome = () => {
    const {user} = useAuth();

    return (
        <div className='container mx-2'>
            <h1 className='text-2xl '> Welcome <span className='text-blue-600'> {user.displayName}</span>  to User Home!</h1>
        </div>
    );
};

export default UserHome;