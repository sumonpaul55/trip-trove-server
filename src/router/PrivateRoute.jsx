import React from 'react';
import useAuth from '../hook/useAuth';
import LoadingSpinner from '../components/loginWithGoogle/LoadingSpiner';
import { useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user && !loading) {
        return children
    }
    return navigate("/login", { state: { form: location } })
};

export default PrivateRoute;