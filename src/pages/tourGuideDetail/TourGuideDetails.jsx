import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TourGuideDetails = () => {
    const tourGuide = useLoaderData();
    const { userImg, name, phone, role, email } = tourGuide
    console.log(tourGuide)
    return (
        <main className="pt-14 bg-slate-100">
            <section className='pt-10 pb-20'>
                <div className="container mx-auto">
                    <h3 className='font-bold text-center text-xl md:text-3xl mb-10 capitalize'>{name + "'s"} Profile</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center'>
                        <div className='px-10'>
                            <img src={userImg} className='mx-auto max-h-[600px] rounded-xl w-full' alt="" />
                        </div>
                        <div className='space-y-4 px-2'>
                            <h3 className='font-bold text-xl md:text-3xl'>Name: {name}</h3>
                            <address className='mt-3 font-medium md:text-lg p-2 border inline-block bg-pink-600 text-white'>Phone: {phone}</address>
                            <h3 className='font-bold text-xl md:text-2xl'>Email: {email}</h3>
                            <h3 className='font-bold text-xl md:text-2xl'>Role: {role}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TourGuideDetails;