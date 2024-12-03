import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <li><NavLink to='/' className='mr-3'>Home</NavLink></li>  
    <li><NavLink to='/sports' className='mr-3'>All Sports Equipment</NavLink></li>
    <li><NavLink to='/addEquipment' className='mr-3'>Add Equipment</NavLink></li>
    <li><NavLink to='/myEquipment' className='mr-3'>My Equipment</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar w-11/12 mx-auto items-center">
  <div className="navbar-start w-full">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="text-xl">Sports Equipment Online Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <NavLink to='/login' className={`btn btn-sm`}>Login</NavLink>
    <NavLink to='/register' className={`btn btn-sm`}>Register</NavLink>
    <button className='btn btn-sm'>Logout</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;