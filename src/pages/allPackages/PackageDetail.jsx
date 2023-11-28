import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import usePackages from '../../hook/usePackages';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Myhelmet from '../../components/Myhelmet';
import useGetTourGuide from '../../hook/useGetTourGuide';
const PackageDetail = () => {
    const singapackgeData = useLoaderData();
    const { packages } = usePackages()
    const { tourGuide } = useGetTourGuide()
    const { spot_photo, tour_guide_image, tour_guide_email, tour_guide_name, tour_type, trip_title, price, description, tour_plan, _id } = singapackgeData;
    const img = packages?.map((img) => {
        return { original: img.spot_photo, thumbnail: img.spot_photo }
    })
    const images = [...img]
    return (
        <>
            <Myhelmet title="Packages detail"></Myhelmet>
            <main className='pt-14 bg-slate-50 py-20'>
                <section className='pt-10 pb-20'>
                    <div className="container mx-auto">
                        <div>
                            <h4 className='text-xl font-semibold md:text-2xl mb-7'>Tour guide will visit following places</h4>
                            <div className='w-full overflow-hidden'>
                                <ImageGallery items={images} className="overflow-hidden" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-white py-20'>
                    <div className="container mx-auto  p-2">

                        <h4 className='text-xl font-semibold md:text-2xl mb-7'>About the tour Section</h4>
                        <div className='flex md:flex-row flex-col py-10 gap-8'>
                            <div className='flex-1 text-center' data-aos="fade-right">
                                <h4 className='border-b text-xl max-w-sm'>Tour guide Info</h4>
                                <div className='mt-6 text-center'>
                                    <img src={tour_guide_image} className='md:w-52 mx-auto rounded-xl mb-6' alt="" />
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
                <section className='bg-slate-300 py-20'>
                    <div className="container mx-auto">
                        <h4 className='font-bold text-xl md:text-2xl'>Tour Plan</h4>
                        <div>
                            {
                                tour_plan?.map((plan, idx) => (
                                    <div key={idx} className='my-10'>
                                        <h4><span className='font-bold'>Day-{idx + 1}</span></h4>
                                        <p>{plan.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='py-20'>
                    <div className="container mx-auto">
                        <h4 className='font-bold text-xl md:text-2xl'>Tour Guides List</h4>
                        <div className='max-w-[800px]' data-aos="fade-left">
                            {
                                tourGuide?.map((guide, idx) => (
                                    <Link to={`/tourGuide-details/${guide._id}`} key={idx} className='block shadow hover:shadow-lg duration-300'>
                                        <div className='border my-5 px-4 py-5 flex items-center gap-2 justify-between flex-col md:flex-row p-3'>
                                            <h4 className='font-bold'>Name: {guide.name}</h4>
                                            <img src={guide.userImg} className='w-16 h-16 rounded-full' alt="" />
                                            <h4>Email: {guide.email}</h4>
                                            <h4>Phone: {guide.phone}</h4>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <div className='text-center'>
                    <Link to={`/bookings/${_id}`}>
                        <button className='px-3 py-1 md:px-5 bg-pink-600 text-white text-xl md:text-3xl hover:scale-110 duration-200'>Book Now</button>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default PackageDetail;