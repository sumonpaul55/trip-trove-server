import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';
import "./StoryDetail.css"
import useAuth from "../../hook/useAuth"
const StoryDetail = () => {
    const storyDetailData = useLoaderData();
    const { user, loading } = useAuth()
    const { tour_guide, spot_photo, location, description, highlights, activities, tips } = storyDetailData
    const pathname = window.location.href;



    return (
        <main className='mt-14 bg-slate-200 pb-40'>
            <div className="container mx-auto">
                <div className='max-w-[800px] mx-auto'>
                    <h1 className='text-xl md:text-2xl text-primary font-bold lg:text-4xl pt-5'>Tour guide {tour_guide}</h1>
                    <img src={spot_photo} alt="" className='mt-6 rounded-lg' />
                    <address className='font-bold mt-2'>Location: {location}</address>
                    <div className='flex justify-between mt-4'>
                        <div>
                            <h3 className='font-bold text-xl pb-2'>highlights</h3>
                            <div className='flex flex-col'>
                                {
                                    highlights?.map((items, idx) => (
                                        <h4 key={idx}>{items}</h4>

                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl pb-2'>activities</h3>
                            <div className='flex flex-col'>
                                {
                                    activities?.map((items, idx) => (
                                        <h4 key={idx}>{items}</h4>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl pb-2'>Tips</h3>
                            <div className='flex flex-col'>
                                {
                                    tips?.map((items, idx) => (
                                        <h4 key={idx}>{items}</h4>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <p className='mt-10 py-4 px-2 bg-white rounded-md leading-8 tracking-wide'>Description: {description} {description}</p>
                    <div className='mt-9'>
                        <h4 className='font-bold text-xl md:text-2xl'>Share The Story On social media</h4>
                        <div className='mt-5'>
                            {
                                !loading && user &&
                                <SocialShare url={pathname}></SocialShare>
                            }
                            <div className='flex justify-center flex-col items-center gap-10 border border-black p-4'>
                                <h5 className='mt-10 font-semibold text-center'>Your Should login First For Share this Story</h5>
                                <Link to="/login" className='text-pink-600 font-bold text-xl'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
};

export default StoryDetail;