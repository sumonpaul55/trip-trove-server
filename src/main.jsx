import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import AOS from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify'
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
