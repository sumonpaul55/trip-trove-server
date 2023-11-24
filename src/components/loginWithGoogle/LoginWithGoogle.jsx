import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hook/useAuth';
import { toast } from 'react-toastify';
const LoginWithGoogle = () => {
    const { signInWithGoogle } = useAuth()
    const handClick = () => {
        signInWithGoogle()
            .then(res => {
                if (res.user) {
                    toast(`Welcome ${res.user.displayName}`, {
                        autoClose: 2000,
                        position: "bottom-right"
                    })
                }
            })
            .catch(err => {
                toast(err, {
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