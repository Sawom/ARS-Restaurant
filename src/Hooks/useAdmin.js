import React from 'react';
import useAuth from '../Pages/Authentication/useAuth/useAuth';

const useAdmin = () => {
    const {user} = useAuth();
    
    return (
        <div>
            
        </div>
    );
};

export default useAdmin;