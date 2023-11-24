import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import useAuth from '../../hook/useAuth';
import "./navbar.css"
import { FaBars } from "react-icons/fa";
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [navToggle, setNavToggle] = useState(true)
    const [isOpenDashboaed, setIsOpenDashBoard] = useState(false)
    // handle logout
    const handleLogout = () => {
        setNavToggle(!navToggle)
        logOut()
            .then(() => {
                toast(`You have loggout successfully`, {
                    autoClose: 2000,
                    position: "bottom-right"
                })
                    .catch(err => {
                        toast(err, {
                            autoClose: 2000,
                            position: "bottom-right"
                        })
                    })
            })
    }
    // hide the dropdown option after clicking any where in the divice
    const handledropDown = (e) => {
        setIsOpenDashBoard(!isOpenDashboaed);
        e.stopPropagation();
    }
    document.body.addEventListener("click", () => {
        setIsOpenDashBoard(!setIsOpenDashBoard)
    })
    return (
        <nav className='absolute z-10 bg-primary bg-opacity-20 left-0 top-0 right-0 text-white  py-2 px-1'>
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
                                <>
                                    <img src={user?.photoURL} referrerPolicy='no-referrer' className='w-10 h-10 rounded-full cursor-pointer' alt="" onClick={handledropDown} />
                                    <div onClick={(e) => e.stopPropagation()} className={`space-y-2 bg-slate-700 text-white absolute top-16 p-4 ${isOpenDashboaed ? "block" : "hidden"}`}>
                                        <button className='font-semibold w-full hover:text-pink-500' onClick={handleLogout}>Logout</button>
                                        <NavLink to="/contact-us" className="font-semibold w-full hover:text-pink-500 text-center block" onClick={() => setNavToggle(!navToggle)}>Dashboard</NavLink>
                                        <div className='pt-3'>
                                            <h5 className='font-thin border-b'>User Info</h5>
                                            <h3 className=''>{user.displayName}</h3>
                                            <h3 className=''>{user?.email}</h3>
                                        </div>
                                    </div>
                                </>

                                : <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={() => setNavToggle(!navToggle)}>Login</NavLink>
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