import React from 'react';
import Myhelmet from '../../components/Myhelmet';
import usePackages from '../../hook/usePackages';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { toast } from 'react-toastify';

const AllPackages = () => {
    const { packages } = usePackages()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();
    const handleWishlist = async (items) => {
        delete (items._id)
        // console.log(items)
        items.userEmail = user?.email
        const res = await axiosPublic.post("/wisth-list", items)
        if (res.data.insertedId) {
            toast(`${items.trip_title}`, {
                autoClose: 2000,
                position: "bottom-right"
            })
        }
    }
    // console.log(packages)
    return (
        <>
            <Myhelmet title="All packages"></Myhelmet>
            <main className='pt-14 px-1'>
                <section className='pb-20'>
                    <div className="container mx-auto">
                        <h1 className='text-xl md:text-2xl my-10 font-bold xl:text-3xl'>Tourism and Travel Guide</h1>
                        <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
                            {
                                packages?.map((items, idx) => (
                                    <div key={idx} className='p-3 flex flex-col sm:flex-row md:flex-col lg:flex-row border gap-4'>
                                        <div className='lg:w-3/5'>
                                            <img src={items.spot_photo} alt="" />
                                            <h4 className='font-bold md:text-lg mt-2'>Title: {items?.trip_title}</h4>
                                            <h4 className='font-bold mt-2'>Type: {items?.tour_type}</h4>
                                        </div>
                                        <div className='lg:w-2/5 bg-slate-50 p-2 flex flex-col justify-evenly gap-2 items-start'>
                                            <div>
                                                <h3 className='border-b font-semibold'>Tour Guide Info</h3>
                                                <img src={items.tour_guide_image} className='w-20 h-20 rounded-full mt-4' alt="" />
                                                <h3 className='border-b border-black mb-2'>Name: {items.tour_guide_name}</h3>
                                                <h3>Email: {items.tour_guide_email}</h3>
                                            </div>
                                            <div>
                                                <button className='bg-pink-600 text-white p-1 hover:bg-pink-800 w-full' onClick={() => { handleWishlist(items) }}>Add to wishlist</button>
                                                <Link to={`/package-details/${items._id}`}><button className='py-1 px-2 hover:bg-pink-800 bg-pink-600 text-white w-full mt-6'>View Packages</button></Link>
                                            </div>
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

export default AllPackages;