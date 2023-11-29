import axios from 'axios';
import React, { } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { toast } from 'react-toastify';
const image_apiKey = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_apiKey}`
const AddPackage = () => {
    const axiosSecure = useAxiosSecure()
    const handleaddpackage = async (e) => {

        e.preventDefault();
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
        if (res.data.success) {
            const spot_photo = res.data?.data?.display_url
            const tour_type = form.tour_type.value;
            const trip_title = form.trip_title.value;
            const price = form.price.value;
            const tour_guide_name = form.tour_guide_name.value;
            const tour_guide_email = form.tour_guide_email.value;
            const tour_guide_image = form.tour_guide_image.value;
            const description = form.description.value;
            const day1 = form.day1.value;
            const day2 = form.day2.value;
            const tour_plan = [day1, day2]
            const packageInfo = {
                spot_photo, tour_type, trip_title, price, tour_guide_email, tour_guide_image, tour_guide_name, description, tour_plan
            }
            axiosSecure.post("add-packages", packageInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        toast(`${trip_title} Added succesfully`, {
                            autoClose: 2000,
                            position: 'bottom-right'
                        })

                    }
                    form.reset()
                })
        }
    }
    return (
        <div className='md:ml-20 text-white mt-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Add Packages</h1>
            <form onSubmit={handleaddpackage} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9'>
                    <div>
                        <label htmlFor="">Spot Photo</label>
                        <input id="file" type="file" name='spot_photo' placeholder='spot photo' className='w-full p-3 py-1 rounded-md bg-white text-black font-semibold' required />
                    </div>
                    <div>
                        <label htmlFor="">tour Type</label>
                        <input type="text" name='tour_type' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='tour type' required />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9'>
                    <div>
                        <label htmlFor="">trip_title</label>
                        <input type="text" name='trip_title' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='trip_title' required />
                    </div>
                    <div>
                        <label htmlFor="">price</label>
                        <input type="number" name='price' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='price' required />
                    </div>
                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9'>
                    <div>
                        <label htmlFor="">tour_guide_name</label>
                        <input type="text" name='tour_guide_name' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='tour_guide_name' required />
                    </div>
                    <div>
                        <label htmlFor="">tour_guide_email</label>
                        <input type="email" name='tour_guide_email' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='tour_guide_email' required />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9'>
                    <div>
                        <label htmlFor="">tour_guide_image</label>
                        <input type="text" name='tour_guide_image' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='tour_guide_image' required />
                    </div>
                    <div>
                        <label htmlFor="">description</label>
                        <textarea name="description" rows="1" className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold'></textarea>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Tour Plan</h1>
                    <div>

                        <label htmlFor="">Day-1</label> <input type="text" name='day1' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='day-1' />
                    </div>
                    <label htmlFor="">Day-2</label> <input type="text" name='day2' className='w-full p-3 py-2 rounded-md bg-white text-black font-semibold' placeholder='day-2' />
                </div>
                <input type="submit" value="submit" className='text-xl bg-pink-500 text-white px-6 py-1 mt-6 rounded-md cursor-pointer hover:bg-pink-400' />
            </form>

        </div>
    );
};

export default AddPackage;