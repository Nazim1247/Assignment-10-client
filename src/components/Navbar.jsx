import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);

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

  return (
    <div>
      <div className="w-11/12 mx-auto md:flex justify-between items-center py-6 text-center">
        <div className="">
          <a className="text-xl font-bold">Sports Equipment Online Store</a>
        </div>
        <div className="lg:flex items-center gap-2">
          <NavLink to='/' className={({ isActive }) => isActive ? 'btn text-blue-700' : 'btn'}>Home</NavLink>
          <NavLink to='/sports' className={({ isActive }) => isActive ? 'btn text-blue-700' : 'btn'}>All Sports Equipment</NavLink>
          {
            user && <>
              <NavLink to='/addEquipment' className={({ isActive }) => isActive ? 'btn text-blue-700' : 'btn'}>Add Equipment</NavLink>
              <NavLink to='/myEquipment' className={({ isActive }) => isActive ? 'btn text-blue-700' : 'btn'}>My Equipment</NavLink>
            </>
          }
        </div>
        <div className="flex items-center space-x-2">
          {
            user ?
              <div className='flex mx-auto space-x-2'>
                <img title={user.displayName} className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                <a onClick={handleSignout} className='btn btn-primary'>Logout</a>
              </div>
              :
              <div className='flex mx-auto space-x-2'>
                <Link to='/login' className='btn btn-primary'>Login</Link>
                <Link to='/register' className='btn btn-primary'>Register</Link>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;