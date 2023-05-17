import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar/>
           <div className="min-h-[100vh]">
           <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default Main;