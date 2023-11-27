import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';
import ScrollToTop from '../components/ScrollTotop';

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;