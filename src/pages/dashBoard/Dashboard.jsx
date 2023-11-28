import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';
import useTourGuide from '../../hook/useTourGuide';

const Dashboard = () => {
    const [isadmin, isAdminLoading] = useAdmin()
    const [isTourGuide] = useTourGuide()
    return (
        <main className='bg-slate-600 pb-20 px-3 w-full'>
            <section>
                <h1 className='text-xl md:text-2xl pt-5 text-white font-bold xl:text-3xl'>{isadmin ? "Admin Dashboard" : isTourGuide ? "Tour Guide Dashboard" : "Users Dashboard"}</h1>
                <div className='flex gap-1 mt-3 px-4'>
                    <div className='w-1/6 text-white flex flex-col gap-5 mt-10'>

                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive border px-4 hover:bg-slate-500')}>Home</NavLink>
                        {
                            !isAdminLoading && isadmin ? <>
                                <NavLink to="/dashboard/myProfile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink>
                                <NavLink to="/dashboard/addPackages" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Add Packages</NavLink>
                                <NavLink to="/dashboard/manage-users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Manage Users</NavLink>
                            </> :

                                isTourGuide ? <>

                                    <NavLink to="/dashboard/myProfile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Add Packages</NavLink>
                                    <NavLink to="/dashboard/myAssignedTour" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My assigned tour</NavLink>

                                </> : <>
                                    <NavLink to="/dashboard/myProfile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink>
                                    <NavLink to="/dashboard/myBookings" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Bookings</NavLink>
                                    <NavLink to="/dashboard/myWishlist" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My wishlist</NavLink>

                                </>

                        }

                    </div>

                    <div className='w-5/6 overflow-x-hidden'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Dashboard;