import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hook/useAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hook/useAxiosPublic';
const LoginWithGoogle = () => {
    const { signInWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation()
    const handClick = () => {
        signInWithGoogle()
            .then(res => {
                if (res.user) {
                    const userName = res.user?.displayName
                    const userInfo = {
                        name: userName,
                        email: res.user?.email,
                        role: "user"
                    }
                    axiosPublic.post("/users", userInfo)
                        .then((res) => {
                            // console.log(res.data)
                            if (res.data.insertedId === null) {
                                toast(`Welcome Back ${userName}`, {
                                    position: "bottom-right",
                                    autoClose: 2000
                                })
                                navigate(location?.path ? location?.pathname : "/")
                            }
                            else if (res.data?.insertedId) {
                                toast(`Welcome ${userName}`, {
                                    position: "bottom-right",
                                    autoClose: 2000
                                })
                                navigate(location?.path ? location?.pathname : "/")
                            }
                        })
                }
            })
            .catch(err => {
                toast(`${err}`, {
                    autoClose: 2000,
                    position: "bottom-right"
                })
            })
    }
    return (
        <div className='mt-5'>
            <button onClick={handClick} className='w-full bg-gray-100 rounded-md p-2 flex justify-center'>
                <FaGoogle />
            </button>
        </div>
    );
};

export default LoginWithGoogle;