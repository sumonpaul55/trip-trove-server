import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className='min-h-screen bg-slate-500 pt-32'>
            <div className='border max-w-[600px] mx-auto p-10 rounded-lg text-center'>
                <h2 className='font-bold text-xl'>404 Page Not Found</h2>
                <div className='mt-20'>
                    <Link to="/" className='hover:text-pink-600 font-bold'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;