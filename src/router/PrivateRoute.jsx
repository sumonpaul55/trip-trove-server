import React from 'react';
import useAuth from '../hook/useAuth';
import LoadingSpinner from '../components/loginWithGoogle/LoadingSpiner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user && !loading) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;