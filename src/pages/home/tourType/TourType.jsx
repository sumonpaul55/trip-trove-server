import React from 'react';
import usePackages from '../../../hook/usePackages';
import "./TourType.css"
import { Link } from 'react-router-dom';
const TourType = () => {
    const { packages } = usePackages()
    // console.log(packages)
    const uniqType = new Set(packages.map((items) => items.tour_type))
    const tripType = [...uniqType]
    return (
        <section className='py-32 md:py-40 bg-slate-500 tourType px-1'>
            <div className="container mx-auto">
                <h3 className='text-white font-semibold text-xl md:text-3xl text-center'>Our Tour Type</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 mt-20 lg:gap-12'>
                    {tripType?.map((items, idx) => (
                        <Link to={`/tourTypes/${items}`} key={idx} data-aos="fade-down">
                            <button className='w-full rounded-md bg-white py-10 font-bold hover:scale-105 duration-200 bg-opacity-90 hover:text-pink-700 md:text-xl'>{items}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TourType;