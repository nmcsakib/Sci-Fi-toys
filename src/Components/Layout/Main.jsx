import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
           <div className="min-h-[calc(100vh-100px)] mt-20 px-3 md:px-10 bg-yellow-100">
           <Outlet/>
          
           </div>
           
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Main;