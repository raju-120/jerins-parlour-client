import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] =  useAdmin(user?.email);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-full"></progress>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;