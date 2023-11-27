import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';
import ScrollToTop from '../components/ScrollTotop';
import Footer from '../shared/footer/Footer';

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;