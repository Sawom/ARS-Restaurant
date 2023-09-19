import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// http://localhost:5000 base url. zeta axiosSecure e dea ache.
const AllUsers = () => {
    // tanstack query diye data load kortechi data base theke. tanstack use kori cz ekhane refetch kora zay .
    // zeta manually kora lage na. useQuery tanstack theke nije fetch korar jnno
    // jwt diye secure korar somoy useAxiosSecure use na korar jnno bishal error khaichi.
    // ekhane jwt diye secure korar jonno 4ta kahini kora lage.
    // 
    const [axiosSecure] = useAxiosSecure(); //kahini 1>
    const {data: users = [], refetch } = useQuery(['users'], async() =>{
        //kahini 2> axiosSecure.get
        const res = await axiosSecure.get('/users')
        //kahini 3> eta http://localhost:5000 base url. zeta axiosSecure e dea ache.
        // to base url er part ta remove kore dite hobe
        return res.data ; // kahini 4> axios nijei json data kore dey
    })

    // make admin function
    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    } // end make_admin

    // user delete function (todo nijei kora lagbe)
    const handleDeleteUser = (user) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result) =>{
                if(result.isConfirmed){
                    fetch(`http://localhost:5000/users/${user._id}`, {
                        method: 'DELETE'
                    } )
                    .then( res => res.json() )
                    .then( data =>{ 
                        if( data.deletedCount > 0 ){
                            refetch();
                            Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} has deleted!`,
                            showConfirmButton: false,
                            timer: 1500
                        })

                        }
                    })
                }
        } ) 
    }  // end

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
                        users.map((user, index) => <tr key={user._id} >
                            <th>{index + 1}</th>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            {/* check admin  */}
                            <td>
                                {/* user admin hole admin likha ta dekhabo ze beday admin. */}
                                {
                                    user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-blue-700
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