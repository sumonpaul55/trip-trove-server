import React from 'react';
import useAuth from '../../../hook/useAuth';

const Myprofile = () => {
    const { user } = useAuth();
    return (
        <div className='p-5 text-white flex max-w-[500px] justify-center py-20 mx-auto border-opacity-10 border-white-1 border'>
            <div>
                <img src={user?.photoURL} className='w-60' alt="" />
                <div className='mt-5 space-y-4'>
                    <h3 className="text-xl md:text-2xl font-bold">Name: {user?.displayName}</h3>
                    <h3 className="text-xl md:text-2xl font-bold">Email: {user?.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;