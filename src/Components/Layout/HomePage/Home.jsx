import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Subscription from '../../../Pages/Subscription';

const Home = () => {
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