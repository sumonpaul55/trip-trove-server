import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import useAuth from '../../hook/useAuth';
import "./navbar.css"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user } = useAuth();
    const [navToggle, setNavToggle] = useState(true)

    return (
        <nav className='absolute z-10 bg-primary bg-opacity-20 left-0 top-0 right-0 text-white  py-2'>
            <div className="container mx-auto">
                <div className="flex gap-2 justify-between items-center">
                    <div className="logo">
                        <Link to="/"> <img src={logo} alt="logo" className='w-40 md:w-52 pt-1' /></Link>
                    </div>
                    <ul className={`navbar bg-indigo-400 md:bg-transparent md:static flex gap-4 absolute -left-full w-full duration-200 flex-col md:flex-row top-14 justify-center items-center md:justify-end py-5 md:py-0 ${!navToggle ? "left-0" : null}`}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Home</NavLink>
                        <NavLink to="/community" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Community</NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Blogs</NavLink>
                        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>About Us</NavLink>
                        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Contact Us</NavLink>
                        {
                            user ?
                                <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Logout</NavLink> :
                                <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Login/Register</NavLink>
                        }
                    </ul>
                    <button onClick={() => setNavToggle(!navToggle)} className='md:hidden'>
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;