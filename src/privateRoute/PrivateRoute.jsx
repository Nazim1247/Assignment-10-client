import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <p className='text-center'>
            <span className="loading loading-bars loading-lg"></span>
        </p>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;