import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, setUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name,photo,email,password);

        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
          Swal.fire({
            title: 'Error!',
            text: 'Your information is Not Valid',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
            return
        }

        createUser(email,password)
        .then(result =>{

          const createdAt = result?.user?.metadata?.creationTime;
          const newUser = {name,email,createdAt};
          // save new user info to the database
          fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(newUser)
          })
          .then(res => res.json())
          .then(data =>{
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Register Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })
            console.log(result.user)
            setUser(result.user)
            navigate('/')
            updateUserProfile({displayName: name, photoURL: photo})
            .then(()=>{
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="hero py-12">
  <div className="hero-content flex-col md:w-1/2 mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"
          name='name'
          placeholder="name" className="input input-bordered" required />
        </div>
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
            <span className="label-text">Photo url</span>
          </label>
          <input type="text"
          name='photo'
          placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name='password'
          placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <label className="label">
            <Link to='/login' className="label-text-alt text-lg mx-auto">Have an account? please <span className='text-red-600'> Login</span></Link>
          </label>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;