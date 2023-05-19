import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Subscription from './Subscription';
import { useLocation } from 'react-router-dom';
import useScrollTop from '../../../useScrollTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const Home = () => {
    const {pathname} = useLocation()
    useScrollTop(pathname)
    return (
        <div>
           <Banner/>
           <Gallery/>
           <ShopByCategory/>
           <Subscription/>
        </div>
    );
};

export default Home;