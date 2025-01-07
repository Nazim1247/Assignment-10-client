import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import logo from '../assets/logo.jpg';
import { FaBars } from 'react-icons/fa';
import { MdOutlineLightMode } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  const [isDark,setIsDark]=useState(false)
  const { user, signoutUser } = useContext(AuthContext);

  const handleTheme = ()=>{
    setIsDark(!isDark)
    document.body.classList.toggle('dark')
  }

  const handleSignout = () => {
    signoutUser()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Logout Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch(error => console.log(error.message))
  }

  const links = <div className='flex lg:flex-row flex-col gap-3'>
    <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn lg:btn-ghost lg:text-white'} title='Click to Home'>Home</NavLink>
          <NavLink to='/sports' className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn lg:btn-ghost lg:text-white'} title='Click for See Our All Sports Equipment'>All Sports Equipment</NavLink>
          {
            user && <>
              <NavLink to='/addEquipment' className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn lg:btn-ghost lg:text-white'} title='Click for Add Equipment'>Add Equipment</NavLink>
              <NavLink to='/myEquipment' className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn lg:btn-ghost lg:text-white'} title='Click for See Your Equipment'>My Equipment</NavLink>
            </>
          }
    
  </div>

  return (
    <div className=''>
      <div className='fixed top-0 left-0 w-full z-50 bg-primary'>
<div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={1} role="button" className="btn btn-ghost text-white lg:hidden">
        <FaBars className='w-8 h-8' />
      </div>
      <ul
        tabIndex={1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <img title='Sports Equipment Online Store' className='w-12 h-12 rounded-full mr-3' src={logo} alt="" />

    <button onClick={handleTheme} className='btn btn-ghost text-4xl'>{isDark?<BsFillMoonStarsFill className='text-gray-500' title='Click for Light Mode' />:<MdOutlineLightMode className='text-white' title='Click for Dark Mode'/>}</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center space-x-2">
          {
            user ?
              <div className='flex mx-auto space-x-2'>
                <img title={user.displayName} className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                <a onClick={handleSignout} className='btn btn-secondary' title='Click for Logout'>Logout</a>
              </div>
              :
                <Link to='/login' className='btn btn-secondary' title='Click for Login'>Login</Link>  
          }
        </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Navbar;