import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PackageDetail = () => {
    const singapackgeData = useLoaderData();
    // console.log(singapackgeData)
    const { spot_photo, tour_guid_image, tour_guide_email, tour_guide_name, tour_type, trip_title, price, description } = singapackgeData;
    return (
        <>
            <main className='pt-14 bg-slate-300 py-20'>
                <section>
                    <div className="container mx-auto  p-2">
                        <div className='flex md:flex-row flex-col py-10 gap-8'>
                            <div className='flex-1 text-center' data-aos="fade-right">
                                <h4 className='border-b text-xl max-w-sm'>Tour guide Info</h4>
                                <div className='mt-6 text-center'>
                                    <img src={tour_guid_image} className='md:w-52 mx-auto rounded-xl mb-6' alt="" />
                                    <h4 className='md:text-xl font-semibold'>Name: {tour_guide_name}</h4>
                                    <h4 className='md:text-xl font-semibold my-1'>Tour Type: {tour_guide_email}</h4>
                                    <h4 className='md:text-xl font-semibold'>Tour Type: {tour_type}</h4>
                                </div>
                                <div className='mt-5 rounded-lg bg-slate-50 py-3 text-left px-4'>
                                    <h4 className='font-bold text-pink-600'>Price: ${price}</h4>
                                </div>
                            </div>
                            <div className='md:w-3/5' data-aos="fade-left">
                                <img src={spot_photo} className='mt-5 w-full  rounded-xl' alt={trip_title} />
                            </div>
                        </div>
                        <div>
                            <h4 className='border-b text-xl max-w-sm'>Trip info</h4>
                            <h4 className='md:text-xl font-semibold mt-4'>Tour name: {trip_title}</h4>
                            <p className='text-slate-700'><span className='font-bold mt-3 inline-block'>Trip Description:</span>
                                {description}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PackageDetail;