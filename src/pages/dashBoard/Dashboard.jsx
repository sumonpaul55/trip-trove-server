import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main className='bg-slate-600 h-screen px-3'>
            <section>
                <h1 className='text-xl md:text-2xl pt-5 text-white font-bold xl:text-3xl'>Tourism and Travel Guide</h1>
                <div className='flex gap-1 mt-3 px-4'>
                    <div className='w-1/6 text-white flex flex-col gap-5 mt-10'>
                        <NavLink to="/dashboard/myProfile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink>
                        <NavLink to="/dashboard/addPackages" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Add Packages</NavLink>
                        <NavLink to="/dashboard/manage-users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Manage Users</NavLink>
                    </div>

                    <div className='w-5/6'>
                        <div><Outlet></Outlet></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;