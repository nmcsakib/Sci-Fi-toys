import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar/>
           <div className="min-h-[calc(100vh-100px)] mt-20 px-10 ">
           <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default Main;