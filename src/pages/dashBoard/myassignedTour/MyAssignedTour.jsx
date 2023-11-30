import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const MyAssignedTour = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: MyAssignedTour = [] } = useQuery({
        queryKey: ["MyAssignedTour", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myAssinged-tour?email=${user?.email}`);
            return res.data
        }
    })
    // console.log(MyAssignedTour)
    const handleReject = (id) => {
        axiosSecure.patch(`/tour-reject/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast(`Status Update`, {
                        autoClose: 2000,
                        position: "bottom-right"
                    })
                }
            })
    }
    const handleAccept = (id) => {
        axiosSecure.patch(`/tour-accept/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast(`Packages Accepted`, {
                        autoClose: 2000,
                        position: "bottom-right"
                    })
                }
            })
    }
    return (
        <div className='md:ml-10'>
            <table className='w-full text-white'>
                <thead>
                    <tr className='border'>
                        <th className='border'>#</th>
                        <th className='border'>Tour Name</th>
                        <th className='border'>Tourist Name</th>
                        {/* <th className='border'>Touris Img</th> */}
                        <th className='border'>Date</th>
                        <th className='border'>Price</th>
                        <th className='border'>Accept</th>
                        <th className='border'>Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MyAssignedTour?.map((items, idx) => (
                            <tr key={idx} className='border'>
                                <td className='text-center'>{idx + 1}</td>
                                <td className='border text-center'>{items.status !== "canceled" && items.trip_title}</td>
                                <td className='border text-center'>{items.status !== "canceled" && items.name}</td>
                                {/* <td className=''>
                                    <img src={items.touristImg} className='w-20 h-20 rounded-full mx-auto my-1' alt="" />
                                </td> */}
                                <td className='border text-center'>{items.date}</td>
                                <td className='border text-center'>${items.price}</td>
                                <td className='border text-center'><button className='px-2 py-1 bg-slate-700 shadow my-2' onClick={() => handleAccept(items._id)}>Accept</button></td>
                                <td className='border text-center'><button className='px-2 py-1 bg-slate-700 shadow my-2' onClick={() => handleReject(items._id)}>Reject</button></td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAssignedTour;