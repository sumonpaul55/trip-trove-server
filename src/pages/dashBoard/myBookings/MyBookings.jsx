import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const MyBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { data: myBookings = [] } = useQuery({
        queryKey: ["mybookings"],
        queryFn: async () => {
            const res = await axiosSecure.get("/my-allBookings");
            return res.data
        }
    })
    console.log(myBookings)
    if (!myBookings.length) {
        return <div className='mt-12'><h3 className='text-white font-bold md:text-xl lg:text-2xl text-center'>No bookings found</h3></div>
    }
    return (
        <div className='p-6 text-white'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;