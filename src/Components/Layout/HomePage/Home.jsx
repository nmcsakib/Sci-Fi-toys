import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Subscription from '../../../Pages/Subscription';
import { useLocation } from 'react-router-dom';
import useScrollTop from '../../../useScrollTop';

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