import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import useAuth from '../../hook/useAuth';
import "./navbar.css"
const Navbar = () => {
    const { user } = useAuth();
    return (
        <nav>
            <div className="container mx-auto">
                <div className="flex gap-2 justify-between items-center">
                    <div className="logo">
                        <Link to="/"> <img src={logo} alt="logo" className='w-1/2 md:w-52 pt-1' /></Link>
                    </div>
                    <ul className="navbar flex gap-4">
                        <NavLink className="text-primary font-semibold md:text-lg">Home</NavLink>
                        <NavLink className="text-primary font-semibold md:text-lg">Community</NavLink>
                        <NavLink className="text-primary font-semibold md:text-lg">Blogs</NavLink>
                        <NavLink className="text-primary font-semibold md:text-lg">About Us</NavLink>
                        <NavLink className="text-primary font-semibold md:text-lg">Contact Us</NavLink>
                        {
                            user ?
                                <NavLink className="text-primary font-semibold md:text-lg border px-2 rounded-md">Logout</NavLink> :
                                <NavLink className="text-primary font-semibold md:text-lg border px-2 rounded-md">Login</NavLink>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;