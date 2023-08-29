import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../assets/home/logo.png';
import './Header.css';
import useAuth from '../../Authentication/useAuth/useAuth';

const Header = () => {
    const {user, logoutUser} = useAuth();

    const logoutFunction =() =>{
        logoutUser();
    }
    
    return (
        <div className="navbar px-3 fixed z-10 bg-opacity-60 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* page list link responsive */}
                <ul tabIndex={0} className="menu menu-sm rounded  bg-opacity-60 bg-black dropdown-content mt-3 z-[1] p-2   ">
                    <li > <Link  to='/home'> <span className='text-white navColor'  > Home </span> </Link> </li>
                    <li> <Link  to='/ourmenu'> <span className='text-white navColor'  > Our Menu </span>  </Link> </li>
                    <li> <Link  to='/ourshop'> <span className='text-white navColor'  > Our Shop </span>  </Link> </li>
                </ul>
                </div>
                <img src={logo} style={{width: '60px' ,text:'white'}} alt="" />
                <p className="normal-case text-xl font-bold ">ARS Restaurant</p>
            </div>
            {/* horizontal menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2">
                    <li> <Link  to='/home'> <span className='text-white navColor'  > Home </span> </Link> </li>
                    <li> <Link  to='/ourmenu'> <span className='text-white navColor'  > Our Menu </span>  </Link> </li>
                    <li> <Link  to='/ourshop'> <span className='text-white navColor'  > Our Shop </span>  </Link> </li>
                </ul>
            </div>
            <div className='navbar-end' >
                {
                    user?.email ? 
                    <button className='btn btn-ghost' onClick={logoutFunction} > Logout </button> 
                    :
                    <Link className='btn btn-ghost' to='/login' >Login</Link>
                }
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Header;