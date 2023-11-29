import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hook/useAuth';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import Swal from 'sweetalert2';

const MywishList = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { data: myWishlist = [], refetch } = useQuery({
        queryKey: ["myWishlists", user?.email],
        enabled: true,
        queryFn: async () => {
            const res = await axiosPublic.get(`/my-allWishlist?email=${user?.email}`)
            return res.data
        }
    })
    console.log(myWishlist)

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
    return (
        <div className='mt-10 ml-10'>
            <table className='table w-full text-white'>
                <thead>
                    <tr className='border'>
                        <th className='border'>#</th>
                        <th className='border'>Trip Name</th>
                        <th className='border'>spot Image</th>
                        <th className='border'>tourGuide name</th>
                        <th className='border'>Price</th>
                        <th className='border'>Details</th>
                        <th className='border'>Delete</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        myWishlist?.map((items, idx) => (
                            <tr key={idx} className='border'>
                                <td className='border px-2'>{idx + 1}</td>
                                <td className='border text-center font-semibold'>{items.trip_title}</td>
                                <td className='border'><img src={items.spot_photo} className='w-24 h-20 mx-auto m-2' alt="" /></td>
                                <td className='border text-center font-bold'>{items.tour_guide_name}</td>
                                <td className='border text-center'>${items.price}</td>
                                <td className='border text-center'>Details</td>
                                <td className='border text-center'><button className={`px-4 hover:bg-pink-700 py-1 bg-slate-800 rounded-md`} onClick={() => handleDelete(items._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MywishList;