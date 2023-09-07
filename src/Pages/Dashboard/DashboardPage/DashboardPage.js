import React, { useState } from 'react';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';


const DashboardPage = () => {
    const [cart] = useCart();

    return (
        <div className=' overflow-x-auto lg:pt-0 md:pt-0 pt-8' >
            <div className="drawer pt-20 lg:drawer-open md:drawer-open drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden md:hidden hidden">Open drawer</label>
                
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-1 w-auto min-h-full  text-base-content">

                {/* Sidebar content here */}
                <li> <Link to='' > <FaHome></FaHome> User Home</Link></li>
                <li> <Link to='' > <FaCalendarAlt></FaCalendarAlt> Reservations </Link> </li>
                <li> <Link to='' > <FaWallet></FaWallet> Payment History </Link> </li>
                <li className='flex'> <Link to='/dashboard/mycart'> <FaShoppingCart></FaShoppingCart> My Cart 
                    {/* cart er koyta item ache oita just dekhalam */}
                    <div className="badge badge-secondary">+{cart?.length || 0 }</div>
                </Link>
                        
                 </li>
                {/* divider */}
                <div className='divider' ></div>
                </ul>
            
            </div>
        </div>
        </div>
    
    );
};

export default DashboardPage;