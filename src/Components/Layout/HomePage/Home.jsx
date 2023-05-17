import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Gallery/>
           <ShopByCategory/>
        </div>
    );
};

export default Home;