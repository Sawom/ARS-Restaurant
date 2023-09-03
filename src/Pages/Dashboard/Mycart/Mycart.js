import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";

const Mycart = () => {
    const [cart] = useCart();
    // 0 initial value. sum er sathe add kortechi
    const total = cart.reduce((sum,item)=> item.price + sum, 0)
    return (
        <div>
            <div className='font-semibold h-[60px] flex justify-evenly items-center'>
                <h3 className='text-2xl'> Total Items: {cart.length} </h3>
                <h3 className='text-2xl'>Total price: {total} </h3>
                <button className="btn btn-outline  border-4 mt-6">Pay</button>
            </div>
        
            {/* table */}
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
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
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
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
                                    <button  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
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