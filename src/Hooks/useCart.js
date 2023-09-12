import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';

// database theke cart er data fetch kore anar jnno use cart use korchi.
//  tanstack query add kora
const useCart = () => {
    const {user} = useAuth();
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    // queryFn: async() =>{
    //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, 
    //     {
    //         headers: {authorization: `bearer ${token}`}
    //     })
    //     return res.json();
    //  },
    queryFn: async() =>{
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;
     },
  })

//   refetch ta return kore dite hobe.
// za za use korbe shob return hobee. refetch return kori nai dekhe error ta khaichilam.
    return [cart, refetch]
};

export default useCart;