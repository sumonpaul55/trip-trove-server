import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Community from '../pages/home/community/Community';

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
            }
        ]
    },
]);



export default router;