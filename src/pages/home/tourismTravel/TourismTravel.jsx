import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import usePackages from '../../../hook/usePackages';
import overview from "../../../assets/overview.jpg"
import useGetTourGuide from '../../../hook/useGetTourGuide';
const TourismTravel = () => {
    const { packages } = usePackages()
    const { tourGuide } = useGetTourGuide()

    return (
        <section className='py-20 px-1 overflow-hidden'>
            <div className="container m-auto">
                <h1 className='text-xl md:text-2xl my-10 font-bold xl:text-3xl'>Tourism and Travel Guide</h1>
                <Tabs className="text-center">
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Tour Guides</Tab>
                    </TabList>
                    {/* content */}
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                            <div className='text-start p-3 flex flex-col justify-evenly' data-aos="fade-right" data-aos-duration="1000">
                                <div>
                                    <h3 className='font-bold md:text-xl mb-3'>Passionate Experts</h3>
                                    <p className='text-slate-600'>Our tour guides are not just knowledgeable; they are enthusiasts who breathe life into every destination. With a deep love for travel and a wealth of local insights, they are committed to ensuring that every moment of your journey is infused with authentic experiences.</p>
                                </div>
                                <div className='mt-5'>
                                    <h3 className='font-bold md:text-xl mb-3'>Personalized Experiences</h3>
                                    <p className='text-slate-600'>No two travelers are alike, and neither are our tours. Our guides tailor each experience to suit your interests, ensuring that you not only see the sights but also immerse yourself in the heart and soul of the places you visit.</p>
                                </div>
                                <div className='mt-5'>
                                    <h3 className='font-bold md:text-xl mb-3'>Safety and Comfort</h3>
                                    <p className='text-slate-600'>Your safety and comfort are our top priorities. Our guides are well-trained, certified professionals who not only guide you through the best routes but also ensure a secure and enjoyable experience at every turn.</p>
                                </div>
                            </div>
                            <div className='p-5' data-aos="fade-left" data-aos-duration="1000">
                                <img src={overview} className='rounded-lg' alt="" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                            {
                                packages?.slice(0, 3).map((items, idx) => (
                                    <div key={idx} className='bg-primary rounded-md bg-opacity-10 p-2 overflow-hidden group'>
                                        <div className='relative'>
                                            <img src={items.spot_photo} className='rounded-t-md' alt="" />
                                            <div className='absolute top-4 -right-full group-hover:right-3 duration-200'>
                                                <div className='flex relative flex-col justify-center items-center group'>
                                                    <span className='text-xs'>Add to wishlist</span>
                                                    <FaHeart className='text-red-500 cursor-pointer hover:text-red-500' size={35} />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className='mt-2 font-bold text-xl'>{items.tour_type}</h3>
                                        <div className='space-y-3'>
                                            <h4>Type: {items.tour_type}</h4>
                                            <h4 className='font-bold text-primary'>Price: ${items.price}</h4>
                                        </div>
                                        <Link to={`/package-details/${items._id}`}><button className='py-1 px-2 bg-pink-600 text-white w-full mt-6'>View Packages</button></Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='mt-14'>
                            <Link to="/all-packages" className='px-3 py-2 text-white bg-pink-600 md:text-xl'>All Packages</Link>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-5 p-8' data-aos="fade-right" data-aos-duration="1000">
                            {
                                tourGuide?.map((items, idx) => (
                                    <div key={idx} className=' border p-2 flex justify-start'>
                                        <div>
                                            <img src={items.userImg} className='w-40 h-40 rounded-lg' alt={items.name} />
                                        </div>
                                        <div className='flex-1 flex flex-col justify-center gap-3 items-start px-2 md:px-5'>
                                            <h3 className='font-semibold md:text-xl'>Name: {items.name}</h3>
                                            <h3 className='font-semibold'>Email: {items.email}</h3>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </section>
    );
};

export default TourismTravel;