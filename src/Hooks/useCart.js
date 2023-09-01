import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Pages/Authentication/useAuth/useAuth';

// database theke cart er data fetch kore anar jnno use cart use korchi
const useCart = () => {
    const {user} = useAuth();

    const { isLoading, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
        return res.json();
    }
  })

    return [cart, isLoading]
};

export default useCart;