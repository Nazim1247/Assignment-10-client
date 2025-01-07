import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const Login = () => {
    const {signInUser, loginWithGoogle} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then(result =>{
            navigate('/')
            if(result.user){
              Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
        .catch(error =>{
            if(error.message){
              Swal.fire({
                title: 'Error!',
                text: 'Your Information is Not Correct',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            }
        })
    }
    const handleLoginGoogle = ()=>{
        loginWithGoogle()
        .then(result =>{
            if(result.user){
              Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
            navigate('/')
        })
        .catch(error => {
            if(error.message){
              Swal.fire({
                title: 'Error!',
                text: 'Your Information is Not Correct',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            }
        })
    }
    return (
        <div>
          <Helmet>
          <title>Sports Equipment | Login</title>
          </Helmet>
            <div className="hero py-8 mt-16">
  <div className="hero-content flex-col md:w-1/2 mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Login now!</h1>
    </div>
    <div className="card w-full border shadow-md">
      <form onSubmit={handleLogin} className="card-body">
      <button type='button' onClick={handleLoginGoogle} className='btn btn-neutral my-4'>Continue With Google</button>
      <Link to='/register' className="text-lg mx-auto text-center">New to this page? <span className='text-red-600'> Register</span></Link>
                    <div className='divider'>OR</div>
        <div className="form-control">
          <label className="label">
            <span>Email</span>
          </label>
          <input type="email"
          name='email'
          placeholder="email" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span>Password</span>
          </label>
          <input type={showPassword?'text':'password'}
          name='password'
          placeholder="password" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
          <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute right-4 top-12 text-2xl'>
            {showPassword?<IoEyeOutline />:<IoEyeOffOutline />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;