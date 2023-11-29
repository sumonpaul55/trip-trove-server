import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../hook/useAuth';
const MyBookings = () => {
    const [disCounted, setDisCounted] = useState(false)
    const axiosPublic = useAxiosPublic()
    const { width, height } = useWindowSize()
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const { data: myBookings = [], refetch } = useQuery({
        queryKey: ["mybookings", user?.email],
        enabled: true,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-allBookings?email=${user?.email}`);
            return res.data
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "It will removed from your bookings",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/packages/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your bookings has been canceled",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    useEffect(() => {
        if (myBookings?.length > 3) {
            setDisCounted(true)
            Swal.fire({
                title: "Congatulations!",
                text: "You have got a discount",
                icon: "success"
            })
        }
        else {
            setDisCounted(false)
        }
    }, [myBookings, disCounted])
    if (!myBookings.length) {
        return <div className='mt-12'><h3 className='text-white font-bold md:text-xl lg:text-2xl text-center'>No bookings found</h3></div>
    }
    return (
        <div className='p-6 text-white'>
            <table className='table w-full'>
                <thead>
                    <tr className='border'>
                        <th className='border'>#</th>
                        <th className='border'>Trip Name</th>
                        <th className='border'>tourGuide</th>
                        <th className='border'>Guide Image</th>
                        <th className='border'>Date</th>
                        <th className='border'>Price</th>
                        <th className='border'>Status</th>
                        <th className='border'>Pay</th>
                        <th className='border'>Apply</th>
                        <th className='border'>Cancel</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        myBookings?.map((items, idx) => (
                            <tr key={idx} className='border'>
                                <td className='border px-2'>{idx + 1}</td>
                                <td className='border text-center font-semibold'>{items.trip_title}</td>
                                <td className='border text-center font-semibold'>{items.tourGuide}</td>
                                <td className='border'><img src={items.tour_guide_image} className='w-24 h-20 mx-auto m-2' alt="" /></td>
                                <td className='border text-center'>{items.date}</td>
                                <td className='text-center'>${items.price}</td>
                                <td className='border text-center'><span className='bg-pink-600 px-2 font-semibold'>{items.status}</span></td>
                                <td className='border text-center'><button className='px-4 hover:bg-slate-700 py-1 bg-slate-800 rounded-md' disabled={items.status !== "Accepted"}>Pay</button></td>
                                <td className='border text-center'><button className='px-4 hover:bg-slate-700 py-1 bg-slate-800 rounded-md' disabled={!disCounted}>Apply</button></td>
                                {
                                    items.status === "In review" ?
                                        <td className='border text-center'><button className={`px-4 hover:bg-pink-700 py-1 bg-slate-800 rounded-md`} onClick={() => handleDelete(items._id)}>Cancel</button></td>
                                        : null
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                disCounted && <Confetti
                    width={width}
                    height={height}
                />
            }

        </div>
    );
};

export default MyBookings;