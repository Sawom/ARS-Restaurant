import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAuth from '../../Authentication/useAuth/useAuth';
import {FaDollarSign} from 'react-icons/fa';


const Mycart = () => {
    const [cart,refetch] = useCart();
    const {user} = useAuth();

    // ekhane item just ekta parameter. zeta diye delete korbo. onno nameo hoite pare parameter.
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Cancelled!',
                                'Your Order has Cancelled!',
                                'success'
                            )
                        }

                    })
            }
        })
    } // end

    // 0 initial value. sum er sathe add kortechi
    // reduce method use korchi
    const total = cart.reduce((sum,item)=> item.price + sum, 0)
    
    return (
        <div className='container px-1'>
            <h1 className='text-2xl mx-5'> <span className='text-blue-600'> {user.displayName}</span> , here is your order. Please pay to confirm order.</h1>
            <div className='font-semibold h-[80px] flex justify-evenly items-center'>
                <h3 className='text-xl'> Total Items: {cart.length} & </h3>
                <h3 className='text-xl mx-1'> Total price: ${total} </h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-outline  border-4 mt-6"> <FaDollarSign></FaDollarSign> Pay</button>
                </Link>
            </div>
        
            {/* table */}
             <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* table end */}
            
        </div>
    );
};

export default Mycart;