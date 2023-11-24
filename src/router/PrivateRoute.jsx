import React from 'react';
import useAuth from '../hook/useAuth';
import LoadingSpinner from '../components/loginWithGoogle/LoadingSpiner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user && !loading) {
        return children
    }
};

export default PrivateRoute;