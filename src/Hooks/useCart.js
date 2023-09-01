import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Pages/Authentication/useAuth/useAuth';

// database theke cart er data fetch kore anar jnno use cart use korchi.
//  tanstack query add kora
const useCart = () => {
    const {user} = useAuth();

    const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
        return res.json();
    }
  })

//   refetch ta return kore dite hobe.
// za za use korbe shob return hobee. refetch return kori nai dekhe error ta khaichilam.
    return [cart, refetch]
};

export default useCart;