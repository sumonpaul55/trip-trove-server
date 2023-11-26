import React from 'react';
import useStory from '../../hook/useStory';
import Myhelmet from '../../components/Myhelmet';

const AllStories = () => {
    const [story, isLoading] = useStory()
    return (
        <>
            <Myhelmet title="tour guide all stories"></Myhelmet>
            <main className='bg-slate-200'>
                <section className='py-32'>
                    <div className="container mx-auto">
                        <h3 className='text-xl md:text-3xl text-center font-bold'>Our Tour guides all stories</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-20' data-aos="fade-up">
                            {
                                !isLoading && story?.map((items, idx) => (
                                    <div key={idx} className='shadow border p-1'>
                                        <img src={items?.spot_photo} alt="" />
                                        <div className='pb-3 px-2'>
                                            <h3 className='mt-3 font-medium'>Tour Guide: {items?.tour_guide}</h3>
                                            <h3 className=' font-medium'>Location: {items?.location}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AllStories;