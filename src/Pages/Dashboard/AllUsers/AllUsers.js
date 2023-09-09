import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    // tanstack query diye data load kortechi data base theke. tanstack use kori cz ekhane refetch kora zay .
    // zeta manually kora lage na.
    const {data: users = [], refetch } = useQuery(['users'], async() =>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    // make admin function
    const handleMakeAdmin = id =>{
        
    }

    // user delete function
    const handleDeleteUser = (user) =>{

    }

    return (
        <div className='container px-1'>
           <h3 className='text-2xl font-semibold '> Total users: {users.length} </h3>
           {/* table */}
           <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            {/* check admin  */}
                            <td>
                                {/* user admin hole admin likha ta dekhabo ze beday admin. */}
                                {
                                    user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost bg-blue-700
                                      text-white"> <FaUserShield></FaUserShield> </button>
                                }
                            </td>
                            {/* delete button */}
                            <td> 
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr> )
                    }
                    

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;