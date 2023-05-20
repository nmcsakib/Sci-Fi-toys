import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Subscription from './Subscription';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useScrollTop from '../../../Hooks/useScrollTop';
import useTitleChange from '../../../Hooks/useTitleChange';
import Partners from './Partners';
AOS.init()
const Home = () => {
    const {pathname} = useLocation()
    useScrollTop(pathname)
    useTitleChange('Home')
    return (
        <div>
           <Banner/>
           <Gallery/>
           <Partners/>
           <ShopByCategory/>
           <Subscription/>
        </div>
    );
};

export default Home;