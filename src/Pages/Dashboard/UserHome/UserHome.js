import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useCart from '../../../Hooks/useCart';
import { Link } from 'react-router-dom';
import {FaRegListAlt} from 'react-icons/fa';

const UserHome = () => {
    const {user} = useAuth();
    const [cart,refetch] = useCart();
    const total = cart.reduce((sum,item)=> item.price + sum, 0)


    return (
        <div className='container '>
            <h1 className='text-2xl mx-5'> Welcome <span className='text-blue-600'> {user.displayName}</span>  to User Home!</h1>
            <br />
            <div className="stats shadow place-items-center mx-5 gap-5">
                {/* order */}
                <div className="stat place-items-center">
                    <div className="stat-title"> Total Order Food </div>
                    <div className="stat-value"> {cart.length} </div>
                </div>

                {/* price */}
                <div className="stat place-items-center">
                    <div className="stat-title">  Total Bill </div>
                    <div className="stat-value text-secondary"> ${total} </div>
                </div>
            </div>
            <br />
            <Link to="/dashboard/mycart">
                <button className="btn btn-outline mx-5 border-4 mt-6"> <FaRegListAlt></FaRegListAlt>  view</button>
            </Link>
            
        </div>
    );
};

export default UserHome;