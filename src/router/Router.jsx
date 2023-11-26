import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Community from '../pages/home/community/Community';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import AllPackages from '../pages/allPackages/AllPackages';
import Dashboard from '../pages/dashBoard/Dashboard';
import Myprofile from '../pages/dashBoard/Myprofile/Myprofile';
import ManageUsers from '../pages/dashBoard/manageUsers/ManageUsers';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "community",
                element: <Community></Community>
            },
            {
                path: "/register",
                element: <Register></Register>
            }, {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/all-packages",
                element: <AllPackages></AllPackages>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                element: <Myprofile></Myprofile>
            },
            {
                path: "myProfile",
                element: <Myprofile></Myprofile>
            },
            {
                path: "manage-users",
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
]);



export default router;