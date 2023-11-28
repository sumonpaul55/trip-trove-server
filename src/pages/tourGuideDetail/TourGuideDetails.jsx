import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const TourGuideDetails = () => {
    const tourGuide = useLoaderData();
    const { userImg, name, phone, role, email } = tourGuide
    const { user, loading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const rate = form.rate.value;
        const comment = form.comment.value;
        const review = {
            rate, comment
        }
        if (user && !loading) {
            const res = await axiosSecure.patch(`/update-tourguide?email=${email}`, review)
            if (res.data.modifiedCount) {
                toast(`Thanks for your review`, {
                    autoClose: 2000,
                    position: "bottom-right"
                })
            }
        } else {
            Swal.fire({
                title: "You have to login first.",
                text: "Your are Not logged in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { form: location } })
                }
            });
        }
    }
    return (
        <main className="pt-14 bg-slate-100">
            <section className='pt-10 pb-20'>
                <div className="container mx-auto">
                    <h3 className='font-bold text-center text-xl md:text-3xl mb-10 capitalize'>{name + "'s"} Profile</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center'>
                        <div className='px-10'>
                            <img src={userImg} className='mx-auto max-h-[600px] rounded-xl w-full' alt="" />
                        </div>
                        <div className='space-y-4 px-2'>
                            <h3 className='font-bold text-xl md:text-3xl'>Name: {name}</h3>
                            <address className='mt-3 font-medium md:text-lg p-2 border inline-block bg-pink-600 text-white'>Phone: {phone}</address>
                            <h3 className='font-bold text-xl md:text-2xl'>Email: {email}</h3>
                            <h3 className='font-bold text-xl md:text-2xl'>Role: {role}</h3>
                            <p>Experience: <b>2 years</b></p>
                            <p className='mt-20 font-semibold'>For more query please call the avobe number</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 bg-slate-300'>
                <div className="container mx-auto">
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-center py-10'>Review</h3>
                    <div className='max-w-[500px] mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <label htmlFor=""> Please rate</label>
                                    <select name="rate" className='w-full py-3 px-3 rounded-md' id="">
                                        <option value="">select</option>
                                        <option value="1">1 poor</option>
                                        <option value="2">2 bad</option>
                                        <option value="3">3 good</option>
                                        <option value="4">4 best</option>
                                        <option value="5">5 better</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Comment</label>
                                    <textarea name="comment" className='w-full rounded-md p-3' id="" ></textarea>
                                </div>
                            </div>
                            <div className='text-center mt-1.5'>
                                <input type="submit" value="post" className='mx-auto bg-slate-700 text-white px-3 hover:text-pink-700 cursor-pointer rounded-md md:px-20 font-bold md:text-xl py-2' />

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TourGuideDetails;