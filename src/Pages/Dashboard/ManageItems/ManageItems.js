import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteMenu = (item) =>{
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className='container mx-auto'>
            {/* title */}
            <section className='text-center mb-10 ' > 
                <p className='text-blue-600 font-bold' >---What's new?---</p> <br />
                <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > ADD AN ITEM </span> </p>
            </section>
            {/* table */}
            <p className='text-2xl font-bold ml-4'> Total Items: {menu.length} </p>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <td>
                                    {/* edit button*/}
                                   <Link to={`/dashboard/manageitem/update/${item._id}`} > <button className="btn btn-ghost btn-xs">Edit</button> </Link> 
                                </td>
                                <td>
                                    <button className="btn btn-ghost bg-red-600  text-white" onClick={() => handleDeleteMenu(item)} ><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;