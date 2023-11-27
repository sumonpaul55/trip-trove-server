import React from 'react';
import useStory from '../../../hook/useStory';
import { Link } from 'react-router-dom';

const TouristStory = () => {
    const [story, isLoading] = useStory()

    return (
        <section className='py-32 bg-slate-200'>
            <div className="container mx-auto">
                <h3 className='font-semibold text-xl md:text-3xl text-center'>Our Tour Guides Story</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 mt-20' data-aos="fade-up">
                    {
                        !isLoading && story?.slice(0, 4).map((items, idx) => (
                            <Link key={idx} to={`/story-detail/${items._id}`} className='hover:scale-105 duration-200'>
                                <div className='shadow border p-1'>
                                    <img src={items?.spot_photo} alt="" />
                                    <div className='pb-3 px-2'>
                                        <h3 className='mt-3 font-medium'>Tour Guide: {items?.tour_guide}</h3>
                                        <h3 className='font-medium'>Location: {items?.location}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
                <div className='text-center m mt-10'>
                    {
                        story?.length > 4 && <Link to="/all-Stories"><button className='bg-pink-600 text-white px-4 md:px-8 hover:bg-pink-500 text-xl py-1'>All Stories</button></Link>
                    }
                </div>
            </div>
        </section >
    );
};

export default TouristStory;