import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    else if(user){
        return children;
    }
    else{
        return <Navigate to={'/login'}></Navigate>
    }
}
export default PrivateRoute;