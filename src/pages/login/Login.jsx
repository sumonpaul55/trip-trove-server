import React, { useState } from 'react';
import LoginWithGoogle from '../../components/loginWithGoogle/LoginWithGoogle';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../hook/useAuth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const { logIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            const email = values.email;
            const password = values.password;
            logIn(email, password)
                .then(res => {
                    if (res.user) {
                        toast(`You have successfully logged in`, {
                            autoClose: 2000,
                            position: "bottom-right"
                        })
                        navigate(location?.pathname ? location?.pathname : "/")
                    }
                })
                .catch((err) => {
                    toast(`${err}`, {
                        autoClose: 2000,
                        position: "bottom-right"
                    })
                })
        },
    });
    return (
        <section className='mt-14'>
            <div className="container mx-auto">
                <div className='max-w-[500px] mx-auto bg-slate-300 p-4 mt-20'>
                    <h2 className='font-bold text-center text-2xl'>Login</h2>
                    <form onSubmit={formik.handleSubmit} className='space-y-4'>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" id='email' name="email" onChange={formik.handleChange} value={formik.values.name} placeholder='Email' className='w-full p-1 rounded-md text-slate-600 font-semibold outline-0 border' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="">Password</label>

                            <input type={`${showPass ? "text" : "password"}`} name='password' id='password' onChange={formik.handleChange} value={formik.values.name} className='w-full p-1 rounded-md text-slate-600 font-semibold outline-0 border' placeholder='Password' />
                            <div className='absolute right-4 text-primary top-[33px] cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }

                            </div>
                        </div>
                        <div className='text-center pt-5'>
                            <input type="submit" className='bg-primary px-3 py-1 w-full rounded-md text-white hover:bg-pink-600 cursor-pointer' />
                        </div>
                    </form>
                    <p className='mt-3'>Do you have already Account? plase <Link to="/register" className='text-pink-600 font-semibold text-xl'>SignUp</Link></p>
                    <div className='pt-5'>
                        <LoginWithGoogle></LoginWithGoogle>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;