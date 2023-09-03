import React from 'react';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div className=' ' >
            <div className="drawer pt-20 lg:drawer-open md:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden md:hidden ">Open drawer</label>
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-auto min-h-full  text-base-content">
                    
                {/* Sidebar content here */}
                <li> <Link to='' style={{backgroundColor:'transparent',color:'white'}} > <FaHome></FaHome> User Home</Link></li>
                <li> <Link to='' > <FaCalendarAlt></FaCalendarAlt> Reservations </Link> </li>
                <li> <Link to='' > <FaWallet></FaWallet> Payment History </Link> </li>
                <li> <Link to='/dashboard/mycart'> <FaShoppingCart></FaShoppingCart> My Cart </Link> </li>
                {/* divider */}
                <div className='divider' ></div>
                </ul>
            
            </div>
        </div>
        </div>
    );
};

export default DashboardPage;