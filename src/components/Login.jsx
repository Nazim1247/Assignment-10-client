import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUser, loginWithGoogle} = useContext(AuthContext);
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
            <div className="hero py-12">
  <div className="hero-content flex-col md:w-1/2 mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email'
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name='password'
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <button onClick={handleLoginGoogle} className='btn'>Login With Google</button>
        <label className="label">
            <Link to='/register' className="label-text-alt text-lg mx-auto">New to this page? please <span className='text-red-600'> Register</span></Link>
          </label>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;