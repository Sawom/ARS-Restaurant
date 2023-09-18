import React, { useState } from 'react';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';


const DashboardPage = () => {
    const [cart] = useCart();

    // admin make
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        // overflow-x-auto eta dear jnnoi dashboard page ta mobile responsive hoiche
        // dashboard e nested route use korchi.
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
                <ul className="menu p-2 w-auto min-h-full  text-base-content">
                {/* Sidebar content here */}
                {
                    isAdmin ? <>
                        {/* admin */}
                        <li> <Link to='/dashboard/adminhome' > <FaHome></FaHome> Admin Home</Link></li>
                        <li> <Link to='/dashboard/additem' > <FaUtensils></FaUtensils> Add an item </Link> </li>
                        <li> <Link to='/dashboard/manageitem' > <FaWallet></FaWallet> Manage Items </Link> </li>
                        <li> <Link to='/dashboard/allusers' > <FaUsers></FaUsers> All Users </Link> </li>
                    </> : <>
                        {/* user */}
                        <li> <Link to='/dashboard/userhome' > <FaHome></FaHome> User Home</Link></li>
                        <li> <Link to='' > <FaCalendarAlt></FaCalendarAlt> Reservations </Link> </li>
                        <li> <Link to='/dashboard/payment' > <FaWallet></FaWallet> Payment </Link> </li>
                        <li className='flex'> <Link to='/dashboard/mycart'> <FaShoppingCart></FaShoppingCart> My Cart 
                            {/* cart er koyta item ache oita just dekhalam */}
                            <div className="badge badge-secondary">+{cart?.length || 0 }</div>
                        </Link>     
                        </li>
                    </>
                }
                
                
                {/* divider */}
                <div className='divider' ></div>
                        <li><Link to="/"><FaHome></FaHome> Home</Link> </li>
                        <li><Link to=""> Our Menu</Link></li>
                        <li><Link to="">Order Food</Link></li>
                </ul>
            
            </div>
        </div>
        </div>
    
    );
};

export default DashboardPage;