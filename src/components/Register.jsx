import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const Register = () => {
  const { createUser, setUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Your information is Not Valid',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return
    }

    createUser(email, password)
      .then(result => {

        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };
        // save new user info to the database
        fetch('https://my-assignment-10.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'Register Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })
        setUser(result.user)
        navigate('/')
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/')
          })
          .catch(err => {
            console.log(err.message)
          })
      })
      .catch(error => {
        if(error.message){
          Swal.fire({
            title: 'Error!',
            text: 'Already Email in used',
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
        <title>Sports Equipment | Register</title>
      </Helmet>
      <div className="hero py-8 mt-16">
        <div className="hero-content flex-col md:w-1/2 mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
          </div>
          <div className="card border w-full shadow-md">
            <form onSubmit={handleRegister} className="card-body">
            <Link to='/login' className="text-lg mx-auto">Have an account? <span className='text-red-600'> Login</span></Link>
            <button type='button' onClick={handleLoginGoogle} className='btn btn-neutral my-4'>Continue With Google</button>
            <div className='divider'>OR</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"
                  name='name'
                  placeholder="name" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                  name='email'
                  placeholder="email" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text"
                  name='photo'
                  placeholder="photo" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword?'text':"password"}
                  name='password'
                  placeholder="password" className="input input-bordered bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" required />
                <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-12 text-2xl'>
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;