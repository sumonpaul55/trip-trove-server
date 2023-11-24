import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;