import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import "./users.css"
import { toast } from 'react-toastify';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    // make admin
    const handleMakeAdmin = async (id) => {
        const res = await axiosSecure.patch(`/makeAdmin/${id}`)
        if (res.data.modifiedCount) {
            toast(`Role updated`, {
                autoClose: 2000,
                position: "bottom-right"
            })
            refetch()
        }
    }
    // make admin
    const handleMakeTourGuide = async (id) => {
        const res = await axiosSecure.patch(`/makeTourguide/${id}`)
        if (res.data.modifiedCount) {
            toast(`Role updated`, {
                autoClose: 2000,
                position: "bottom-right"
            })
            refetch()
        }
    }
    return (
        <main className='pt-14' >
            <section className='users'>
                <table className='table w-full'>
                    <thead>
                        <tr className='text-white'>
                            <th className='border'>#</th>
                            <th className='border'>Image</th>
                            <th className='border'>Name</th>
                            <th className='border'>Role</th>
                            <th className='border'>Action</th>
                            <th className='border'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((items, idx) => (
                                <tr key={idx} className='border  py-2 text-white'>
                                    <td className='border  text-center'>{idx + 1}</td>
                                    <td className='border text-center'><img src={items.userImg} alt="" className='w-14 m-1 h-14 rounded-full mx-auto' /></td>
                                    <td className='border text-left px-3'>{items.name}</td>
                                    <td className='border text-left px-3'>{items.role}</td>
                                    <td className='border px-3'><button onClick={() => handleMakeAdmin(items._id)} disabled={items.role === "admin" || items.role === "tourGuide"} className='bg-pink-600 p-1 rounded-xl px-2'>make Admin</button></td>

                                    <td className='border px-3'><button onClick={() => handleMakeTourGuide(items._id)} disabled={items.role === "admin" || items.role === "tourGuide"} className='bg-pink-600 p-1 rounded-xl px-2'>make Tour Guid</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )

};

export default ManageUsers;