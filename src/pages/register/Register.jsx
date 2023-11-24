import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginWithGoogle from '../../components/loginWithGoogle/LoginWithGoogle';

const Register = () => {
    const [showPass, setShowPass] = useState(false)

    return (
        <section className='mt-20'>
            <div className="container mx-auto">
                <div className='border max-w-[500px] mx-auto bg-slate-300 p-5'>
                    <h1 className='font-bold text-center md:text-2xl my-5'>Signup</h1>
                    <form className='space-y-5'>
                        <div>
                            <label htmlFor="email">Your Name</label>
                            <input
                                className='w-full p-1 rounded-md px-3'
                                id="name"
                                name="name"
                                type="text"
                                placeholder='Name'
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="password">Email</label>
                            <input
                                className='w-full p-1 rounded-md px-3'
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Email'
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor="email">Password</label>
                            <input
                                className='w-full p-1 rounded-md px-3'
                                id="password"
                                name="password"
                                type={`${showPass ? "text" : "password"}`}
                                placeholder='Password'
                            />
                            <div className='absolute -translate-y-[24px] right-2'>
                                {
                                    showPass ? <FaEye className='cursor-pointer' onClick={() => setShowPass(!showPass)} /> : <FaEyeSlash className='cursor-pointer' onClick={() => setShowPass(!showPass)} />

                                }
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Image</label>
                            <input
                                className='w-full p-1 rounded-md px-3 border'
                                id="file"
                                name="imageUrl"
                                type="file"
                            />
                        </div>
                        <button type="submit" className='w-full bg-primary text-white py-2 rounded-md'>Submit</button>
                    </form>
                    <p className='mt-3'>Do you have already Account? plase <Link to="/login" className='text-pink-600 font-semibold text-xl'>Login</Link></p>
                    <LoginWithGoogle></LoginWithGoogle>
                </div>
            </div>
        </section>
    );
};

export default Register;