import React from 'react';
import "./banner.css"
const Banner = () => {
    return (
        <section className='py-32 banner'>
            <div className="container mx-auto">
                <div className='h-full flex items-center justify-center'>
                    <div data-aos="fade-up" data-aos-duration="2000" className='w-full'>
                        <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl text-center lg:leading-snug mb-5'>Immerse Yourself in Culture <br className='hidden md:block' /> and Adventure</h1>
                        <p className='text-white text-center leading-4 md:leading-6'>Embark on a journey beyond imagination with Triptrove, where every destination is a canvas of discovery. Uncover the worlds hidden gems and create memories that linger in the heart. Your adventure awaits, redefine your travel story with Triptrove.</p>
                        <div className='space-x-6 mt-10 text-center'>
                            <button className='px-4 md:px-10 py-1 bg-pink-500 text-white hover:bg-primary'>Explore</button>
                            <button className='px-4 md:px-10 py-1 bg-pink-500 text-white hover:bg-primary'>Discussion</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default Banner;