import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginWithGoogle from '../../components/loginWithGoogle/LoginWithGoogle';
// import useAxiosPublic from '../../hook/useAxiosPublic';
import axios from 'axios';
import useAuth from '../../hook/useAuth';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
const image_apiKey = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_apiKey}`

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    // const axiosPublic = useAxiosPublic();
    const { signUp } = useAuth()
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const imageFile = form.image.files[0]
        // Create FormData object
        const formData = new FormData();
        formData.append('key', image_apiKey);
        formData.append('image', imageFile);
        // Make the API request
        const res = await axios.post(image_hosting_api, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (res.data.success) {
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const image = res.data?.data?.display_url
            signUp(email, password)
                .then(res => {
                    if (res.user) {
                        updateProfile(res.user, {
                            displayName: name,
                            photoURL: image
                        }).then()
                        toast(`Welcome ${res?.user?.displayName}`, { autoClose: 2000, position: "bottom-right" })
                    }
                }).catch(err => {
                    toast(err.message, {
                        autoClose: 2000,
                        position: "bottom-right"
                    })
                })
        }

    }
    return (
        <section className='mt-20'>
            <div className="container mx-auto">
                <div className='border max-w-[500px] mx-auto bg-slate-300 p-5'>
                    <h1 className='font-bold text-center md:text-2xl my-5'>Signup</h1>
                    <form className='space-y-5' onSubmit={handleSignIn}>
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
                                name="image"
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