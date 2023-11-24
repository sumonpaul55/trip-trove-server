import React from 'react';
import "./banner.css"
const Banner = () => {
    return (
        <section className='h-[80vh] banner'>
            <div className="container mx-auto h-full">
                <div className='h-full flex items-center justify-center'>
                    <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl text-center lg:leading-snug'>Immerse Yourself in Culture <br className='hidden md:block' /> and Adventure</h1>
                </div>
            </div>

        </section>
    );
};
export default Banner;