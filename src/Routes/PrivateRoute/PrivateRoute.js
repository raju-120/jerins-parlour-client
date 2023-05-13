import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-full"></progress>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;