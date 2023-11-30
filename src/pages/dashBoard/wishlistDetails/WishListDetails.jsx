import React from 'react';
import { useLoaderData } from 'react-router-dom';

const WishListDetails = () => {
    const wishlistData = useLoaderData()
    const { trip_title, tour_type, price, tour_guide_name, tour_guide_image, description, spot_photo, tour_guide_email
    } = wishlistData;
    // console.log(wishlistData)
    return (
        <div className='ml-20 bg-slate-500 p-6 rounded-lg'>
            <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
                <div>
                    <h2 className='text-xl md:text-2xl font-semibold'>{trip_title}</h2>
                    <img src={spot_photo} className='mt-5 rounded-md' alt="" />
                </div>
                <div className='mt-5 ml-5 text-center'>
                    <h5 className='border-b mb-5'>Tour guide Info</h5>
                    <div>
                        <h3 className='text-xl md:text-2xl font-semibold'>Name : {tour_guide_name}</h3>
                        <h3><img src={tour_guide_image} className='h-40 w-40 rounded-full mt-5 mx-auto' alt="" /></h3>
                        <h3 className='font-bold italic mt-3'>Email: {tour_guide_email}</h3>
                    </div>
                </div>
            </div>
            <p className='font-bold text-3xl text-white mt-10'>Price: {price}</p>
            <p className='font-bold text-3xl text-white mt-3'>Type: {tour_type}</p>
            <p className='mt-6 text-white'>{description}</p>
        </div>
    );
};

export default WishListDetails;