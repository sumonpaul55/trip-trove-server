import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StoryDetail = () => {
    const storyDetailData = useLoaderData();
    console.log(storyDetailData)
    const { tour_guide, spot_photo, location, description, highlights, activities, tips } = storyDetailData
    console.log(Array.isArray(highlights))
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
                </div>
            </div>


        </main>
    );
};

export default StoryDetail;