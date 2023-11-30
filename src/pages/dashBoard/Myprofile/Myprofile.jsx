import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { toast } from 'react-toastify';
const image_apiKey = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_apiKey}`
const Myprofile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [processing, setProcessing] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { data: specificUsers = [] } = useQuery({
        queryKey: [user?.email, "specificUsers"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourist?email=${user?.email}`)
            return res.data
        }
    })
    const handleStorySubmit = async (e) => {
        e.preventDefault();
        setProcessing(true)
        const form = e.target;
        const imageFile = form.spot_photo.files[0]
        // Create FormData object
        const formData = new FormData();
        formData.append('key', image_apiKey);
        formData.append('image', imageFile);
        // Make the API request
        const res = await axios.post(image_hosting_api, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        // getting after image
        if (res.data.success) {
            setProcessing(false)
            const tour_guide = form.tour_guide.value;
            const spot_photo = res.data?.data?.display_url
            const location = form.location.value;
            const description = form.description.value;
            const tips1 = form.tips1.value;
            const tips2 = form.tips2.value;
            const tips = [tips1, tips2]
            const story = {
                tour_guide, spot_photo, location, description, tips
            }
            axiosPublic.post("/add-story", story)
                .then(res => {
                    if (res.data.insertedId) {
                        toast(`${tour_guide} Added succesfully`, {
                            autoClose: 2000,
                            position: 'bottom-right'
                        })
                    }
                    form.reset()
                })
        }

    }
    // console.log(specificUsers)
    return (
        <main>
            <div className='p-5 text-white flex max-w-[500px] justify-center py-20 mx-auto border-opacity-10 border-white-1 border'>
                <div>
                    <img src={specificUsers?.userImg} className='w-60' alt="" />
                    <div className='mt-5 space-y-4'>
                        <h3 className="text-xl md:text-2xl font-bold">Name: {specificUsers?.name}</h3>
                        <h3 className="text-xl md:text-2xl font-bold">Email: {specificUsers?.email}</h3>
                        <h3 className="text-xl md:text-2xl font-bold">Role: {specificUsers?.role}</h3>
                    </div>
                </div>
            </div>
            {
                specificUsers?.role === "user" &&
                <div className="md:max-w-[900px]">
                    <h3 className='text-white font-bold text-xl md:text-2xl'>Add a story</h3>
                    <form onSubmit={handleStorySubmit} className='mt-10 text-white'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                            <div>
                                <label htmlFor="">Tour Guide Name</label>
                                <input type="text" name='tour_guide' placeholder='Tour guide name' className='w-full p-3 py-1 rounded-md text-black font-semibold' required />
                            </div>
                            <div>
                                <label htmlFor="">Spot Image</label>
                                <input id="file"
                                    type="file"
                                    name='spot_photo' placeholder='spot photo' className='w-full p-3 py-1 rounded-md bg-white text-black font-semibold' required />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                            <div>
                                <label htmlFor="">Location</label>
                                <input type="text" name='location' placeholder='location' className='w-full p-3 py-1 rounded-md text-black font-semibold' required />
                            </div>
                            <div>
                                <label htmlFor="">Description</label>
                                <textarea name="description" id="" rows="1" placeholder="description" className='w-full py-1 rounded-md text-black font-semibold px-2' required></textarea>
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                            <div>
                                <label htmlFor="">Tips 1</label>
                                <input type="text" name='tips1' placeholder='Tips-1' className='w-full p-3 py-1 rounded-md text-black font-semibold' required />
                            </div>
                            <div>
                                <label htmlFor="">Tips 2</label>
                                <input type="text" name='tips2' placeholder='tips-2' className='w-full p-3 py-1 rounded-md text-black font-semibold' required />
                            </div>
                        </div>
                        <div className='text-center mt-12'>
                            <input type="submit" className='bg-pink-600 text-white px-3 md:px-5 py-1 rounded-md hover:bg-pink-700 cursor-pointer' />
                        </div>
                    </form>
                </div>
            }
            {
                processing && <div className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 flex justify-center items-center'>
                    <div className='animate-spin p-4 bg-black'></div>
                </div>
            }
        </main>
    );
};

export default Myprofile;