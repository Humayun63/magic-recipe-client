import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Loader from '../componets/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' replace state={{from:location}}></Navigate>
};

export default PrivateRoutes;