import React from 'react';
import logo from "../../assets/logo.png"
import { FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='py-20 bg-black text-white bg-opacity-90 px-2'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-20'>
                    <div>
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="" className='mb-10 w-1/2 mx-auto lg:mx-0 md:w-3/5' /></Link>
                        </div>
                        <p className='leading-7 text-justify text-slate-300'>Triptrove, your gateway to unforgettable adventures, is a curated travel platform designed to inspire and simplify your journey. Discover handpicked destinations, expert travel tips, and personalized itineraries tailored to your wanderlust. Embark on a seamless exploration of the world with Triptrove, where every trip is a story waiting to be told.</p>
                    </div>
                    <div className='border-r-0 lg:border-r border-slate-600'>
                        <h4 className='text-xl md:text-2xl mb-10 lg:text-3xl font-bold'>Address</h4>
                        <div className='space-y-4'>
                            <address>30/2 Some Where in Bangladesh</address>
                            <address>Phone: 012345678977</address>
                            <address>Email: example@gmail.com</address>
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='text-xl md:text-2xl mb-10 lg:text-3xl font-bold'>News Letter</h4>
                        <div className='space-y-4'>
                            <p>You can Subscribe for latest update. You will notified through you email</p>
                            <form>
                                <label htmlFor="">Email</label>
                                <div className='flex items-center'>
                                    <input type="text" placeholder='Enter Your mail' className='px-3 py-2 rounded-l-lg h-full outline-none text-black' />
                                    <input type="submit" value="Subscribe" className='px-2 py-[7px] rounded-r-lg bg-pink-500 cursor-pointer h-full hover:bg-pink-600' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1 py-6 bg-slate-800 justify-center rounded-lg mt-10'>
                    <FaCopyright /> <span className='flex items-center gap-1'>2023 All Right Reserve || <b className='text-pink-600'>tripTrove</b></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;