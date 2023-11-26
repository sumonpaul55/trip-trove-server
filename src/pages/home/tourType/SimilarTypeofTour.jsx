import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const SimilarTypeofTour = () => {
    const { tourName } = useParams();
    const axiosSecure = useAxiosSecure()
    const { data: tripType = [] } = useQuery({
        queryKey: ["tripType"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tripType/${tourName}`)
            console.log("inside function", res.data)
            return res.data;
        }
    })
    console.log("trip type", tripType)

    return (
        <main className='bg-slate-100 px-1 pb-20'>
            <section className='mt-14'>
                <div className="container mx-auto">
                    <div>
                        <h4 className='text-xl font-semibold text-center py-12 md:text-2xl lg:text-4xl'>All Packages of <span className='text-primary font-bold'>{tourName}</span></h4>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7'>
                            {
                                tripType?.map((items, idx) => (
                                    <div key={idx} className='py-6 my-10 border px-4 hover:scale-105 duration-200 rounded-lg shadow hover:shadow-lg'>
                                        <div className='space-y-4'>
                                            <h3 className='font-bold text-xl md:text-2xl'>{items?.trip_title}</h3>
                                            <img src={items?.spot_photo} alt="" className='rounded-lg' />
                                            <div>
                                                <p>Price: {items?.price}</p>
                                                <p className='text-pink-600 font-semibold'>Tour Guide: {items?.tour_guide_name}</p>
                                            </div>
                                            <Link to={`/package-details/${items._id}`} className='bg-pink-600 text-white py-2 w-full block text-center font-semibold rounded-lg hover:bg-pink-500'>View Package</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SimilarTypeofTour;